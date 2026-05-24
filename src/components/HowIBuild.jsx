import { motion } from 'framer-motion'
import { Shield, Brain, Layers, Cloud, Terminal } from 'lucide-react'

const principles = [
  {
    number: '01',
    icon: Shield,
    color: 'olive',
    title: 'Security-First Design',
    body: 'Threat modeling before writing the first line of backend code. Access control, input validation, and least-privilege are architecture decisions — not afterthoughts added before launch.',
  },
  {
    number: '02',
    icon: Brain,
    color: 'gold',
    title: 'AI as Infrastructure',
    body: 'LLMs are components in a larger system. I design prompts as interfaces, chain models with purpose, and always account for failure modes, hallucination risks, and graceful degradation.',
  },
  {
    number: '03',
    icon: Layers,
    color: 'sage',
    title: 'Systems Thinking',
    body: 'I map data flow and trust boundaries before touching the keyboard. Understanding what talks to what — and who can access what — shapes every architectural decision.',
  },
  {
    number: '04',
    icon: Cloud,
    color: 'terracotta',
    title: 'Deployment Discipline',
    body: 'Every project ships with environment configs, migration scripts, and health checks. Deployment is part of the build — not something figured out at the end.',
  },
  {
    number: '05',
    icon: Terminal,
    color: 'olive',
    title: 'Debug from Evidence',
    body: 'Logs, not guesses. I trace issues from the request boundary inward — structured logging, network inspection, and systematic isolation to find root causes.',
  },
]

const colorStyles = {
  olive: {
    number: 'text-olive-500/25 dark:text-olive-500/20',
    icon:   'bg-olive-500/10 text-olive-600 dark:text-olive-300 border-olive-500/20',
    accent: 'group-hover:border-l-olive-500',
  },
  gold: {
    number: 'text-gold/35 dark:text-gold/25',
    icon:   'bg-gold/10 text-yellow-700 dark:text-gold border-gold/20',
    accent: 'group-hover:border-l-gold',
  },
  sage: {
    number: 'text-sage-500/30 dark:text-sage-500/20',
    icon:   'bg-sage-500/10 text-sage-600 dark:text-sage-400 border-sage-500/20',
    accent: 'group-hover:border-l-sage-500',
  },
  terracotta: {
    number: 'text-terracotta/30',
    icon:   'bg-terracotta/10 text-terracotta border-terracotta/20',
    accent: 'group-hover:border-l-terracotta',
  },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function HowIBuild() {
  return (
    <section id="process" className="py-24 bg-cream dark:bg-[#111410] relative">
      <div className="absolute inset-0 bg-subtle-grid opacity-60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-olive-500 mb-3">
            Engineering Process
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-700 text-charcoal dark:text-cream leading-tight">
            How I
            <br />
            <span className="text-gradient">approach building.</span>
          </h2>
          <p className="mt-4 font-body text-base text-charcoal/60 dark:text-cream/60 max-w-xl leading-relaxed">
            Five principles that shape every project — from the first design decision to the final deployment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {principles.map(({ number, icon: Icon, color, title, body }) => {
            const s = colorStyles[color]
            return (
              <motion.div
                key={title}
                variants={itemVariants}
                className={`group glass-card rounded-2xl p-6 border border-l-2 border-l-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${s.accent}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${s.icon}`}>
                    <Icon size={18} />
                  </div>
                  <span className={`font-mono text-3xl font-700 leading-none select-none ${s.number}`}>
                    {number}
                  </span>
                </div>
                <h3 className="font-heading font-600 text-sm text-charcoal dark:text-cream mb-2 leading-tight">
                  {title}
                </h3>
                <p className="font-body text-xs text-charcoal/60 dark:text-cream/60 leading-relaxed">
                  {body}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
