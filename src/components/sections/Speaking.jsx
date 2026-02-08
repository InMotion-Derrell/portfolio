import { FaPlay, FaFilePowerpoint } from 'react-icons/fa'
import FadeIn from '../animations/FadeIn'
import AnimatedCard from '../ui/AnimatedCard'
import { talks } from '../../data/talks'

export default function Speaking() {
  return (
    <section id="speaking" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl text-center tracking-wider mb-2">
            <span className="text-brand">Speaking</span> & Talks
          </h2>
          <div className="section-divider" />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {talks.map((talk, i) => (
            <AnimatedCard key={talk.title} delay={i * 0.1} className="p-6 flex flex-col">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-brand/10 text-brand border border-brand/20">
                    {talk.conference}
                  </span>
                  <span className="text-xs text-white/30">{talk.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{talk.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{talk.description}</p>
              </div>

              <div className="flex gap-4 mt-4 pt-4 border-t border-white/5">
                {talk.videoUrl && talk.videoUrl !== '#' && (
                  <a
                    href={talk.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-brand hover:text-brand-dark transition-colors"
                  >
                    <FaPlay size={10} /> Watch
                  </a>
                )}
                {talk.slidesUrl && talk.slidesUrl !== '#' && (
                  <a
                    href={talk.slidesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
                  >
                    <FaFilePowerpoint size={12} /> Slides
                  </a>
                )}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
