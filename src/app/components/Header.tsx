import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-gray-900 text-[20px] sm:text-[24px]">FASTWMS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1">
            <li>
              <Link to="/" className="px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors text-[16px]">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/about-product" className="px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors text-[16px]">
                О продукте
              </Link>
            </li>
            {isHome && (
              <>
                <li>
                  <a href="#features" className="px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors text-[16px]">
                    Функционал
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors text-[16px]">
                    Тарифы
                  </a>
                </li>
                <li>
                  <a href="#for-whom" className="px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors text-[16px]">
                    Для кого
                  </a>
                </li>
                <li>
                  <a href="#faq" className="px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors text-[16px]">
                    FAQ
                  </a>
                </li>
              </>
            )}
          </ul>

          {/* Auth Buttons - Always visible */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a 
              href="https://app.fastwms.ru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-2 text-[14px] sm:text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Войти
            </a>
            <a 
              href="https://app.fastwms.ru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 sm:px-5 py-2 sm:py-2.5 text-[14px] sm:text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all"
            >
              Регистрация
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700 ml-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <ul className="space-y-1">
              <li>
                <Link to="/" className="block px-3 py-3 text-[16px] text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about-product" className="block px-3 py-3 text-[16px] text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  О продукте
                </Link>
              </li>
              {isHome && (
                <>
                  <li>
                    <a href="#features" className="block px-3 py-3 text-[16px] text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      Функционал
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="block px-3 py-3 text-[16px] text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      Тарифы
                    </a>
                  </li>
                  <li>
                    <a href="#for-whom" className="block px-3 py-3 text-[16px] text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      Для кого
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="block px-3 py-3 text-[16px] text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      FAQ
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}