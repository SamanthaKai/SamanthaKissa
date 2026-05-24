import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { ExternalLink, Star, Brain, Shield, Database, Globe, ChevronDown, Lock, Server, Zap } from 'lucide-react'

const projects = [
  {
    featured: true,
    name: 'CookSmart',
    tagline: 'AI-Powered African Recipe Web App',
    description:
      'A full-stack AI-powered web application that generates authentic African recipes, provides nutritional insights, and adapts to dietary preferences — using the power of LLaMA 3 and Claude AI.',
    longDescription:
      'CookSmart bridges traditional African cuisine with modern AI, helping users discover, generate, and learn about African recipes through natural language interaction. Built with a React frontend, Flask backend, and multiple AI APIs.',
    stack: ['React', 'Flask', 'PostgreSQL', 'Groq + LLaMA 3', 'Claude API', 'Vercel', 'Railway', 'Python'],
    highlights: [
      'Multi-model AI pipeline (Groq + LLaMA 3 + Claude API)',
      'Advanced prompt engineering for culturally accurate recipes',
      'Nutrition analysis and dietary insight generation',
      'Full-stack deployment: Vercel frontend + Railway backend',
      'PostgreSQL database with user preferences and recipe history',
    ],
    badges: [
      { icon: Brain,    label: 'AI-Powered', color: 'gold' },
      { icon: Globe,    label: 'Full-Stack',  color: 'olive' },
      { icon: Database, label: 'PostgreSQL',  color: 'sage' },
    ],
    liveUrl: 'https://cooksmart-seven.vercel.app/',
    gradient: 'from-olive-500/10 via-gold/8 to-terracotta/10',
    accentColor: 'olive',
    techDetails: {
      challenges: [
        'Rate limits on Groq API required exponential backoff and a request-queue fallback to keep the UX smooth under load.',
        'CORS between Vercel (frontend) and Railway (backend) needed explicit preflight header configuration — caught after deployment, not dev.',
        'Streaming LLM responses required chunked transfer encoding on Flask and a client-side streaming reader in React.',
      ],
      security: [
        'All API keys (Groq, Claude, PostgreSQL) live in Railway environment variables — never in source code or the client bundle.',
        'User inputs are sanitized before injection into prompts to prevent prompt injection attacks.',
        'Flask routes have rate limiting to protect both the API cost budget and the infrastructure from abuse.',
      ],
      deployment: 'Frontend → Vercel (auto-deploy from GitHub main). Backend + DB → Railway with managed PostgreSQL. 12 environment variables managed across dev and prod.',
    },
  },
]

const badgeColors = {
  olive:     'bg-olive-500/10 text-olive-700 dark:text-olive-300 border-olive-500/20',
  sage:      'bg-sage-500/10 text-sage-700 dark:text-sage-400 border-sage-500/20',
  gold:      'bg-gold/10 text-yellow-700 dark:text-gold border-gold/20',
  terracotta:'bg-terracotta/10 text-terracotta border-terracotta/20',
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useIntersectionObserver()
  const [expanded, setExpanded] = useState(false)
  const delay = index * 120

  return (
    <div
      ref={ref}
      className={`section-reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`relative group glass-card rounded-2xl overflow-hidden border hover-lift transition-all duration-300 ${project.featured ? 'lg:col-span-2' : ''}`}>
        {/* Gradient accent top */}
        <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold/15 border border-gold/25 text-gold text-xs font-medium">
            <Star size={10} fill="currentColor" />
            Featured
          </div>
        )}

        <div className={`p-6 sm:p-8 ${project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''}`}>
          {/* Left / top */}
          <div className="space-y-4">
            <div>
              <h3 className="font-heading font-700 text-xl text-charcoal dark:text-cream mb-1">
                {project.name}
              </h3>
              <p className="font-body text-sm font-medium text-olive-600 dark:text-olive-300">
                {project.tagline}
              </p>
            </div>

            <p className="font-body text-sm text-charcoal/65 dark:text-cream/65 leading-relaxed">
              {project.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {project.badges.map(({ icon: Icon, label, color }) => (
                <span
                  key={label}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${badgeColors[color]}`}
                >
                  <Icon size={11} />
                  {label}
                </span>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md bg-charcoal/5 dark:bg-white/5 text-charcoal/60 dark:text-cream/60 text-xs border border-charcoal/8 dark:border-white/8"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links + expand toggle */}
            <div className="flex items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-olive-500 text-cream text-sm font-medium hover:bg-olive-600 transition-colors shadow-sm"
                >
                  <ExternalLink size={13} />
                  Live Demo
                </a>
              )}
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-charcoal/60 dark:text-cream/60 border border-charcoal/10 dark:border-white/10 hover:border-olive-500/40 hover:text-olive-600 dark:hover:text-olive-300 transition-all duration-200"
              >
                <span>{expanded ? 'Less detail' : 'Under the hood'}</span>
                <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown size={14} />
                </motion.div>
              </button>
            </div>
          </div>

          {/* Right (featured only) */}
          {project.featured && (
            <div className="mt-6 lg:mt-0 space-y-3">
              <p className="font-body text-xs font-semibold tracking-wider uppercase text-charcoal/40 dark:text-cream/40 mb-3">
                Key Features
              </p>
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-olive-500 mt-1.5 flex-shrink-0" />
                  <p className="font-body text-sm text-charcoal/65 dark:text-cream/65 leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Expandable technical detail panel */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-charcoal/6 dark:border-white/6">
                <div className="pt-5 grid sm:grid-cols-3 gap-5">

                  {/* Challenges */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Zap size={13} className="text-gold" />
                      <p className="font-body text-xs font-semibold tracking-wider uppercase text-charcoal/40 dark:text-cream/40">
                        Engineering Challenges
                      </p>
                    </div>
                    <ul className="space-y-2.5">
                      {project.techDetails.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-mono text-[10px] text-gold/60 mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                          <p className="font-body text-xs text-charcoal/60 dark:text-cream/60 leading-relaxed">{c}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Security */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Lock size={13} className="text-olive-500" />
                      <p className="font-body text-xs font-semibold tracking-wider uppercase text-charcoal/40 dark:text-cream/40">
                        Security Considerations
                      </p>
                    </div>
                    <ul className="space-y-2.5">
                      {project.techDetails.security.map((s, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Shield size={10} className="text-olive-500/50 mt-0.5 flex-shrink-0" />
                          <p className="font-body text-xs text-charcoal/60 dark:text-cream/60 leading-relaxed">{s}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture / Deployment */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Server size={13} className="text-sage-500" />
                      <p className="font-body text-xs font-semibold tracking-wider uppercase text-charcoal/40 dark:text-cream/40">
                        Architecture & Deploy
                      </p>
                    </div>
                    <p className="font-body text-xs text-charcoal/60 dark:text-cream/60 leading-relaxed">
                      {project.techDetails.deployment}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function Projects() {
  const [headerRef, headerVisible] = useIntersectionObserver()

  return (
    <section id="projects" className="py-24 bg-cream dark:bg-[#111410] relative">
      <div className="absolute inset-0 bg-subtle-grid opacity-60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`mb-16 section-reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-olive-500 mb-3">
            Projects
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-700 text-charcoal dark:text-cream leading-tight">
            Things I&apos;ve
            <br />
            <span className="text-gradient">built.</span>
          </h2>
          <p className="mt-4 font-body text-sm text-charcoal/50 dark:text-cream/50 max-w-md">
            Each project is an engineering case study. Hit <span className="font-medium text-charcoal/70 dark:text-cream/70">Under the hood</span> to see challenges, security decisions, and deployment details.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div key={project.name} className={project.featured ? 'lg:col-span-2' : ''}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
