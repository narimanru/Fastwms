import { Users, Printer, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RolesIllustration } from './RolesIllustration';
import auditHistoryImage from 'figma:asset/3be1f53c5b8910d391e995c954c6895e8021fef5.png';
import printFormImage from 'figma:asset/50dd1e08746448284b43b602ce6ff74f6688e82f.png';

export function MarkingControl() {
  const cards = [
    {
      icon: Users,
      title: 'Чёткие роли: селлер ↔ фулфилмент',
      description: 'Селлер — владелец КИЗов и может разруливать ошибки. Фулфилмент — только печатает и не может «потерять» ваши коды.',
      roles: {
        seller: [
          'Загружает КИЗы',
          'Может восстановить код при ошибке',
          'Контролирует спорные ситуации'
        ],
        fulfillment: [
          'Печатает этикетки',
          'Не может восстановить распечатанное',
          'Все действия фиксируются'
        ]
      },
      image: <RolesIllustration />
    },
    {
      icon: Printer,
      title: 'Умная печать + предпросмотр',
      description: 'Печать по размеру/SKU, только из доступных КИЗов. Перед печатью — предпросмотр, после — скачивание готового файла.',
      points: [
        'Совмещённые шаблоны (штрихкод + DataMatrix)',
        'Авторасчёт количества этикеток',
        'Фиксация «использован» в момент печати'
      ],
      image: printFormImage
    },
    {
      icon: Clock,
      title: 'Аудит действий и история загрузок',
      description: 'Каждая загрузка CSV/PDF и каждое действие с КИЗом фиксируются: кто сделал, когда, что изменилось.',
      points: [
        'История файлов: выполнено / ошибка',
        'История по каждому КИЗу (использование/отмена/перенос)',
        'Прозрачность для разборов и проверок'
      ],
      image: auditHistoryImage
    }
  ];

  return (
    <section id="marking-control" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-semibold text-gray-900 mb-6 leading-tight text-[28px]">
            Маркировка под полным контролем селлера
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            В FASTWMS роли разделены: селлер загружает КИЗы, фулфилмент печатает. Опасные действия запрещены логикой системы — это защищает от повторных кодов, ошибок маркировки и обезлички.
          </p>
        </div>

        {/* Cards - Alternating Layout */}
        <div className="space-y-16">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="rounded-xl overflow-hidden border border-gray-200">
                    {typeof card.image === 'string' ? (
                      <ImageWithFallback 
                        src={card.image}
                        alt={card.title}
                        className="w-full h-auto"
                      />
                    ) : (
                      card.image
                    )}
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-start gap-3 mb-4">
                    <Icon className="w-8 h-8 text-gray-900 flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {card.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Points or Roles */}
                  {card.points ? (
                    <ul className="space-y-3">
                      {card.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2.5 flex-shrink-0"></span>
                          <span className="text-base text-gray-700 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : card.roles ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Селлер</h4>
                        <ul className="space-y-3">
                          {card.roles.seller.map((role, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2.5 flex-shrink-0"></span>
                              <span className="text-gray-700 leading-relaxed text-[15px]">{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Фулфилмент</h4>
                        <ul className="space-y-3">
                          {card.roles.fulfillment.map((role, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2.5 flex-shrink-0"></span>
                              <span className="text-gray-700 leading-relaxed text-[15px]">{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}