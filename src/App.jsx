import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import HowIBuild from './components/HowIBuild'
import Certifications from './components/Certifications'
import Communities from './components/Communities'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookSmart from './pages/CookSmart'

// Hash-based routing so the CookSmart page works on any static host without rewrites.
function getRoute() {
  return window.location.hash === '#/cooksmart' ? 'cooksmart' : 'home'
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })
  const [route, setRoute] = useState(getRoute)

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

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // After switching pages, jump to the top or to the section named in the hash.
  useEffect(() => {
    const hash = window.location.hash
    if (route === 'home' && hash.length > 1 && !hash.startsWith('#/')) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
    document.title = route === 'cooksmart' ? 'CookSmart | Samantha Kissa' : 'Samantha Kissa'
  }, [route])

  return (
    <div className="min-h-screen font-body bg-paper dark:bg-night text-charcoal dark:text-cream">
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode((d) => !d)} />
      {route === 'cooksmart' ? (
        <main>
          <CookSmart />
        </main>
      ) : (
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <HowIBuild />
          <Certifications />
          <Communities />
          <Leadership />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  )
}
