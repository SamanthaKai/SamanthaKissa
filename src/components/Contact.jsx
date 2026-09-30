import { useState } from 'react'
import Section from './Section'

const links = [
  {
    label: 'Email',
    value: 'kissasamantha123@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kissasamantha123@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/samantha-kissa5710',
    href: 'https://www.linkedin.com/in/samantha-kissa5710',
  },
  {
    label: 'GitHub',
    value: 'github.com/SamanthaKai',
    href: 'https://github.com/SamanthaKai',
  },
]

const inputClass =
  'w-full px-3.5 py-2.5 rounded-md bg-white dark:bg-white/[0.03] border border-charcoal/15 dark:border-cream/15 text-charcoal dark:text-cream text-sm placeholder:text-charcoal/35 dark:placeholder:text-cream/35 focus:outline-none focus:border-olive-600 dark:focus:border-olive-300 transition-colors'

const labelClass = 'block text-sm text-charcoal/70 dark:text-cream/70 mb-1.5'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  function handleChange(e) {
    if (status === 'error') setStatus(null)
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '5b411f62-51c1-4cce-af12-e6d5eb95feed',
          ...form,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section
      id="contact"
      title="Let's Connect"
      intro="If you'd like to talk about a project, an opportunity, cybersecurity, technology, or just connect, I'd be happy to hear from you."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-sm text-charcoal/55 dark:text-cream/55">
            Kampala, Uganda | Open to remote opportunities
          </p>

          <dl className="mt-6 space-y-4">
            {links.map(({ label, value, href }) => (
              <div key={label}>
                <dt className="text-sm text-charcoal/50 dark:text-cream/50">{label}</dt>
                <dd>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-charcoal dark:text-cream underline decoration-charcoal/20 dark:decoration-cream/20 underline-offset-4 hover:decoration-olive-600 dark:hover:decoration-olive-300 transition-colors break-all"
                  >
                    {value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <h3 className="font-medium text-charcoal dark:text-cream">Currently open to</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70 dark:text-cream/70">
              Internships, entry-level opportunities, fellowship programmes, and collaborative projects in cybersecurity, AI, and software development.
            </p>
          </div>
        </div>

        <div>
          {status === 'sent' ? (
            <div className="rounded-lg border border-charcoal/10 dark:border-cream/10 p-6">
              <h3 className="font-medium text-charcoal dark:text-cream">Message sent</h3>
              <p className="mt-2 text-sm text-charcoal/70 dark:text-cream/70">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => { setStatus(null); setForm({ name: '', email: '', subject: '', message: '' }) }}
                className="mt-4 text-sm font-medium text-olive-600 dark:text-olive-300 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-medium text-charcoal dark:text-cream mb-2">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className={labelClass}>Name</label>
                  <input id="name" type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input id="email" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>Subject</label>
                <input id="subject" type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="What's this about?" className={inputClass} />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell me what you have in mind..." className={`${inputClass} resize-none`} />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-5 py-2.5 rounded-md bg-olive-600 text-white text-sm font-medium hover:bg-olive-700 disabled:opacity-60 transition-colors"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}
