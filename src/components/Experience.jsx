import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { experience } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import SectionHeading from './SectionHeading';

export default function Experience() {
  const { isDark } = useTheme();

  return (
    <section
      id="experience"
      className={`section-padding ${isDark ? 'bg-[#0d0d1a]' : 'bg-slate-50'}`}
      aria-label="Experience section"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          label="Experience"
          title="Where I've Worked"
          subtitle="Hands-on experience that shaped my skills."
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-5 top-0 bottom-0 w-px ${
              isDark ? 'bg-white/10' : 'bg-black/10'
            }`}
            aria-hidden="true"
          />

          {experience.map((exp, i) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative pl-14 pb-10 last:pb-0"
              aria-label={`${exp.role} at ${exp.company}`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-3 top-1 w-5 h-5 rounded-full border-2 border-[#6c63ff] flex items-center justify-center"
                style={{ background: isDark ? '#0d0d1a' : '#f8fafc' }}
                aria-hidden="true"
              >
                <div className="w-2 h-2 rounded-full bg-[#6c63ff]" />
              </div>

              <div
                className={`p-6 rounded-2xl ${isDark ? 'glass' : 'glass-light shadow-sm'}`}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2">
                      <FiBriefcase
                        size={13}
                        className="text-[#6c63ff]"
                        aria-hidden="true"
                      />
                      <span className="font-semibold text-sm gradient-text">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`flex items-center gap-1.5 text-xs px-3 py-1 rounded-full ${
                        isDark
                          ? 'bg-white/10 text-slate-400'
                          : 'bg-black/5 text-slate-500'
                      }`}
                    >
                      <FiCalendar size={11} aria-hidden="true" />
                      {exp.duration}
                    </span>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        isDark
                          ? 'bg-[#6c63ff]/20 text-[#a89cff]'
                          : 'bg-[#6c63ff]/10 text-[#6c63ff]'
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3" aria-label="Responsibilities and achievements">
                  {exp.bullets.map((bullet, bi) => (
                    <motion.li
                      key={bi}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 + bi * 0.08 }}
                      className={`flex gap-3 text-sm leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      <FiCheckCircle
                        size={16}
                        className="text-[#00d4ff] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
