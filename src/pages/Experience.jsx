import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import { roles, practice } from '../content/experience'
import PageEnd from '../components/PageEnd'
import { Label, PageHeader, SectionHead, Tags } from '../components/ui'

export default function Experience() {
  usePageMeta('Experience', 'Internships, fellowship and professional experience of Samantha Kissa in cybersecurity and data collection.')

  return (
    <>
      <PageHeader
        n="05"
        section="Experience"
        title="Experience"
        lede="Internships, a fellowship and fieldwork: what I did, what it involved, and what came out of it."
      />

      <ol className="frame" aria-label="Experience, newest first">
        {roles.map((r) => (
          <li key={r.org} className="grid lg:grid-cols-12 gap-x-8 gap-y-6 py-12 sm:py-14 border-t border-ink">
            <div className="lg:col-span-4">
              <p className="label text-ink">{r.when}</p>
              <p className="label mt-1">{r.type} · {r.where}</p>
              <h2 className="display-narrow mt-6 text-[1.9rem] sm:text-[2.25rem]">{r.org}</h2>
              <p className="mt-2 text-[15px] text-ink-soft">{r.role}</p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-[18px] leading-[1.65]">{r.intro}</p>
              <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-ink-soft">
                {r.points.map((p) => (
                  <li key={p} className="grid grid-cols-[1.25rem_1fr]">
                    <span aria-hidden="true" className="mt-[0.6rem] w-2 h-[3px] bg-signal" />
                    {p}
                  </li>
                ))}
              </ul>
              {r.outcome && (
                <p className="mt-6 border-l-[3px] border-signal pl-4 text-[15px] leading-relaxed">
                  <span className="label block mb-1">Outcome</span>
                  {r.outcome}
                </p>
              )}
              <Tags className="mt-6" items={r.tags} />
            </div>
          </li>
        ))}
      </ol>

      <section aria-labelledby="practice-title" className="frame mt-12">
        <SectionHead id="practice-title" index="Ongoing" title="Continuous practice" />
        <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rule border border-rule">
          {practice.map((p) => (
            <li key={p.title} className="bg-paper p-6">
              <p className="font-medium">{p.title}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
              {p.to && (
                <Link to={p.to} className="mt-3 inline-block text-sm font-medium border-b border-ink/30 hover:border-signal hover:text-signal-text">
                  See the project
                </Link>
              )}
            </li>
          ))}
        </ul>
        <Label className="mt-4">Each role is also covered in the CVs on the contact page.</Label>
      </section>

      <PageEnd current="/experience" />
    </>
  )
}
