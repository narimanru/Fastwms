import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { YandexMetrika } from '../components/YandexMetrika';

export function Layout() {
  return (
    <div className="min-h-screen bg-white">
      {/* Яндекс.Метрика */
      
      }
      <YandexMetrika counterId="107067448" />
      
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}