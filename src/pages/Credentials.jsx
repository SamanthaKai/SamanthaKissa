import usePageMeta from '../hooks/usePageMeta'
import { education, scholarships, certifications, training, communities } from '../content/credentials'
import PageEnd from '../components/PageEnd'
import { PageHeader, SectionHead } from '../components/ui'

function Register({ items, numbered }) {
  return (
    <ul className="mt-6">
      {items.map((c, i) => (
        <li key={c.title} className="grid sm:grid-cols-12 gap-x-6 gap-y-1 py-5 border-b border-rule">
          {numbered && <span className="hidden sm:block sm:col-span-1 font-mono text-xs text-signal-text pt-1.5">{String(i + 1).padStart(2, '0')}</span>}
          <div className={numbered ? 'sm:col-span-6' : 'sm:col-span-7'}>
            <p className="text-[17px] font-medium">{c.title}</p>
            {c.detail && <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft max-w-xl">{c.detail}</p>}
          </div>
          <p className="sm:col-span-3 text-[15px] text-ink-soft">{c.issuer}</p>
          <p className="sm:col-span-2 font-mono text-[12px] text-ink-muted sm:text-right pt-0.5">{c.when ?? ''}</p>
        </li>
      ))}
    </ul>
  )
}

export default function Credentials() {
  usePageMeta('Credentials', 'Education, certifications, training and professional communities of Samantha Kissa.')

  return (
    <>
      <PageHeader
        n="06"
        section="Credentials"
        title="Credentials"
        lede="Education, certificates, training and the communities I belong to. Dates are listed where the record states them."
      />

      <div className="frame space-y-24 sm:space-y-28">
        <section aria-labelledby="c-edu">
          <SectionHead id="c-edu" index="i / Education" title="Education" />
          <Register items={education} />
        </section>

        <section aria-labelledby="c-schol">
          <SectionHead id="c-schol" index="ii / Scholarships" title="Scholarships" />
          <Register items={scholarships} />
        </section>

        <section aria-labelledby="c-cert">
          <SectionHead id="c-cert" index="iii / Qualifications" title="Qualifications and certifications" />
          <Register items={certifications} numbered />
        </section>

        <section aria-labelledby="c-train">
          <SectionHead id="c-train" index="iv / Training" title="Training programmes" />
          <Register items={training} />
        </section>

        <section aria-labelledby="c-comm">
          <SectionHead id="c-comm" index="v / Communities" title="Fellowships and communities" />
          <Register items={communities} />
        </section>
      </div>

      <PageEnd current="/credentials" />
    </>
  )
}
