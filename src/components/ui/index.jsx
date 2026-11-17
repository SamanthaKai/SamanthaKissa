import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const cx = (...c) => c.filter(Boolean).join(' ')
const isExternal = (href) => /^(https?:|mailto:)/.test(href)

// A link that is a router Link for internal paths and an <a> for everything else.
export function SmartLink({ href, children, className, download, ...rest }) {
  if (download || isExternal(href) || href.startsWith('/files/')) {
    const ext = /^https?:/.test(href)
    return (
      <a
        href={href}
        className={className}
        download={download}
        {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
        {ext && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    )
  }
  return (
    <Link to={href} className={className} {...rest}>
      {children}
    </Link>
  )
}

export function ArrowLink({ href, children, className, tone = 'ink' }) {
  const Icon = /^https?:/.test(href) ? ArrowUpRight : ArrowRight
  return (
    <SmartLink
      href={href}
      className={cx(
        'group inline-flex items-center gap-2 text-[15px] font-medium border-b pb-0.5 transition-colors',
        tone === 'ink'
          ? 'text-ink border-ink/30 hover:border-signal hover:text-signal-text'
          : 'text-paper border-paper/30 hover:border-signal-bright hover:text-signal-bright',
        className,
      )}
    >
      {children}
      <Icon aria-hidden="true" size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5" />
    </SmartLink>
  )
}

export function Button({ href, children, variant = 'solid', icon: Icon, download, className }) {
  const styles = {
    solid: 'bg-ink text-paper hover:bg-signal',
    outline: 'border border-ink text-ink hover:bg-ink hover:text-paper',
    light: 'bg-paper text-ink hover:bg-signal-bright hover:text-ink',
    ghostLight: 'border border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-ink',
  }
  return (
    <SmartLink
      href={href}
      download={download}
      className={cx(
        'inline-flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors',
        styles[variant],
        className,
      )}
    >
      {children}
      {Icon && <Icon aria-hidden="true" size={16} strokeWidth={2} />}
    </SmartLink>
  )
}

export function Label({ children, className, as: Tag = 'p', ...rest }) {
  return (
    <Tag className={cx('label', className)} {...rest}>
      {children}
    </Tag>
  )
}

export function Tags({ items, className, tone = 'ink' }) {
  return (
    <ul className={cx('flex flex-wrap gap-1.5', className)} aria-label="Technologies and topics">
      {items.map((t) => (
        <li
          key={t}
          className={cx(
            'font-mono text-[11px] px-2 py-1 border',
            tone === 'ink' ? 'border-rule text-ink-soft bg-sheet' : 'border-paper/20 text-paper/80',
          )}
        >
          {t}
        </li>
      ))}
    </ul>
  )
}

// Two-column definition list used for project facts and record panels.
export function FactList({ items, className }) {
  return (
    <dl className={cx('border-t border-ink', className)}>
      {items.map(({ label, value }) => (
        <div key={label} className="grid grid-cols-[7.5rem_1fr] gap-4 py-3 border-b border-rule">
          <dt className="label pt-0.5">{label}</dt>
          <dd className="text-[15px] text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

// Section heading: mono index on a rule, then the title.
export function SectionHead({ index, title, action, className, id }) {
  return (
    <div className={cx('border-t border-ink pt-4', className)}>
      <div className="flex items-start justify-between gap-6">
        <div>
          {index && <Label>{index}</Label>}
          <h2 id={id} className="display-narrow mt-3 text-[1.9rem] sm:text-[2.4rem] text-ink">
            {title}
          </h2>
        </div>
        {action && <div className="hidden sm:block pt-1 shrink-0">{action}</div>}
      </div>
      {action && <div className="sm:hidden mt-5">{action}</div>}
    </div>
  )
}

// Top-of-page header shared by every inner page.
export function PageHeader({ n, section, title, lede, aside }) {
  return (
    <header className="frame pt-10 sm:pt-14 lg:pt-20">
      <div className="flex items-center justify-between border-b border-ink pb-3">
        <p className="label text-ink">
          <span className="text-signal-text">{n}</span>
          <span aria-hidden="true"> / </span>
          {section}
        </p>
        <p className="label hidden sm:block">Samantha Kissa · Kampala</p>
      </div>
      <div className="grid lg:grid-cols-12 gap-x-8 gap-y-6 pt-8 sm:pt-12 pb-12 sm:pb-16 lg:items-end">
        <h1 className="display lg:col-span-7 text-[clamp(2.5rem,5.5vw,4.75rem)] text-ink">{title}</h1>
        {(lede || aside) && (
          <div className="lg:col-span-5 flex flex-col gap-4">
            {lede && <p className="text-lg leading-relaxed text-ink-soft max-w-xl">{lede}</p>}
            {aside}
          </div>
        )}
      </div>
    </header>
  )
}

export { cx }
