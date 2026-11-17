import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import { projects, projectBySlug } from '../content/projects'
import ProjectVisual from '../components/ProjectVisual'
import NotFound from './NotFound'
import { ArrowLink, FactList, Label, Tags } from '../components/ui'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projectBySlug(slug)
  usePageMeta(project?.title ?? 'Project not found', project?.tagline)

  if (!project) return <NotFound />

  const i = projects.indexOf(project)
  const next = projects[(i + 1) % projects.length]

  return (
    <article aria-labelledby="project-title">
      <header className="frame pt-10 sm:pt-14 lg:pt-20">
        <div className="flex items-center justify-between border-b border-ink pb-3">
          <Link to="/projects" className="label text-ink inline-flex items-center gap-2 hover:text-signal-text">
            <ArrowLeft aria-hidden="true" size={14} />
            <span><span className="text-signal-text">03</span> / Projects</span>
          </Link>
          <p className="label">{project.category} · {project.year}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-x-8 gap-y-8 pt-10 sm:pt-14 pb-12">
          <div className="lg:col-span-8">
            <h1 id="project-title" className="display text-[clamp(2.5rem,5.5vw,4.75rem)] break-words">{project.title}</h1>
            <p className="mt-6 display-narrow text-[1.5rem] sm:text-[1.9rem] leading-snug text-ink-soft max-w-3xl">{project.tagline}</p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end gap-4">
            {project.links.map((l) => (
              <ArrowLink key={l.href} href={l.href} className="self-start">{l.label}</ArrowLink>
            ))}
          </div>
        </div>
      </header>

      <div className="frame">
        <ProjectVisual visual={project.visual} priority />
      </div>

      <div className="frame mt-16 sm:mt-24 grid lg:grid-cols-12 gap-x-8 gap-y-14">
        <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-10">
          <div>
            <Label>Overview</Label>
            <FactList className="mt-3" items={project.facts} />
          </div>
          <div>
            <Label>Stack</Label>
            <Tags className="mt-3" items={project.stack} />
          </div>
          <div className="border-l-[3px] border-signal pl-4">
            <Label>Objective</Label>
            <p className="mt-2 text-[15px] leading-relaxed">{project.objective}</p>
          </div>
        </aside>

        <div className="lg:col-span-7 lg:col-start-6 space-y-16">
          <p className="text-[19px] leading-[1.65]">{project.summary}</p>

          {project.sections.map((s, si) => (
            <section key={s.title} aria-labelledby={`s-${si}`} className="border-t border-ink pt-5">
              <Label>{String(si + 1).padStart(2, '0')}</Label>
              <h2 id={`s-${si}`} className="display-narrow mt-3 text-[1.75rem]">{s.title}</h2>

              {s.body && (
                <div className="prose-body mt-5 text-[17px] leading-[1.7] text-ink-soft">
                  {s.body.map((p) => <p key={p}>{p}</p>)}
                </div>
              )}

              {s.flow && (
                <ol className="mt-8 border border-ink">
                  {s.flow.map((f, fi) => (
                    <li key={f.step} className="grid grid-cols-[3rem_1fr] sm:grid-cols-[3rem_1fr_auto] gap-x-4 gap-y-1 px-4 py-4 border-b last:border-b-0 border-rule">
                      <span className="font-mono text-xs text-signal-text pt-1">{String(fi + 1).padStart(2, '0')}</span>
                      <span className="text-[15px]">{f.step}</span>
                      <span className="col-start-2 sm:col-start-3 font-mono text-[11px] text-ink-muted sm:text-right pt-1">{f.where}</span>
                    </li>
                  ))}
                </ol>
              )}

              {s.items && (
                <dl className="mt-6 grid sm:grid-cols-2 gap-px bg-rule border border-rule">
                  {s.items.map((it) => (
                    <div key={it.title} className="bg-paper p-5">
                      <dt className="font-medium">{it.title}</dt>
                      <dd className="mt-2 text-[15px] leading-relaxed text-ink-soft">{it.body}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </section>
          ))}
        </div>
      </div>

      <nav aria-label="Next project" className="frame mt-24 sm:mt-32">
        <Link to={`/projects/${next.slug}`} className="group block border-t-2 border-ink pt-5 pb-12 sm:pb-16">
          <span className="label">Next project</span>
          <span className="mt-3 flex items-end justify-between gap-6">
            <span className="display text-[clamp(1.75rem,3.2vw,2.75rem)] group-hover:text-signal transition-colors">{next.title}</span>
            <ArrowRight aria-hidden="true" strokeWidth={1.5} className="shrink-0 w-7 h-7 sm:w-9 sm:h-9 mb-1 transition-transform group-hover:translate-x-2" />
          </span>
          <span className="mt-2 block text-ink-muted">{next.tagline}</span>
        </Link>
      </nav>
    </article>
  )
}
