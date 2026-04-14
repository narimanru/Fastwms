import { Package, FileText, Layers, QrCode, Barcode, Tag } from 'lucide-react';
import exampleImage from 'figma:asset/68c4abba9bfea4735b77845a02fe21cbc380ad25.png';

export function LabelTypes() {
  const allFormats = [
    {
      name: 'ШК Wildberries',
      description: 'Стандартные штрихкоды для маркетплейса',
      icon: Barcode
    },
    {
      name: 'Честный Знак',
      description: 'Коды маркировки КИЗ для обязательной маркировки товаров',
      icon: QrCode
    },
    {
      name: 'Совмещенные',
      description: 'Объединение штрих-кода и кода маркировки Честный Знак (КИЗ) на одной этикетке для удобства печати и маркировки.',
      icon: Layers
    },
    {
      name: 'Произвольные этикетки',
      description: 'Создание кастомных форматов под ваши требования',
      icon: FileText
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-semibold text-gray-900 mb-4 text-[28px]">
            Форматы этикеток
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Поддерживаем все популярные форматы этикеток и маркировки для российских маркетплейсов
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left - Image */}
          <div className="flex items-center justify-center">
            <img 
              src={exampleImage} 
              alt="Примеры форматов этикеток: ШК, Честный Знак, Совмещенное" 
              className="w-full max-w-lg h-auto rounded-2xl"
            />
          </div>

          {/* Right - Format List */}
          <div className="space-y-4">
            {allFormats.map((format, index) => {
              const Icon = format.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all bg-white"
                >
                  {/* Icon */}
                  <Icon className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {format.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {format.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-semibold">i</span>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed text-[15px] text-left">
                <span className="font-semibold">Нужен кастомный формат?</span> Мы можем настроить любой формат этикеток под ваши требования. 
                Просто напишите нам. Скоро будет конструктор этикеток для вашего удобства.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}