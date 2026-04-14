import { MarkingControl } from '../components/MarkingControl';
import { MarkingProcess } from '../components/MarkingProcess';
import { Database, Shield, History, ShoppingCart, Upload, Link2, Printer, Package } from 'lucide-react';

export function Marking() {
  return (
    <>
      {/* Hero Section - Alternative Design */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-[13px] font-medium mb-6">
              <Shield className="w-4 h-4" strokeWidth={2} />
              Маркировка
            </div>
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight">Сейф для DataMatrix-кодов (КИЗ)</h1>
            <p className="text-[17px] sm:text-[19px] md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Загрузите коды в FASTWMS — система проверит файл, разложит по SKU/размерам и временно хранит до момента печати на производстве или фулфилменте. FASTWMS — ваш туннель от покупки кодов до отгрузки.
            </p>
          </div>

          {/* Feature Cards - Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-semibold text-gray-900 mb-2">
                Временное хранение кодов
              </h3>
              <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                Безопасное хранилище ваших КИЗов до момента использования
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-semibold text-gray-900 mb-2">
                Привязка к SKU/размеру
              </h3>
              <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                Автоматическая организация кодов по товарным позициям
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <History className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-semibold text-gray-900 mb-2">
                Выдача в работу + история
              </h3>
              <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                Полный контроль и аудит всех операций с кодами
              </p>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-gray-900 mb-3 text-center">
              Как работает «туннель кодов»
            </h2>
            <p className="text-[15px] sm:text-[16px] text-gray-600 text-center mb-12 sm:mb-14">
              От покупки до отгрузки — пять простых шагов
            </p>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[19px] top-8 bottom-8 w-[2px] bg-gray-200 hidden sm:block"></div>

              <div className="space-y-8 sm:space-y-10">
                {/* Step 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center relative z-10">
                    <ShoppingCart className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Шаг 1</span>
                    </div>
                    <h3 className="text-[17px] sm:text-[18px] font-semibold text-gray-900 mb-2">
                      Купили коды в Честном ЗНАКе
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                      Заказываете необходимое количество DataMatrix-кодов для ваших товаров
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center relative z-10">
                    <Upload className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Шаг 2</span>
                    </div>
                    <h3 className="text-[17px] sm:text-[18px] font-semibold text-gray-900 mb-2">
                      Загрузили в FASTWMS (PDF/CSV) — проверка файла
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                      Система автоматически проверяет формат, валидность и дубликаты кодов
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center relative z-10">
                    <Link2 className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Шаг 3</span>
                    </div>
                    <h3 className="text-[17px] sm:text-[18px] font-semibold text-gray-900 mb-2">
                      Привязка кодов к SKU/размерам и статусам
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                      Коды автоматически распределяются по товарным позициям и размерам
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center relative z-10">
                    <Printer className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Шаг 4</span>
                    </div>
                    <h3 className="text-[17px] sm:text-[18px] font-semibold text-gray-900 mb-2">
                      Передача в работу на печать (производство/фулфилмент)
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                      Фулфилмент получает доступ к кодам для печати этикеток
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center relative z-10">
                    <Package className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[13px] font-semibold text-gray-500 uppercase tracking-wide">Шаг 5</span>
                    </div>
                    <h3 className="text-[17px] sm:text-[18px] font-semibold text-gray-900 mb-2">
                      Привязка к поставке и контроль использованных кодов
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                      Все использованные коды фиксируются, дубликаты исключены
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="mt-12 sm:mt-14 bg-white border-l-4 border-gray-900 rounded-r-xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-[13px] font-bold">!</span>
                </div>
                <div>
                  <h4 className="text-[15px] sm:text-[16px] font-semibold text-gray-900 mb-2">Важно знать</h4>
                  <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                    FASTWMS не переоформляет коды — это техническое хранилище и контроль процесса. Операции в ГИС МТ выполняет владелец или уполномоченный.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarkingControl />
      <MarkingProcess />
    </>
  );
}