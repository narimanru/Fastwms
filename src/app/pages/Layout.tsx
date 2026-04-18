import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { YandexMetrika } from '../components/YandexMetrika';
import { SEOContent } from '../components/SEOContent';

export function Layout() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO-контент для поисковых систем */}
      <SEOContent />

      {/* Яндекс.Метрика */}
      <YandexMetrika counterId="107067448" />

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}