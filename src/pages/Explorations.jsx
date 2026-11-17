import { Info } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import { explorations, explorationsNotice } from '../content/explorations'
import PageEnd from '../components/PageEnd'
import { ArrowLink, Label, PageHeader, Tags } from '../components/ui'

export default function Explorations() {
  usePageMeta(
    'Design Explorations',
    'Independent website concepts and practice prototypes by Samantha Kissa. Not commissioned client work.',
  )

  return (
    <>
      <PageHeader
        n="04"
        section="Design explorations"
        title="Explorations"
        lede="Website concepts I designed and built on my own initiative, to practise layout, typography and booking flows for real kinds of businesses."
      />

      <div className="frame">
        <aside role="note" aria-label="About these concepts" className="flex gap-4 border border-ink bg-sheet p-5 sm:p-6">
          <Info aria-hidden="true" size={20} className="shrink-0 mt-0.5 text-signal" />
          <div>
            <p className="font-medium">Independent prototypes, not client work</p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft max-w-4xl">{explorationsNotice}</p>
          </div>
        </aside>

        {explorations.map((e, i) => {
          const [main, phone] = e.previews
          return (
            <article
              key={e.slug}
              id={e.slug}
              aria-labelledby={`e-${e.slug}`}
              className="scroll-mt-24 mt-16 sm:mt-24 border-t border-ink pt-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="label">
                  <span className="text-signal-text">E{String(i + 1).padStart(2, '0')}</span> · {e.subject}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-label px-2 py-1 bg-ink text-paper">
                  Independent concept · Prototype
                </p>
              </div>

              <h2 id={`e-${e.slug}`} className="display mt-6 text-[clamp(2rem,3.6vw,3.25rem)]">{e.title}</h2>

              <div className="mt-8 grid grid-cols-12 gap-4 sm:gap-6 items-end">
                <figure className={phone ? 'col-span-12 md:col-span-9' : 'col-span-12'}>
                  <div className="border border-ink bg-sheet overflow-hidden">
                    <img
                      src={main.src}
                      width={main.width}
                      height={main.height}
                      alt={main.alt}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="block w-full h-auto"
                    />
                  </div>
                  <figcaption className="label mt-2.5">{main.label} · Screenshot of the prototype</figcaption>
                </figure>
                {phone && (
                  <figure className="hidden md:block md:col-span-3">
                    <div className="border border-ink bg-sheet overflow-hidden max-h-[34rem]">
                      <img
                        src={phone.src}
                        width={phone.width}
                        height={phone.height}
                        alt={phone.alt}
                        loading="lazy"
                        decoding="async"
                        className="block w-full h-auto"
                      />
                    </div>
                    <figcaption className="label mt-2.5">{phone.label}</figcaption>
                  </figure>
                )}
              </div>

              <div className="mt-10 grid lg:grid-cols-12 gap-x-8 gap-y-8">
                <div className="lg:col-span-6">
                  <Label>Design objective</Label>
                  <p className="mt-3 text-[17px] leading-[1.7] text-ink-soft">{e.objective}</p>
                </div>
                <div className="lg:col-span-3">
                  <Label>In the prototype</Label>
                  <ul className="mt-3 space-y-2 text-[15px]">
                    {e.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.55rem] w-2 h-[3px] bg-signal shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <Label>Built with</Label>
                    <Tags className="mt-3" items={e.stack} />
                  </div>
                  <div>
                    <Label>Live prototype</Label>
                    {e.liveUrl ? (
                      <ArrowLink className="mt-3" href={e.liveUrl}>Open the prototype</ArrowLink>
                    ) : (
                      <p className="mt-3 text-[15px] text-ink-muted">Not published online yet.</p>
                    )}
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <PageEnd current="/explorations" />
    </>
  )
}
