import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
