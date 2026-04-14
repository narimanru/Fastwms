# FASTWMS Landing Page 🚀

Полноценный лендинг для **FASTWMS** - системы управления складом для селлеров и фулфилментов.

## 🎨 Стек технологий

- **React** - UI библиотека
- **TypeScript** - типизация
- **Tailwind CSS v4** - стилизация
- **React Router** - навигация
- **Supabase** - бэкенд (Edge Functions + KV Store)
- **Nodemailer** - отправка писем
- **Яндекс.Метрика** - аналитика

## ✨ Основные возможности

- ✅ Минималистичный светлый дизайн в стиле OpenAI/ChatGPT
- ✅ Адаптивная верстка (desktop + mobile)
- ✅ Формы обратной связи с отправкой на email
- ✅ Telegram уведомления о новых заявках
- ✅ Яндекс.Метрика для отслеживания посетителей
- ✅ Страницы: Главная, О продукте, Маркировка, Оферта, Политика конфиденциальности

## 📧 Система отправки писем

Письма отправляются через **SMTP сервер mail.fastwms.ru:465** (SSL).

### Настройка переменных окружения в Supabase:

```env
SMTP_HOST=mail.fastwms.ru
SMTP_PORT=465
SMTP_USER=reg@fastwms.ru
SMTP_PASSWORD=ваш_пароль
SMTP_FROM=reg@fastwms.ru
SMTP_SECURE=true

# Опционально - Telegram уведомления
TELEGRAM_BOT_TOKEN=ваш_токен
TELEGRAM_CHAT_ID=ваш_chat_id
```

### После добавления переменных:
1. Откройте **Supabase Dashboard → Edge Functions**
2. Найдите функцию **make-server-7704f51d**
3. Нажмите **Redeploy**

## 📱 Telegram уведомления (опционально)

Для получения уведомлений в Telegram:

1. Создайте бота через [@BotFather](https://t.me/botfather)
2. Получите токен бота
3. Узнайте свой Chat ID через [@userinfobot](https://t.me/userinfobot)
4. Добавьте `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` в Supabase

## 📊 Яндекс.Метрика

Метрика уже подключена через компонент `YandexMetrika.tsx` в Layout.

ID счетчика можно изменить в файле `/src/app/components/YandexMetrika.tsx`.

## 🚀 Деплой

Проект готов к деплою на любой платформе поддерживающей React:

- **Vercel** (рекомендуется)
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages**

### Команды для сборки:

```bash
# Установка зависимостей
npm install

# Локальная разработка
npm run dev

# Продакшен сборка
npm run build
```

## 📂 Структура проекта

```
/src/app/
  ├── components/        # React компоненты
  │   ├── Contact.tsx   # Форма обратной связи
  │   ├── Pricing.tsx   # Тарифы
  │   ├── FAQ.tsx       # Вопросы и ответы
  │   └── ...
  ├── pages/            # Страницы
  │   ├── Home.tsx      # Главная
  │   ├── AboutProduct.tsx
  │   ├── Marking.tsx
  │   ├── Offer.tsx
  │   └── Privacy.tsx
  └── routes.ts         # Роутинг

/supabase/functions/server/
  └── index.tsx         # Backend API
```

## 🔥 API Endpoints

### `POST /make-server-7704f51d/send-email`
Отправка писем с форм обратной связи.

**Body:**
```json
{
  "name": "Имя",
  "email": "email@example.com",
  "message": "Сообщение",
  "phone": "+7 999 999-99-99",
  "company": "Название компании",
  "plan": "Название тарифа"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Заявка получена!",
  "email_id": "email_1234567890_abc123"
}
```

## 📝 Лицензия

Проект создан для FASTWMS. Все права защищены.

## 🤝 Контакты

Вопросы и предложения: **nariman@fastwms.ru**

---

**Готово к запуску! 🚀**
