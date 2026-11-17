import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { pages } from '../content/site'

// Closes each inner page with a large link to the next page in the index,
// so the site reads in order like a bound document.
export default function PageEnd({ current }) {
  const i = pages.findIndex((p) => p.to === current)
  const next = pages[(i + 1) % pages.length]

  return (
    <nav aria-label="Next page" className="frame mt-24 sm:mt-32">
      <Link
        to={next.to}
        className="group block border-t-2 border-ink pt-5 pb-12 sm:pb-16"
      >
        <span className="label">
          Next <span aria-hidden="true">·</span> <span className="text-signal-text">{next.n}</span>
        </span>
        <span className="mt-3 flex items-end justify-between gap-6">
          <span className="display text-[clamp(1.75rem,3.2vw,2.75rem)] group-hover:text-signal transition-colors">
            {next.label}
          </span>
          <ArrowRight
            aria-hidden="true"
            className="shrink-0 w-7 h-7 sm:w-9 sm:h-9 mb-1 transition-transform group-hover:translate-x-2"
            strokeWidth={1.5}
          />
        </span>
        <span className="mt-2 block text-ink-muted">{next.blurb}</span>
      </Link>
    </nav>
  )
}
