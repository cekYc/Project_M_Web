import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechBar from './components/TechBar';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Versions from './components/Versions';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <TechBar />
      </div>
      <Features />
      <Showcase />
      <Versions />
      <Footer />
    </>
  );
}

export default App;
