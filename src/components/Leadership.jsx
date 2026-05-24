import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Users, Lightbulb, Globe, Heart, Star } from 'lucide-react'

const pillars = [
  {
    icon: Heart,
    title: 'Ethical Leadership',
    description: 'Leading with integrity, empathy, and accountability — making decisions that consider impact beyond the immediate.',
  },
  {
    icon: Users,
    title: 'Collaborative Excellence',
    description: 'Building high-performing teams through trust, open communication, and leveraging diverse perspectives.',
  },
  {
    icon: Lightbulb,
    title: 'Adaptive Problem-Solving',
    description: 'Navigating complexity and ambiguity with systems thinking and creative, data-informed solutions.',
  },
  {
    icon: Globe,
    title: 'African Innovation',
    description: 'Committed to driving digital transformation across Africa — building technology rooted in local context.',
  },
]

export default function Leadership() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="leadership" className="py-24 bg-cream dark:bg-[#111410] relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-olive-500/5 via-transparent to-gold/5" />
      <div className="absolute inset-0 bg-subtle-grid opacity-60" />

      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-6 section-reveal ${visible ? 'visible' : ''}`}
      >
        <div className="mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-olive-500 mb-3">
            Leadership
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-700 text-charcoal dark:text-cream leading-tight">
            Leading with
            <br />
            <span className="text-gradient">purpose.</span>
          </h2>
        </div>

        {/* Main leadership card */}
        <div className="glass-card rounded-3xl border overflow-hidden mb-10">
          <div className="grid lg:grid-cols-2">
            {/* Left: program info */}
            <div className="p-8 sm:p-10 bg-gradient-to-br from-olive-500/8 to-gold/6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-olive-500/15 border border-olive-500/25 flex items-center justify-center">
                  <Star size={20} className="text-olive-500" fill="currentColor" />
                </div>
                <div>
                  <p className="font-body text-xs text-charcoal/50 dark:text-cream/50 uppercase tracking-wider">
                    Harvard-Affiliated
                  </p>
                  <h3 className="font-heading font-700 text-lg text-charcoal dark:text-cream">
                    Aspire Leadership Program
                  </h3>
                </div>
              </div>

              <p className="font-body text-sm text-charcoal/70 dark:text-cream/70 leading-relaxed mb-6">
                Selected as an Aspire Fellow through a competitive application process, joining a global cohort of emerging leaders across Africa, Asia, and the Americas. The program is affiliated with Harvard Kennedy School's leadership development curriculum.
              </p>

              <p className="font-body text-sm text-charcoal/65 dark:text-cream/65 leading-relaxed mb-6">
                Through intensive workshops, case studies, and mentorship sessions, I developed frameworks for ethical decision-making, complex systems analysis, and leading across cultural and organisational boundaries.
              </p>

              <div className="flex flex-wrap gap-2">
                {['2024 Fellow', 'Harvard-Affiliated', 'Global Cohort', 'Leadership Certificate'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-olive-500/10 text-olive-700 dark:text-olive-300 border border-olive-500/20 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: pillars */}
            <div className="p-8 sm:p-10">
              <p className="font-body text-xs font-semibold tracking-wider uppercase text-charcoal/40 dark:text-cream/40 mb-6">
                Core Competencies
              </p>
              <div className="space-y-5">
                {pillars.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-heading font-600 text-sm text-charcoal dark:text-cream mb-1">
                        {title}
                      </h4>
                      <p className="font-body text-xs text-charcoal/60 dark:text-cream/60 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission statement */}
        <div className="text-center max-w-2xl mx-auto">
          <blockquote className="font-heading text-xl sm:text-2xl text-charcoal/70 dark:text-cream/70 leading-relaxed italic">
            "I don&apos;t just want to work in tech — I want to help <span className="text-gradient font-700 not-italic">shape how it grows</span> on the African continent."
          </blockquote>
          <p className="mt-4 font-body text-sm text-charcoal/40 dark:text-cream/40">— Samantha Kissa</p>
        </div>
      </div>
    </section>
  )
}
