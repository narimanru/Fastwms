import { useState } from 'react';
import { Mail, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7704f51d/send-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data.details || data.error || 'Ошибка отправки сообщения';
        throw new Error(errorMsg);
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Произошла ошибка');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight px-2 sm:px-0 text-[28px]">
            Свяжитесь с нами
          </h2>
          <p className="text-[16px] sm:text-[17px] md:text-lg text-gray-600 px-2 sm:px-0">
            Ответим на вопросы, поможем подобрать тариф и настроить систему
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 md:p-8">
          {submitStatus === 'success' ? (
            <div className="text-center py-6 sm:py-8">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[18px] sm:text-xl font-semibold text-gray-900 mb-2">Спасибо за обращение!</h3>
              <p className="text-[15px] sm:text-[16px] text-gray-600">
                Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-[15px] sm:text-sm font-medium text-gray-900 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 text-[16px]"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[15px] sm:text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 text-[16px]"
                  placeholder="ivan@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[15px] sm:text-sm font-medium text-gray-900 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 resize-none text-[16px]"
                  placeholder="Расскажите о вашем проекте или задайте вопрос..."
                />
              </div>

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-[14px] sm:text-sm font-medium text-red-900 mb-1">Ошибка отправки</p>
                    <p className="text-[14px] sm:text-sm text-red-700">{errorMessage}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 text-[16px] font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" strokeWidth={1.5} />
                    <span>Отправка...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" strokeWidth={1.5} />
                    <span>Отправить сообщение</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-5 sm:p-6 bg-white border border-gray-200 rounded-xl">
            <Mail className="w-6 h-6 text-gray-900 mb-3" strokeWidth={1.5} />
            <h3 className="text-[17px] sm:text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:nariman@fastwms.ru" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
              nariman@fastwms.ru
            </a>
          </div>
          <div className="p-5 sm:p-6 bg-white border border-gray-200 rounded-xl">
            <svg className="w-6 h-6 text-gray-900 mb-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
            <h3 className="text-[17px] sm:text-lg font-semibold text-gray-900 mb-2">Telegram</h3>
            <a href="https://t.me/FASTWMS_Bot" target="_blank" rel="noopener noreferrer" className="text-[15px] sm:text-[16px] text-gray-600 hover:text-gray-900 transition-colors">
              @FASTWMS_Bot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}