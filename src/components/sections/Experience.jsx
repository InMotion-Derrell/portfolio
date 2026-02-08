import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import FadeIn from '../animations/FadeIn'
import { experience } from '../../data/content'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-darker">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl text-center tracking-wider mb-2">
            My <span className="text-brand">Experience</span>
          </h2>
          <div className="section-divider" />
        </FadeIn>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

          {experience.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-brand rounded-full -translate-x-1.5 mt-6 z-10 ring-4 ring-darker" />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="bg-card border border-white/5 rounded-2xl p-6 hover:border-brand/20 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-brand">
                      <FaBriefcase size={14} />
                      <span className="text-sm font-medium">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{item.role}</h3>
                    <p className="text-brand/70 font-medium mb-3">{item.company}</p>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{item.description}</p>
                    <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                      {item.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-brand/10 text-brand/80 border border-brand/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
