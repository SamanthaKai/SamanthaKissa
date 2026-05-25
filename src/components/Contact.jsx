import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Mail, Send, MapPin, CheckCircle2, Linkedin, Github } from 'lucide-react'

const socials = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kissasamantha123@gmail.com',
    href: 'mailto:kissasamantha123@gmail.com',
    color: 'olive',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/samantha-kissa5710',
    href: 'https://www.linkedin.com/in/samantha-kissa5710',
    color: 'sage',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/SamanthaKai',
    href: 'https://github.com/SamanthaKai',
    color: 'gold',
  },
]

const colorStyles = {
  olive: 'bg-olive-500/10 text-olive-600 dark:text-olive-300 border-olive-500/20',
  sage: 'bg-sage-500/10 text-sage-600 dark:text-sage-400 border-sage-500/20',
  gold: 'bg-gold/10 text-yellow-700 dark:text-gold border-gold/20',
}

export default function Contact() {
  const [ref, visible] = useIntersectionObserver()
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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige via-cream to-white dark:from-[#1a1c14] dark:via-[#131610] dark:to-[#111410]" />
      <div className="absolute inset-0 bg-subtle-grid opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-olive-500/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gold/8 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-6 section-reveal ${visible ? 'visible' : ''}`}
      >
        <div className="mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-olive-500 mb-3">
            Contact
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-700 text-charcoal dark:text-cream leading-tight">
            Let&apos;s build
            <br />
            <span className="text-gradient">something together.</span>
          </h2>
          <p className="mt-4 font-body text-base text-charcoal/60 dark:text-cream/60 max-w-lg leading-relaxed">
            Whether it&apos;s a project collaboration, fellowship opportunity, or just to connect — my inbox is open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Left: contact info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm text-charcoal/50 dark:text-cream/50 mb-2">
              <MapPin size={14} className="text-olive-500" />
              <span>Kampala, Uganda · Open to remote</span>
            </div>

            {socials.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-4 p-4 glass-card rounded-xl border hover-lift transition-all duration-200 group`}
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${colorStyles[color]}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-body text-xs text-charcoal/45 dark:text-cream/45 mb-0.5">{label}</p>
                  <p className="font-body text-sm font-medium text-charcoal dark:text-cream group-hover:text-olive-600 dark:group-hover:text-olive-300 transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* Availability note */}
            <div className="mt-6 p-4 rounded-xl bg-olive-500/8 border border-olive-500/15">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="font-heading text-sm font-600 text-olive-600 dark:text-olive-300">
                  Currently available
                </p>
              </div>
              <p className="font-body text-xs text-charcoal/60 dark:text-cream/60 leading-relaxed">
                Open to internships, part-time roles, fellowship programs, and collaborative projects in cybersecurity, AI engineering, or full-stack development.
              </p>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="glass-card rounded-2xl border p-6 sm:p-8">
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                <CheckCircle2 size={48} className="text-olive-500 mb-4" />
                <h3 className="font-heading font-700 text-xl text-charcoal dark:text-cream mb-2">
                  Message sent!
                </h3>
                <p className="font-body text-sm text-charcoal/60 dark:text-cream/60">
                  Thanks for reaching out. I&apos;ll get back to you within 48 hours.
                </p>
                <button
                  onClick={() => { setStatus(null); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-6 px-4 py-2 rounded-lg text-sm font-medium text-olive-600 dark:text-olive-300 hover:bg-olive-500/10 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-heading font-600 text-lg text-charcoal dark:text-cream mb-5">
                  Send a message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-charcoal/60 dark:text-cream/60 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/50 dark:bg-white/5 border border-charcoal/12 dark:border-white/12 text-charcoal dark:text-cream text-sm placeholder:text-charcoal/30 dark:placeholder:text-cream/30 focus:outline-none focus:border-olive-500/50 focus:ring-1 focus:ring-olive-500/25 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-charcoal/60 dark:text-cream/60 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/50 dark:bg-white/5 border border-charcoal/12 dark:border-white/12 text-charcoal dark:text-cream text-sm placeholder:text-charcoal/30 dark:placeholder:text-cream/30 focus:outline-none focus:border-olive-500/50 focus:ring-1 focus:ring-olive-500/25 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal/60 dark:text-cream/60 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/50 dark:bg-white/5 border border-charcoal/12 dark:border-white/12 text-charcoal dark:text-cream text-sm placeholder:text-charcoal/30 dark:placeholder:text-cream/30 focus:outline-none focus:border-olive-500/50 focus:ring-1 focus:ring-olive-500/25 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal/60 dark:text-cream/60 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me what you have in mind..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/50 dark:bg-white/5 border border-charcoal/12 dark:border-white/12 text-charcoal dark:text-cream text-sm placeholder:text-charcoal/30 dark:placeholder:text-cream/30 focus:outline-none focus:border-olive-500/50 focus:ring-1 focus:ring-olive-500/25 transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-500 dark:text-red-400 text-center -mb-1">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-olive-500 text-cream font-medium text-sm hover:bg-olive-600 disabled:opacity-60 transition-all duration-200 shadow-card hover:shadow-card-hover"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
