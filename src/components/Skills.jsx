import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Brain, GitBranch, Cpu, Terminal, Layout } from 'lucide-react';

const categories = ['All', 'Languages', 'Frameworks & Libraries', 'Tools'];

const skillsData = [
  // Languages
  { name: 'Java', level: 90, category: 'Languages', icon: <Terminal size={18} className="text-blue-500" /> },
  { name: 'SQL', level: 85, category: 'Languages', icon: <Database size={18} className="text-emerald-500" /> },
  { name: 'HTML/CSS', level: 90, category: 'Languages', icon: <Layout size={18} className="text-orange-500" /> },
  { name: 'Python', level: 70, category: 'Languages', icon: <Code size={18} className="text-yellow-500" /> },

  // Frameworks & Libraries
  { name: 'React.js', level: 80, category: 'Frameworks & Libraries', icon: <Layout size={18} className="text-cyan-500" /> },
  { name: 'Node.js / Express', level: 75, category: 'Frameworks & Libraries', icon: <Terminal size={18} className="text-green-500" /> },
  { name: 'MongoDB', level: 75, category: 'Frameworks & Libraries', icon: <Database size={18} className="text-green-600" /> },

  // Tools
  { name: 'MySQL', level: 80, category: 'Tools', icon: <Database size={18} className="text-blue-600" /> },
  { name: 'Git/GitHub', level: 85, category: 'Tools', icon: <GitBranch size={18} className="text-rose-500" /> },
  { name: 'Visual Studio Code', level: 90, category: 'Tools', icon: <Code size={18} className="text-sky-500" /> },
  { name: 'Eclipse IDE', level: 80, category: 'Tools', icon: <Terminal size={18} className="text-purple-600" /> },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
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
            My Technical Stack
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
            A breakdown of my technical proficiencies and development tools.
          </motion.p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'text-white'
                  : 'text-text-muted hover:text-foreground border border-card-border bg-card-base hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glassmorphism p-6 rounded-2xl border-card-border hover:border-primary/20 transition-all duration-300 relative overflow-hidden group shadow-sm flex flex-col justify-between"
              >
                {/* Accent corner light */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 via-transparent to-transparent -z-10 group-hover:from-primary/10 transition-colors duration-500" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-card-base border border-card-border shadow-inner group-hover:scale-105 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="font-display font-bold text-lg text-foreground">
                        {skill.name}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-primary bg-primary/10 dark:bg-primary/20 px-2.5 py-1 rounded-lg">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-xs text-text-muted uppercase tracking-wider font-mono font-bold mb-5">
                    Category: {skill.category}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full">
                  <div className="w-full h-2 bg-black/5 dark:bg-white/5 border border-card-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
