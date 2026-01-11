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
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import About from './components/About/About';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
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

import { HelmetProvider } from 'react-helmet-async';

// ... existing imports ...

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* Handle legacy/other paths if needed, but for now exact match */}
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
