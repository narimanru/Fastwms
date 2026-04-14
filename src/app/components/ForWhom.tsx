import { ShoppingBag, Warehouse, UserCog, Building2, Check } from 'lucide-react';

export function ForWhom() {
  const roles = [
    {
      icon: ShoppingBag,
      title: 'Селлер',
      description: 'Управление товарами, остатками, маркировкой и ценами на Wildberries. Поддержка нескольких ИП и команд.'
    },
    {
      icon: Warehouse,
      title: 'Фулфилмент',
      description: 'Приёмка, сборка, отгрузки, ЧЗ и отчётность. Работа с несколькими клиентами в одной системе.'
    },
    {
      icon: UserCog,
      title: 'Менеджер',
      description: 'Работа с маркировкой, печатью, остатками и задачами без доступа к финансам и ценам.'
    },
    {
      icon: Building2,
      title: 'Агентство',
      description: 'Ведение нескольких клиентов и проектов, раздельные доступы и прозрачный контроль операций.'
    }
  ];

  return (
    <section id="for-whom" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight px-2 sm:px-0 text-[28px]">
            Для кого FASTWMS
          </h2>
          <p className="text-[17px] sm:text-[19px] md:text-xl text-gray-600 px-2 sm:px-0">
            Система адаптируется под роль и процессы
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 sm:p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all"
              >
                {/* Icon */}
                <Icon className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-[17px] sm:text-lg font-semibold text-gray-900 mb-2">
                    {role.title}
                  </h3>
                  <p className="text-[14px] sm:text-sm text-gray-600 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}