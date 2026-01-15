import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BackToTop from './components/Shared/BackToTop';
import PageLoader from './components/Shared/PageLoader';

import {
  createHashRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';

const About = lazy(() => import('./components/About/About'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));
const Home = lazy(() => import('./pages/Home/Home'));
const Cooperation = lazy(() => import('./pages/Cooperation/Cooperation'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Encyclopedia = lazy(() => import('./pages/Encyclopedia/Encyclopedia'));
const VisionTrainingKit = lazy(
  () => import('./pages/ProductDetail/VisionTrainingKit'),
);

// Layout component to wrap pages
const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cooperation',
        element: <Cooperation />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'encyclopedia',
        element: <Encyclopedia />,
      },
      {
        path: 'product-1',
        element: <VisionTrainingKit />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;
