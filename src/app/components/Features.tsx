import { 
  Package, 
  RefreshCw, 
  Tag, 
  FileCheck, 
  Puzzle, 
  BarChart3, 
  Users, 
  FileText, 
  TrendingUp
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Package,
      title: 'Товары и остатки',
      description: 'Единый реестр товаров и SKU, учёт остатков по складам, фулфилментам, в пути и в производстве.'
    },
    {
      icon: RefreshCw,
      title: 'Логистика и фулфилмент',
      description: 'Работа с собственным складом и фулфилментами, свободное переключение моделей хранения без потери данных.'
    },
    {
      icon: Tag,
      title: 'Маркировка и печать',
      description: 'Печать штрих-кодов и DataMatrix Честного Знака с настраиваемыми шаблонами и объединением этикеток.'
    },
    {
      icon: FileCheck,
      title: 'Честный Знак',
      description: 'Загрузка кодов (PDF и CSV), статусы маркировки, история операций и контроль остатков по ЧЗ.'
    },
    {
      icon: Puzzle,
      title: 'Wildberries',
      description: 'Управление и переключение кабинетов WB, остатки, поставки, движение товара и синхронизация статусов.'
    },
    {
      icon: BarChart3,
      title: 'Аналитика и контроль',
      description: 'Контроль остатков, дефицита, движения товара и точек роста бизнеса в одном интерфейсе.'
    },
    {
      icon: Users,
      title: 'Команда и доступы',
      description: 'Роли и права доступа, история действий и аудит всех операций в системе.'
    },
    {
      icon: FileText,
      title: 'Работа с УПД',
      description: 'Работа с УПД и документами через API, связка с отгрузками и движением товара.'
    },
    {
      icon: TrendingUp,
      title: 'Репрайсер Wildberries',
      description: 'Умный репрайсинг с правилами, защитой маржи, контролем акций и автоматическим возвратом цены.'
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight px-2 sm:px-0 text-[28px]">
            Возможности FASTWMS
          </h2>
          <p className="text-[17px] sm:text-[19px] md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Всё, что нужно для управления складом, маркировкой и маркетплейсами — в одной системе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="p-5 sm:p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-6 h-6 text-gray-900 flex-shrink-0" strokeWidth={1.5} />
                  <h3 className="font-semibold text-gray-900 text-[20px]">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[14px] sm:text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}