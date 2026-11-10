import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleDark }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-paper/90 dark:bg-night/90 backdrop-blur-sm border-b transition-colors ${
        scrolled || open ? 'border-charcoal/10 dark:border-cream/10' : 'border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className="font-heading text-lg text-charcoal dark:text-cream">
          Samantha Kissa
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-charcoal/60 dark:text-cream/60 hover:text-charcoal dark:hover:text-cream transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1 -mr-2">
            <button
              onClick={toggleDark}
              className="p-2 rounded-md text-charcoal/55 dark:text-cream/55 hover:text-charcoal dark:hover:text-cream transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-md text-charcoal/60 dark:text-cream/60"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* How far through the story the reader is. */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute left-0 right-0 bottom-0 h-px origin-left bg-brass-500 dark:bg-brass-300"
      />

      {open && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-charcoal/80 dark:text-cream/80"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
