import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Shield, Code2, Brain, Cloud, Database, Wrench } from 'lucide-react'

const categories = [
  {
    icon: Shield,
    label: 'Cybersecurity',
    color: 'olive',
    skills: ['Kali Linux', 'Nmap', 'Wireshark', 'Splunk', 'Penetration Testing', 'Threat Hunting', 'OWASP', 'Linux Security'],
  },
  {
    icon: Code2,
    label: 'Development',
    color: 'sage',
    skills: ['Python', 'Flask', 'React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'REST APIs'],
  },
  {
    icon: Brain,
    label: 'AI & APIs',
    color: 'gold',
    skills: ['Claude API', 'Groq API', 'LLaMA 3', 'Prompt Engineering'],
  },
  {
    icon: Cloud,
    label: 'DevOps & Deployment',
    color: 'terracotta',
    skills: ['Vercel', 'Railway', 'GitHub Actions', 'Linux Administration'],
  },
  {
    icon: Database,
    label: 'Databases',
    color: 'sage',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Database Design', 'RBAC'],
  },
  {
    icon: Wrench,
    label: 'Tools & Workflow',
    color: 'olive',
    skills: ['Git & GitHub', 'VS Code', 'Postman', 'Figma', 'Notion', 'Trello', 'Linux Terminal'],
  },
]

const colorStyles = {
  olive: {
    icon: 'bg-olive-500/10 text-olive-600 dark:text-olive-300 border-olive-500/15',
    badge: 'bg-olive-500/8 text-olive-700 dark:text-olive-300 border-olive-500/15',
    glow: 'group-hover:shadow-[0_4px_24px_rgba(85,107,47,0.14)]',
  },
  sage: {
    icon: 'bg-sage-500/10 text-sage-600 dark:text-sage-400 border-sage-500/15',
    badge: 'bg-sage-500/8 text-sage-700 dark:text-sage-400 border-sage-500/15',
    glow: 'group-hover:shadow-[0_4px_24px_rgba(107,112,92,0.14)]',
  },
  gold: {
    icon: 'bg-gold/10 text-yellow-700 dark:text-gold border-gold/15',
    badge: 'bg-gold/8 text-yellow-700 dark:text-gold border-gold/15',
    glow: 'group-hover:shadow-[0_4px_24px_rgba(194,168,120,0.2)]',
  },
  terracotta: {
    icon: 'bg-terracotta/10 text-terracotta border-terracotta/15',
    badge: 'bg-terracotta/8 text-terracotta border-terracotta/15',
    glow: 'group-hover:shadow-[0_4px_24px_rgba(162,103,74,0.14)]',
  },
}

export default function Skills() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="skills" className="py-24 bg-cream dark:bg-[#111410] relative">
      <div className="absolute inset-0 bg-subtle-grid opacity-60" />

      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-6 section-reveal ${visible ? 'visible' : ''}`}
      >
        <div className="mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-olive-500 mb-3">
            Skills & Expertise
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-700 text-charcoal dark:text-cream leading-tight">
            Tools of the
            <br />
            <span className="text-gradient">craft.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ icon: Icon, label, color, skills }) => {
            const s = colorStyles[color]
            return (
              <div
                key={label}
                className={`group glass-card rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${s.glow}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${s.icon}`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="font-heading font-600 text-sm text-charcoal dark:text-cream">
                    {label}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium border ${s.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
