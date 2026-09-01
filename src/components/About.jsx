import { motion } from 'framer-motion';
import { Award, BookOpen, Code2, HeartHandshake } from 'lucide-react';

const cardData = [
  {
    icon: <Code2 className="text-gray-900 dark:text-gray-200" size={24} />,
    title: 'Full Stack Development',
    description: 'Designing and building scalable web applications using React.js, Node.js, and modern databases.',
  },
  {
    icon: <Award className="text-gray-900 dark:text-gray-200" size={24} />,
    title: 'Software Engineering',
    description: 'Implementing robust, clean, and maintainable systems utilizing Java and object-oriented principles.',
  },
  {
    icon: <BookOpen className="text-gray-900 dark:text-gray-200" size={24} />,
    title: 'Machine Learning',
    description: 'Developing video and image analysis classifiers, including Convolutional Neural Networks (CNNs).',
  },
];

const expertiseTags = [
  'Java',
  'MERN Stack',
  'React.js',
  'Node.js & Express.js',
  'SQL / MySQL',
  'MongoDB',
  'Python',
  'CNN & Computer Vision',
  'Data Structures & Algorithms',
  'REST APIs',
  'Git & GitHub',
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
            About Me
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
            A glimpse into my background, core values, and areas of expertise.
          </motion.p>
        </div>

        {/* Section Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Glowing Profile Image */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative group"
            >
              {/* Outer Glowing Border */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-neutral-400 via-neutral-300 to-neutral-500 dark:from-white/30 dark:via-neutral-400/50 dark:to-white/30 opacity-60 blur group-hover:opacity-90 group-hover:blur-md transition duration-700 animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-square w-64 h-64 sm:w-76 sm:h-76 bg-neutral-900 border border-card-border shadow-lg">
                <img
                  src="/profile.png"
                  alt="Santhosha Narayana Naik profile portrait"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Tech HUD Lines Overlay */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none mix-blend-overlay" />
              </div>
            </motion.div>
          </div>

          {/* Right: Text and Biography */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold font-display text-foreground"
            >
              Eager to Learn, Grow, and Solve Real-World Problems
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base text-text-muted leading-relaxed font-normal"
            >
              I am a motivated software enthusiast and MCA graduate residing in Bangalore, Karnataka. With a solid foundation in programming languages like Java and SQL, and a growing interest in full-stack web development (MERN) and Machine Learning, I am passionate about developing systems that address actual issues and improve user experience.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-text-muted leading-relaxed font-normal"
            >
              Whether it is designing an online grocery store using the MERN stack or creating a Convolutional Neural Network (CNN) to predict gait anomalies, I focus on adapting quickly to new technologies and contributing to meaningful, collaborative projects.
            </motion.p>

            {/* Core Expertise Tags */}
            <div className="space-y-3">
              <p className="text-sm font-bold font-mono text-neutral-900 dark:text-neutral-200 uppercase tracking-widest">
                Key Fields:
              </p>
              <div className="flex flex-wrap gap-2">
                {expertiseTags.map((tag, idx) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="px-3 py-1.5 rounded-lg border border-card-border bg-card-base text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:border-neutral-500 transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid (Bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {cardData.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glassmorphism p-6 rounded-2xl text-left border-card-border hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 group shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-card-base flex items-center justify-center border border-card-border mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300 text-neutral-900 dark:text-neutral-100">
                {card.icon}
              </div>
              <h4 className="text-lg font-bold font-display text-foreground mb-2 group-hover:text-neutral-700 dark:group-hover:text-white transition-colors">
                {card.title}
              </h4>
              <p className="text-sm text-text-muted leading-relaxed font-normal">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
