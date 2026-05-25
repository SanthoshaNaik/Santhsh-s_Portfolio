import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-primary-glow blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-glow blur-3xl opacity-50 -z-10" />

      <div className="w-[92%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-black font-display text-foreground tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-text-muted"
          >
            Have a project in mind, need software infrastructure, or just want to connect?
          </motion.p>
        </div>

        {/* Centered Direct Info Card */}
        <div className="flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full flex flex-col justify-between glassmorphism p-8 rounded-3xl border-card-border"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-foreground text-left">
                Contact Information
              </h3>
              <p className="text-sm text-text-muted text-left leading-relaxed">
                Feel free to reach out or ping me directly across my socials. I will get back to you as soon as possible.
              </p>

              {/* Direct Info List */}
              <div className="space-y-6 pt-4">
                <a
                  href="mailto:santhoshanaik02@gmail.com"
                  className="flex items-center gap-4 text-text-muted hover:text-primary transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-card-base border border-card-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                    <Mail size={18} />
                  </div>
                  <div className="text-left font-mono text-xs font-semibold">
                    <p className="text-gray-500 font-bold uppercase tracking-wider text-[10px] leading-none mb-1">Email</p>
                    <p className="text-foreground">santhoshanaik02@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/santhosha-narayana-naik-29317930b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-text-muted hover:text-primary transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-card-base border border-card-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                    <Linkedin size={18} />
                  </div>
                  <div className="text-left font-mono text-xs font-semibold">
                    <p className="text-gray-500 font-bold uppercase tracking-wider text-[10px] leading-none mb-1">LinkedIn</p>
                    <p className="text-foreground">linkedin.com/in/santhosha-narayana-naik-29317930b</p>
                  </div>
                </a>

                <a
                  href="https://github.com/SanthoshaNaik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-text-muted hover:text-primary transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-card-base border border-card-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                    <Github size={18} />
                  </div>
                  <div className="text-left font-mono text-xs font-semibold">
                    <p className="text-gray-500 font-bold uppercase tracking-wider text-[10px] leading-none mb-1">GitHub</p>
                    <p className="text-foreground">github.com/SanthoshaNaik</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-text-muted group">
                  <div className="w-11 h-11 rounded-xl bg-card-base border border-card-border flex items-center justify-center text-primary">
                    <MapPin size={18} />
                  </div>
                  <div className="text-left font-mono text-xs font-semibold">
                    <p className="text-gray-500 font-bold uppercase tracking-wider text-[10px] leading-none mb-1">Location</p>
                    <p className="text-foreground">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Grid Art (Bottom) */}
            <div className="border-t border-card-border pt-8 mt-8">
              <div className="p-4 rounded-2xl bg-black/30 border border-white/5 font-mono text-[9px] text-gray-500 space-y-1">
                <p><span className="text-purple-400">import</span> socket, sys</p>
                <p><span className="text-purple-400">print</span>(<span className="text-emerald-400">"Connecting to Santhosha Narayana Naik..."</span>)</p>
                <p><span className="text-yellow-400">ping</span> -c 1 local.server.in</p>
                <p className="text-green-400">» STATUS: 200 OK [Latency: 12ms]</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
