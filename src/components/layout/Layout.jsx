import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const mainRef = useRef(null)
  const lastPath = useRef(pathname)

  // New page: start at the top (or at the #anchor if there is one). After in-app
  // navigation, move focus to the main region so screen readers announce the new page.
  // Comparing against the last path (not a "first run" flag) keeps this correct
  // under StrictMode's double-run of effects.
  useEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (target) {
      target.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
    if (lastPath.current !== pathname) {
      lastPath.current = pathname
      if (!target) mainRef.current?.focus({ preventScroll: true })
    }
  }, [pathname, hash])

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:text-paper focus:px-4 focus:py-2 text-sm"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" ref={mainRef} tabIndex={-1} className="flex-1 outline-none">
        <div key={pathname} className="page-in">
          <Outlet />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
