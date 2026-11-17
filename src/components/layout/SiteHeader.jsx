import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { pages, person } from '../../content/site'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const toggleRef = useRef(null)

  // Close the menu on navigation.
  useEffect(() => setOpen(false), [pathname])

  // Lock scroll and listen for Escape while the menu is open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Close the mobile menu if the viewport grows past the breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // The mobile menu is rendered beside the header, not inside it: the header's
  // backdrop-filter would otherwise become the containing block for the fixed menu.
  return (
    <>
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm border-b border-rule">
      <div className="frame flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 group" aria-label={`${person.name}, home`}>
          <span className="grid place-items-center w-8 h-8 bg-ink text-paper display text-[13px] leading-none group-hover:bg-signal transition-colors">
            SK
          </span>
          <span className="display-narrow text-[15px] tracking-tight">{person.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center">
            {pages.map(({ n, to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `relative flex gap-1.5 px-3 xl:px-3.5 h-16 items-center text-[14px] transition-colors ${
                      isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className={`font-mono text-[10px] hidden xl:inline ${isActive ? 'text-signal-text' : 'text-ink-faint'}`}>{n}</span>
                      <span className={isActive ? 'font-medium' : ''}>{label}</span>
                      <span
                        aria-hidden="true"
                        className={`absolute left-3 right-3 xl:left-3.5 xl:right-3.5 -bottom-px h-[3px] bg-signal transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden inline-flex items-center gap-2 h-10 px-3 -mr-3 text-sm font-medium"
        >
          <span className="font-mono text-[11px] uppercase tracking-label">{open ? 'Close' : 'Menu'}</span>
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
    </header>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-ink text-paper overflow-y-auto page-in"
        >
          <ul className="frame py-6">
            {pages.map(({ n, to, label, blurb }) => (
              <li key={to} className="border-b border-paper/15">
                <NavLink to={to} end={to === '/'} className="flex items-baseline gap-4 py-4 group">
                  {({ isActive }) => (
                    <>
                      <span className={`font-mono text-xs w-6 ${isActive ? 'text-signal-bright' : 'text-paper/40'}`}>{n}</span>
                      <span className="flex-1">
                        <span className={`display block text-[1.75rem] sm:text-[2rem] ${isActive ? 'text-signal-bright' : 'text-paper'}`}>
                          {label}
                        </span>
                        <span className="block mt-1 text-sm text-paper/55">{blurb}</span>
                      </span>
                      {isActive && <span className="label text-signal-bright">Current</span>}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
