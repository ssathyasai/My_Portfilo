import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCpu, FiZap } from 'react-icons/fi';
import { aboutText } from '../portfolioData';
import { useTheme } from '../ThemeContext';
import SectionHeading from './SectionHeading';

const strengths = [
  { icon: FiCode, label: 'Full-Stack Dev', desc: 'End-to-end web applications' },
  { icon: FiCpu, label: 'Machine Learning', desc: 'Predictive models & NLP' },
  { icon: FiDatabase, label: 'Data Analysis', desc: 'Insights from complex data' },
  { icon: FiZap, label: 'DSA problem Solver', desc: 'Clean, efficient solutions' },
];

export default function About() {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className="section-padding"
      aria-label="About section"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          subtitle="A developer who loves building things that matter."
        />

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className={`text-base sm:text-lg leading-relaxed mb-6 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {aboutText}
            </p>
            
          </motion.div>

          {/* Strength cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {strengths.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`p-4 rounded-2xl transition-all duration-200 ${
                  isDark ? 'glass' : 'glass-light shadow-sm'
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'linear-gradient(135deg, #6c63ff22, #00d4ff22)' }}
                  aria-hidden="true"
                >
                  <Icon size={20} className="text-[#6c63ff]" />
                </div>
                <p className="font-semibold text-sm mb-1">{label}</p>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
