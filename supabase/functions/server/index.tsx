import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

// 🚀 FASTWMS Production Server
// Отправка писем через SMTP mail.fastwms.ru:465

const app = new Hono();

// CORS configuration
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['Content-Length'],
  maxAge: 600,
  credentials: true,
}));

// Logger
app.use('*', logger(console.log));

// Health check endpoint
app.get("/make-server-7704f51d/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Email sending endpoint - PRODUCTION
app.post("/make-server-7704f51d/send-email", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, message, company, phone, plan } = body;

    console.log("📧 Received email request:", { name, email });

    // Validate input
    if (!name || !email || !message) {
      console.error("❌ Validation error: Missing required fields");
      return c.json({ 
        success: false,
        error: "Missing required fields" 
      }, 400);
    }

    // Get credentials from environment variables
    const telegramBotToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const telegramChatId = Deno.env.get("TELEGRAM_CHAT_ID");
    
    const smtpHost = Deno.env.get("SMTP_HOST");
    const smtpPort = Deno.env.get("SMTP_PORT");
    const smtpUser = Deno.env.get("SMTP_USER");
    const smtpPassword = Deno.env.get("SMTP_PASSWORD");
    const smtpFrom = Deno.env.get("SMTP_FROM") || "noreply@fastwms.ru";
    const smtpSecure = Deno.env.get("SMTP_SECURE") === "true";

    console.log("📋 Configuration check:");
    console.log("  SMTP Host:", smtpHost || '❌ not set');
    console.log("  SMTP Port:", smtpPort || '❌ not set');
    console.log("  SMTP User:", smtpUser || '❌ not set');
    console.log("  SMTP SSL:", smtpSecure ? '✅ enabled' : '❌ disabled');
    console.log("  Telegram:", telegramBotToken && telegramChatId ? '✅ configured' : '⚠️ not configured');

    // Save to KV store (backup)
    const timestamp = new Date().toISOString();
    const emailId = `email_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    await kv.set(emailId, {
      name,
      email,
      message,
      company: company || '',
      phone: phone || '',
      plan: plan || '',
      timestamp,
      recipient: "nariman@fastwms.ru",
      status: "received"
    });

    console.log(`✅ Email saved to KV store: ${emailId}`);

    // Send to Telegram if configured
    if (telegramBotToken && telegramChatId) {
      try {
        console.log("📱 Sending Telegram notification...");
        
        let telegramMessage = `🔔 <b>Новая заявка с FASTWMS</b>\n\n` +
          `👤 <b>Имя:</b> ${name}\n` +
          `📧 <b>Email:</b> ${email}\n`;
        
        if (phone) telegramMessage += `📞 <b>Телефон:</b> ${phone}\n`;
        if (company) telegramMessage += `🏢 <b>Компания:</b> ${company}\n`;
        if (plan) telegramMessage += `📦 <b>Тариф:</b> ${plan}\n`;
        
        telegramMessage += `\n💬 <b>Сообщение:</b>\n${message}\n\n` +
          `⏰ <i>${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}</i>`;
        
        const telegramResponse = await fetch(
          `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: telegramChatId,
              text: telegramMessage,
              parse_mode: 'HTML'
            })
          }
        );
        
        if (telegramResponse.ok) {
          console.log("✅ Telegram notification sent");
          await kv.set(emailId, {
            name, email, message, company, phone, plan, timestamp,
            recipient: "nariman@fastwms.ru",
            status: "received_telegram_sent",
            telegram_sent: true
          });
        } else {
          console.error("❌ Telegram send failed:", await telegramResponse.text());
        }
      } catch (telegramError) {
        console.error("❌ Telegram error:", telegramError);
      }
    }

    // Prepare email content
    const emailSubject = `Новая заявка с FASTWMS: ${name}`;
    let emailBody = `Новая заявка с сайта FASTWMS\n=============================\n\nИмя: ${name}\nEmail: ${email}\n`;
    if (phone) emailBody += `Телефон: ${phone}\n`;
    if (company) emailBody += `Компания: ${company}\n`;
    if (plan) emailBody += `Тариф: ${plan}\n`;
    emailBody += `\nСообщение:\n${message}\n\n---\nЭто письмо отправлено автоматически с сайта FASTWMS`;

    // Send via SMTP
    if (smtpHost && smtpPort && smtpUser && smtpPassword) {
      console.log("📤 Sending email via SMTP...");
      
      try {
        const nodemailer = await import("npm:nodemailer@6.9.8");
        
        const transporter = nodemailer.default.createTransport({
          host: smtpHost,
          port: parseInt(smtpPort),
          secure: smtpSecure,
          requireTLS: !smtpSecure,
          auth: {
            user: smtpUser,
            pass: smtpPassword,
          },
          tls: {
            rejectUnauthorized: false,
            minVersion: 'TLSv1',
            ciphers: 'ALL',
            checkServerIdentity: () => undefined,
            servername: smtpHost,
          },
          connectionTimeout: 30000,
          greetingTimeout: 30000,
          socketTimeout: 30000,
          debug: false,
          logger: false,
        });

        console.log("🔌 Verifying SMTP connection...");
        await transporter.verify();
        console.log("✅ SMTP connection verified");

        console.log("📨 Sending email...");
        await transporter.sendMail({
          from: smtpFrom,
          to: "nariman@fastwms.ru",
          subject: emailSubject,
          text: emailBody,
          html: `
          <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
                <h2 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">
                  Новая заявка с сайта FASTWMS
                </h2>
                
                <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
                  <p style="margin: 10px 0;">
                    <strong style="color: #475569;">Имя:</strong> 
                    <span style="color: #1e293b;">${name}</span>
                  </p>
                  
                  <p style="margin: 10px 0;">
                    <strong style="color: #475569;">Email:</strong> 
                    <a href="mailto:${email}" style="color: #0891b2; text-decoration: none;">${email}</a>
                  </p>
                  
                  ${phone ? `<p style="margin: 10px 0;"><strong style="color: #475569;">Телефон:</strong> <span style="color: #1e293b;">${phone}</span></p>` : ''}
                  ${company ? `<p style="margin: 10px 0;"><strong style="color: #475569;">Компания:</strong> <span style="color: #1e293b;">${company}</span></p>` : ''}
                  ${plan ? `<p style="margin: 10px 0;"><strong style="color: #475569;">Тариф:</strong> <span style="color: #1e293b;">${plan}</span></p>` : ''}
                  
                  <div style="margin-top: 20px;">
                    <strong style="color: #475569;">Сообщение:</strong>
                    <div style="background-color: #f1f5f9; padding: 15px; border-radius: 6px; margin-top: 10px; color: #1e293b; white-space: pre-wrap;">${message}</div>
                  </div>
                </div>
                
                <p style="margin-top: 20px; font-size: 12px; color: #64748b; text-align: center;">
                  Это письмо отправлено автоматически с сайта FASTWMS
                </p>
              </div>
            </body>
          </html>
        `,
        });

        console.log(`✅ Email sent successfully to nariman@fastwms.ru`);
        
        await kv.set(emailId, {
          name, email, message, company, phone, plan, timestamp,
          recipient: "nariman@fastwms.ru",
          status: "sent_via_smtp",
          smtp_host: smtpHost
        });

        return c.json({ 
          success: true, 
          message: "Спасибо за заявку! Мы свяжемся с вами в ближайшее время.",
          email_id: emailId
        });

      } catch (smtpError) {
        console.error("❌ SMTP Error:", smtpError);
        console.error("Error details:", {
          message: smtpError instanceof Error ? smtpError.message : String(smtpError),
          code: smtpError.code,
          command: smtpError.command,
        });
        
        await kv.set(emailId, {
          name, email, message, company, phone, plan, timestamp,
          recipient: "nariman@fastwms.ru",
          status: "saved_smtp_failed",
          smtp_error: smtpError instanceof Error ? smtpError.message : String(smtpError)
        });
        
        // Still return success - data is saved
        console.log("⚠️ SMTP failed, but data is saved in database");
      }
    } else {
      console.log("⚠️ SMTP not configured");
    }

    // Always return success (data is saved to database)
    return c.json({ 
      success: true, 
      message: "Заявка получена! Мы свяжемся с вами в ближайшее время.",
      email_id: emailId
    });
    
  } catch (error) {
    console.error("❌ Error in email endpoint:", error);
    
    return c.json({ 
      success: false,
      error: "Не удалось обработать запрос", 
      details: error instanceof Error ? error.message : String(error) 
    }, 500);
  }
});

// Start server
Deno.serve(app.fetch);
