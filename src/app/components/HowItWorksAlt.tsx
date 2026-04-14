import { FileText, File, Database, CheckCircle, AlertCircle, Clock, Printer, Package } from 'lucide-react';

export function HowItWorksAlt() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-semibold text-gray-900 mb-4 leading-tight text-[32px] sm:text-[40px]">
            Как FASTWMS работает
          </h2>
          <p className="text-[17px] sm:text-[18px] text-gray-600">
            Три шага до порядка в складе и быстрых отгрузок
          </p>
        </div>

        {/* Steps Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Step 1 - Учёт */}
          <div className="flex flex-col">
            {/* Number Badge */}
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white text-[15px] font-semibold mb-6">
              1
            </div>

            {/* Title & Description */}
            <h3 className="text-[20px] sm:text-[22px] font-semibold text-gray-900 mb-3">
              Наведите порядок в учёте
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              Товары, размеры, остатки и поставки — в одной системе. Все данные обновляются в реальном времени.
            </p>

            {/* Visual */}
            <div className="mt-auto bg-gray-50 rounded-xl p-5 border border-gray-100">
              {/* Mini Table */}
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-4">
                <div className="grid grid-cols-4 gap-2 px-3 py-2 bg-gray-50 border-b border-gray-200">
                  <div className="text-[10px] font-medium text-gray-600">SKU</div>
                  <div className="text-[10px] font-medium text-gray-600">Размер</div>
                  <div className="font-medium text-gray-600 text-[12px]">Остаток</div>
                  <div className="text-[10px] font-medium text-gray-600">Резерв</div>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    ['A001', 'M', '245', '30'],
                    ['B205', 'L', '182', '15'],
                    ['C102', 'S', '96', '8'],
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-4 gap-2 px-3 py-2">
                      <div className="text-[11px] text-gray-900">{row[0]}</div>
                      <div className="text-[11px] text-gray-600">{row[1]}</div>
                      <div className="text-[11px] font-medium text-gray-900">{row[2]}</div>
                      <div className="text-[11px] text-gray-600">{row[3]}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg px-3 py-2 border border-gray-200">
                  <div className="text-[10px] text-gray-600 mb-0.5">В пути</div>
                  <div className="text-[16px] font-semibold text-gray-900">120</div>
                </div>
                <div className="bg-white rounded-lg px-3 py-2 border border-gray-200">
                  <div className="text-[10px] text-gray-600 mb-0.5">К приемке</div>
                  <div className="text-[16px] font-semibold text-gray-900">80</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 - Маркировка */}
          <div className="flex flex-col">
            {/* Number Badge */}
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white text-[15px] font-semibold mb-6">
              2
            </div>

            {/* Title & Description */}
            <h3 className="text-[20px] sm:text-[22px] font-semibold text-gray-900 mb-3">
              Автоматизируйте маркировку
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              Импортируйте коды из любого источника, проверяйте на дубли и печатайте этикетки одной кнопкой.
            </p>

            {/* Visual */}
            <div className="mt-auto bg-gray-50 rounded-xl p-5 border border-gray-100">
              {/* Import Sources */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { icon: FileText, label: 'PDF' },
                  { icon: File, label: 'CSV' },
                  { icon: Database, label: 'API' },
                ].map((source, i) => {
                  const Icon = source.icon;
                  return (
                    <div key={i} className="bg-white rounded-lg py-2.5 border border-gray-200 text-center">
                      <Icon className="w-4 h-4 mx-auto text-gray-600 mb-1" strokeWidth={1.5} />
                      <div className="text-[10px] text-gray-600 font-medium">{source.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* KIZ Status */}
              <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100 mb-4">
                {[
                  { code: '••••1234', sku: 'A001', status: 'ОК', color: 'text-green-700' },
                  { code: '••••5678', sku: 'B205', status: 'Дубль', color: 'text-red-700' },
                  { code: '••••9012', sku: 'C102', status: 'Ожидание', color: 'text-gray-500' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-gray-500">{item.code}</span>
                      <span className="text-[11px] text-gray-900">{item.sku}</span>
                    </div>
                    <span className={`text-[11px] font-medium ${item.color}`}>{item.status}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <button className="w-full bg-gray-900 text-white text-[12px] font-medium py-2.5 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <Printer className="w-3.5 h-3.5" strokeWidth={2} />
                Печать этикеток
              </button>
            </div>
          </div>

          {/* Step 3 - Отгрузка */}
          <div className="flex flex-col">
            {/* Number Badge */}
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white text-[15px] font-semibold mb-6">
              3
            </div>

            {/* Title & Description */}
            <h3 className="text-[20px] sm:text-[22px] font-semibold text-gray-900 mb-3">
              Контролируйте отгрузки
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              Поставки привязаны к кодам — вы видите статус каждой единицы товара в реальном времени.
            </p>

            {/* Visual */}
            <div className="mt-auto bg-gray-50 rounded-xl p-5 border border-gray-100">
              {/* Shipment Header */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Package className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
                  <div className="text-[12px] font-semibold text-gray-900">Поставка #12345</div>
                </div>
                
                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-[10px] text-gray-600 mb-1.5">
                    <span>Принято: 92</span>
                    <span>Отклонено: 8</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-900" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>

              {/* Status List */}
              <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100">
                {[
                  { item: 'A001 / M', status: 'Отгружено', variant: 'default' },
                  { item: 'B205 / L', status: 'В пути', variant: 'default' },
                  { item: 'C102 / S', status: 'Отгружено', variant: 'default' },
                  { item: 'D503 / XL', status: 'Ошибка', variant: 'error' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-2">
                    <span className="text-[11px] text-gray-900">{row.item}</span>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${
                      row.variant === 'error' 
                        ? 'bg-red-50 text-red-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 pt-10 border-t border-gray-200">
          
        </div>
      </div>
    </section>
  );
}
