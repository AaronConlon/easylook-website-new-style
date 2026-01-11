import './App.css';
import HeaderLaifen from './components/Header/HeaderLaifen';
import FooterLaifen from './components/Footer/FooterLaifen';
import HeroCarouselLaifen from './components/HeroCarousel/HeroCarouselLaifen';
import DidYouKnow from './components/DidYouKnow/DidYouKnow';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Encyclopedia from './components/Encyclopedia/Encyclopedia';
import UserStories from './components/UserStories/UserStories';
import Partnership from './components/Partnership/Partnership';
import AboutUs from './components/AboutUs/AboutUs';
import ThemeSwitcher from './components/Shared/ThemeSwitcher';
import BackToTop from './components/Shared/BackToTop';

const AppLaifen = () => {
  return (
    <div className="app app-laifen">
      <HeaderLaifen />
      <main className="main-content" style={{ padding: 0 }}>
        <HeroCarouselLaifen />
        <DidYouKnow theme="laifen" />
        <ProductShowcase theme="laifen" />
        <Encyclopedia theme="laifen" />
        {/* <UserStories theme="laifen" /> */}
        <Partnership theme="laifen" />
        <AboutUs theme="laifen" />
      </main>
      <FooterLaifen />
      <ThemeSwitcher />
      <BackToTop theme="laifen" />
    </div>
  );
};

export default AppLaifen;
