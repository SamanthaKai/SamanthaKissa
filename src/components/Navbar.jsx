import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleDark }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-paper/95 dark:bg-night/95 backdrop-blur-sm transition-colors ${
        scrolled || open ? 'border-b border-charcoal/10 dark:border-cream/10' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-heading text-xl font-medium text-charcoal dark:text-cream">
          Samantha Kissa
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-charcoal/65 dark:text-cream/65 hover:text-charcoal dark:hover:text-cream transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <button
            onClick={toggleDark}
            className="p-2 -mr-2 rounded-md text-charcoal/60 dark:text-cream/60 hover:text-charcoal dark:hover:text-cream transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 rounded-md text-charcoal/60 dark:text-cream/60"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-charcoal/80 dark:text-cream/80"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
