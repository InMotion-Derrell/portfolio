import { useCallback, useMemo } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const options = useMemo(() => ({
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: { value: 50, density: { enable: true, width: 1920, height: 1080 } },
      color: { value: '#ef4444' },
      opacity: { value: { min: 0.1, max: 0.4 } },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'none',
        outModes: 'out',
      },
      links: {
        enable: true,
        distance: 150,
        color: '#ef4444',
        opacity: 0.1,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.3 } },
      },
    },
    detectRetina: true,
  }), [])

  return (
    <Particles
      id="hero-particles"
      init={particlesInit}
      options={options}
      className="absolute inset-0"
    />
  )
}
