import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiChevronDoubleDown } from 'react-icons/hi'
import ParticleBackground from '../ui/ParticleBackground'
import { siteConfig, heroDescriptors } from '../../data/content'

export default function Hero() {
  const [descriptorIndex, setDescriptorIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDescriptorIndex((prev) => (prev + 1) % heroDescriptors.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-darker">
      <ParticleBackground />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand font-medium tracking-[0.3em] uppercase text-sm mb-6"
        >
          Welcome
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider mb-4"
        >
          {siteConfig.name.split(' ')[0]}
          <span className="text-brand block sm:inline"> {siteConfig.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/60 font-light tracking-wide mb-8"
        >
          {siteConfig.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="h-8 flex items-center justify-center"
        >
          <motion.span
            key={descriptorIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-lg md:text-xl text-brand/80 font-light tracking-widest"
          >
            {heroDescriptors[descriptorIndex]}
          </motion.span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-brand transition-colors"
        aria-label="Scroll to About section"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <HiChevronDoubleDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  )
}
