import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel';
import DidYouKnow from './components/DidYouKnow/DidYouKnow';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Encyclopedia from './components/Encyclopedia/Encyclopedia';
import UserStories from './components/UserStories/UserStories';
import Partnership from './components/Partnership/Partnership';
import AboutUs from './components/AboutUs/AboutUs';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <HeroCarousel />
        <DidYouKnow />
        <ProductShowcase />
        <Encyclopedia />
        {/* <UserStories /> */}
        <Partnership />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
