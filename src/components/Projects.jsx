import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import SectionHeading from './SectionHeading';

function ProjectCard({ project, index }) {
  const { isDark } = useTheme();

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
        isDark ? 'glass' : 'glass-light shadow-md'
      } hover:shadow-xl hover:shadow-[#6c63ff]/20`}
      aria-label={`Project: ${project.title}`}
    >
      {/* Gradient top bar */}
      <div
        className="h-1 w-full"
        style={{ background: 'linear-gradient(90deg, #6c63ff, #00d4ff)' }}
        aria-hidden="true"
      />

      {/* Placeholder image area */}
      <div
        className={`h-40 flex items-center justify-center relative overflow-hidden ${
          isDark ? 'bg-[#6c63ff]/10' : 'bg-[#6c63ff]/5'
        }`}
        aria-hidden="true"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
          className="text-6xl opacity-30"
        >
          {['🛒', '🤖', '📊', '✅'][index] || '💻'}
        </motion.div>
        {project.featured && (
          <span
            className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
            aria-label="Featured project"
          >
            <FiStar size={10} /> Featured
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 group-hover:gradient-text transition-all duration-200">
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5" aria-label="Technologies used">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                isDark
                  ? 'bg-[#6c63ff]/20 text-[#a89cff]'
                  : 'bg-[#6c63ff]/10 text-[#6c63ff]'
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors duration-200 ${
              isDark
                ? 'bg-white/10 text-slate-300 hover:bg-white/20'
                : 'bg-black/5 text-slate-600 hover:bg-black/10'
            }`}
            aria-label={`View ${project.title} on GitHub`}
          >
            <FiGithub size={13} /> GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-all duration-200 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }}
              aria-label={`View live demo of ${project.title}`}
            >
              <FiExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { isDark } = useTheme();

  return (
    <section
      id="projects"
      className="section-padding"
      aria-label="Projects section"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Projects"
          title="Things I've Built"
          subtitle="A selection of projects that showcase my skills and passion."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/sathya"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:text-[#6c63ff] ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
            aria-label="View all projects on GitHub"
          >
            <FiGithub size={16} /> View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
