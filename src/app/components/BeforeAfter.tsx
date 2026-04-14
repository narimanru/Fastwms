import { X, Check, AlertTriangle, TrendingDown, TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

export function BeforeAfter() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-[13px] font-medium mb-5">
            Знакомая ситуация?
          </div>
          <h2 className="font-semibold text-gray-900 mb-4 leading-tight text-[32px] sm:text-[40px]">
            Сколько стоит работать<br />по старинке?
          </h2>
          <p className="text-[17px] sm:text-[18px] text-gray-600">
            Каждый день без автоматизации — это потерянные деньги и нервы
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* BEFORE - Left Side (RED) */}
          <div className="bg-white border-2 border-red-200 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 px-6 py-5 border-b-2 border-red-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                    <X className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-gray-900">Без системы</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-red-600 text-white text-[12px] font-bold">
                  СЕЙЧАС
                </div>
              </div>
              <p className="text-[14px] text-gray-600">Excel, чаты и надежда на удачу</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-5">
              {/* Problem 1 - Money Loss */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-semibold text-gray-900 mb-1">
                      Потери денег
                    </div>
                    <div className="text-[13px] text-gray-600 leading-relaxed">
                      Дубли КИЗ, недостачи, пересорт, отклонённые товары
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 pl-11">
                  <TrendingDown className="w-4 h-4 text-red-700" strokeWidth={2} />
                  <span className="text-[20px] font-bold text-red-700">-50-150к₽</span>
                  <span className="text-[13px] text-gray-600">/месяц на ошибки</span>
                </div>
              </div>

              {/* Problem 2 - Time Waste */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-semibold text-gray-900 mb-1">
                      Потери времени
                    </div>
                    <div className="text-[13px] text-gray-600 leading-relaxed">
                      Ручная печать этикеток, сверка Excel, поиск дублей
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 pl-11">
                  <AlertTriangle className="w-4 h-4 text-red-700" strokeWidth={2} />
                  <span className="text-[20px] font-bold text-red-700">3-4 часа</span>
                  <span className="text-[13px] text-gray-600">/день на рутину</span>
                </div>
              </div>

              {/* Problem 3 - Conflicts */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-semibold text-gray-900 mb-1">
                      Постоянные конфликты
                    </div>
                    <div className="text-[13px] text-gray-600 leading-relaxed">
                      «Кто виноват?» между селлером и фулфилментом
                    </div>
                  </div>
                </div>
                <div className="bg-red-100 rounded-lg p-3 mt-3">
                  <div className="text-[12px] text-red-800 italic">
                    💬 "Вы отгрузили не то!"<br/>
                    💬 "Нет, вы дали не те коды!"<br/>
                    💬 "Где доказательства?"
                  </div>
                </div>
              </div>

              {/* Real Scenarios */}
              <div className="pt-4 border-t border-red-200">
                <div className="text-[13px] font-medium text-gray-900 mb-3">Реальные последствия:</div>
                <div className="space-y-2">
                  {[
                    'Штраф 50к₽ за дубли КИЗ от маркетплейса',
                    'Простой склада 2 дня из-за недостачи',
                    'Потеря клиента после 3-й ошибки в отгрузке',
                    'Сверка Excel до 2 ночи перед поставкой'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-[13px] text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AFTER - Right Side (GREEN) */}
          <div className="bg-white border-2 border-green-200 rounded-2xl overflow-hidden shadow-lg">
            {/* Header */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 px-6 py-5 border-b-2 border-green-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-gray-900">С FASTWMS</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-600 text-white text-[12px] font-bold">
                  РЕШЕНИЕ
                </div>
              </div>
              <p className="text-[14px] text-gray-600">Всё в одной системе, автоматически</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-5">
              {/* Solution 1 - Money Saved */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-semibold text-gray-900 mb-1">
                      Экономия денег
                    </div>
                    <div className="text-[13px] text-gray-600 leading-relaxed">
                      Автопроверка на дубли, полный контроль остатков
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 pl-11">
                  <TrendingUp className="w-4 h-4 text-green-700" strokeWidth={2} />
                  <span className="text-[20px] font-bold text-green-700">+100-200к₽</span>
                  <span className="text-[13px] text-gray-600">/месяц экономии</span>
                </div>
              </div>

              {/* Solution 2 - Time Saved */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-semibold text-gray-900 mb-1">
                      Экономия времени
                    </div>
                    <div className="text-[13px] text-gray-600 leading-relaxed">
                      Импорт → Проверка → Печать за 2 клика
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 pl-11">
                  <Check className="w-4 h-4 text-green-700" strokeWidth={2} />
                  <span className="text-[20px] font-bold text-green-700">15 минут</span>
                  <span className="text-[13px] text-gray-600">/день вместо 4 часов</span>
                </div>
              </div>

              {/* Solution 3 - Trust */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-semibold text-gray-900 mb-1">
                      Прозрачность и доверие
                    </div>
                    <div className="text-[13px] text-gray-600 leading-relaxed">
                      История каждого КИЗ: кто, когда, что сделал
                    </div>
                  </div>
                </div>
                <div className="bg-green-100 rounded-lg p-3 mt-3">
                  <div className="text-[12px] text-green-800 font-medium">
                    ✅ Селлер видит статус каждого товара<br/>
                    ✅ Фулфилмент подтверждает отгрузку<br/>
                    ✅ Претензий нет — всё в логах
                  </div>
                </div>
              </div>

              {/* Real Results */}
              <div className="pt-4 border-t border-green-200">
                <div className="text-[13px] font-medium text-gray-900 mb-3">Реальные результаты:</div>
                <div className="space-y-2">
                  {[
                    'Ноль штрафов за дубли — проверка автоматом',
                    'Отгрузка за 1 час вместо целого дня',
                    'Клиенты довольны — ошибок нет',
                    'Спите спокойно — система всё помнит'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-[13px] text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
}
