import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';

export default function SectionHeading({ label, title, subtitle }) {
  const { isDark } = useTheme();

  return (
    <div className="text-center mb-14">
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full ${
            isDark
              ? 'bg-[#6c63ff]/20 text-[#a89cff]'
              : 'bg-[#6c63ff]/10 text-[#6c63ff]'
          }`}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl font-extrabold mb-3"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`max-w-xl mx-auto text-sm sm:text-base ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-4 mx-auto h-1 w-16 rounded-full"
        style={{ background: 'linear-gradient(90deg, #6c63ff, #00d4ff)' }}
        aria-hidden="true"
      />
    </div>
  );
}
