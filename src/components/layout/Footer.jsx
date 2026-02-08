import { FaGithub, FaLinkedinIn, FaYoutube, FaDev } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { socialLinks, navLinks } from '../../data/content'

const iconMap = { FaGithub, FaLinkedinIn, FaXTwitter, FaDev, FaYoutube }

export default function Footer() {
  return (
    <footer className="bg-darker border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#hero" className="font-display text-2xl tracking-wider hover:text-brand transition-colors">
              Derrell <span className="text-brand">Willis</span>
            </a>
            <p className="text-muted text-sm mt-2">Developer Relations</p>
          </div>

          {/* Quick nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.slice(0, 5).map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-white/50 hover:text-brand transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ name, url, icon }) => {
              const Icon = iconMap[icon]
              return Icon ? (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-white/50 hover:text-brand transition-colors hover:scale-110 transform"
                >
                  <Icon size={20} />
                </a>
              ) : null
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Derrell Willis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
