import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const timelineData = [
  {
    type: 'education',
    title: 'Master of Computer Application (MCA)',
    institution: 'Rajarajeswari College of Engineering',
    location: 'Bangalore, India',
    period: 'Feb 2024 - Dec 2025',
    icon: <GraduationCap className="text-primary" size={18} />,
    description: 'Completed postgraduate computer application studies with intensive coursework in advanced database systems, computer networks, MERN stack architecture, and machine learning.',
    highlights: ['Achieved an outstanding CGPA of 8.72 / 10', 'Focus on web technologies, relational/non-relational databases, and software engineering principles']
  },
  {
    type: 'experience',
    title: 'Full Stack Web Development Intern',
    institution: 'Prinston Smart Engineers',
    location: 'Bangalore, India',
    period: '2024',
    icon: <Briefcase className="text-secondary" size={18} />,
    description: 'Completed a practical full-stack internship focusing on front-to-back development. Gained hands-on exposure to full-stack architectures and MERN technologies.',
    highlights: [
      'Developed and tested web applications using HTML, CSS, and the MERN stack',
      'Improved functionality, design systems, and general user experience across modules'
    ]
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Application (BCA)',
    institution: 'LB and SBS College',
    location: 'Sagara, Karnataka',
    period: 'Jan 2021 - Dec 2023',
    icon: <GraduationCap className="text-accent" size={18} />,
    description: 'Completed undergraduate computer application studies building core concepts in logic design, C/C++ development, Java systems, and relational databases.',
    highlights: ['Graduated with a strong cumulative score of 76.61%', 'Designed regional project databases using SQL and developed console application projects']
  },
  {
    type: 'education',
    title: 'Pre-University Course (PUC)',
    institution: 'GOVT PU College Shirvanthe',
    location: 'Shirvanthe, India',
    period: '2018 - 2020',
    icon: <GraduationCap className="text-primary" size={18} />,
    description: 'Completed secondary pre-university education focusing on Physics, Chemistry, Mathematics, and Computer Science (PCMC).',
    highlights: ['Graduated with a score of 64.16%']
  },
  {
    type: 'education',
    title: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'GOVT High School Shirvanthe',
    location: 'Shirvanthe, India',
    period: '2017 - 2018',
    icon: <GraduationCap className="text-secondary" size={18} />,
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
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-text-muted"
          >
            My academic credentials, independent research accomplishments, and project timeline.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8">
          
          {/* Vertical progress line */}
          <div className="absolute left-[17px] sm:left-[21px] top-1 bottom-1 w-0.5 bg-card-border" />
          
          {/* Animated scrolling highlight line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: '-150px' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-[17px] sm:left-[21px] top-1 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent origin-top"
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
                  className="absolute -left-[28px] sm:-left-[32px] top-1.5 w-9 h-9 sm:w-10 sm:h-10 rounded-full glassmorphism flex items-center justify-center border-card-border bg-card-base shadow-sm group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300 z-10"
                >
                  {item.icon}
                </motion.div>

                {/* Timeline content card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="glassmorphism p-6 rounded-2xl border-card-border hover:border-primary/20 transition-all duration-300 text-left shadow-sm ml-4"
                >
                  {/* Meta Details */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {item.type}
                    </span>
                    
                    <div className="flex items-center gap-3 text-xs text-text-muted font-mono font-medium">
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
                  <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <h4 className="text-sm font-semibold font-display text-text-muted mb-4">
                    {item.institution}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 font-mono text-xs text-foreground/80 border-t border-card-border/50 pt-3.5">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-primary font-bold">»</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
