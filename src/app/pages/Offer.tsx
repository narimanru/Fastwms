export function Offer() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-gray-900 mb-4">
          Публичная оферта
        </h1>
        <p className="text-[15px] sm:text-[16px] text-gray-600 mb-8 sm:mb-10 md:mb-12">
          Редакция от 15 июня 2026 года
        </p>

        <div className="prose prose-gray max-w-none">
          <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
              Настоящий документ является публичной офертой в соответствии со ст. 435 и 437 Гражданского кодекса Российской Федерации.
            </p>
          </div>

          {/* 1. Общие положения */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              1. Общие положения
            </h2>
            
            <div className="space-y-4">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>1.1.</strong> Индивидуальный предприниматель Сулейманов Нариман Умарович (далее — <strong>Лицензиар</strong>) предлагает любому юридическому или физическому лицу (далее — <strong>Лицензиат</strong>) заключить договор на использование программного обеспечения FASTWMS.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>1.2.</strong> FASTWMS представляет собой облачную систему управления товарами, складскими операциями, логистикой и интеграциями с маркетплейсами.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>1.3.</strong> Акцептом настоящей оферты считается регистрация пользователя в системе FASTWMS и нажатие кнопки <strong>«Принять условия»</strong>.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>1.4.</strong> С момента акцепта пользователь считается заключившим лицензионный договор на условиях данной оферты.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>1.5.</strong> Актуальная версия документов размещается на сайте:{' '}
                <a href="https://app.fastwms.ru/offer" className="text-cyan-600 hover:text-cyan-700 underline">
                  https://app.fastwms.ru/offer
                </a>
              </p>
            </div>
          </section>

          {/* 2. Термины и определения */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              2. Термины и определения
            </h2>
            
            <div className="space-y-3">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>Система (FASTWMS)</strong> — программное обеспечение, доступное через интернет и предназначенное для управления товарами, складом, логистикой и интеграциями.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>Аккаунт</strong> — учетная запись пользователя в системе.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>Пользователь</strong> — лицо, имеющее доступ к системе FASTWMS.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>Лицензиат</strong> — юридическое или физическое лицо, использующее систему.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>Коды маркировки (КИЗ)</strong> — коды идентификации товаров, полученные пользователем в системе "Честный Знак".
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>Репрайсер</strong> — инструмент автоматического изменения цен на маркетплейсах.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>Маркетплейсы</strong> — сторонние торговые платформы (например Wildberries и другие).
              </p>
            </div>
          </section>

          {/* 3. Предмет договора */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              3. Предмет договора
            </h2>
            
            <div className="space-y-4">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>3.1.</strong> Лицензиар предоставляет Лицензиату неисключительное право использования системы FASTWMS.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>3.2.</strong> FASTWMS функционирует как облачный сервис (SaaS).
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>3.3.</strong> Система может включать следующие функциональные модули:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-[15px] sm:text-[16px] text-gray-600">учет товаров и остатков</li>
                <li className="text-[15px] sm:text-[16px] text-gray-600">управление складом</li>
                <li className="text-[15px] sm:text-[16px] text-gray-600">логистика и фулфилмент</li>
                <li className="text-[15px] sm:text-[16px] text-gray-600">интеграции с маркетплейсами</li>
                <li className="text-[15px] sm:text-[16px] text-gray-600">работа с кодами маркировки</li>
                <li className="text-[15px] sm:text-[16px] text-gray-600">печать штрихкодов и этикеток</li>
                <li className="text-[15px] sm:text-[16px] text-gray-600">работа с УПД</li>
                <li className="text-[15px] sm:text-[16px] text-gray-600">репрайсер</li>
                <li className="text-[15px] sm:text-[16px] text-gray-600">аналитика и контроль операций</li>
              </ul>
            </div>
          </section>

          {/* 4. Регистрация и использование аккаунта */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              4. Регистрация и использование аккаунта
            </h2>
            
            <div className="space-y-4">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>4.1.</strong> Для работы в системе пользователь должен создать аккаунт.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>4.2.</strong> Пользователь обязан предоставлять достоверную информацию при регистрации.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>4.3.</strong> Пользователь несет ответственность за сохранность логина и пароля.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>4.4.</strong> Все действия, совершенные через аккаунт пользователя, считаются совершенными самим пользователем.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>4.5.</strong> Пользователь самостоятельно управляет доступом сотрудников, подрядчиков и фулфилментов к системе.
              </p>
            </div>
          </section>

          {/* 5. Стоимость услуг */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              5. Стоимость услуг
            </h2>
            
            <div className="space-y-4">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>5.1.</strong> Стоимость использования системы определяется тарифами.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>5.2.</strong> Тарифы размещаются на сайте:{' '}
                <a href="https://fastwms.ru/#pricing" className="text-cyan-600 hover:text-cyan-700 underline">
                  https://fastwms.ru/#pricing
                </a>
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>5.3.</strong> Лицензиар вправе ограничить доступ к системе при отсутствии оплаты.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>5.4.</strong> FASTWMS может предоставлять бесплатный пробный доступ (демо‑период). Срок и условия демо‑доступа определяются Лицензиаром и могут изменяться.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>5.5.</strong> По окончании демо‑периода для продолжения использования системы пользователь обязан оплатить выбранный тариф.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>5.6.</strong> Лицензиар вправе изменять тарифы, лимиты и условия использования системы. Обновленные тарифы применяются к новым периодам использования.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>5.7.</strong> Оплата тарифа предоставляет пользователю доступ к системе FASTWMS на оплаченный период использования.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>5.8.</strong> Денежные средства, уплаченные за доступ к системе FASTWMS, не подлежат возврату, за исключением случаев, прямо предусмотренных законодательством Российской Федерации либо по усмотрению Лицензиара.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>5.9.</strong> В случае досрочного прекращения использования системы пользователем оплаченный период доступа не пересчитывается и не компенсируется.
              </p>
            </div>
          </section>

          {/* 6. Товары и остатки */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              6. Товары и остатки
            </h2>
            
            <div className="space-y-4">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>6.1.</strong> FASTWMS предоставляет инструменты учета товаров и складских остатков.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>6.2.</strong> Система отображает данные на основании операций, внесенных пользователями.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>6.3.</strong> FASTWMS не является источником фактического наличия товара.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>6.4.</strong> Лицензиар не несет ответственности за расхождения между фактическими остатками и данными системы.
              </p>
            </div>
          </section>

          {/* 7. Логистика и фулфилмент */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              7. Логистика и фулфилмент
            </h2>
            
            <div className="space-y-4">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>7.1.</strong> FASTWMS предоставляет инструменты управления складскими операциями.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>7.2.</strong> FASTWMS не является:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-[15px] sm:text-[16px] text-gray-600">складским оператором</li>
                <li className="text-[15px] sm:text-[16px] text-gray-600">перевозчиком</li>
                <li className="text-[15px] sm:text-[16px] text-gray-600">экспедитором</li>
                <li className="text-[15px] sm:text-[16px] text-gray-600">фулфилмент-компанией</li>
              </ul>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>7.3.</strong> Все физические операции с товаром выполняются пользователем или привлеченными им третьими лицами.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>7.4.</strong> FASTWMS не несет ответственности за действия складов, фулфилментов или подрядчиков.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>7.5.</strong> FASTWMS не осуществляет физическое хранение, перевозку или обработку товаров.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>7.6.</strong> Система предназначена исключительно для цифрового учета операций с товарами и управления складскими процессами.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>7.7.</strong> FASTWMS не является участником оборота товаров и не несет ответственности за утрату, повреждение, недостачу или порчу товаров, находящихся на складах пользователя либо у третьих лиц.
              </p>
            </div>
          </section>

          {/* 8. Интеграции с маркетплейсами */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              8. Интеграции с маркетплейсами
            </h2>
            
            <div className="space-y-4">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>8.1.</strong> FASTWMS может интегрироваться с маркетплейсами через API.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>8.2.</strong> Работа интеграций зависит от сторонних сервисов.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>8.3.</strong> FASTWMS не несет ответственности за сбои API маркетплейсов.
              </p>
            </div>
          </section>

          {/* 9. Честный знак и коды маркировки */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              9. Честный знак и коды маркировки
            </h2>
            
            <div className="space-y-4">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>9.1.</strong> FASTWMS не является оператором системы маркировки "Честный Знак".
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>9.2.</strong> FASTWMS не выпускает и не переоформляет коды маркировки.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>9.3.</strong> Система выступает исключительно как технический инструмент хранения и учета кодов.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>9.4.</strong> Ответственность за корректность использования кодов лежит на пользователе.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>9.5.</strong> FASTWMS предоставляет техническую возможность хранения и учета кодов маркировки (КИЗ) внутри системы, однако такое хранение не является официальным архивом или единственным источником хранения кодов маркировки.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>9.6.</strong> Лицензиат обязан самостоятельно обеспечивать резервное хранение кодов маркировки, полученных в системе «Честный Знак», а также иных данных, имеющих юридическое значение.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>9.7.</strong> FASTWMS не несет ответственности за утрату кодов маркировки или связанных данных в случае технических сбоев, действий пользователя, сторонних сервисов или иных обстоятельств, не зависящих от Лицензиара.
              </p>
            </div>
          </section>

          {/* 10. Маркировка и печать */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              10. Маркировка и печать
            </h2>
            
            <div className="space-y-4">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>10.1.</strong> FASTWMS может предоставлять инструменты печати штрихкодов и этикеток.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>10.2.</strong> Печать осуществляется на основании данных пользователя.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>10.3.</strong> FASTWMS не несет ответственности за ошибки печати.
              </p>
            </div>
          </section>

          {/* 11. Работа с УПД */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              11. Работа с УПД
            </h2>
            
            <div className="space-y-4">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>11.1.</strong> FASTWMS предоставляет инструменты учета УПД.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>11.2.</strong> FASTWMS не является оператором ЭДО.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>11.3.</strong> Система не подписывает документы электронной подписью.
              </p>
            </div>
          </section>

          {/* 12. Репрайсер */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              12. Репрайсер
            </h2>
            
            <div className="space-y-4">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>12.1.</strong> Репрайсер является инструментом автоматизации изменения цен.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>12.2.</strong> Настройки репрайсера задаются пользователем.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>12.3.</strong> FASTWMS не несет ответственности за финансовые результаты применения репрайсера.
              </p>
            </div>
          </section>

          {/* 13. Аналитика */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              13. Аналитика
            </h2>
            
            <div className="space-y-4">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>13.1.</strong> Аналитические данные предоставляются в информационных целях.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>13.2.</strong> FASTWMS не гарантирует абсолютную точность аналитических данных.
              </p>
            </div>
          </section>

          {/* 14. Ограничение ответственности */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              14. Ограничение ответственности
            </h2>
            
            <div className="space-y-4">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>14.1.</strong> FASTWMS не несет ответственности за:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-[15px] sm:text-[16px] text-gray-600">штрафы</li>
                <li className="text-[15px] sm:text-[16px] text-gray-600">блокировки поставок</li>
                <li className="text-[15px] sm:text-[16px] text-gray-600">обезличивание товаров</li>
                <li className="text-[15px] sm:text-[16px] text-gray-600">ошибки пользователей</li>
              </ul>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>14.2.</strong> Максимальная ответственность FASTWMS ограничивается стоимостью одного месяца тарифа.
              </p>
            </div>
          </section>

          {/* 15. Доступность системы */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              15. Доступность системы
            </h2>
            
            <div className="space-y-4">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>15.1.</strong> FASTWMS не гарантирует бесперебойную работу системы.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>15.2.</strong> Лицензиар вправе проводить технические работы, обновления и обслуживание системы FASTWMS.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>15.3.</strong> При плановых технических работах Лицензиар по возможности уведомляет пользователей заранее посредством электронной почты, интерфейса системы либо иных доступных каналов связи.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>15.4.</strong> В случае аварийных или внеплановых работ система может быть временно недоступна без предварительного уведомления.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>15.5.</strong> Лицензиар вправе изменять функциональность системы FASTWMS, добавлять новые функции, ограничивать или прекращать поддержку отдельных модулей, если это необходимо для развития сервиса, обеспечения безопасности или соответствия законодательству.
              </p>
              
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                <strong>15.6.</strong> Лицензиар по возможности информирует пользователей о существенных изменениях функциональности через интерфейс системы, электронную почту или официальный сайт.
              </p>
            </div>
          </section>

          {/* 16. Блокировка аккаунта */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              16. Блокировка аккаунта
            </h2>
            
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed mb-3">
              FASTWMS вправе ограничить доступ в случае:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-[15px] sm:text-[16px] text-gray-600">нарушения условий оферты</li>
              <li className="text-[15px] sm:text-[16px] text-gray-600">неоплаты</li>
              <li className="text-[15px] sm:text-[16px] text-gray-600">подозрительной активности</li>
            </ul>
          </section>

          {/* 17. Персональные данные */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              17. Персональные данные
            </h2>
            
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
              Обработка персональных данных осуществляется в соответствии с Политикой конфиденциальности:{' '}
              <a href="https://fastwms.ru/privacy" className="text-cyan-600 hover:text-cyan-700 underline">
                https://fastwms.ru/privacy
              </a>
            </p>
          </section>

          {/* 18. Форс-мажор */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              18. Форс‑мажор
            </h2>
            
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
              Стороны освобождаются от ответственности при обстоятельствах непреодолимой силы.
            </p>
          </section>

          {/* 19. Применимое право */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              19. Применимое право
            </h2>
            
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed mb-4">
              Настоящий договор регулируется законодательством Российской Федерации.
            </p>
            
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
              <strong>19.1. Изменение оферты</strong><br />
              Лицензиар вправе изменять настоящую оферту. Актуальная редакция оферты всегда публикуется по адресу:{' '}
              <a href="https://app.fastwms.ru/offer" className="text-cyan-600 hover:text-cyan-700 underline">
                https://app.fastwms.ru/offer
              </a>
            </p>
          </section>

          {/* 20. Контакты */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              20. Контакты
            </h2>
            
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
              Email для юридически значимых сообщений, запросов по оферте и персональным данным:{' '}
              <a href="mailto:legal@fastwms.ru" className="text-cyan-600 hover:text-cyan-700 underline">
                legal@fastwms.ru
              </a>
            </p>
            
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed mt-3">
              Telegram: @FASTWMS_Bot
            </p>
          </section>

          {/* 21. Реквизиты */}
          <section className="mb-12">
            <h2 className="text-[24px] sm:text-[28px] font-semibold text-gray-900 mb-6">
              21. Реквизиты
            </h2>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-[15px] sm:text-[16px] text-gray-900 font-semibold mb-3">
                ИП Сулейманов Нариман Умарович
              </p>
              
              <div className="space-y-2">
                <p className="text-[14px] sm:text-[15px] text-gray-600">
                  <strong>ИНН:</strong> 507805575784
                </p>
                
                <p className="text-[14px] sm:text-[15px] text-gray-600">
                  <strong>ОГРНИП:</strong> 317910500000038
                </p>
                
                <p className="text-[14px] sm:text-[15px] text-gray-600">
                  <strong>Адрес:</strong> Республика Калмыкия, г. Лагань
                </p>
                
                <p className="text-[14px] sm:text-[15px] text-gray-600">
                  <strong>Контактный email:</strong>{' '}
                  <a href="mailto:legal@fastwms.ru" className="text-cyan-600 hover:text-cyan-700 underline">
                    legal@fastwms.ru
                  </a>
                </p>
                
                <p className="text-[14px] sm:text-[15px] text-gray-600">
                  <strong>Сайт:</strong>{' '}
                  <a href="https://fastwms.ru" className="text-cyan-600 hover:text-cyan-700 underline" target="_blank" rel="noopener noreferrer">
                    https://fastwms.ru
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Заключительное соглашение */}
          <div className="mt-12 p-6 bg-cyan-50 border-2 border-cyan-200 rounded-lg">
            <p className="text-[15px] sm:text-[16px] text-gray-900 leading-relaxed flex items-start">
              <span className="text-cyan-600 mr-2 text-xl flex-shrink-0">✔</span>
              <span>
                Регистрируясь в системе FASTWMS, пользователь подтверждает согласие с условиями настоящей оферты и политикой конфиденциальности.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
