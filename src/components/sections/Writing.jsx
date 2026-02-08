import { FaArrowRight, FaClock } from 'react-icons/fa'
import FadeIn from '../animations/FadeIn'
import AnimatedCard from '../ui/AnimatedCard'
import { articles } from '../../data/talks'

export default function Writing() {
  return (
    <section id="writing" className="py-24 bg-darker">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl text-center tracking-wider mb-2">
            <span className="text-brand">Writing</span> & Articles
          </h2>
          <div className="section-divider" />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {articles.map((article, i) => (
            <AnimatedCard key={article.title} delay={i * 0.1} className="p-6 flex flex-col">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-brand/10 text-brand border border-brand/20">
                    {article.platform}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-white/30">
                    <FaClock size={10} /> {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{article.description}</p>
              </div>

              {article.url && article.url !== '#' && (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-brand hover:text-brand-dark transition-colors mt-4 pt-4 border-t border-white/5"
                >
                  Read Article <FaArrowRight size={10} />
                </a>
              )}
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
