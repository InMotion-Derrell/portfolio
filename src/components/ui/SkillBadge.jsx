import { motion } from 'framer-motion'

export default function SkillBadge({ name, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ rotate: 5, scale: 1.05 }}
      className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-card hover:bg-card-hover border border-white/5 hover:border-brand/30 transition-colors cursor-default"
    >
      <div className="text-3xl text-white/60 group-hover:text-brand transition-colors">
        <Icon />
      </div>
      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  )
}
