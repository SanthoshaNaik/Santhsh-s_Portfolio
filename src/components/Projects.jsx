import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const categories = ['All', 'AI & ML', 'MERN', 'Web'];

const projectsData = [
  {
    id: 1,
    title: 'Online Grocery Store',
    category: 'MERN',
    description: 'A full-stack e-commerce platform enabling users to browse, search, and purchase groceries online, with end-to-end functionality from cart to checkout. Includes API endpoints for product catalogues, cart, and order management, deployed on Vercel with MongoDB Atlas.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'MERN Stack'],
    github: 'https://github.com/SanthoshaNaik/Online-Grocery-Shop.git',
    demo: 'https://online-grocery-shop-mu.vercel.app/',
    accentColor: 'from-gray-600/20 to-gray-800/20',
    borderColor: 'group-hover:border-gray-500/50'
  },
  {
    id: 2,
    title: 'Gait Anomaly Prediction using CNN',
    category: 'AI & ML',
    description: 'A video/image-based gait analysis system using CNNs to classify abnormal walking patterns, achieving 96% accuracy on the test set. Trained on the CASIA-B dataset across 4 gait pattern classes and deployed on Hugging Face Spaces.',
    technologies: ['Python', 'CNN Algorithm', 'OpenCV', 'Keras / TensorFlow', 'Computer Vision'],
    github: 'https://github.com/SanthoshaNaik/Gait-Anomaly-Prediction-Using-CNN-algorithm.git',
    demo: 'https://huggingface.co/spaces/SanthoshhNaik/Gait-Anomaly-Prediction-Using-CNN-algorithm',
    accentColor: 'from-gray-400/20 to-gray-600/20',
    borderColor: 'group-hover:border-gray-500/50'
  },
  {
    id: 3,
    title: 'Tech World',
    category: 'Web',
    description: 'A content-sharing platform built with the MERN stack where admins publish technology articles and users read, explore, and engage via an integrated contact and feedback section.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/SanthoshaNaik/TechWorld.git',
    demo: 'https://tech-world-lyart.vercel.app/',
    accentColor: 'from-gray-500/20 to-gray-700/20',
    borderColor: 'group-hover:border-gray-500/50'
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(proj => proj.category === activeCategory);

  // 3D Tilt handlers
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Cap rotation angle
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
            Featured Projects
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
            A compilation of full-stack web applications, MERN e-commerce platforms, and predictive computer vision networks.
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
                  layoutId="activeProjCategoryBg"
                  className="absolute inset-0 bg-neutral-950 dark:bg-white rounded-xl -z-10 shadow-md"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`glassmorphism rounded-3xl border border-card-border p-6 flex flex-col justify-between group transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5 cursor-grab active:cursor-grabbing`}
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.1s ease-out, border-color 0.3s ease',
                }}
              >
                {/* Tech Layer */}
                <div style={{ transform: 'translateZ(20px)' }}>
                  {/* Decorative Gradient Header */}
                  <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${project.accentColor} rounded-t-3xl`} />
                  
                  {/* Title & Category */}
                  <div className="flex items-center justify-between mb-3 mt-2">
                    <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-300 dark:border-neutral-700">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-foreground group-hover:text-neutral-700 dark:group-hover:text-white transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-text-muted leading-relaxed font-normal mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Footer details & CTAs */}
                <div className="mt-6" style={{ transform: 'translateZ(30px)' }}>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-[9px] font-mono font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-800 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex items-center justify-between border-t border-card-border pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-bold text-neutral-950 dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors group/link cursor-pointer"
                      >
                        <span>Visit Site</span>
                        <ExternalLink size={14} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    )}
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
