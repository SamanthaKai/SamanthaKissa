import { motion } from 'framer-motion'
import { Globe, Server, Database, Brain } from 'lucide-react'

const layers = [
  {
    icon: Globe,
    label: 'React Frontend',
    sublabel: 'Vercel',
    role: 'User Interface Layer',
    iconClass: 'bg-olive-500/10 text-olive-600 dark:text-olive-300 border-olive-500/20',
    borderClass: 'border-l-olive-500/50',
    badgeClass: 'bg-olive-500/8 text-olive-700 dark:text-olive-300 border-olive-500/15',
    tech: ['React 18', 'Tailwind CSS', 'Vite', 'Axios'],
    detail: 'Component-based UI with custom hooks for state, real-time streaming display, and responsive layouts.',
    protocol: 'REST / JSON',
  },
  {
    icon: Server,
    label: 'Flask Backend API',
    sublabel: 'Railway',
    role: 'API & Orchestration Layer',
    iconClass: 'bg-sage-500/10 text-sage-600 dark:text-sage-400 border-sage-500/20',
    borderClass: 'border-l-sage-500/50',
    badgeClass: 'bg-sage-500/8 text-sage-700 dark:text-sage-400 border-sage-500/15',
    tech: ['Python 3.11', 'Flask', 'Gunicorn', 'psycopg2'],
    detail: 'Route handlers, LLM orchestration, input sanitization, rate limiting, and CORS management.',
    protocol: 'psycopg2 / SQL',
  },
  {
    icon: Database,
    label: 'PostgreSQL',
    sublabel: 'Railway Managed',
    role: 'Persistence Layer',
    iconClass: 'bg-gold/10 text-yellow-700 dark:text-gold border-gold/20',
    borderClass: 'border-l-gold/50',
    badgeClass: 'bg-gold/8 text-yellow-700 dark:text-gold border-gold/15',
    tech: ['PostgreSQL 15', 'Connection Pooling', 'Migrations'],
    detail: 'User profiles, recipe history, and dietary preferences with RBAC-enforced row-level access.',
    protocol: 'HTTPS / API Keys',
  },
  {
    icon: Brain,
    label: 'AI Layer',
    sublabel: 'Groq + Claude',
    role: 'Intelligence Layer',
    iconClass: 'bg-terracotta/10 text-terracotta border-terracotta/20',
    borderClass: 'border-l-terracotta/50',
    badgeClass: 'bg-terracotta/8 text-terracotta border-terracotta/15',
    tech: ['Groq API', 'LLaMA 3', 'Claude API', 'Prompt Engineering'],
    detail: 'Multi-model pipeline: LLaMA 3 for fast recipe generation, Claude for structured nutritional analysis.',
    protocol: null,
  },
]

const insights = [
  {
    title: 'Cross-Origin Architecture',
    body: 'Frontend and backend live on separate cloud platforms. CORS headers, preflight handling, and environment variable management are core infrastructure concerns — caught in production, not just dev.',
  },
  {
    title: 'Multi-Model Orchestration',
    body: 'Groq\'s LLaMA 3 handles fast recipe generation for low latency. Claude handles structured nutritional analysis where reasoning quality matters more than speed. Flask decides which model to call and when.',
  },
  {
    title: 'Security at Every Layer',
    body: 'API keys never touch the client bundle. User inputs are sanitized before prompt injection. Rate limiting on Flask routes protects both infrastructure and API cost budget.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function TechArchitecture() {
  return (
    <section id="architecture" className="py-24 bg-white/60 dark:bg-[#131610] relative overflow-hidden">
      <div className="absolute inset-0 bg-subtle-grid opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-olive-500 mb-3">
            Systems View
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-700 text-charcoal dark:text-cream leading-tight">
            How CookSmart
            <br />
            <span className="text-gradient">actually works.</span>
          </h2>
          <p className="mt-4 font-body text-base text-charcoal/60 dark:text-cream/60 max-w-xl leading-relaxed">
            Two AI models, a PostgreSQL database, and a REST API — orchestrated across two cloud platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* Left: Animated stack flow */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {layers.map((layer, i) => {
              const Icon = layer.icon
              return (
                <div key={layer.label}>
                  <motion.div
                    variants={itemVariants}
                    className={`glass-card rounded-2xl border border-l-2 ${layer.borderClass} p-5 hover-lift`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${layer.iconClass}`}>
                        <Icon size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <h3 className="font-heading font-600 text-sm text-charcoal dark:text-cream">
                            {layer.label}
                          </h3>
                          <span className="font-mono text-[10px] text-charcoal/35 dark:text-cream/35 whitespace-nowrap">
                            {layer.sublabel}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-charcoal/40 dark:text-cream/40 mb-2">
                          {layer.role}
                        </p>
                        <p className="font-body text-xs text-charcoal/60 dark:text-cream/60 leading-relaxed mb-3">
                          {layer.detail}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {layer.tech.map((t) => (
                            <span
                              key={t}
                              className={`px-2 py-0.5 rounded text-[10px] font-medium border ${layer.badgeClass}`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Connector between layers */}
                  {layer.protocol && (
                    <motion.div
                      variants={itemVariants}
                      className="flex items-start gap-0 pl-[52px] py-0.5"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-px h-3 bg-olive-500/20" />
                        <span className="font-mono text-[9px] text-charcoal/30 dark:text-cream/25 bg-charcoal/4 dark:bg-white/4 px-2 py-0.5 rounded border border-charcoal/6 dark:border-white/6 my-0.5">
                          {layer.protocol}
                        </span>
                        <div className="w-px h-3 bg-olive-500/20" />
                      </div>
                    </motion.div>
                  )}
                </div>
              )
            })}
          </motion.div>

          {/* Right: Technical context cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {insights.map(({ title, body }) => (
              <div key={title} className="glass-card rounded-2xl p-5 border hover-lift">
                <h4 className="font-heading font-600 text-sm text-charcoal dark:text-cream mb-2">
                  {title}
                </h4>
                <p className="font-body text-xs text-charcoal/60 dark:text-cream/60 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}

            {/* Deployment terminal card */}
            <div className="glass-card rounded-2xl p-5 border bg-olive-500/4 dark:bg-olive-500/6">
              <p className="font-mono text-[10px] text-olive-600 dark:text-olive-400 tracking-wider uppercase mb-3 flex items-center gap-1.5">
                <span className="text-charcoal/25 dark:text-cream/25">$</span> deployment stack
              </p>
              <div className="space-y-2.5">
                {[
                  { platform: 'vercel',          role: 'React SPA + global CDN' },
                  { platform: 'railway',          role: 'Flask API + PostgreSQL' },
                  { platform: 'github actions',   role: 'CI/CD pipeline' },
                ].map(({ platform, role }) => (
                  <div key={platform} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span className="font-mono text-xs text-charcoal/70 dark:text-cream/65">{platform}</span>
                    </div>
                    <span className="text-[11px] text-charcoal/40 dark:text-cream/40">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
