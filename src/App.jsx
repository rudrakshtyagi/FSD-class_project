import './App.css'

import Navbar from './Navbar';
import About from './About';
import Services from './Services';
import Tours from './Tours';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">CONTINUE EXPLORING</h1>
            <p className="hero-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo debitis est autem dicta.
            </p>
            <button className="hero-btn">EXPLORE TOURS</button>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App