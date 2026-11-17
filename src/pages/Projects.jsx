import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import { projects } from '../content/projects'
import ProjectVisual from '../components/ProjectVisual'
import PageEnd from '../components/PageEnd'
import { ArrowLink, Label, PageHeader, Tags } from '../components/ui'

export default function Projects() {
  usePageMeta('Projects', 'Software, AI and security projects by Samantha Kissa, including CookSmart and CodeScribe.')

  return (
    <>
      <PageHeader
        n="03"
        section="Projects"
        title="Projects"
        lede="Software I have built and security work I have documented. Each one has its own page with the objective, the stack, and what I learned."
        aside={<p className="label">{projects.length} entries</p>}
      />

      <div className="frame">
        {projects.map((p, i) => (
          <article
            key={p.slug}
            aria-labelledby={`p-${p.slug}`}
            className="grid lg:grid-cols-12 gap-x-8 gap-y-8 py-12 sm:py-16 border-t border-ink"
          >
            <div className="lg:col-span-5 flex flex-col">
              <p className="label">
                <span className="text-signal-text">P{String(i + 1).padStart(2, '0')}</span> · {p.category} · {p.year}
              </p>
              <h2 id={`p-${p.slug}`} className="display mt-4 text-[clamp(2rem,3.6vw,3.25rem)]">
                <Link to={`/projects/${p.slug}`} className="hover:text-signal transition-colors">{p.title}</Link>
              </h2>
              <p className="mt-4 display-narrow text-xl text-ink-soft">{p.tagline}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{p.summary}</p>
              <div className="mt-6">
                <Label>Objective</Label>
                <p className="mt-2 text-[15px] leading-relaxed">{p.objective}</p>
              </div>
              <Tags className="mt-6" items={p.stack} />
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                <ArrowLink href={`/projects/${p.slug}`}>Full case study</ArrowLink>
                {p.links.map((l) => (
                  <ArrowLink key={l.href} href={l.href}>{l.label}</ArrowLink>
                ))}
              </div>
            </div>
            <Link to={`/projects/${p.slug}`} className="lg:col-span-7 block group" tabIndex={-1} aria-hidden="true">
              <ProjectVisual visual={p.visual} priority={i === 0} className="transition-transform group-hover:-translate-y-0.5" />
            </Link>
          </article>
        ))}
      </div>

      <PageEnd current="/projects" />
    </>
  )
}
