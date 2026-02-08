import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import FadeIn from '../animations/FadeIn'
import AnimatedCard from '../ui/AnimatedCard'
import { projects, projectCategories } from '../../data/projects'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-24 bg-darker">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl text-center tracking-wider mb-2">
            My <span className="text-brand">Portfolio</span>
          </h2>
          <div className="section-divider" />
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-brand text-darker'
                    : 'bg-card text-white/60 hover:text-white border border-white/10 hover:border-brand/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <AnimatedCard className="p-6 h-full flex flex-col">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-xl mb-4"
                    />
                  )}
                  <div className="flex-1">
                    <span className="text-xs text-brand/70 font-medium tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold mt-1 mb-2">{project.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-white/40">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-brand hover:text-brand-dark transition-colors"
                      >
                        <FaExternalLinkAlt size={12} /> Live
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
                      >
                        <FaGithub size={14} /> Code
                      </a>
                    )}
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
