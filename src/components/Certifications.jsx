import { motion } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, Calendar } from 'lucide-react';

const certsData = [
  {
    title: 'Java-Centric Backend Development with Python Essentials',
    issuer: 'Revature Pre-Training Program',
    date: 'May 2025',
    credentialId: 'REV-JV-PY-2025',
    link: 'https://drive.google.com/file/d/1goPnoTtN-XBWBlzI9A3UrFMoqevNoTak/view?usp=drive_link',
    skills: ['Java', 'Python', 'Backend Dev', 'OOP', 'SQL']
  },
  {
    title: 'Programming in Java',
    issuer: 'NPTEL / IIT Kharagpur',
    date: 'Oct 2024',
    credentialId: 'NPTEL-JAVA-2024',
    link: 'https://drive.google.com/file/d/1m5gXhaLJDaJvE2oAq9f7vxBUzt3L6Zq6/view?usp=drive_link',
    skills: ['Java Programming', 'Algorithms', 'Data Structures', 'OOP']
  },
  {
    title: 'Java Programming',
    issuer: 'Great Learning Academy',
    date: 'July 2024',
    credentialId: 'GL-JAVA-2024',
    link: 'https://drive.google.com/file/d/1a1pzOiWWrDt2kOz4zeHhF2RlapJLOkMj/view?usp=drive_link',
    skills: ['Java Basics', 'Object-Oriented Programming', 'Control Flows']
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
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
            Certifications & Badges
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
            Verified technical credentials and professional training programs.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certsData.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glassmorphism p-6 rounded-2xl border-card-border hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-300 group flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Icon header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-card-base border border-card-border shadow-sm text-neutral-900 dark:text-neutral-100 group-hover:scale-105 transition-transform duration-300">
                    <Award size={22} className="group-hover:rotate-6 transition-transform" />
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded-md border border-neutral-300 dark:border-neutral-700">
                    <ShieldCheck size={12} />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Info titles */}
                <h3 className="text-lg font-bold font-display text-foreground group-hover:text-neutral-700 dark:group-hover:text-white transition-colors text-left mb-1.5 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold font-display text-text-muted text-left mb-3">
                  {cert.issuer}
                </p>

                {/* Metadata */}
                <div className="flex flex-col gap-1 font-mono text-[10px] text-neutral-600 dark:text-neutral-400 text-left mb-5">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    <span>Issued: {cert.date}</span>
                  </div>
                  <div>
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </div>
              </div>

              {/* Skills tags and Link */}
              <div>
                {/* Tech skills verified */}
                <div className="flex flex-wrap gap-1 mb-5">
                  {cert.skills.map(skill => (
                    <span key={skill} className="text-[9px] font-mono font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-800 px-2 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verification CTA */}
                <a
                  href={cert.link}
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border border-card-border bg-card-base hover:bg-neutral-100 dark:hover:bg-neutral-900 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={12} />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
