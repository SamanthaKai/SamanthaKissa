import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Shield, MapPin, Calendar, ChevronRight } from 'lucide-react'

const experiences = [
  {
    role: 'Cybersecurity Intern — SOC Analysis',
    org: 'Ubuntu Bridge Initiative (UBI)',
    period: 'Jun 2026 — Present',
    location: 'Remote',
    type: 'Internship',
    color: 'sage',
    description:
      'Competitive 10-stage cybersecurity internship programme. Selected for Cohort 1 (SOC Analysis track) from an overwhelming applicant pool. Performance-based progression with weekly deadlines.',
    achievements: [
      'Accepted into Cohort 1 — SOC Analysis track of the UBI Cybersecurity Internship Programme',
      'Completed Stage 0 — Foundations with a score of 94/100 (passing mark: 70)',
      'Demonstrated skills in reading auth logs, spotting dismissal patterns, and briefing non-technical leaders',
      'Advanced to Stage 1 — Applied Cryptography on the basis of capstone assessment results',
      'Earned access to the UBI Alumni Network (The Root Access Network) and exclusive cybersecurity workshops',
    ],
  },
  {
    role: 'Cybersecurity Intern',
    org: 'Karmix Tech',
    period: 'May — Aug 2026',
    location: 'Remote',
    type: 'Internship',
    color: 'terracotta',
    description:
      '3-month remote cybersecurity internship focused on real-world security tasks and industry-level projects to strengthen technical and professional skills.',
    achievements: [
      'Selected for cybersecurity internship programme (Intern ID: 5KT261203)',
      'Gaining hands-on exposure through real-world security tasks and industry-level projects',
      'Developing technical skills, problem-solving abilities, and professional workflows in a dynamic environment',
      'Eligible for Internship Completion Certificate and performance-based Letter of Recommendation',
    ],
  },
  {
    role: 'Cybersecurity Fellow',
    org: 'Tech4Dev Women Techsters',
    period: '2024 — Present',
    location: 'Remote / Lagos, Nigeria',
    type: 'Fellowship',
    color: 'olive',
    description:
      'Competitive cybersecurity fellowship for women in tech across Africa. Selected for intensive security training and real-world lab environments.',
    achievements: [
      'Completed hands-on penetration testing labs using Kali Linux, Nmap, and Wireshark',
      'Practiced threat intelligence gathering and cyber threat hunting techniques',
      'Implemented RBAC (Role-Based Access Control) systems for digital platforms',
      'Mastered Linux scripting, file permissions, and system hardening',
      'Conducted vulnerability assessments and documented security findings',
      'Participated in Capture The Flag (CTF) challenges and security simulations',
    ],
  },
  {
    role: 'Field Enumerator',
    org: 'UBOS — Uganda Bureau of Statistics',
    period: '2023',
    location: 'Uganda',
    type: 'Contract',
    color: 'gold',
    description:
      'Digital data collection officer for national census operations, deploying digital tools across communities.',
    achievements: [
      'Deployed digital data collection tools for national census operations',
      'Communicated technical processes clearly to non-technical communities',
      'Built trust with diverse populations during data collection exercises',
      'Maintained data integrity across thousands of household enumerations',
      'Coordinated with field teams to ensure accurate digital reporting',
    ],
  },
]

const colorStyles = {
  sage: {
    dot: 'bg-sage-500',
    badge: 'bg-sage-500/10 text-sage-600 dark:text-sage-400 border-sage-500/20',
    icon: 'text-sage-500',
  },
  terracotta: {
    dot: 'bg-terracotta',
    badge: 'bg-terracotta/10 text-terracotta border-terracotta/20',
    icon: 'text-terracotta',
  },
  olive: {
    dot: 'bg-olive-500',
    badge: 'bg-olive-500/10 text-olive-600 dark:text-olive-300 border-olive-500/20',
    icon: 'text-olive-500',
  },
  gold: {
    dot: 'bg-gold',
    badge: 'bg-gold/10 text-yellow-700 dark:text-gold border-gold/20',
    icon: 'text-gold',
  },
}

export default function Experience() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="experience" className="py-24 bg-white/60 dark:bg-[#131610] relative">
      <div className="absolute inset-0 bg-subtle-grid opacity-40" />

      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-6 section-reveal ${visible ? 'visible' : ''}`}
      >
        <div className="mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-olive-500 mb-3">
            Experience
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-700 text-charcoal dark:text-cream leading-tight">
            Where I&apos;ve
            <br />
            <span className="text-gradient">applied my work.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-olive-500/40 via-gold/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const s = colorStyles[exp.color]
              return (
                <div key={i} className="relative grid md:grid-cols-[48px_1fr] gap-0 md:gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center pt-6">
                    <div className={`w-3 h-3 rounded-full ${s.dot} ring-4 ring-cream dark:ring-[#131610] z-10`} />
                  </div>

                  {/* Card */}
                  <div className="glass-card rounded-2xl p-6 sm:p-8 border hover-lift">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-heading font-700 text-lg text-charcoal dark:text-cream mb-1">
                          {exp.role}
                        </h3>
                        <p className="font-body font-medium text-olive-600 dark:text-olive-300 text-sm">
                          {exp.org}
                        </p>
                      </div>
                      <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium border ${s.badge}`}>
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-charcoal/50 dark:text-cream/50 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="font-body text-sm text-charcoal/65 dark:text-cream/65 leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-charcoal/65 dark:text-cream/65">
                          <ChevronRight size={14} className={`mt-0.5 flex-shrink-0 ${s.icon}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
