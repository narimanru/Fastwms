import { useState, useEffect } from 'react';
import { Check, ArrowRight, Loader2, Mail, Package, Truck, FileBarChart, Users, Building2, Link } from 'lucide-react';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

interface PlanState {
  code: string;
  name: string;
  price: number;
}

interface ModuleState {
  name: string;
  price: number;
}

interface State {
  plan: PlanState | null;
  modules: Record<string, ModuleState>;
  billingPeriod: 1 | 3 | 6 | 12;
}

export function Pricing() {
  const [state, setState] = useState<State>({
    plan: null,
    modules: {},
    billingPeriod: 1
  });

  const [cartAnimation, setCartAnimation] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoSubmitting, setDemoSubmitting] = useState(false);
  const [demoError, setDemoError] = useState('');
  const [demoFormData, setDemoFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [trialSubmitted, setTrialSubmitted] = useState(false);
  const [trialSubmitting, setTrialSubmitting] = useState(false);
  const [trialError, setTrialError] = useState('');
  const [trialFormData, setTrialFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showSkuModal, setShowSkuModal] = useState(false);
  const [showUsersModal, setShowUsersModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showOrganizationsModal, setShowOrganizationsModal] = useState(false);
  const [showCoreModal, setShowCoreModal] = useState(false);

  // Trigger animation when state changes
  useEffect(() => {
    setCartAnimation(true);
    const timer = setTimeout(() => setCartAnimation(false), 200);
    return () => clearTimeout(timer);
  }, [state.plan, state.modules, state.billingPeriod]);

  const discounts = { 1: 0, 3: 10, 6: 15, 12: 20 };

  const planNames: Record<string, string> = {
    starter: 'Старт',
    pro: 'Профи',
    enterprise: 'Бизнес'
  };

  const moduleNames: Record<string, string> = {
    repricer: 'Репрайсер',
    upd: 'Работа с УПД'
  };

  const plans = [
    {
      code: 'starter',
      name: 'Старт',
      price: 1990,
      badge: 'для старта',
      badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
      gradient: 'from-cyan-500 to-blue-500',
      features: [
        'Пользователи: 2',
        'SKU/товары: 200',
        'Организации: 1',
        'История: 180 дней',
        'Ядро FASTWMS'
      ]
    },
    {
      code: 'pro',
      name: 'Профи',
      price: 6990,
      badge: 'рост',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
      features: [
        'Пользователи: 10',
        'SKU/товары: 5 000',
        'Организации: 5',
        'История: 365 дней',
        'Ядро FASTWMS'
      ]
    },
    {
      code: 'enterprise',
      name: 'Бизнес',
      price: 26990,
      badge: 'масштаб',
      badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      gradient: 'from-orange-500 to-amber-500',
      features: [
        'Пользователи: 30',
        'SKU/товары: 20 000',
        'Организации: 20',
        'История: 730 дней',
        'Ядро FASTWMS'
      ]
    }
  ];

  const modules = [
    {
      code: 'repricer',
      name: 'Репрайсер',
      description: 'Автоцены, правила, защита маржи',
      price: 1990,
      icon: ArrowRight,
      gradient: 'from-cyan-500 to-blue-500',
      hint: 'Для продавцов, которым важна скорость реакции на конкурентов.'
    },
    {
      code: 'upd',
      name: 'Работа с УПД',
      description: 'Загрузка УПД из WB, контроль передачи КИЗов и защита от повторного использования',
      price: 990,
      icon: Mail,
      gradient: 'from-blue-500 to-indigo-500',
      hint: 'Для брендов с регулярными поставками и маркировкой.'
    }
  ];

  const selectPlan = (code: string, price: number) => {
    setState(prev => ({
      ...prev,
      plan: { code, name: planNames[code], price }
    }));
  };

  const toggleModule = (code: string, price: number) => {
    setState(prev => {
      const newModules = { ...prev.modules };
      if (newModules[code]) {
        delete newModules[code];
      } else {
        newModules[code] = { name: moduleNames[code], price };
      }
      return { ...prev, modules: newModules };
    });
  };

  const setBillingPeriod = (period: 1 | 3 | 6 | 12) => {
    setState(prev => ({ ...prev, billingPeriod: period }));
  };

  const calculateTotal = () => {
    const planPrice = state.plan ? state.plan.price : 0;
    const modulesTotal = Object.values(state.modules).reduce((sum, m) => sum + m.price, 0);
    const monthlyBase = planPrice + modulesTotal;
    const discount = discounts[state.billingPeriod] || 0;
    const monthlyWithDiscount = Math.round(monthlyBase * (1 - discount / 100));
    const upfrontTotal = monthlyWithDiscount * state.billingPeriod;

    return {
      planPrice,
      modulesTotal,
      monthlyBase,
      discount,
      monthlyWithDiscount,
      upfrontTotal
    };
  };

  const totals = calculateTotal();
  const fmt = (n: number) => n.toLocaleString('ru-RU');

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitting(true);
    setDemoError('');
    
    try {
      // Prepare message with plan info
      const modules = Object.values(state.modules).map(m => m.name).join(', ');
      const message = `Запрос на демо FASTWMS

Выбранный тариф: ${state.plan?.name || 'не выбран'}
Срок подписки: ${state.billingPeriod} мес
Модули: ${modules || 'не выбраны'}

Комментарий: ${demoFormData.message}
Телефон: ${demoFormData.phone}`;

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7704f51d/send-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            name: demoFormData.name,
            email: demoFormData.email,
            message: message
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data.details || data.error || 'Ошибка отправки сообщения';
        throw new Error(errorMsg);
      }

      setDemoSubmitted(true);
      setDemoFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setShowDemoModal(false);
        setDemoSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending demo request:', error);
      setDemoError(error instanceof Error ? error.message : 'Произошла ошибка при отправке заявки');
    } finally {
      setDemoSubmitting(false);
    }
  };

  const handleTrialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTrialSubmitting(true);
    setTrialError('');
    
    try {
      // Prepare message with plan info
      const modules = Object.values(state.modules).map(m => m.name).join(', ');
      const message = `Запрос на 3-дневный триал FASTWMS

Выбранный тариф: ${state.plan?.name || 'не выбран'}
Срок подписки: ${state.billingPeriod} мес
Модули: ${modules || 'не выбраны'}

Комментарий: ${trialFormData.message}
Телефон: ${trialFormData.phone}`;

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7704f51d/send-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            name: trialFormData.name,
            email: trialFormData.email,
            message: message
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data.details || data.error || 'Ошибка отправки сообщения';
        throw new Error(errorMsg);
      }

      setTrialSubmitted(true);
      setTrialFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setShowTrialModal(false);
        setTrialSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending trial request:', error);
      setTrialError(error instanceof Error ? error.message : 'Произошла ошибка при отправке заявки');
    } finally {
      setTrialSubmitting(false);
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-semibold text-gray-900 mb-4 text-[28px]">
            Тарифы FASTWMS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите инфраструктуру, затем добавьте модули. Итоговая цена считается автоматически.
          </p>
        </div>

        {/* Billing Period Selector */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-6 bg-white border border-gray-200 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <span className="text-sm font-medium text-gray-900">Срок подписки:</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { period: 1, label: '1 мес', discount: null },
                  { period: 3, label: '3 мес', discount: '-10%' },
                  { period: 6, label: '6 мес', discount: '-15%' },
                  { period: 12, label: '12 мес', discount: '-20%' }
                ].map(({ period, label, discount }) => (
                  <button
                    key={period}
                    onClick={() => setBillingPeriod(period as 1 | 3 | 6 | 12)}
                    className={`px-4 py-2 rounded-lg transition-all font-medium cursor-pointer ${ state.billingPeriod === period ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200' } text-[16px]`}
                  >
                    {label}
                    {discount && (
                      <span className="ml-2 px-2 py-0.5 bg-white/20 text-xs rounded">
                        {discount}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Скидка применяется ко всей корзине (тариф + модули)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left/Main Column - Plans and Modules */}
          <div className="lg:col-span-2 space-y-8">
            {/* Plans Section */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl text-gray-900 mb-2">Выберите тариф (Ядро)</h3>
                <p className="text-gray-600">
                  Тариф = лимиты и ядро WMS (общие на подписку). Модули подключаются ниже.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                  <div
                    key={plan.code}
                    className={`relative p-6 bg-white rounded-xl border transition-all duration-300 ${
                      state.plan?.code === plan.code
                        ? 'border-gray-900 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#703b3b00]">
                        <span className="px-4 py-1 bg-gray-900 text-white text-xs font-medium rounded-full">
                          Популярный
                        </span>
                      </div>
                    )}

                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-gray-900 font-semibold text-[17px]">{plan.name}</h4>
                        <span className="text-xs rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-right px-[11px] py-[4px] mx-[13px] my-[0px]">
                          {plan.badge}
                        </span>
                      </div>

                      <div className="mb-6">
                        <div className="text-gray-900 font-semibold mb-1 text-center text-[30px]">
                          {fmt(plan.price)} ₽
                        </div>
                        <div className="text-sm text-gray-500 text-center">/мес (до скидки)</div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, idx) => {
                          const isSkuFeature = feature.startsWith('SKU/товары');
                          const isUsersFeature = feature.startsWith('Пользователи');
                          const isHistoryFeature = feature.startsWith('История');
                          const isOrganizationsFeature = feature.startsWith('Организации');
                          const isCoreFeature = feature.startsWith('Ядро FASTWMS');
                          return (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                              {isSkuFeature ? (
                                <span 
                                  onClick={() => setShowSkuModal(true)}
                                  className="text-[14px] border-b border-dashed border-gray-400 cursor-pointer hover:border-gray-600 hover:text-gray-900 transition-colors"
                                >
                                  {feature}
                                </span>
                              ) : isUsersFeature ? (
                                <span 
                                  onClick={() => setShowUsersModal(true)}
                                  className="text-[14px] border-b border-dashed border-gray-400 cursor-pointer hover:border-gray-600 hover:text-gray-900 transition-colors"
                                >
                                  {feature}
                                </span>
                              ) : isHistoryFeature ? (
                                <span 
                                  onClick={() => setShowHistoryModal(true)}
                                  className="text-[14px] border-b border-dashed border-gray-400 cursor-pointer hover:border-gray-600 hover:text-gray-900 transition-colors"
                                >
                                  {feature}
                                </span>
                              ) : isOrganizationsFeature ? (
                                <span 
                                  onClick={() => setShowOrganizationsModal(true)}
                                  className="text-[14px] border-b border-dashed border-gray-400 cursor-pointer hover:border-gray-600 hover:text-gray-900 transition-colors"
                                >
                                  {feature}
                                </span>
                              ) : isCoreFeature ? (
                                <span 
                                  onClick={() => setShowCoreModal(true)}
                                  className="text-[14px] border-b border-dashed border-gray-400 cursor-pointer hover:border-gray-600 hover:text-gray-900 transition-colors"
                                >
                                  {feature}
                                </span>
                              ) : (
                                <span className="text-[14px]">{feature}</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>

                      <button
                        onClick={() => selectPlan(plan.code, plan.price)}
                        className={`w-full py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                          state.plan?.code === plan.code
                            ? 'bg-gray-900 text-white'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                      >
                        {state.plan?.code === plan.code ? 'Выбранный тариф' : 'Выбрать тариф'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-100 border border-gray-200 rounded-xl">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="text-sm text-gray-700 leading-relaxed"> тариф — это инфраструктура (лимиты и ядро). Репрайсер, Работа с УПД,&nbsp;&nbsp;подключаются как модули и оплачиваются отдельно.<span className="font-semibold">Важно:</span></div>
                </div>
              </div>
            </div>

            {/* Modules Section */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl text-gray-900 mb-2">Дополнительные модули</h3>
                <p className="text-gray-600">
                  Модули покупаются на уровне организации и не меняют тариф.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {modules.map((module) => {
                  const Icon = module.icon;
                  const isActive = !!state.modules[module.code];

                  return (
                    <div
                      key={module.code}
                      className={`p-6 bg-white rounded-xl border transition-all ${
                        isActive
                          ? 'border-gray-900 shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Icon className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
                            <h4 className="text-lg text-gray-900 font-semibold">{module.name}</h4>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                          <div className="text-gray-900 font-semibold">
                            + {fmt(module.price)} ₽ / мес
                          </div>
                        </div>
                        
                        <button
                          onClick={() => toggleModule(module.code, module.price)}
                          className={`ml-4 w-12 h-6 rounded-full transition-all flex-shrink-0 cursor-pointer ${
                            isActive ? 'bg-gray-900' : 'bg-gray-300'
                          }`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full transition-transform shadow-sm ${
                            isActive ? 'translate-x-6' : 'translate-x-0.5'
                          }`}></div>
                        </button>
                      </div>
                      <p className="text-xs text-gray-500">{module.hint}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Cart */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-200">
              <h3 className="text-xl text-gray-900 font-semibold mb-1">Ваш тариф</h3>
              <p className="text-sm text-gray-500 mb-6">
                Тариф + модули + срок подписки
              </p>

              {/* Тариф Section */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-900 font-semibold text-base">Тариф</span>
                  <span className={`px-3 py-1 text-xs rounded-full font-medium ${ state.plan ? 'bg-gray-100 text-gray-900' : 'bg-gray-50 text-gray-500' }`}>
                    {state.plan ? state.plan.name : 'не выбран'}
                  </span>
                </div>
                {state.plan && (
                  <div className="text-sm text-gray-600">
                    Стоимость: <span className="text-gray-900 font-medium">{fmt(totals.planPrice)} ₽ / мес</span>
                  </div>
                )}
              </div>

              <div className="h-px bg-gray-200 my-4"></div>

              {/* Модули Section */}
              <div className="mb-4">
                <div className="text-gray-900 font-semibold mb-3 text-base">Модули</div>
                {Object.keys(state.modules).length > 0 ? (
                  <div className="space-y-2">
                    {Object.entries(state.modules).map(([code, module]) => (
                      <div key={code} className="flex justify-between text-sm">
                        <span className="text-gray-600">{module.name}</span>
                        <span className="text-gray-900 font-medium">+{fmt(module.price)} ₽</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">Модули не выбраны</p>
                )}
              </div>

              <div className="h-px bg-gray-200 my-4"></div>

              {/* Срок Section */}
              <div className="mb-4">
                <div className="text-gray-900 font-semibold mb-2 text-base">Срок</div>
                <div className="text-sm text-gray-700">
                  {state.billingPeriod === 1 ? '1 месяц' : `${state.billingPeriod} месяцев`}
                  {totals.discount > 0 && (
                    <span className="ml-2 text-green-600 font-medium">(-{totals.discount}%)</span>
                  )}
                </div>
              </div>

              <div className="h-px bg-gray-200 my-4"></div>

              {/* Итого Section */}
              <div className="mb-6">
                <div className="text-gray-900 font-semibold mb-3 text-base">Итого</div>
                {state.billingPeriod === 1 ? (
                  <div className="text-2xl font-semibold text-gray-900">
                    {fmt(totals.monthlyWithDiscount)} ₽ / мес
                  </div>
                ) : (
                  <div>
                    <div className="text-2xl font-semibold text-gray-900 mb-1">
                      {fmt(totals.upfrontTotal)} ₽
                    </div>
                    <div className="text-sm text-gray-500">
                      {fmt(totals.monthlyWithDiscount)} ₽ × {state.billingPeriod} мес
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200">
                      Списывается одним платежом
                    </div>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <button
                  disabled={!state.plan}
                  onClick={() => state.plan && setShowTrialModal(true)}
                  className={`w-full py-3 rounded-xl font-medium transition-all cursor-pointer ${ state.plan ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' : 'bg-gray-100 text-gray-400 cursor-not-allowed' } text-base`}
                >
                  Начать бесплатно на 3 дня
                </button>

                <p className="text-xs text-gray-500 text-center px-2">
                  Полный доступ к ядру FASTWMS. Без автосписаний.
                </p>

                <button
                  onClick={() => setShowDemoModal(true)}
                  className="w-full py-3 bg-white text-gray-900 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-medium text-base cursor-pointer"
                >
                  Запросить демо
                </button>
              </div>

              {/* Info Block */}
              <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-xs text-gray-600 leading-relaxed">
                  Подписка оплачивает инфраструктуру (ядро). Модули подключаются отдельно на уровне организации.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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

                {state.plan && (
                  <div className="mb-4 p-3 bg-gray-100 border border-gray-200 rounded-lg">
                    <p className="text-sm text-gray-700">
                      Вы выбрали тариф <span className="font-semibold text-gray-900">{state.plan.name}</span>
                    </p>
                  </div>
                )}

                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Имя</label>
                    <input
                      type="text"
                      required
                      value={demoFormData.name}
                      onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={demoFormData.email}
                      onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Телефон</label>
                    <input
                      type="tel"
                      value={demoFormData.phone}
                      onChange={(e) => setDemoFormData({ ...demoFormData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Комментарий</label>
                    <textarea
                      rows={3}
                      value={demoFormData.message}
                      onChange={(e) => setDemoFormData({ ...demoFormData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all"
                    disabled={demoSubmitting}
                  >
                    {demoSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </button>

                  {demoError && (
                    <p className="text-sm text-red-500 mt-2">{demoError}</p>
                  )}
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
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

      {/* Trial Modal */}
      {showTrialModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl border border-gray-200 max-w-md w-full p-6 relative shadow-xl">
            <button
              onClick={() => {
                setShowTrialModal(false);
                setTrialSubmitted(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!trialSubmitted ? (
              <>
                <h3 className="text-2xl text-gray-900 font-semibold mb-2">Начать пробный период FASTWMS</h3>
                <p className="text-gray-600 mb-6">
                  Мы предоставим вам доступ к системе на 3 дня
                </p>

                {state.plan && (
                  <div className="mb-4 p-3 bg-gray-100 border border-gray-200 rounded-lg">
                    <p className="text-sm text-gray-700">
                      Вы выбрали тариф <span className="font-semibold text-gray-900">{state.plan.name}</span>
                    </p>
                  </div>
                )}

                <form onSubmit={handleTrialSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Имя</label>
                    <input
                      type="text"
                      required
                      value={trialFormData.name}
                      onChange={(e) => setTrialFormData({ ...trialFormData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={trialFormData.email}
                      onChange={(e) => setTrialFormData({ ...trialFormData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Телефон</label>
                    <input
                      type="tel"
                      value={trialFormData.phone}
                      onChange={(e) => setTrialFormData({ ...trialFormData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Комментарий</label>
                    <textarea
                      rows={3}
                      value={trialFormData.message}
                      onChange={(e) => setTrialFormData({ ...trialFormData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all"
                    disabled={trialSubmitting}
                  >
                    {trialSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </button>

                  {trialError && (
                    <p className="text-sm text-red-500 mt-2">{trialError}</p>
                  )}
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl text-gray-900 font-semibold mb-2">Спасибо!</h4>
                <p className="text-gray-600">
                  Мы свяжемся с вами и предоставим доступ к пробному периоду FASTWMS
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SKU Modal */}
      {showSkuModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl border border-gray-200 max-w-lg w-full p-8 relative shadow-xl">
            <button
              onClick={() => setShowSkuModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-6">
              <h3 className="text-2xl text-gray-900 font-semibold mb-3">📦 SKU (товары)</h3>
              <p className="text-gray-700 leading-relaxed">
                Каждая отдельная единица товара со своим остатком.
              </p>
            </div>

            <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-sm font-semibold text-gray-900 mb-2">Важно:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Каждый размер — отдельный SKU</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Каждый цвет — отдельный SKU</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Каждая модель × размер × цвет — отдельный SKU</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 p-4 bg-gray-100 border border-gray-200 rounded-lg">
              <p className="text-sm font-semibold text-gray-900 mb-2">Например:</p>
              <p className="text-sm text-gray-700">
                5 моделей × 4 размера × 2 цвета = <span className="font-semibold text-gray-900">40 SKU</span>
              </p>
            </div>

            <button
              onClick={() => setShowSkuModal(false)}
              className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all font-medium cursor-pointer text-[15px]"
            >
              Понятно
            </button>
          </div>
        </div>
      )}

      {/* Users Modal */}
      {showUsersModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl border border-gray-200 max-w-lg w-full p-8 relative shadow-xl">
            <button
              onClick={() => setShowUsersModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-6">
              <h3 className="text-2xl text-gray-900 font-semibold mb-3">👥 Пользователи</h3>
              <p className="text-gray-700 leading-relaxed">
                Количество сотрудников, которые работают в системе.
              </p>
            </div>

            <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-sm font-semibold text-gray-900 mb-2">Это могут быть:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>владелец</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>менеджер</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>кладовщик</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>бухгалтер</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>сотрудник фулфилмента</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 p-4 bg-gray-100 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-700">
                Один сотрудник = <span className="font-semibold text-gray-900">один пользователь</span>.
              </p>
            </div>

            <button
              onClick={() => setShowUsersModal(false)}
              className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all font-medium cursor-pointer text-[15px]"
            >
              Понятно
            </button>
          </div>
        </div>
      )}

      {/* History Modal */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl border border-gray-200 max-w-lg w-full p-8 relative shadow-xl">
            <button
              onClick={() => setShowHistoryModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-6">
              <h3 className="text-2xl text-gray-900 font-semibold mb-3">📅 История</h3>
              <p className="text-gray-700 leading-relaxed">
                Срок хранения складских операций.
              </p>
            </div>

            <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-sm font-semibold text-gray-900 mb-2">Сохраняются операции:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>приёмка</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>отгрузка</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>перемещение</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>возвраты</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>действия сотрудников</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 p-4 bg-gray-100 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-700">
                Чем больше срок хранения — <span className="font-semibold text-gray-900">тем глубже аналитика и контроль</span>.
              </p>
            </div>

            <button
              onClick={() => setShowHistoryModal(false)}
              className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all font-medium cursor-pointer text-[15px]"
            >
              Понятно
            </button>
          </div>
        </div>
      )}

      {/* Organizations Modal */}
      {showOrganizationsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl border border-gray-200 max-w-lg w-full p-8 relative shadow-xl">
            <button
              onClick={() => setShowOrganizationsModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-6">
              <h3 className="text-2xl text-gray-900 font-semibold mb-3">🏢 Организации</h3>
              <p className="text-gray-700 leading-relaxed">
                Отдельные бизнес-единицы внутри системы.
              </p>
            </div>

            <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-sm font-semibold text-gray-900 mb-2">Это может быть:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>ИП</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>ООО</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>клиент фулфилмента</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>отдельный бренд</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 p-4 bg-gray-100 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-700">
                Если у вас 10 клиентов — <span className="font-semibold text-gray-900">это 10 организаций</span>.
              </p>
            </div>

            <button
              onClick={() => setShowOrganizationsModal(false)}
              className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all font-medium cursor-pointer text-[15px]"
            >
              Понятно
            </button>
          </div>
        </div>
      )}

      {/* Core Modal */}
      {showCoreModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl border border-gray-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-xl">
            <button
              onClick={() => setShowCoreModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-6">
              <h3 className="text-2xl text-gray-900 font-semibold mb-3">Ядро FASTWMS — входит во все тарифы</h3>
              <p className="text-gray-700 leading-relaxed">
                FASTWMS — это единая инфраструктура для управления складом и операциями.<br />
                Функциональность одинакова во всех тарифах. Отличается только масштаб.
              </p>
            </div>

            <div className="h-px bg-gray-300 my-6"></div>

            {/* 📦 Управление товарами и остатками */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Package className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                <h4 className="text-lg font-semibold text-gray-900">Управление товарами и остатками</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Единый реестр SKU</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Учёт остатков по складам</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Мультисклад</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>История движения товара</span>
                </li>
              </ul>
            </div>

            <div className="h-px bg-gray-300 my-6"></div>

            {/* 🚚 Складские операции */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Truck className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                <h4 className="text-lg font-semibold text-gray-900">Складские операции</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Приёмка и отгрузка</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Сборка FBO / FBS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Перемещения</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Возвраты и списания</span>
                </li>
              </ul>
            </div>

            <div className="h-px bg-gray-300 my-6"></div>

            {/* 🧾 Маркировка и печать */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <FileBarChart className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                <h4 className="text-lg font-semibold text-gray-900">Маркировка и печать</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Учёт Честного Знака</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Печать штрихкодов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Контроль статусов кодов</span>
                </li>
              </ul>
            </div>

            <div className="h-px bg-gray-300 my-6"></div>

            {/* 👥 Пользователи и роли */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                <h4 className="text-lg font-semibold text-gray-900">Пользователи и роли</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Гибкая система доступов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Контроль действий сотрудников</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>История изменений</span>
                </li>
              </ul>
            </div>

            <div className="h-px bg-gray-300 my-6"></div>

            {/* 🏢 Организации */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                <h4 className="text-lg font-semibold text-gray-900">Организации</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Работа с несколькими ИП / брендами</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Поддержка фулфилмента</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Разделение данных по организациям</span>
                </li>
              </ul>
            </div>

            <div className="h-px bg-gray-300 my-6"></div>

            {/* 🔗 Интеграция с маркетплейсами */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Link className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                <h4 className="text-lg font-semibold text-gray-900">Интеграция с маркетплейсами</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Wildberries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Синхронизация заказов и остатков</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>Работа с несколькими кабинетами</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setShowCoreModal(false)}
              className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all font-medium cursor-pointer text-[15px]"
            >
              Понятно
            </button>
          </div>
        </div>
      )}
    </section>
  );
}