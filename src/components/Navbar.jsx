import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-2xl transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'glass shadow-lg shadow-black/30'
            : 'glass-light shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="text-xl font-bold gradient-text"
          aria-label="Sathya - Home"
        >
          &lt;Sathya /&gt;
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Desktop navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`text-sm font-medium transition-colors duration-200 hover:text-[#6c63ff] ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              isDark
                ? 'text-yellow-400 hover:bg-white/10'
                : 'text-slate-600 hover:bg-black/10'
            }`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${isDark ? 'text-yellow-400' : 'text-slate-600'}`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`p-2 rounded-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden overflow-hidden rounded-b-2xl ${
              isDark ? 'bg-[#1a1a2e]/95' : 'bg-white/95'
            }`}
          >
            <nav className="flex flex-col px-5 pb-4 gap-3" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`text-sm font-medium py-2 border-b transition-colors hover:text-[#6c63ff] ${
                    isDark ? 'text-slate-300 border-white/10' : 'text-slate-600 border-black/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
