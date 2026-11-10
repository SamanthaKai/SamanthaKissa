import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export function Container({ className = '', children }) {
  return <div className={`max-w-6xl mx-auto px-6 sm:px-10 ${className}`}>{children}</div>
}

// Fades content in once as it scrolls into view.
export function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useIntersectionObserver()
  return (
    <Tag ref={ref} className={`section-reveal ${visible ? 'visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

// Small numbered marker that carries the page's story from one section to the next.
export function Chapter({ n, children, className = '' }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-brass-600 dark:text-brass-300 ${className}`}>
      <span className="tabular-nums">{n}</span>
      <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

export function Heading({ as: Tag = 'h2', className = '', children }) {
  return (
    <Tag className={`font-heading font-normal tracking-tight text-charcoal dark:text-cream ${className}`}>
      {children}
    </Tag>
  )
}

// Inline text link. `external` opens in a new tab and shows an outward arrow.
export function TextLink({ href, external = false, arrow = true, className = '', children }) {
  const Icon = external ? ArrowUpRight : ArrowRight
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`group inline-flex items-center gap-1.5 font-medium text-charcoal dark:text-cream underline decoration-charcoal/25 dark:decoration-cream/25 underline-offset-[6px] hover:decoration-brass-600 dark:hover:decoration-brass-300 transition-colors ${className}`}
    >
      {children}
      {arrow && (
        <Icon size={15} className="text-brass-600 dark:text-brass-300 transition-transform group-hover:translate-x-0.5" />
      )}
    </a>
  )
}
