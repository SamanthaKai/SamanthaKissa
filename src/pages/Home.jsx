import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import { person, contact, pages } from '../content/site'
import { intro, interests } from '../content/about'
import { projects } from '../content/projects'
import { explorations } from '../content/explorations'
import ProjectVisual from '../components/ProjectVisual'
import { ArrowLink, Button, FactList, Label, SectionHead, Tags } from '../components/ui'

export default function Home() {
  usePageMeta(
    null,
    'Samantha Kissa is an IT graduate in Kampala, Uganda, working across cybersecurity, security operations, AI and software development.',
  )
  const [featured, ...rest] = projects

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section aria-labelledby="hero-title" className="frame pt-8 sm:pt-12">
        <div className="flex items-center justify-between border-b border-ink pb-3">
          <p className="label text-ink">
            <span className="text-signal-text">01</span> / Index
          </p>
          <p className="label">Portfolio · 2026</p>
        </div>

        <h1 id="hero-title" className="display uppercase text-[clamp(2.75rem,7vw,6.25rem)] pt-6 sm:pt-8 -ml-[0.04em]">
          Samantha
          <br />
          Kissa<span className="text-signal">.</span>
        </h1>

        <div className="mt-8 sm:mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-12 border-t border-ink pt-8">
          <div className="sm:col-span-7 lg:col-span-5">
            <p className="display-narrow text-[1.6rem] sm:text-[2rem] leading-[1.12]">
              IT professional focused on cybersecurity, security operations, artificial intelligence and software development.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-lg">
              {intro} I practise security operations, investigate simulated incidents, and build AI-powered web applications.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects" icon={ArrowRight}>View projects</Button>
              <Button href="/contact" variant="outline">Get in touch</Button>
            </div>
          </div>

          {/* Phones: after the intro. Tablets: beside it. Desktop: the far-right column. */}
          <figure className="w-full max-w-sm sm:max-w-none sm:col-span-5 lg:col-span-3 lg:col-start-10 lg:row-start-1">
            <div className="border border-ink bg-sheet">
              <img
                src={person.photo.src}
                width={person.photo.width}
                height={person.photo.height}
                alt={person.photo.alt}
                fetchpriority="high"
                className="block w-full aspect-[4/5] object-cover object-[50%_22%] grayscale-[15%]"
              />
            </div>
            <figcaption className="label mt-2.5">Fig. 01 · {person.name}</figcaption>
          </figure>

          <div className="sm:col-span-12 lg:col-span-4 lg:col-start-6 lg:row-start-1">
            <Label>Record</Label>
            <FactList
              className="mt-3"
              items={[
                { label: 'Based in', value: person.location },
                { label: 'Education', value: 'BIT, Mbarara University of Science and Technology, 2026' },
                { label: 'Focus', value: 'SOC analysis, incident response, AI-integrated software' },
                { label: 'Status', value: 'Open to entry-level roles, internships and fellowships' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── Areas of practice ────────────────────────────── */}
      <section aria-labelledby="practice-title" className="frame mt-28 sm:mt-36">
        <SectionHead
          id="practice-title"
          index="A–D / Areas of practice"
          title="What I work on"
          action={<ArrowLink href="/about">More about me</ArrowLink>}
        />
        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rule border border-rule">
          {interests.map((it) => (
            <li key={it.key} className="flex flex-col bg-paper p-6 sm:p-7">
              <span className="display text-4xl text-signal" aria-hidden="true">{it.key}</span>
              <h3 className="display-narrow mt-6 text-xl">{it.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft flex-1">{it.body}</p>
              <Tags className="mt-6" items={it.tools.slice(0, 5)} />
            </li>
          ))}
        </ul>
      </section>

      {/* ── Selected projects ────────────────────────────── */}
      <section aria-labelledby="work-title" className="frame mt-28 sm:mt-36">
        <SectionHead
          id="work-title"
          index="03 / Projects"
          title="Selected projects"
          action={<ArrowLink href="/projects">All projects</ArrowLink>}
        />

        <article className="mt-10 grid lg:grid-cols-12 gap-x-8 gap-y-8 items-start">
          <Link to={`/projects/${featured.slug}`} className="lg:col-span-7 block group" aria-label={`${featured.title} case study`}>
            <ProjectVisual visual={featured.visual} className="transition-transform group-hover:-translate-y-0.5" />
          </Link>
          <div className="lg:col-span-5">
            <Label>{featured.category} · {featured.year}</Label>
            <h3 className="display text-[clamp(2rem,3.6vw,3.25rem)] mt-3">{featured.title}</h3>
            <p className="mt-4 display-narrow text-xl text-ink-soft">{featured.tagline}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{featured.summary}</p>
            <Tags className="mt-6" items={featured.stack} />
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <ArrowLink href={`/projects/${featured.slug}`}>Read the case study</ArrowLink>
              <ArrowLink href={featured.links[0].href}>Live site</ArrowLink>
            </div>
          </div>
        </article>

        <div className="mt-16 grid md:grid-cols-2 gap-x-8 gap-y-14">
          {rest.map((p) => (
            <article key={p.slug}>
              <Link to={`/projects/${p.slug}`} className="block group" aria-label={`${p.title} case study`}>
                <ProjectVisual visual={p.visual} showCaption={false} className="transition-transform group-hover:-translate-y-0.5" />
              </Link>
              <Label className="mt-5">{p.category} · {p.year}</Label>
              <h3 className="display-narrow text-[1.9rem] mt-2">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.tagline}</p>
              <ArrowLink className="mt-5" href={`/projects/${p.slug}`}>Read more</ArrowLink>
            </article>
          ))}
        </div>
      </section>

      {/* ── Design explorations teaser ───────────────────── */}
      <section aria-labelledby="explore-title" className="mt-28 sm:mt-36 bg-sheet border-y border-rule">
        <div className="frame py-14 sm:py-20 grid lg:grid-cols-12 gap-x-8 gap-y-10">
          <div className="lg:col-span-4">
            <Label><span className="text-signal-text">04</span> / Design explorations</Label>
            <h2 id="explore-title" className="display-narrow mt-3 text-[1.9rem] sm:text-[2.4rem]">Independent website concepts</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Practice prototypes I designed and built on my own initiative. They are concepts, not client work.
            </p>
            <ArrowLink className="mt-6" href="/explorations">See the explorations</ArrowLink>
          </div>
          <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {explorations.map((e) => (
              <li key={e.slug}>
                <Link to={`/explorations#${e.slug}`} className="group block">
                  <div className="border border-ink overflow-hidden bg-paper">
                    <img
                      src={e.previews[0].src}
                      width={e.previews[0].width}
                      height={e.previews[0].height}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="block w-full aspect-[16/10] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-3 text-[15px] font-medium group-hover:text-signal-text">{e.title}</p>
                  <p className="label mt-1">Concept · Prototype</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Index ────────────────────────────────────────── */}
      <section aria-labelledby="index-title" className="frame mt-28 sm:mt-36">
        <SectionHead id="index-title" index="Contents" title="Read the full file" />
        <ul className="mt-8">
          {pages.slice(1).map(({ n, to, label, blurb }) => (
            <li key={to} className="border-b border-rule">
              <Link to={to} className="group grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[4rem_1fr_1fr_auto] items-center gap-x-4 py-5 sm:py-6 hover:bg-ink hover:text-paper transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6">
                <span className="font-mono text-xs text-signal-text group-hover:text-signal-bright">{n}</span>
                <span className="display text-[1.4rem] sm:text-[1.9rem]">{label}</span>
                <span className="hidden sm:block text-[15px] text-ink-muted group-hover:text-paper/70">{blurb}</span>
                <ArrowRight aria-hidden="true" size={22} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Contact invitation ───────────────────────────── */}
      <section aria-labelledby="cta-title" className="mt-28 sm:mt-36 bg-ink text-paper">
        <div className="frame py-16 sm:py-24 grid lg:grid-cols-12 gap-x-8 gap-y-10">
          <div className="lg:col-span-7">
            <Label className="text-paper/50"><span className="text-signal-bright">07</span> / Contact</Label>
            <h2 id="cta-title" className="display mt-5 text-[clamp(2rem,3.6vw,3.25rem)]">
              Have a role, internship or project in mind?
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-[17px] leading-relaxed text-paper/75">
              I&apos;m open to opportunities in cybersecurity, AI and software development, and happy to talk security with anyone who is curious.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-6 inline-flex items-center gap-2 text-lg sm:text-xl font-medium text-paper border-b border-paper/30 hover:border-signal-bright hover:text-signal-bright self-start break-all transition-colors"
            >
              {contact.email}
              <ArrowUpRight aria-hidden="true" size={20} className="shrink-0" />
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="light" icon={ArrowRight}>Contact page</Button>
              <Button href={contact.cv.href} download={contact.cv.filename} variant="ghostLight" icon={Download}>Download CV</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
