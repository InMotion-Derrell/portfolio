import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import FadeIn from '../animations/FadeIn'
import SlideIn from '../animations/SlideIn'
import { siteConfig, socialLinks } from '../../data/content'

const iconMap = { FaGithub, FaLinkedinIn, FaXTwitter }

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)

    try {
      const res = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-dark">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl text-center tracking-wider mb-2">
            Get In <span className="text-brand">Touch</span>
          </h2>
          <div className="section-divider" />
          <p className="text-center text-white/50 max-w-xl mx-auto mt-4">
            Have a question, want to collaborate, or just want to say hi? Feel free to reach out!
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Form */}
          <SlideIn direction="left">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-white/60 mb-1.5">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand/50 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-white/60 mb-1.5">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand/50 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-white/60 mb-1.5">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-white/60 mb-1.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-card border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand/50 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-brand text-darker font-semibold py-3 px-6 rounded-xl hover:bg-brand-dark transition-colors disabled:opacity-50"
              >
                <FaPaperPlane size={14} />
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
              </motion.button>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </SlideIn>

          {/* Social links */}
          <SlideIn direction="right">
            <div className="flex flex-col justify-center h-full">
              <h3 className="font-display text-2xl tracking-wider text-brand mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-white/50 mb-8 leading-relaxed">
                Whether it&apos;s about developer relations, community building, speaking opportunities, or just a chat about tech — I&apos;d love to hear from you.
              </p>

              <div className="space-y-4">
                {socialLinks.map(({ name, url, icon }) => {
                  const Icon = iconMap[icon]
                  return Icon ? (
                    <motion.a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-white/50 hover:text-brand transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-card border border-white/10 group-hover:border-brand/30 flex items-center justify-center transition-colors">
                        <Icon size={18} />
                      </div>
                      <span className="font-medium">{name}</span>
                    </motion.a>
                  ) : null
                })}
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
