import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Download, Github, Linkedin, Mail } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import { contact, person } from '../content/site'
import PageEnd from '../components/PageEnd'
import { Label, PageHeader, SmartLink } from '../components/ui'

const channels = [
  { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}`, note: 'The best way to reach me' },
  { icon: Linkedin, label: 'LinkedIn', value: 'in/samantha-kissa5710', href: contact.linkedin, note: 'Professional profile' },
  { icon: Github, label: 'GitHub', value: 'SamanthaKai', href: contact.github, note: 'Source code for my projects' },
]

export default function Contact() {
  usePageMeta('Contact', 'Contact Samantha Kissa by email, LinkedIn or GitHub, or download her CV.')
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    let ok = false
    try {
      await navigator.clipboard.writeText(contact.email)
      ok = true
    } catch {
      // Fallback for browsers or contexts without the async clipboard API.
      const ta = document.createElement('textarea')
      ta.value = contact.email
      ta.setAttribute('readonly', '')
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try { ok = document.execCommand('copy') } catch { ok = false }
      ta.remove()
    }
    setCopied(ok)
    if (ok) setTimeout(() => setCopied(false), 2200)
  }

  return (
    <>
      <PageHeader
        n="07"
        section="Contact"
        title="Contact"
        lede="I'm open to entry-level roles, internships, fellowships and projects in cybersecurity, AI and software development. If you'd simply like to talk about security, I'd be happy to hear from you too."
        aside={<p className="label">{person.location} · Open to remote work</p>}
      />

      <div className="frame">
        <ul className="border-t border-ink">
          {channels.map(({ icon: Icon, label, value, href, note }) => (
            <li key={label} className="border-b border-rule">
              <SmartLink
                href={href}
                className="group grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[3rem_10rem_1fr_auto] items-center gap-x-4 gap-y-1 py-6 sm:py-8 -mx-4 px-4 sm:-mx-6 sm:px-6 hover:bg-ink hover:text-paper transition-colors"
              >
                <Icon aria-hidden="true" size={22} strokeWidth={1.75} className="text-signal group-hover:text-signal-bright" />
                <span className="label group-hover:text-paper/60 hidden sm:block">{label}</span>
                <span className="min-w-0">
                  <span className="display-narrow block text-[1.35rem] sm:text-[2.1rem] break-all">{value}</span>
                  <span className="block mt-1 text-sm text-ink-muted group-hover:text-paper/60">{note}</span>
                </span>
                <ArrowUpRight aria-hidden="true" size={24} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </SmartLink>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-ink text-sm font-medium hover:bg-ink hover:text-paper transition-colors"
          >
            {copied ? <Check aria-hidden="true" size={16} /> : <Copy aria-hidden="true" size={16} />}
            {copied ? 'Email copied' : 'Copy email address'}
          </button>
          <span role="status" aria-live="polite" className="sr-only">{copied ? 'Email address copied to clipboard' : ''}</span>
        </div>

        <section aria-labelledby="cv-title" className="mt-20 sm:mt-28 bg-ink text-paper p-6 sm:p-10 lg:p-14">
          <Label className="text-paper/50">Curriculum vitae</Label>
          <h2 id="cv-title" className="display mt-4 text-[clamp(2rem,3.6vw,3.25rem)]">Download my CV</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-paper/70 max-w-xl">
            Three versions: the full record, and two shorter ones depending on the kind of role.
          </p>
          <ul className="mt-10 grid md:grid-cols-3 gap-px bg-paper/15 border border-paper/15">
            {contact.cvs.map((cv) => (
              <li key={cv.key} className="bg-ink p-6 flex flex-col">
                <p className="display-narrow text-[1.4rem]">{cv.title}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-paper/70 flex-1">{cv.body}</p>
                <p className="mt-5 font-mono text-[11px] text-paper/45">{cv.meta}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <a
                    href={cv.href}
                    download={cv.filename}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-paper text-ink text-sm font-medium hover:bg-signal-bright transition-colors"
                  >
                    <Download aria-hidden="true" size={16} />
                    Download<span className="sr-only"> {cv.title}</span>
                  </a>
                  <a
                    href={cv.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-paper/70 border-b border-paper/30 hover:text-signal-bright hover:border-signal-bright"
                  >
                    View<span className="sr-only"> {cv.title} (opens in a new tab)</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <PageEnd current="/contact" />
    </>
  )
}
