import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border py-12 relative overflow-hidden bg-black/5 dark:bg-black/25">
      <div className="w-[92%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and info */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-display font-black text-lg tracking-wide text-foreground">
            SANTHOSHA NARAYANA NAIK
          </p>
          <p className="text-xs text-text-muted font-medium">
            Software Developer • Bengaluru, India
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/SanthoshaNaik"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-card-base border border-card-border hover:border-neutral-400 text-text-muted hover:text-neutral-950 dark:hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm cursor-pointer"
            aria-label="GitHub Link"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/santhosha-narayana-naik-29317930b"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-card-base border border-card-border hover:border-neutral-400 text-text-muted hover:text-neutral-950 dark:hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm cursor-pointer"
            aria-label="LinkedIn Link"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:santhoshanaik02@gmail.com"
            className="w-10 h-10 rounded-xl bg-card-base border border-card-border hover:border-neutral-400 text-text-muted hover:text-neutral-950 dark:hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm cursor-pointer"
            aria-label="Email Link"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Copyright and back-to-top */}
        <div className="flex flex-col items-center md:items-end gap-2 font-mono text-[10px] text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-4">
            <span>© {currentYear} Santhosha Narayana Naik. All rights reserved.</span>
            
            <button
              onClick={handleScrollTop}
              className="p-2 rounded-lg bg-card-base border border-card-border text-foreground hover:text-neutral-950 dark:hover:text-white hover:border-neutral-400 transition-all shadow-sm cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
