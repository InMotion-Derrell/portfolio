import { useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Portfolio from './components/sections/Portfolio'

import Writing from './components/sections/Writing'
import Contact from './components/sections/Contact'
import { initGA4 } from './utils/analytics'

export default function App() {
  useEffect(() => {
    initGA4()
  }, [])

  return (
    <>
      <a href="#about" className="skip-to-content">Skip to content</a>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
