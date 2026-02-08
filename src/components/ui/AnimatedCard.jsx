import { motion } from 'framer-motion'

export default function AnimatedCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`bg-card border border-white/5 rounded-2xl hover:border-brand/20 transition-colors ${className}`}
    >
      {children}
    </motion.div>
  )
}
