import { 
  ShoppingCart, 
  Upload, 
  PackageSearch, 
  Printer, 
  FileCheck, 
  Truck, 
  Activity, 
  Users, 
  BarChart3
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function MarkingProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      icon: ShoppingCart,
      title: 'Покупка КИЗов',
      description: 'Селлер заказывает КИЗы в Честный Знак под товары, требующие маркировку.'
    },
    {
      icon: Upload,
      title: 'Загрузка в систему',
      description: 'CSV или PDF с кодами загружается в FASTWMS — коды парсятся и становятся доступны для печати.'
    },
    {
      icon: PackageSearch,
      title: 'Контроль дублей',
      description: 'Система сверяет КИЗы с базой УПД WB — если код уже был отгружен, загрузка будет отклонена.'
    },
    {
      icon: Printer,
      title: 'Печать этикеток',
      description: 'Фулфилмент выбирает размер/SKU, генерирует PDF с совмещёнными этикетками (ШК + КИЗ).'
    },
    {
      icon: FileCheck,
      title: 'Фиксация статуса',
      description: 'Как только PDF выгружен, статус КИЗов меняется на «использован» — их нельзя повторно распечатать.'
    },
    {
      icon: Truck,
      title: 'Отгрузка на WB',
      description: 'Товары с этикетками отгружаются на склад WB. Система синхронизирует статус поставки.'
    },
    {
      icon: Activity,
      title: 'История действий',
      description: 'Все операции с КИЗами фиксируются: кто и когда загрузил, кто напечатал, статус по каждому коду.'
    },
    {
      icon: Users,
      title: 'Роли и доступы',
      description: 'Селлер управляет КИЗами и может восстановить при ошибке. Фулфилмент только печатает.'
    },
    {
      icon: BarChart3,
      title: 'Отчёты и аналитика',
      description: 'Селлер видит остатки по КИЗам, сколько использовано/не использовано, и движение по фулфилментам.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-semibold text-gray-900 mb-6 leading-tight text-[28px]">
            Как работает процесс маркировки
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            От покупки КИЗов до отчётов — весь цикл маркировки понятен и прозрачен.
            Каждый шаг под контролем, никаких потерь и дубликатов.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  transitionDuration: '500ms'
                }}
              >
                {/* Step Number and Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-white">{index + 1}</span>
                  </div>
                  <Icon className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}