import { useState } from 'react';
import { 
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  Upload, 
  Package, 
  Users, 
  FileText,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  number: number;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export function SafeCodesSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const badges = [
    'PDF/CSV загрузка',
    'Пулы/партии',
    'RBAC доступы',
    'Отчёт по использованным'
  ];

  const features: FeatureCard[] = [
    {
      icon: <Shield className="w-7 h-7" />,
      title: 'Единое хранилище кодов',
      description: 'Загрузили коды → система проверила формат → сохранила в статусах. Коды не теряются и не "разъезжаются" по файлам.'
    },
    {
      icon: <ArrowRight className="w-7 h-7" />,
      title: 'Выдача кодов партиями (пулом)',
      description: 'Передавайте коды на печать по диапазонам или партиям: например, "ФФ 1–50 000", "у себя 50 001+".'
    },
    {
      icon: <CheckCircle2 className="w-7 h-7" />,
      title: 'Контроль оклейки и история операций',
      description: 'Фиксируем: кто получил коды, что напечатано/использовано, что ушло в поставку. Снижает риск пересорта и двойного учёта.'
    }
  ];

  const steps: Step[] = [
    {
      number: 1,
      title: 'Получили коды',
      description: 'в Честном ЗНАКе'
    },
    {
      number: 2,
      title: 'Загрузили в FASTWMS',
      description: 'PDF/CSV — проверка'
    },
    {
      number: 3,
      title: 'Распределили',
      description: 'по SKU/размерам и статусам'
    },
    {
      number: 4,
      title: 'Выдали в работу',
      description: 'на печать (производство/фулфилмент)'
    },
    {
      number: 5,
      title: 'Отчёт + привязка',
      description: 'к поставке'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      question: 'Это не запрещено Честным ЗНАКом?',
      answer: 'FASTWMS — техническое хранилище и контроль процесса. Операции в ГИС МТ выполняет владелец кодов или уполномоченный представитель.'
    },
    {
      question: 'Зачем это нужно?',
      answer: 'Чтобы избежать пересорта по размерам, потери кодов и двойного учёта, когда коды "гуляют" между файлами и подрядчиками.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleDemoClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="safe-codes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* A) Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 max-w-4xl">
            Сейф для кодов маркировки (КИЗ / DataMatrix)
          </h2>
          
          <div className="md:flex md:items-start md:justify-between md:gap-8">
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-6 md:mb-0">
              Временное хранение и контроль выдачи кодов в работу на производство или фулфилмент.
              Распределение по SKU/размерам, статусы, журнал действий и отчёт по использованным кодам — без пересылки PDF/CSV.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 text-sm text-gray-700 font-medium whitespace-nowrap"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* B) 3 Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-lg hover:border-gray-300 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-50 to-cyan-50 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* C) Tunnel Stepper */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
            Как работает «туннель кодов»
          </h3>

          {/* Desktop: Horizontal Stepper */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200" style={{ marginLeft: '2.5rem', marginRight: '2.5rem' }} />
              
              <div className="grid grid-cols-5 gap-4">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex flex-col items-center">
                    {/* Step Number */}
                    <div className={`
                      relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-lg font-semibold mb-4
                      ${index === 2 
                        ? 'bg-gradient-to-br from-purple-600 to-cyan-600 text-white shadow-lg' 
                        : 'bg-white border-2 border-gray-300 text-gray-700'
                      }
                    `}>
                      {step.number}
                    </div>
                    
                    {/* Step Content */}
                    <div className="text-center">
                      <p className="text-base font-semibold text-gray-900 mb-1">
                        {step.title}
                      </p>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tablet/Mobile: Vertical Stepper */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                {/* Step Number + Line */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold flex-shrink-0
                    ${index === 2 
                      ? 'bg-gradient-to-br from-purple-600 to-cyan-600 text-white shadow-lg' 
                      : 'bg-white border-2 border-gray-300 text-gray-700'
                    }
                  `}>
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full min-h-[3rem] bg-gray-200 mt-2" />
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 pb-6">
                  <p className="text-lg font-semibold text-gray-900 mb-1">
                    {step.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* D) Mini-FAQ */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-300 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* E) Disclaimer + CTA */}
        <div className="border-t border-gray-200 pt-12">
          <div className="md:flex md:items-center md:justify-between gap-8">
            {/* Disclaimer */}
            <p className="text-sm text-gray-500 mb-6 md:mb-0 max-w-2xl">
              FASTWMS — техническое хранилище и контроль процесса. Операции в ГИС МТ выполняет владелец кодов или уполномоченный представитель.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
              <button
                onClick={handleDemoClick}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap"
              >
                Запросить демо
              </button>
              <a
                href="#safe-codes"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center whitespace-nowrap"
              >
                Посмотреть модуль
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
