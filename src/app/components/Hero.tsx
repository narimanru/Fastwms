import { Check } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <h1 className="font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight text-[28px] sm:text-[36px] md:text-[40px] px-2 sm:px-0">           Система управления товаром, складом и маркировкой для маркетплейсов</h1>
          <p className="text-[17px] sm:text-[19px] md:text-xl text-gray-600 leading-relaxed px-2 sm:px-0">Управляйте товарами на маркетплейсах в одной системе.</p>
          
          {/* Features List */}
          <div className="max-w-4xl mx-auto bg-gray-100 rounded-xl p-4 sm:p-6 border border-gray-200 mt-6 sm:mt-8 relative">
            <div className="absolute -top-3 sm:-top-4 left-4 sm:left-6 -rotate-2">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-300 text-gray-900 text-[13px] sm:text-sm font-bold rounded-lg shadow-md">
                Для кого
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 font-medium text-[15px] sm:text-[16px]">Селлеру</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 font-medium text-[15px] sm:text-[16px]">Фулфилменту</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 font-medium text-[15px] sm:text-[16px]">Агентству</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-700 font-medium text-[15px] sm:text-[16px]">Менеджерам</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-5xl mx-auto">
            
          <div className="relative">
             <div className="absolute -top-2 sm:-top-3 right-3 sm:right-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-300 text-gray-900 font-bold rounded-lg shadow-md rotate-2 text-center z-10 text-[13px] sm:text-[14px]">
               Система внутри
             </div>
          
            {/* Video container */}
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-lg">
              {/* Video Element with autoplay */}
              <video 
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://rczoznmnscofiwhgobmf.supabase.co/storage/v1/object/public/make-5472bb9f-videos/hero.mp4" type="video/mp4" />
                
                {/* Fallback image if video doesn't load */}
                <img 
                  src="https://images.unsplash.com/photo-1657819547733-40124a52d37e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBtYW5hZ2VtZW50JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NzEyNjU2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="FASTWMS Dashboard Preview"
                  className="w-full h-auto"
                />
              </video>

              {/* Live indicator overlay */}
             </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
          <a 
            href="https://app.fastwms.ru" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 text-[16px] font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all shadow-sm text-center"
          >
            Начать работу
          </a>
          <a 
            href="#pricing" 
            className="w-full sm:w-auto px-6 py-3 text-[16px] font-medium text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all text-center"
          >
            Посмотреть тарифы
          </a>
        </div>
      </div>
    </section>
  );
}