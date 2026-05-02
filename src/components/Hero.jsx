import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../portfolioData';
import { useTheme } from '../ThemeContext';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function ProfilePicture({ isDark }) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex justify-center lg:justify-end"
    >
      {/* Outer spinning gradient ring */}
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-1 rounded-full opacity-60"
          style={{
            background: 'conic-gradient(from 0deg, #6c63ff, #00d4ff, #6c63ff)',
            borderRadius: '50%',
          }}
          aria-hidden="true"
        />

        {/* Photo */}
        <div
          className={`relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 ${
            isDark ? 'border-[#0d0d1a]' : 'border-white'
          }`}
        >
          <img
            src={personalInfo.profilePic}
            alt={`${personalInfo.name} profile photo`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Online badge */}
        <span
          className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-green-400 border-2 border-white shadow-md"
          aria-label="Available"
        >
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
        </span>
      </div>
    </motion.div>
  );
}

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
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16"
      >
        {/* ── Left: text content ── */}
        <div className="flex-1 text-center lg:text-left">
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
            className={`text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
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
        </div>

        {/* ── Right: profile picture ── */}
        <ProfilePicture isDark={isDark} />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
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
    </section>
  );
}
