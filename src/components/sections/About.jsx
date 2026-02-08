import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FadeIn from '../animations/FadeIn'
import SlideIn from '../animations/SlideIn'
import { about } from '../../data/content'

function CountUp({ target, duration = 2 }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return <span ref={ref}>{count.toLocaleString()}+</span>
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl text-center tracking-wider mb-2">
            About <span className="text-brand">Me</span>
          </h2>
          <div className="section-divider" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          {/* Profile image */}
          <SlideIn direction="left">
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand to-brand-dark animate-spin-slow opacity-30 blur-xl" />
              <img
                src={about.profileImage}
                alt="Derrell Willis"
                className="relative w-full h-full rounded-full object-cover border-4 border-brand/20"
              />
            </div>
          </SlideIn>

          {/* Bio */}
          <SlideIn direction="right">
            <h3 className="text-2xl font-display tracking-wide text-brand mb-4">
              {about.headline}
            </h3>
            <p className="text-white/70 leading-relaxed text-lg">
              {about.bio}
            </p>
          </SlideIn>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {about.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card border border-white/5"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand mb-2">
                <CountUp target={stat.value} />
              </div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
