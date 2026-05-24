import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { GraduationCap, Shield, Brain, Globe, Award, Users } from 'lucide-react'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Final Year IT Student',
    description: 'Pursuing a Bachelor\'s in Information Technology with focus on secure systems and software engineering.',
    color: 'olive',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Fellow',
    description: 'Tech4Dev Women Techsters Fellowship — hands-on penetration testing, threat hunting, and Linux security.',
    color: 'sage',
  },
  {
    icon: Brain,
    title: 'AI & Full-Stack Developer',
    description: 'Building AI-powered web applications with React, Flask, and LLM APIs including Claude and LLaMA 3.',
    color: 'gold',
  },
  {
    icon: Globe,
    title: 'Aspire Leadership Fellow',
    description: 'Harvard-affiliated leadership program — ethical leadership, adaptive problem-solving, and cross-cultural collaboration.',
    color: 'terracotta',
  },
]

const colorMap = {
  olive: 'bg-olive-500/10 text-olive-600 dark:text-olive-300 border-olive-500/15',
  sage: 'bg-sage-500/10 text-sage-600 dark:text-sage-400 border-sage-500/15',
  gold: 'bg-gold/10 text-yellow-700 dark:text-gold border-gold/15',
  terracotta: 'bg-terracotta/10 text-terracotta dark:text-terracotta/90 border-terracotta/15',
}

export default function About() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="about" className="py-24 bg-white/60 dark:bg-[#131610] relative">
      <div className="absolute inset-0 bg-subtle-grid opacity-50" />

      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto px-6 section-reveal ${visible ? 'visible' : ''}`}
      >
        {/* Section header */}
        <div className="mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-olive-500 mb-3">
            About Me
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-700 text-charcoal dark:text-cream leading-tight">
            Building for a
            <br />
            <span className="text-gradient">secure Africa.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT: Bio */}
          <div className="space-y-6">
            <p className="font-body text-base sm:text-lg text-charcoal/70 dark:text-cream/70 leading-relaxed">
              I&apos;m <strong className="text-charcoal dark:text-cream">Samantha Kissa</strong>, a final-year Information Technology student and aspiring cybersecurity engineer from Uganda. I sit at the intersection of security, software engineering, and artificial intelligence — building systems that are not only functional, but resilient and forward-thinking.
            </p>
            <p className="font-body text-base text-charcoal/65 dark:text-cream/65 leading-relaxed">
              Through the <span className="text-olive-600 dark:text-olive-300 font-medium">Tech4Dev Women Techsters Cybersecurity Fellowship</span>, I've gained hands-on experience in penetration testing, threat intelligence, and Linux security administration. Alongside this, I develop AI-powered full-stack applications that integrate large language models to solve real-world problems for African users.
            </p>
            <p className="font-body text-base text-charcoal/65 dark:text-cream/65 leading-relaxed">
              I believe that Africa's digital future depends on those of us who understand both the <span className="font-medium text-charcoal dark:text-cream">power of technology</span> and the <span className="font-medium text-charcoal dark:text-cream">responsibility of security</span>. My work is driven by a commitment to building systems that communities can trust.
            </p>

            {/* Quote block */}
            <blockquote className="mt-8 pl-4 border-l-2 border-gold/60">
              <p className="font-heading text-lg italic text-charcoal/60 dark:text-cream/60 leading-relaxed">
                "Security is not a feature — it&apos;s a foundation. I build with that mindset from day one."
              </p>
            </blockquote>
          </div>

          {/* RIGHT: Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, description, color }) => (
              <div
                key={title}
                className={`glass-card rounded-2xl p-5 border hover-lift transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3 ${colorMap[color]}`}>
                  <Icon size={18} />
                </div>
                <h3 className="font-heading font-600 text-sm text-charcoal dark:text-cream mb-1.5 leading-tight">
                  {title}
                </h3>
                <p className="font-body text-xs text-charcoal/60 dark:text-cream/60 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: '4+', label: 'Years of learning' },
            { value: '1', label: 'Shipped project' },
            { value: '5', label: 'Certifications' },
            { value: '2', label: 'Fellowships' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-heading text-3xl font-700 text-gradient mb-1">{value}</p>
              <p className="font-body text-sm text-charcoal/55 dark:text-cream/55">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
