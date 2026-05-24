import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Award, Shield, Brain, Terminal, BookOpen, Cloud } from 'lucide-react'

const certs = [
  {
    icon: Brain,
    title: 'AI for Beginners',
    issuer: 'Microsoft / LinkedIn Learning',
    year: '2024',
    color: 'gold',
    description: 'Foundations of artificial intelligence, machine learning concepts, and practical AI applications.',
  },
  {
    icon: Shield,
    title: 'Cyber Threat Hunting',
    issuer: 'Tech4Dev Women Techsters',
    year: '2024',
    color: 'olive',
    description: 'Advanced threat detection methodologies, IOC analysis, and proactive security hunting techniques.',
  },
  {
    icon: BookOpen,
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco / NetAcad',
    year: '2023',
    color: 'sage',
    description: 'Comprehensive overview of cybersecurity principles, network security, and digital safety practices.',
  },
  {
    icon: Cloud,
    title: 'AWS AI Practitioner Challenge',
    issuer: 'Amazon Web Services',
    year: '2026',
    color: 'terracotta',
    description: 'Foundations of AI/ML on AWS, including core AI services, responsible AI practices, and cloud-based machine learning workflows.',
  },
  {
    icon: Terminal,
    title: 'Introduction to Kali Linux',
    issuer: 'Offensive Security',
    year: '2024',
    color: 'terracotta',
    description: 'Hands-on Kali Linux usage for penetration testing, security auditing, and ethical hacking workflows.',
  },
]

const colorStyles = {
  olive: {
    icon: 'bg-olive-500/12 text-olive-600 dark:text-olive-300 border-olive-500/20',
    year: 'text-olive-600 dark:text-olive-300',
    bar: 'bg-olive-500',
  },
  sage: {
    icon: 'bg-sage-500/12 text-sage-600 dark:text-sage-400 border-sage-500/20',
    year: 'text-sage-600 dark:text-sage-400',
    bar: 'bg-sage-500',
  },
  gold: {
    icon: 'bg-gold/12 text-yellow-700 dark:text-gold border-gold/20',
    year: 'text-yellow-700 dark:text-gold',
    bar: 'bg-gold',
  },
  terracotta: {
    icon: 'bg-terracotta/12 text-terracotta border-terracotta/20',
    year: 'text-terracotta',
    bar: 'bg-terracotta',
  },
}

export default function Certifications() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="certifications" className="py-24 bg-white/60 dark:bg-[#131610] relative">
      <div className="absolute inset-0 bg-subtle-grid opacity-40" />

      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-6 section-reveal ${visible ? 'visible' : ''}`}
      >
        <div className="mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-olive-500 mb-3">
            Certifications
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-700 text-charcoal dark:text-cream leading-tight">
            Credentials &amp;
            <br />
            <span className="text-gradient">continuous learning.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map(({ icon: Icon, title, issuer, year, color, description }, i) => {
            const s = colorStyles[color]
            return (
              <div
                key={title}
                className="group glass-card rounded-2xl p-6 border hover-lift transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${s.icon}`}>
                    <Icon size={20} />
                  </div>
                  <span className={`text-xs font-semibold ${s.year}`}>{year}</span>
                </div>

                {/* Color bar */}
                <div className={`h-0.5 w-8 rounded-full ${s.bar} mb-4 transition-all duration-300 group-hover:w-16`} />

                <h3 className="font-heading font-600 text-sm text-charcoal dark:text-cream leading-tight mb-1.5">
                  {title}
                </h3>
                <p className="font-body text-xs text-olive-600 dark:text-olive-300 font-medium mb-3">
                  {issuer}
                </p>
                <p className="font-body text-xs text-charcoal/55 dark:text-cream/55 leading-relaxed">
                  {description}
                </p>

                {/* Award badge */}
                <div className="mt-4 flex items-center gap-1.5 text-xs text-charcoal/40 dark:text-cream/40">
                  <Award size={11} />
                  <span>Verified Certificate</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
