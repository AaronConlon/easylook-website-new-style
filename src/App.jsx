import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import DidYouKnow from './components/DidYouKnow/DidYouKnow';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Encyclopedia from './components/Encyclopedia/Encyclopedia';
// import UserStories from './components/UserStories/UserStories';
import Partnership from './components/Partnership/Partnership';
import AboutUs from './components/AboutUs/AboutUs';
import BackToTop from './components/Shared/BackToTop';

import {
  createHashRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';

const About = lazy(() => import('./components/About/About'));

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
        <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

const Home = () => (
  <>
    <HeroCarousel />
    <DidYouKnow />
    <ProductShowcase />
    <Encyclopedia />
    {/* <UserStories /> */}
    <Partnership />
    <AboutUs />
  </>
);

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
