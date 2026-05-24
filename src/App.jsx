import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechArchitecture from './components/TechArchitecture'
import HowIBuild from './components/HowIBuild'
import Certifications from './components/Certifications'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen font-body transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Subtle film-grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode((d) => !d)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <TechArchitecture />
        <HowIBuild />
        <Certifications />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
