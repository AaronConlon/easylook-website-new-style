import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <HeroCarousel />
        <div className="content">
          <h1>Rsbuild with React</h1>
          <p>Start building amazing things with Rsbuild.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
