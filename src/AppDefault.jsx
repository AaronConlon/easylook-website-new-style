import './App.css';
import HeaderDefault from './components/Header/HeaderDefault';
import FooterDefault from './components/Footer/FooterDefault';
import HeroCarouselDefault from './components/HeroCarousel/HeroCarouselDefault';
import DidYouKnow from './components/DidYouKnow/DidYouKnow';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Encyclopedia from './components/Encyclopedia/Encyclopedia';
import UserStories from './components/UserStories/UserStories';
import Partnership from './components/Partnership/Partnership';
import AboutUs from './components/AboutUs/AboutUs';
import ThemeSwitcher from './components/Shared/ThemeSwitcher';
import BackToTop from './components/Shared/BackToTop';

const AppDefault = () => {
  return (
    <div className="app app-default">
      <HeaderDefault />
      <main className="main-content">
        <HeroCarouselDefault />
        <DidYouKnow />
        <ProductShowcase />
        <Encyclopedia />
        {/* <UserStories /> */}
        <Partnership />
        <AboutUs />
      </main>
      <FooterDefault />
      <ThemeSwitcher />
      <BackToTop theme="default" />
    </div>
  );
};

export default AppDefault;
