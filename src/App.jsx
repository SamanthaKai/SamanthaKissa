import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookSmart from './pages/CookSmart'
import ExperienceDetail from './pages/ExperienceDetail'

// Hash-based routing so subpages work on any static host without rewrites.
const pages = {
  '#/cooksmart': { component: CookSmart, title: 'CookSmart | Samantha Kissa' },
  '#/experience': { component: ExperienceDetail, title: 'Experience | Samantha Kissa' },
}

function getRoute() {
  return pages[window.location.hash] ? window.location.hash : 'home'
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Credentials />
      <Contact />
    </>
  )
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
    if (route === 'home' && hash.length > 1) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
    document.title = pages[route]?.title ?? 'Samantha Kissa'
  }, [route])

  const Page = pages[route]?.component ?? Home

  return (
    <div className="min-h-screen font-body bg-paper dark:bg-night text-charcoal dark:text-cream">
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode((d) => !d)} />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  )
}
