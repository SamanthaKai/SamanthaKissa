import { Link } from 'react-router-dom'
import { pages, contact, person } from '../../content/site'
import { SmartLink } from '../ui'

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-paper mt-auto">
      <div className="frame pt-14 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="display text-[clamp(1.9rem,3.5vw,2.75rem)]">
              Samantha
              <br />
              Kissa<span className="text-signal-bright">.</span>
            </p>
            <p className="mt-5 text-paper/60 max-w-sm text-[15px] leading-relaxed">
              {person.role} working across cybersecurity, AI and software. {person.location}.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4">
            <p className="label text-paper/45">Index</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6">
              {pages.map(({ n, to, label }) => (
                <li key={to}>
                  <Link to={to} className="flex gap-3 py-1.5 text-[15px] text-paper/80 hover:text-signal-bright transition-colors">
                    <span className="font-mono text-[11px] text-paper/35 pt-1">{n}</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="label text-paper/45">Elsewhere</p>
            <ul className="mt-4 space-y-1.5 text-[15px]">
              <li><SmartLink href={`mailto:${contact.email}`} className="text-paper/80 hover:text-signal-bright break-all">{contact.email}</SmartLink></li>
              <li><SmartLink href={contact.linkedin} className="text-paper/80 hover:text-signal-bright">LinkedIn</SmartLink></li>
              <li><SmartLink href={contact.github} className="text-paper/80 hover:text-signal-bright">GitHub</SmartLink></li>
              <li><SmartLink href={contact.cv.href} download={contact.cv.filename} className="text-paper/80 hover:text-signal-bright">Download CV</SmartLink></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-5 border-t border-paper/15 flex flex-col sm:flex-row justify-between gap-2 font-mono text-[11px] text-paper/45">
          <p>© {year} {person.name}</p>
          <p>Built with React, Vite and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
