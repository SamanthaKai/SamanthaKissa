import usePageMeta from '../hooks/usePageMeta'
import { background, interests, approach, languages, intro, skills, coursework } from '../content/about'
import { education, scholarships } from '../content/credentials'
import { person } from '../content/site'
import PageEnd from '../components/PageEnd'
import { ArrowLink, Label, PageHeader, SectionHead, Tags } from '../components/ui'

export default function About() {
  usePageMeta('About', 'Background, education and approach of Samantha Kissa, an IT graduate focused on cybersecurity, AI and software.')
  const degree = education[0]

  return (
    <>
      <PageHeader n="02" section="About" title="About" lede={intro} />

      {/* Background */}
      <section aria-labelledby="bg-title" className="frame grid lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4">
          <SectionHead id="bg-title" index="Background" title="Who I am" />
          <figure className="mt-8 max-w-[18rem]">
            <img
              src={person.photo.src}
              width={person.photo.width}
              height={person.photo.height}
              alt={person.photo.alt}
              loading="lazy"
              className="block w-full aspect-[4/5] object-cover object-[50%_22%] border border-ink"
            />
            <figcaption className="label mt-2.5">{person.location}</figcaption>
          </figure>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 border-t border-ink pt-8 lg:pt-16">
          <div className="prose-body text-[18px] leading-[1.7] text-ink-soft max-w-2xl">
            {background.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Education */}
      <section aria-labelledby="edu-title" className="frame mt-24 sm:mt-32">
        <SectionHead id="edu-title" index="Education" title="Where I studied" action={<ArrowLink href="/credentials">All credentials</ArrowLink>} />
        <div className="mt-8 grid lg:grid-cols-12 gap-x-8 gap-y-4 bg-ink text-paper p-6 sm:p-10">
          <div className="lg:col-span-7">
            <p className="label text-paper/50">{degree.when}</p>
            <p className="display mt-4 text-[clamp(1.75rem,3vw,2.5rem)]">{degree.title}</p>
            <p className="mt-3 text-lg text-paper/80">{degree.issuer}</p>
            <p className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-signal-bright">
              <span aria-hidden="true" className="w-2 h-2 bg-signal-bright" />
              {scholarships[0].title} recipient · {scholarships[0].when}
            </p>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 self-end text-[15px] leading-relaxed text-paper/70">{degree.detail}</p>
        </div>

        <details className="group border border-t-0 border-ink">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 sm:px-10 py-5 hover:bg-sheet [&::-webkit-details-marker]:hidden">
            <span className="font-medium">Full coursework</span>
            <span className="label group-open:hidden">Show</span>
            <span className="label hidden group-open:inline">Hide</span>
          </summary>
          <div className="px-6 sm:px-10 pb-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {coursework.map((c) => (
              <div key={c.group}>
                <p className="label text-ink">{c.group}</p>
                <ul className="mt-3 space-y-1.5 text-[15px] text-ink-soft">
                  {c.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </details>
      </section>

      {/* Interests */}
      <section aria-labelledby="int-title" className="frame mt-24 sm:mt-32">
        <SectionHead id="int-title" index="A–D / Interests" title="What I'm interested in" />
        <div className="mt-4">
          {interests.map((it) => (
            <article key={it.key} className="grid md:grid-cols-12 gap-x-8 gap-y-4 py-8 border-b border-rule">
              <p className="md:col-span-1 display text-3xl text-signal" aria-hidden="true">{it.key}</p>
              <h3 className="md:col-span-3 display-narrow text-2xl">{it.title}</h3>
              <p className="md:col-span-4 text-[15px] leading-relaxed text-ink-soft">{it.body}</p>
              <Tags className="md:col-span-4 content-start" items={it.tools} />
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section aria-labelledby="skills-title" className="frame mt-24 sm:mt-32">
        <SectionHead id="skills-title" index="Toolkit" title="Skills and tools" />
        <dl className="mt-4">
          {skills.map((s) => (
            <div key={s.group} className="grid md:grid-cols-12 gap-x-8 gap-y-3 py-5 border-b border-rule">
              <dt className="md:col-span-3 label text-ink pt-1">{s.group}</dt>
              <dd className="md:col-span-9"><Tags items={s.items} /></dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Approach */}
      <section aria-labelledby="app-title" className="frame mt-24 sm:mt-32">
        <SectionHead id="app-title" index="Method" title="How I approach problems" />
        <ol className="mt-10 grid sm:grid-cols-2 gap-px bg-rule border border-rule">
          {approach.map((a, i) => (
            <li key={a.title} className="bg-paper p-6 sm:p-8">
              <span className="font-mono text-xs text-signal-text">{String(i + 1).padStart(2, '0')}</span>
              <p className="display-narrow mt-4 text-[1.4rem]">{a.title}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{a.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Languages */}
      <section aria-labelledby="lang-title" className="frame mt-16 flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-10 border-t border-rule pt-5">
        <Label as="h2" id="lang-title">Languages</Label>
        <p className="text-[15px]">{languages.join(' · ')}</p>
      </section>

      <PageEnd current="/about" />
    </>
  )
}
