import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/NavBar/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Work from './pages/Work';
import Teaching from './pages/Teaching';
import Footer from './components/Footer';
import Spinner from './hooks/Spinner';

import './styles/index.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const renderMainContent = () => (
    <div className="relative">
      <main className="flex-grow container mx-auto px-2 sm:px-4 py-4 sm:py-8 space-y-8 sm:space-y-12">
        <div id="home" className="animate-slide-up">
          <Home />
        </div>
        <div id="about" className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <About />
        </div>
        <div id="education" className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Education />
        </div>
        <div id="work" className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Work />
        </div>
        <div id="projects" className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-terminal-bg to-terminal-surface text-terminal-text relative">
      <div className="animated-bg" />
      {loading ? (
        <Spinner />
      ) : (
        <div className="animate-fade-in relative z-10">
          <Navigation />
          <Routes>
            <Route path="/" element={renderMainContent()} />
            <Route path="/teaching" element={<Teaching />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
