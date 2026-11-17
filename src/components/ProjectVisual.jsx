import { cx } from './ui'

// Draws a project's preview. Real screenshots are shown as images; projects without
// published screenshots get a text panel whose caption says exactly what it is.
export default function ProjectVisual({ visual, priority = false, className, showCaption = true }) {
  return (
    <figure className={cx('flex flex-col', className)}>
      <div className="relative flex-1 border border-ink bg-sheet overflow-hidden">
        {visual.type === 'image' && (
          <img
            src={visual.src}
            width={visual.width}
            height={visual.height}
            alt={visual.alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className="block w-full h-full object-cover object-top aspect-[16/10]"
          />
        )}
        {visual.type === 'terminal' && <Terminal lines={visual.lines} />}
        {visual.type === 'diagram' && <Diagram host={visual.host} services={visual.services} />}
      </div>
      {showCaption && (
        <figcaption className="label mt-2.5 normal-case tracking-normal text-[11px]">{visual.caption}</figcaption>
      )}
    </figure>
  )
}

function Terminal({ lines }) {
  return (
    <div className="aspect-[16/10] bg-ink text-paper p-5 sm:p-7 flex flex-col">
      <div className="flex items-center justify-between border-b border-paper/15 pb-3" aria-hidden="true">
        <span className="font-mono text-[11px] text-paper/50">codescribe · terminal</span>
        <span className="font-mono text-[11px] text-paper/50">offline</span>
      </div>
      <pre className="mt-5 font-mono text-[11px] sm:text-[13px] leading-relaxed whitespace-pre-wrap break-all">
        {lines.map((l, i) => (
          <span key={i} className={cx('block', l.startsWith('$') ? 'text-signal-bright' : 'text-paper/85')}>
            {l}
          </span>
        ))}
        <span className="inline-block w-2 h-4 bg-paper/70 align-middle mt-1" aria-hidden="true" />
      </pre>
    </div>
  )
}

function Diagram({ host, services }) {
  return (
    <div className="aspect-[16/10] p-5 sm:p-7 flex flex-col" role="img" aria-label={`Diagram: ${host}, exposing ${services.map((s) => s.name).join(', ')}`}>
      <p className="label">Target</p>
      <p className="display-narrow text-xl sm:text-2xl mt-1">{host}</p>
      <div className="mt-auto grid grid-cols-3 border-t border-ink">
        {services.map((s) => (
          <div key={s.name} className="border-r last:border-r-0 border-rule pt-4 pr-3">
            <p className="font-mono text-[11px] text-ink-muted">{s.port}</p>
            <p className="display text-2xl sm:text-4xl mt-2">{s.name}</p>
            <div className="mt-3 h-1.5 w-8 bg-signal" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  )
}
