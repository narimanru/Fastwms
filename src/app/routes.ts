import { createBrowserRouter } from 'react-router';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { AboutProduct } from './pages/AboutProduct';
import { Marking } from './pages/Marking';
import { Offer } from './pages/Offer';
import { Privacy } from './pages/Privacy';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'about-product',
        Component: AboutProduct,
      },
      {
        path: 'marking',
        Component: Marking,
      },
      {
        path: 'offer',
        Component: Offer,
      },
      {
        path: 'privacy',
        Component: Privacy,
      },
    ],
  },
]);
