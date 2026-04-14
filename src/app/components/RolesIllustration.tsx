import React from 'react';

export function RolesIllustration() {
  const permissions = [
    { action: 'Загружает КИЗы', seller: true, fulfillment: false },
    { action: 'Печатает этикетки', seller: false, fulfillment: true },
    { action: 'Восстановить код при ошибке', seller: true, fulfillment: false },
    { action: 'Контролирует спорные ситуации', seller: true, fulfillment: false },
    { action: 'Видит все действия', seller: true, fulfillment: true },
  ];

  return (
    <div className="w-full bg-gray-50 rounded-lg border border-gray-200 p-4">
      {/* Header */}
      <div className="mb-3 text-center">
        <h4 className="text-base font-semibold text-gray-900 mb-0.5">
          Матрица разрешений
        </h4>
        <p className="text-xs text-gray-600">
          Чёткое разделение прав доступа между ролями
        </p>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        {/* Table Header */}
        <div className="grid grid-cols-[1fr_auto_auto] gap-px bg-gray-200">
          <div className="bg-white px-3 py-2">
            <span className="text-xs font-semibold text-gray-900">Действие</span>
          </div>
          <div className="bg-white px-3 py-2 text-center w-24">
            <span className="text-xs font-semibold text-gray-900">Селлер</span>
          </div>
          <div className="bg-white px-3 py-2 text-center w-28">
            <span className="text-xs font-semibold text-gray-900">Фулфилмент</span>
          </div>
        </div>

        {/* Table Rows */}
        <div className="grid grid-cols-[1fr_auto_auto] gap-px bg-gray-200">
          {permissions.map((perm, index) => (
            <div key={index} className="contents">
              {/* Action */}
              <div className="bg-white px-3 py-2">
                <span className="text-sm text-gray-700">{perm.action}</span>
              </div>
              
              {/* Seller */}
              <div className="bg-white px-3 py-2 flex items-center justify-center w-24">
                {perm.seller ? (
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              
              {/* Fulfillment */}
              <div className="bg-white px-3 py-2 flex items-center justify-center w-28">
                {perm.fulfillment ? (
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-3 flex items-center justify-center gap-3 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>Разрешено</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>Запрещено</span>
        </div>
      </div>
    </div>
  );
}