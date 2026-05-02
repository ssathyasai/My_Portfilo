import { motion } from 'framer-motion';
import { skills } from '../portfolioData';
import { useTheme } from '../ThemeContext';
import SectionHeading from './SectionHeading';
import { useInView } from '../useInView';

function SkillBar({ name, level, delay = 0 }) {
  const { isDark } = useTheme();
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          {name}
        </span>
        <span className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {level}%
        </span>
      </div>
      <div
        className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-black/10'}`}
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency: ${level}%`}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #6c63ff, #00d4ff)' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section
      id="skills"
      className={`section-padding ${isDark ? 'bg-[#0d0d1a]' : 'bg-slate-50'}`}
      aria-label="Skills section"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Skills"
          title="What I Work With"
          subtitle="Technologies and tools I use to build great products."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className={`p-6 rounded-2xl ${isDark ? 'glass' : 'glass-light shadow-sm'}`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl" aria-hidden="true">{group.icon}</span>
                <h3 className="font-bold text-sm tracking-wide uppercase gradient-text">
                  {group.category}
                </h3>
              </div>
              {group.items.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={gi * 0.1 + si * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
