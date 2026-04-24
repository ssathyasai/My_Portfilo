import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  const { isDark } = useTheme();

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding"
      aria-label="Hero section"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #6c63ff, transparent)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #6c63ff, #00d4ff)' }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-3xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium ${
              isDark
                ? 'bg-[#6c63ff]/20 text-[#a89cff] border border-[#6c63ff]/30'
                : 'bg-[#6c63ff]/10 text-[#6c63ff] border border-[#6c63ff]/20'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight"
        >
          Hi, I'm{' '}
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={itemVariants}
          className={`text-xl sm:text-2xl font-semibold mb-4 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {personalInfo.role}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className={`text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(108,99,255,0.5)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('#projects')}
            className="px-8 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }}
            aria-label="View my projects"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('#contact')}
            className={`px-8 py-3.5 rounded-xl font-semibold text-sm border-2 transition-all duration-200 ${
              isDark
                ? 'border-[#6c63ff] text-[#a89cff] hover:bg-[#6c63ff]/10'
                : 'border-[#6c63ff] text-[#6c63ff] hover:bg-[#6c63ff]/10'
            }`}
            aria-label="Contact me"
          >
            Contact
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className={`flex flex-col items-center gap-1 ${
              isDark ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <FiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
