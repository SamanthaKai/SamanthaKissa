import { useState } from 'react'
import { Container, Heading, Reveal, TextLink } from './ui'

const inputClass =
  'w-full px-0 py-2.5 bg-transparent border-0 border-b border-charcoal/20 dark:border-cream/20 text-charcoal dark:text-cream text-[15px] placeholder:text-charcoal/35 dark:placeholder:text-cream/35 focus:outline-none focus:ring-0 focus:border-olive-600 dark:focus:border-olive-300 transition-colors'

const labelClass = 'block text-sm text-charcoal/55 dark:text-cream/55'

const empty = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
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
    <section id="contact" className="py-24 sm:py-32 border-t border-charcoal/10 dark:border-cream/10">
      <Container className="grid lg:grid-cols-12 gap-x-10 gap-y-16">
        <Reveal className="lg:col-span-6">
          <Heading className="text-5xl sm:text-6xl">Let&apos;s talk.</Heading>
          <p className="mt-8 max-w-md text-[17px] leading-relaxed text-charcoal/75 dark:text-cream/75">
            I&apos;m open to entry-level roles, internships, fellowships and projects in cybersecurity, AI and software. If you&apos;d like to talk about any of those, or you just want to talk security, I&apos;d be glad to hear from you.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kissasamantha123@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block font-heading text-2xl sm:text-3xl text-charcoal dark:text-cream underline decoration-charcoal/25 dark:decoration-cream/25 underline-offset-8 hover:decoration-olive-600 dark:hover:decoration-olive-300 transition-colors break-all"
          >
            kissasamantha123@gmail.com
          </a>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
            <TextLink href="https://www.linkedin.com/in/samantha-kissa5710" external>LinkedIn</TextLink>
            <TextLink href="https://github.com/SamanthaKai" external>GitHub</TextLink>
          </div>
          <p className="mt-10 text-sm text-charcoal/50 dark:text-cream/50">Kampala, Uganda. Open to remote work.</p>
        </Reveal>

        <Reveal className="lg:col-span-5 lg:col-start-8">
          {status === 'sent' ? (
            <div className="border-t border-charcoal/15 dark:border-cream/15 pt-6">
              <p className="font-heading text-2xl text-charcoal dark:text-cream">Thank you.</p>
              <p className="mt-3 text-[15px] text-charcoal/70 dark:text-cream/70">
                Your message is on its way. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => { setStatus(null); setForm(empty) }}
                className="mt-6 text-sm font-medium text-olive-600 dark:text-olive-300 hover:underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <p className="text-sm text-charcoal/50 dark:text-cream/50">Or send a message here</p>

              <div className="grid sm:grid-cols-2 gap-7">
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
                <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Tell me what you have in mind..." className={`${inputClass} resize-none`} />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-6 py-3 rounded-full bg-charcoal dark:bg-cream text-paper dark:text-night text-sm font-medium hover:bg-olive-700 dark:hover:bg-olive-200 disabled:opacity-60 transition-colors"
              >
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}
        </Reveal>
      </Container>
    </section>
  )
}
