import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SlideIn({ children, direction = 'left', delay = 0, duration = 0.6, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const variants = {
    left: { x: -60, opacity: 0 },
    right: { x: 60, opacity: 0 },
    up: { y: 60, opacity: 0 },
    down: { y: -60, opacity: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
