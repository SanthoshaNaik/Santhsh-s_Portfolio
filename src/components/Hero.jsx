import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';

const roles = ['Software Developer', 'Full Stack Developer', 'Java Developer', 'MERN Stack Developer'];
const typingSpeed = 100;
const deletingSpeed = 60;
const pauseTime = 1500;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];

    if (!isDeleting) {
      // Typing
      timer = setTimeout(() => {
        setText(currentFullText.substring(0, text.length + 1));
      }, typingSpeed);

      if (text === currentFullText) {
        // Finished typing role
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // Deleting
      timer = setTimeout(() => {
        setText(currentFullText.substring(0, text.length - 1));
      }, deletingSpeed);

      if (text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 85;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-28 pb-20 overflow-hidden grid-bg"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-primary-glow blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-secondary-glow blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent-glow blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }} />

      <div className="w-[92%] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Hero Content */}
        <div className="space-y-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-card-border bg-card-base text-xs font-semibold uppercase tracking-wider text-primary shadow-sm"
          >
            <Sparkles size={14} className="text-secondary animate-pulse" />
            <span>Software Developer Portfolio</span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-foreground leading-[1.1]"
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-sm">
                Santhosha Narayana Naik
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-text-muted h-10 flex items-center justify-center"
            >
              <span>I build things as a&nbsp;</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-semibold typewriter-cursor border-r-2 border-transparent">
                {text}
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-text-muted max-w-2xl font-normal leading-relaxed text-center"
          >
            A motivated and curious software enthusiast with a solid foundation in development and a genuine passion for solving real-world problems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 pt-2"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary to-secondary hover:from-primary/95 hover:to-secondary/95 text-white font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="flex items-center gap-2 px-6 py-3.5 border border-card-border bg-card-base hover:bg-black/5 dark:hover:bg-white/5 text-foreground font-semibold rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
            >
              <span>Contact Me</span>
              <Mail size={18} className="text-text-muted group-hover:text-primary transition-colors" />
            </a>

            <a
              href='..\santhosh naik Jun 26 Resume.pdf'
              download
              className="flex items-center gap-2 px-6 py-3.5 border border-card-border bg-card-base hover:bg-black/5 dark:hover:bg-white/5 text-foreground font-semibold rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
            >
              <span>Resume</span>
              <Download size={18} className="text-text-muted group-hover:text-accent transition-colors" />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
