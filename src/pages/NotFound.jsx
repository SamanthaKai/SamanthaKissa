import { useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import { Button } from '../components/ui'

export default function NotFound() {
  const { pathname } = useLocation()
  usePageMeta('Page not found')

  return (
    <section className="frame pt-16 sm:pt-24 pb-24">
      <p className="label border-b border-ink pb-3"><span className="text-signal-text">404</span> / Not found</p>
      <h1 className="display mt-10 text-[clamp(2.5rem,5.5vw,4.75rem)]">No record.</h1>
      <p className="mt-6 text-lg text-ink-soft max-w-xl">
        There is nothing at <code className="font-mono text-[15px] bg-sheet border border-rule px-1.5 py-0.5 break-all">{pathname}</code>. It may have moved, or the link may be mistyped.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/" icon={ArrowRight}>Back to home</Button>
        <Button href="/projects" variant="outline">View projects</Button>
      </div>
    </section>
  )
}
