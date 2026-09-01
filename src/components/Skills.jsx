import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Brain, GitBranch, Cpu, Terminal, Layout } from 'lucide-react';

const categories = ['All', 'Languages', 'Frameworks & Libraries', 'Tools'];

const skillsData = [
  // Languages
  { name: 'Java', level: 90, category: 'Languages', icon: <Terminal size={18} className="text-gray-900 dark:text-gray-200" /> },
  { name: 'Python', level: 75, category: 'Languages', icon: <Code size={18} className="text-gray-900 dark:text-gray-200" /> },
  { name: 'SQL', level: 85, category: 'Languages', icon: <Database size={18} className="text-gray-900 dark:text-gray-200" /> },
  { name: 'JavaScript', level: 85, category: 'Languages', icon: <Code size={18} className="text-gray-900 dark:text-gray-200" /> },
  { name: 'HTML/CSS', level: 90, category: 'Languages', icon: <Layout size={18} className="text-gray-900 dark:text-gray-200" /> },

  // Frameworks & Libraries
  { name: 'React.js', level: 85, category: 'Frameworks & Libraries', icon: <Layout size={18} className="text-gray-900 dark:text-gray-200" /> },
  { name: 'Node.js', level: 80, category: 'Frameworks & Libraries', icon: <Terminal size={18} className="text-gray-900 dark:text-gray-200" /> },
  { name: 'Express.js', level: 80, category: 'Frameworks & Libraries', icon: <Terminal size={18} className="text-gray-900 dark:text-gray-200" /> },
  { name: 'MERN Stack', level: 85, category: 'Frameworks & Libraries', icon: <Cpu size={18} className="text-gray-900 dark:text-gray-200" /> },
  { name: 'MongoDB', level: 80, category: 'Frameworks & Libraries', icon: <Database size={18} className="text-gray-900 dark:text-gray-200" /> },

  // Tools & Platforms
  { name: 'MySQL / Workbench', level: 85, category: 'Tools', icon: <Database size={18} className="text-gray-900 dark:text-gray-200" /> },
  { name: 'Git & GitHub', level: 85, category: 'Tools', icon: <GitBranch size={18} className="text-gray-900 dark:text-gray-200" /> },
  { name: 'VS Code', level: 90, category: 'Tools', icon: <Code size={18} className="text-gray-900 dark:text-gray-200" /> },
  { name: 'Eclipse IDE', level: 80, category: 'Tools', icon: <Terminal size={18} className="text-gray-900 dark:text-gray-200" /> },
  { name: 'Antigravity', level: 85, category: 'Tools', icon: <Cpu size={18} className="text-gray-900 dark:text-gray-200" /> },
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
            className="h-1 bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900 dark:from-white dark:via-neutral-400 dark:to-neutral-600 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-text-muted font-medium"
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
              className={`relative px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'text-white dark:text-black'
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white border border-card-border bg-card-base hover:bg-neutral-100 dark:hover:bg-neutral-900'
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-neutral-950 dark:bg-white rounded-xl -z-10 shadow-md"
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
                className="glassmorphism p-6 rounded-2xl border-card-border hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 relative overflow-hidden group shadow-sm flex flex-col justify-between"
              >
                {/* Accent corner light */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-neutral-400/10 via-transparent to-transparent -z-10 group-hover:from-neutral-400/20 transition-colors duration-500" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-card-base border border-card-border shadow-sm group-hover:scale-105 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="font-display font-bold text-lg text-foreground">
                        {skill.name}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900 px-2.5 py-1 rounded-lg border border-neutral-300 dark:border-neutral-700">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 uppercase tracking-wider font-mono font-bold mb-5">
                    Category: {skill.category}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full">
                  <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 border border-card-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-neutral-950 to-neutral-700 dark:from-white dark:to-neutral-400 rounded-full"
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
