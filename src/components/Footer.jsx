import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../portfolioData';
import { useTheme } from '../ThemeContext';

const socials = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
  const { isDark } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer
      className={`py-8 px-6 border-t ${
        isDark ? 'border-white/10 bg-[#0d0d1a]' : 'border-black/10 bg-slate-50'
      }`}
      aria-label="Footer"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`text-sm flex items-center gap-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
        >
          © {year} {personalInfo.name}. Built with{' '}
          <FiHeart size={13} className="text-red-400" aria-hidden="true" /> &amp; React
        </motion.p>

        <div className="flex items-center gap-3" aria-label="Social links">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDark
                  ? 'text-slate-400 hover:text-[#6c63ff] hover:bg-white/10'
                  : 'text-slate-500 hover:text-[#6c63ff] hover:bg-black/5'
              }`}
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
