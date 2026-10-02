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
      className={`group inline-flex items-center gap-1.5 font-medium text-charcoal dark:text-cream underline decoration-charcoal/25 dark:decoration-cream/25 underline-offset-[6px] hover:decoration-olive-600 dark:hover:decoration-olive-300 transition-colors ${className}`}
    >
      {children}
      {arrow && (
        <Icon size={15} className="text-olive-600 dark:text-olive-300 transition-transform group-hover:translate-x-0.5" />
      )}
    </a>
  )
}
