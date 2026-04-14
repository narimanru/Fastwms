import { useEffect, useRef } from 'react';

export function VideoDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    let timeoutId: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Видео в зоне видимости - запускаем воспроизведение через 5 секунд
            timeoutId = setTimeout(() => {
              videoElement.play().catch((error) => {
                console.log('Autoplay prevented:', error);
              });
            }, 5000);
          } else {
            // Видео вне зоны видимости - отменяем таймер и ставим на паузу
            if (timeoutId) {
              clearTimeout(timeoutId);
              timeoutId = null;
            }
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.5, // Срабатывает когда 50% видео видно
      }
    );

    observer.observe(videoElement);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight px-2 sm:px-0 text-[28px]">Загрузка этикеток ЧЗ из PDF/CSV — за 30 секунд</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 text-[16px]">FASTWMS проверяет файл и привязывает этикетки к товару и размеру. Если всё ок — этикетки сразу доступны для печати. </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-50">
            <video 
              ref={videoRef}
              className="w-full h-auto"
              controls
              playsInline
              muted
              loop
              preload="metadata"
            >
              <source 
                src="https://rczoznmnscofiwhgobmf.supabase.co/storage/v1/object/public/make-5472bb9f-videos/chz.mp4" 
                type="video/mp4" 
              />
              Ваш браузер не поддерживает воспроизведение видео.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}