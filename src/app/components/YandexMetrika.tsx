import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface YandexMetrikaProps {
  counterId: string;
}

/**
 * Компонент Яндекс.Метрики для React приложения
 * 
 * Использование:
 * <YandexMetrika counterId="YOUR_COUNTER_ID" />
 * 
 * Замените YOUR_COUNTER_ID на ваш ID счётчика из Яндекс.Метрики
 */
export function YandexMetrika({ counterId }: YandexMetrikaProps) {
  const location = useLocation();

  // Инициализация счётчика при первой загрузке
  useEffect(() => {
    // Проверяем что counterId указан
    if (!counterId || counterId === 'YOUR_COUNTER_ID') {
      console.warn('⚠️ Яндекс.Метрика: не указан counterId. Укажите реальный ID счётчика.');
      return;
    }

    // Добавляем скрипт Яндекс.Метрики
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) { return; }
        }
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(${counterId}, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        trackHash: true
      });
    `;

    document.head.appendChild(script);

    // Добавляем noscript для пользователей без JS
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <div>
        <img src="https://mc.yandex.ru/watch/${counterId}" style="position:absolute; left:-9999px;" alt="" />
      </div>
    `;
    document.body.appendChild(noscript);

    console.log('✅ Яндекс.Метрика инициализирована. ID:', counterId);

    // Cleanup при размонтировании (опционально)
    return () => {
      // Скрипт остаётся, так как Метрика должна работать постоянно
    };
  }, [counterId]);

  // Отслеживание переходов между страницами (React Router)
  useEffect(() => {
    if (!counterId || counterId === 'YOUR_COUNTER_ID') return;

    // Проверяем что ym загружен
    if (typeof window !== 'undefined' && (window as any).ym) {
      // Отправляем хит при изменении URL
      (window as any).ym(counterId, 'hit', location.pathname + location.search);
      console.log('📊 Яндекс.Метрика: переход на', location.pathname);
    }
  }, [location, counterId]);

  return null; // Компонент не рендерит ничего видимого
}
