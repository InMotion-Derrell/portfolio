import { motion } from 'framer-motion'
import { FaCode, FaWrench, FaSearch, FaPaintBrush } from 'react-icons/fa'
import FadeIn from '../animations/FadeIn'

const services = [
  {
    icon: FaCode,
    title: 'New Websites',
    description: 'Custom websites built from scratch for your business. Mobile-friendly, fast, and designed to convert visitors into customers.',
  },
  {
    icon: FaWrench,
    title: 'Website Fixes & Updates',
    description: 'Broken pages, outdated content, slow load times? I will diagnose and fix the issues holding your site back.',
  },
  {
    icon: FaPaintBrush,
    title: 'Redesigns',
    description: 'Give your existing site a modern look that builds trust and reflects the quality of your business.',
  },
  {
    icon: FaSearch,
    title: 'Local SEO',
    description: 'Get found on Google by customers in Virginia Beach and Hampton Roads. I will make sure your site shows up when it matters.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-darker">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl text-center tracking-wider mb-2">
            What I <span className="text-brand">Offer</span>
          </h2>
          <div className="section-divider" />
          <p className="text-center text-white/50 max-w-xl mx-auto mt-4">
            Affordable web services for small businesses in Virginia Beach and the Hampton Roads area.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-white/5 hover:border-brand/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                <service.icon className="text-brand" size={22} />
              </div>
              <h3 className="font-display text-xl tracking-wide mb-3">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
