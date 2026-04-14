import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-[18px] sm:text-xl font-semibold text-gray-900">FASTWMS</span>
            </Link>
            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
              Система управления складом, маркировкой и ценами для селлеров и фулфилментов.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-[15px] sm:text-[16px]">Продукт</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about-product" className="text-gray-600 hover:text-gray-900 transition-colors text-[14px] sm:text-sm">
                  О продукте
                </Link>
              </li>
              <li>
                <Link to="/marking" className="text-gray-600 hover:text-gray-900 transition-colors text-[14px] sm:text-sm">
                  Маркировка
                </Link>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors text-[14px] sm:text-sm">
                  Функционал
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-[14px] sm:text-sm">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors text-[14px] sm:text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-[15px] sm:text-[16px]">Информация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/offer" className="text-gray-600 hover:text-gray-900 transition-colors text-[14px] sm:text-sm">
                  Публичная оферта
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors text-[14px] sm:text-sm">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-[15px] sm:text-[16px]">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <p className="text-gray-500 text-[13px] mb-1">Email</p>
                <a 
                  href="mailto:support@fastwms.ru" 
                  className="text-gray-900 hover:text-gray-700 transition-colors text-[14px] sm:text-sm font-medium"
                >
                  support@fastwms.ru
                </a>
              </li>
              <li className="pt-2">
                <p className="text-gray-500 text-[13px] mb-1">Telegram</p>
                <a 
                  href="https://t.me/FASTWMS_Bot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-700 transition-colors text-[14px] sm:text-sm font-medium"
                >
                  @FASTWMS_Bot
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
            <div className="text-center lg:text-left">
              <p className="text-gray-600 text-[13px] sm:text-sm">
                © {new Date().getFullYear()} FASTWMS. Все права защищены.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-gray-500 text-[12px] sm:text-xs">
                ИП Сулейманов Нариман Умарович • ИНН 507805575784 • ОГРНИП 317910500000038
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}