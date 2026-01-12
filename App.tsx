import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { ServiceCards } from './components/ServiceCards';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full relative transition-colors duration-300 overflow-x-hidden">
      <NavBar />
      
      <main>
        <HeroSection />
        
        <div className="bg-white/40 dark:bg-black/20 backdrop-blur-sm border-t-2 border-black dark:border-white/10 pt-12 transition-colors duration-300">
          <ServiceCards />
        </div>
        
        <ProjectsSection />
        
        <div className="bg-white/30 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300">
           <SkillsSection />
        </div>

      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-white dark:bg-[#333] border-2 border-black dark:border-white/50 p-3 rounded-full hover:bg-brand-pink dark:hover:bg-brand-green transition-all duration-300 pop-shadow hover:translate-y-[-2px]"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="text-brand-dark dark:text-white" />
        </button>
      )}
    </div>
  );
};

export default App;