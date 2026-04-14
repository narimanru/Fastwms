import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Package, Users, FileBarChart, Clock, Building2, Link as LinkIcon, Zap, Shield, ChevronRight } from 'lucide-react';
import { ForWhom } from '../components/ForWhom';
import { SafeCodesSection } from '../components/SafeCodesSection';

export function AboutProduct() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
    setTimeout(() => {
      setShowDemoModal(false);
      setDemoSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            <span className="text-sm">На главную</span>
          </Link>
          
          <h1 className="text-5xl font-semibold text-gray-900 mb-6">
            О продукте FASTWMS
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            FASTWMS — WMS для селлеров и фулфилментов
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          
          {/* Что такое FASTWMS */}
          <div className="mb-16">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              FASTWMS — это система складского учёта и операционного контроля, созданная под реальный рынок маркетплейсов. Мы строим продукт так, чтобы он решал ежедневные задачи селлера и склада: учёт товаров и размеров (SKU), контроль остатков, маркировка и Честный Знак, поставки, история операций и работа команды по ролям.
            </p>
          </div>

          <div className="h-px bg-gray-200 my-16"></div>

          {/* Почему мы сделали FASTWMS */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Почему мы сделали FASTWMS</h2>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              FASTWMS родился из практики. В e-commerce рост всегда упирается в одно: Excel и ручные процессы перестают выдерживать объём.
            </p>

            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl mb-6">
              <p className="text-gray-900 font-semibold mb-4">Начинаются ошибки и потери:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>пересорты по размерам,</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>"пропавшие" остатки между складом и фулфилментом,</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>ручные сверки поставок,</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>путаница со статусами маркировки,</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>отсутствие прозрачной истории "кто и что сделал".</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              Нам нужна была система, которая мыслит так же, как селлер и склад — и мы начали строить её.
            </p>
          </div>

          <div className="h-px bg-gray-200 my-16"></div>

          {/* Что внутри: ядро системы */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Что внутри: ядро системы</h2>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              FASTWMS строится вокруг понятного ядра — без него склад не работает.
            </p>

            <div className="space-y-6">
              {/* Организации */}
              <div className="p-6 bg-white border border-gray-200 rounded-xl">
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Организации / кабинеты</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Разделяйте бизнесы, склады и команды: один аккаунт — несколько кабинетов, прозрачная структура.
                    </p>
                  </div>
                </div>
              </div>

              {/* Пользователи и роли */}
              <div className="p-6 bg-white border border-gray-200 rounded-xl">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Пользователи и роли (RBAC)</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Выдавайте доступы по ролям: склад, менеджер, маркировка, руководитель. Каждый видит только то, что нужно.
                    </p>
                  </div>
                </div>
              </div>

              {/* SKU / товары */}
              <div className="p-6 bg-white border border-gray-200 rounded-xl">
                <div className="flex items-start gap-4">
                  <Package className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">SKU / товары (в одежде размер = отдельный SKU)</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Учёт ведётся на уровне реальных единиц: размер, цвет, партия, статус. Это убирает "пересорт" как явление.
                    </p>
                  </div>
                </div>
              </div>

              {/* История операций */}
              <div className="p-6 bg-white border border-gray-200 rounded-xl">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-gray-700 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">История операций</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Каждое действие фиксируется: кто принял, кто списал, кто отгрузил, когда и по какой операции. Это основа контроля и разборов.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200 my-16"></div>

          {/* Маркировка и Честный Знак */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Маркировка и Честный Знак — как часть процесса</h2>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Для одежды маркировка — это не "дополнительная функция", а ежедневная операционная нагрузка. Мы встроили работу с кодами так, чтобы она была естественной для склада:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                'загрузка и учёт кодов',
                'привязка кодов к товарам/партиям',
                'контроль статусов',
                'подготовка к печати',
                'связка кодов с поставками (чтобы отгруженное не "терялось")'
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <FileBarChart className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              FASTWMS помогает держать маркировку в порядке, а не превращать её в отдельный хаос.
            </p>
          </div>
        </div>
      </section>

      {/* Секция "Сейф для кодов маркировки" */}
      <SafeCodesSection />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="h-px bg-gray-200 my-16"></div>

          {/* Интеграции и единая точка правды */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Интеграции и единая точка правды по остаткам</h2>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Когда бизнес работает с фулфилментами и маркетплейсами, самая большая потеря времени — это "между системами".
            </p>

            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl mb-6">
              <p className="text-gray-900 font-semibold mb-4">FASTWMS создаётся как операционная точка правды:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span>вы видите остатки по каждому SKU,</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span>понимаете, где физически находится товар,</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span>связываете движение товара с конкретными операциями (приёмка, отгрузка, поставка),</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span>сохраняете контроль вне зависимости от количества складов и подрядчиков.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-px bg-gray-200 my-16"></div>

          {/* Блок "Для кого FASTWMS" */}
          <ForWhom />

          <div className="h-px bg-gray-200 my-16"></div>

          {/* Наша философия */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Наша философия</h2>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Мы строим FASTWMS не как набор функций, а как систему, которая упрощает ежедневную работу:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'меньше ручных действий',
                'меньше ошибок',
                'больше прозрачности',
                'учёт, который выдерживает рост'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <Shield className="w-5 h-5 text-gray-700 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-gray-200 my-16"></div>

          {/* CTA Section */}
          <div className="p-8 bg-gray-50 border border-gray-200 rounded-xl text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Хотите посмотреть FASTWMS в деле?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Запросите доступ и получите демонстрацию под ваш процесс: склад, фулфилмент, WB и маркировка.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowDemoModal(true)}
                className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all font-medium"
              >
                Запросить демо
              </button>
              <Link
                to="/#pricing"
                className="px-8 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all font-medium"
              >
                Посмотреть тарифы
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl border border-gray-200 max-w-md w-full p-6 relative shadow-xl">
            <button
              onClick={() => {
                setShowDemoModal(false);
                setDemoSubmitted(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!demoSubmitted ? (
              <>
                <h3 className="text-2xl text-gray-900 font-semibold mb-2">Запросить демо FASTWMS</h3>
                <p className="text-gray-600 mb-6">
                  Мы покажем систему и ответим на ваши вопросы
                </p>

                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Имя</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Телефон</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Комментарий</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 resize-none"
                      placeholder="Расскажите о вашем бизнесе и задачах"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all"
                  >
                    Отправить заявку
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl text-gray-900 font-semibold mb-2">Спасибо!</h4>
                <p className="text-gray-600">
                  Мы свяжемся с вами и покажем FASTWMS
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}