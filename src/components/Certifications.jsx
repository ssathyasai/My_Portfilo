import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi';
import { certifications } from '../portfolioData';
import { useTheme } from '../ThemeContext';
import SectionHeading from './SectionHeading';

export default function Certifications() {
  const { isDark } = useTheme();

  return (
    <section
      id="certifications"
      className={`section-padding ${isDark ? 'bg-[#0a0a14]' : 'bg-slate-100/60'}`}
      aria-label="Certifications section"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Certifications"
          title="Licenses & Certifications"
          subtitle="Validated skills and specialized learning programs I have completed."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                isDark ? 'glass hover:shadow-xl hover:shadow-[#6c63ff]/15' : 'glass-light shadow-md hover:shadow-xl'
              }`}
              aria-label={`Certification: ${cert.title}`}
            >
              {/* Header Icon & Issuer */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                      isDark ? 'bg-[#6c63ff]/20 text-[#00d4ff]' : 'bg-[#6c63ff]/10 text-[#6c63ff]'
                    }`}
                  >
                    {cert.icon || '📜'}
                  </div>
                  <span
                    className={`flex items-center gap-1.5 text-xs px-3 py-1 rounded-full ${
                      isDark ? 'bg-white/10 text-slate-300' : 'bg-black/5 text-slate-600'
                    }`}
                  >
                    <FiCalendar size={12} aria-hidden="true" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-1 group-hover:gradient-text transition-colors duration-200">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#6c63ff] mb-4">
                  <FiAward size={14} />
                  <span>{cert.issuer}</span>
                </div>

                {/* Skills tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill, si) => (
                      <span
                        key={si}
                        className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                          isDark
                            ? 'bg-white/5 text-slate-300 border border-white/10'
                            : 'bg-slate-200/70 text-slate-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Credential Link */}
              {cert.credentialUrl && cert.credentialUrl !== '#' && (
                <div className="pt-4 border-t border-slate-700/20">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d4ff] hover:underline"
                  >
                    <span>View Credential</span>
                    <FiExternalLink size={12} />
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
