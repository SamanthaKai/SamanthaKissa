import { motion } from 'framer-motion'
import { Lock, Brain, Terminal, Cloud, Shield, Fingerprint } from 'lucide-react'

const areas = [
  {
    icon: Lock,
    label: 'Secure Backend Architecture',
    detail: 'Flask hardening, JWT rotation, rate limiting, OWASP API Top 10 defenses',
    status: 'active',
    color: 'olive',
  },
  {
    icon: Brain,
    label: 'AI Agents & Tool Use',
    detail: 'Multi-agent workflows, tool calling, Anthropic SDK, MCP protocol',
    status: 'active',
    color: 'gold',
  },
  {
    icon: Terminal,
    label: 'Linux Privilege Escalation',
    detail: 'CTF challenges, red team fundamentals, post-exploitation techniques',
    status: 'active',
    color: 'terracotta',
  },
  {
    icon: Cloud,
    label: 'Cloud Security on AWS',
    detail: 'IAM policies, VPC design, S3 bucket hardening, CloudTrail auditing',
    status: 'learning',
    color: 'sage',
  },
  {
    icon: Shield,
    label: 'Prompt Injection Defense',
    detail: 'Secure LLM integration patterns, adversarial input testing, sanitization',
    status: 'active',
    color: 'olive',
  },
  {
    icon: Fingerprint,
    label: 'Zero Trust Architecture',
    detail: 'Identity-first security, microsegmentation, continuous verification models',
    status: 'learning',
    color: 'gold',
  },
]

const colorStyles = {
  olive: {
    icon:   'bg-olive-500/10 text-olive-600 dark:text-olive-300 border-olive-500/20',
    badge:  'bg-olive-500/8 text-olive-700 dark:text-olive-300 border-olive-500/15',
  },
  gold: {
    icon:   'bg-gold/10 text-yellow-700 dark:text-gold border-gold/20',
    badge:  'bg-gold/8 text-yellow-700 dark:text-gold border-gold/15',
  },
  terracotta: {
    icon:   'bg-terracotta/10 text-terracotta border-terracotta/20',
    badge:  'bg-terracotta/8 text-terracotta border-terracotta/15',
  },
  sage: {
    icon:   'bg-sage-500/10 text-sage-600 dark:text-sage-400 border-sage-500/20',
    badge:  'bg-sage-500/8 text-sage-700 dark:text-sage-400 border-sage-500/15',
  },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function CurrentlyExploring() {
  return (
    <section id="exploring" className="py-24 bg-white/60 dark:bg-[#131610] relative overflow-hidden">
      <div className="absolute inset-0 bg-subtle-grid opacity-40" />
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-olive-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-olive-500 mb-3">
            Growth
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-700 text-charcoal dark:text-cream leading-tight">
            Currently
            <br />
            <span className="text-gradient">exploring.</span>
          </h2>
          <p className="mt-4 font-body text-base text-charcoal/60 dark:text-cream/60 max-w-xl leading-relaxed">
            Security and AI move fast. These are the areas I'm actively studying, practicing in CTF environments, or building side projects around.
          </p>

          {/* Status legend */}
          <div className="flex items-center gap-5 mt-5">
            <div className="flex items-center gap-2 text-xs text-charcoal/50 dark:text-cream/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 status-active" />
              In progress
            </div>
            <div className="flex items-center gap-2 text-xs text-charcoal/50 dark:text-cream/50">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/70" />
              Exploring
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {areas.map(({ icon: Icon, label, detail, status, color }) => {
            const s = colorStyles[color]
            return (
              <motion.div
                key={label}
                variants={itemVariants}
                className="group glass-card rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${s.icon}`}>
                    <Icon size={16} />
                  </div>
                  {/* Status indicator */}
                  {status === 'active' ? (
                    <div className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 status-active" />
                      In progress
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-[10px] font-medium text-gold/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/70" />
                      Exploring
                    </div>
                  )}
                </div>

                <h3 className="font-heading font-600 text-sm text-charcoal dark:text-cream mb-1.5 leading-tight">
                  {label}
                </h3>
                <p className="font-body text-xs text-charcoal/55 dark:text-cream/55 leading-relaxed">
                  {detail}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
