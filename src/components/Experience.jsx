import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const timelineData = [
  {
    type: 'education',
    title: 'Master of Computer Application (MCA)',
    institution: 'Rajarajeswari College of Engineering',
    location: 'Bangalore, India',
    period: 'Feb 2024 - Dec 2025',
    icon: <GraduationCap className="text-gray-900 dark:text-gray-200" size={18} />,
    description: 'Completed postgraduate computer application studies with intensive coursework in advanced database systems, computer networks, MERN stack architecture, and machine learning.',
    highlights: ['Achieved an outstanding CGPA of 8.73 / 10', 'Focus on web technologies, relational/non-relational databases, and software engineering principles']
  },
  {
    type: 'experience',
    title: 'Full Stack Web Development Intern',
    institution: 'Prinston Smart Engineers',
    location: 'Bangalore, India',
    period: 'Nov 2024 – Jan 2025',
    icon: <Briefcase className="text-gray-900 dark:text-gray-200" size={18} />,
    description: 'Completed a practical full-stack internship focusing on front-to-back development. Gained hands-on exposure to full-stack architectures and MERN technologies.',
    link: 'https://drive.google.com/file/d/1tYIGgfqBKsdnkqrYVkMLZn9mm_eJdsaQ/view?usp=drive_link',
    highlights: [
      'Built and tested a full-stack web application using HTML, CSS, and the MERN stack, to reduce the backend loading time and improved the accuracy by 60%',
      'Worked in an Agile environment to deliver the requirement features within the internship period',
      'Debugged and resolved 50% functional issues pre-release, improving application stability and UX'
    ]
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Application (BCA)',
    institution: 'LB and SBS College',
    location: 'Sagara, Karnataka',
    period: 'Jan 2021 - Dec 2023',
    icon: <GraduationCap className="text-gray-900 dark:text-gray-200" size={18} />,
    description: 'Completed undergraduate computer application studies building core concepts in logic design, C/C++ development, Java systems, and relational databases.',
    highlights: ['Graduated with a strong cumulative score of 76.61%', 'Designed regional project databases using SQL and developed console application projects']
  },
  {
    type: 'education',
    title: 'Pre-University Course (PUC)',
    institution: 'GOVT PU College Shirvanthe',
    location: 'Shirvanthe, India',
    period: '2018 - 2020',
    icon: <GraduationCap className="text-gray-900 dark:text-gray-200" size={18} />,
    description: 'Completed secondary pre-university education focusing on Physics, Chemistry, Mathematics, and Computer Science (PCMC).',
    highlights: ['Graduated with a score of 64.16%']
  },
  {
    type: 'education',
    title: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'GOVT High School Shirvanthe',
    location: 'Shirvanthe, India',
    period: '2017 - 2018',
    icon: <GraduationCap className="text-gray-900 dark:text-gray-200" size={18} />,
    description: 'Completed basic secondary school education under state board regulations.',
    highlights: ['Graduated with a score of 70.40%']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="w-[92%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-black font-display text-foreground tracking-tight"
          >
            Education & Journey
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
            My academic credentials, independent research accomplishments, and project timeline.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8">
          
          {/* Vertical progress line */}
          <div className="absolute left-[17px] sm:left-[21px] top-1 bottom-1 w-0.5 bg-neutral-200 dark:bg-neutral-800" />
          
          {/* Animated scrolling highlight line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: '-150px' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-[17px] sm:left-[21px] top-1 w-0.5 bg-gradient-to-b from-neutral-950 to-neutral-700 dark:from-white dark:to-neutral-600 origin-top"
          />

          {/* Timeline Cards */}
          <div className="space-y-12">
            {timelineData.map((item, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline node icon */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 200, delay: idx * 0.15 }}
                  className="absolute -left-[28px] sm:-left-[32px] top-1.5 w-9 h-9 sm:w-10 sm:h-10 rounded-full glassmorphism flex items-center justify-center border-card-border bg-card-base shadow-sm group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-all duration-300 z-10 text-neutral-900 dark:text-neutral-100"
                >
                  {item.icon}
                </motion.div>

                {/* Timeline content card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="glassmorphism p-6 rounded-2xl border-card-border hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 text-left shadow-sm ml-4"
                >
                  {/* Meta Details */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold font-mono text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 uppercase tracking-wider">
                      {item.type}
                    </span>
                    
                    <div className="flex items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400 font-mono font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-xl font-bold font-display text-foreground group-hover:text-neutral-700 dark:group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <h4 className="text-sm font-semibold font-display text-text-muted mb-4">
                    {item.institution}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed font-normal mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 font-mono text-xs text-neutral-800 dark:text-neutral-200 border-t border-card-border/50 pt-3.5">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-neutral-900 dark:text-neutral-300 font-bold">»</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {item.link && (
                    <div className="mt-4 flex justify-start">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-card-border bg-card-base hover:bg-neutral-100 dark:hover:bg-neutral-900 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        <span>Verify Internship</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </motion.div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
