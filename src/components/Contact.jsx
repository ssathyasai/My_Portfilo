import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi';
import { personalInfo } from '../portfolioData';
import { useTheme } from '../ThemeContext';
import SectionHeading from './SectionHeading';

const contactLinks = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'sathyasai1357@gmail.com',
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'https://github.com/ssathyasai',
    href: personalInfo.github,
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ssathyasai',
    href: personalInfo.linkedin,
  },
];

export default function Contact() {
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email.';
    }
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Frontend-only: simulate submission
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 ${
      isDark
        ? 'bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-[#6c63ff] focus:bg-white/8'
        : 'bg-black/5 border border-black/10 text-slate-700 placeholder-slate-400 focus:border-[#6c63ff] focus:bg-white'
    } ${errors[field] ? 'border-red-500' : ''}`;

  return (
    <section
      id="contact"
      className="section-padding"
      aria-label="Contact section"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-bold text-xl mb-2">Get in Touch</h3>
            <p className={`text-sm mb-8 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              I'm currently open to new opportunities. Whether it's a full-time
              role, freelance project, or collaboration — feel free to reach out.
            </p>

            <div className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group ${
                    isDark ? 'glass hover:bg-white/10' : 'glass-light hover:shadow-md'
                  }`}
                  aria-label={`${label}: ${value}`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }}
                    aria-hidden="true"
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      {label}
                    </p>
                    <p className={`text-sm font-medium group-hover:text-[#6c63ff] transition-colors ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className={`p-6 rounded-2xl ${isDark ? 'glass' : 'glass-light shadow-sm'}`}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={inputClass('name')}
                  aria-required="true"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-400 text-xs mt-1" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={inputClass('email')}
                  aria-required="true"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-400 text-xs mt-1" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${inputClass('message')} resize-none`}
                  aria-required="true"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-red-400 text-xs mt-1" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(108,99,255,0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }}
                aria-label="Send message"
              >
                {submitted ? (
                  <>
                    <FiCheck size={16} aria-hidden="true" /> Message Sent!
                  </>
                ) : (
                  <>
                    <FiSend size={16} aria-hidden="true" /> Send Message
                  </>
                )}
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 text-xs mt-3"
                  role="status"
                  aria-live="polite"
                >
                  Thanks! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
