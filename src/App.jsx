import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import useDarkMode from './hooks/useDarkMode';

// Layout & Graphic Components
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';

// Site Sections
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, toggleTheme] = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen text-foreground transition-colors duration-500 selection:bg-primary/20 selection:text-primary">
          {/* Top Scroll Indicator */}
          <ScrollProgress />

          {/* Cursor Radial Glow Effect */}
          <CursorGlow />

          {/* Global Floating Navbar */}
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          {/* Page Sections Layout */}
          <main className="relative z-10 w-full">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
          </main>

          {/* Footer details */}
          <Footer />
        </div>
      )}
    </>
  );
}
