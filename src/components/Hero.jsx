import { motion } from 'framer-motion'
import { ArrowDown, Mail, Shield, Code2, Brain, Cloud, Github, Linkedin } from 'lucide-react'

const tags = [
  { icon: Shield, label: 'Cybersecurity' },
  { icon: Brain,  label: 'AI Engineering' },
  { icon: Code2,  label: 'Full-Stack Dev' },
  { icon: Cloud,  label: 'Cloud & DevOps' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
}

const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream dark:bg-[#111410]"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-subtle-grid" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-olive-500/8 blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/8 blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-terracotta/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Text — staggered reveal */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Status badge */}
            <motion.div variants={item}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-olive-500/10 dark:bg-olive-500/15 border border-olive-500/20 text-olive-600 dark:text-olive-300 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-olive-500 status-active" />
                Open to opportunities · Kampala, Uganda
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={item} className="space-y-3">
              <h1 className="font-heading font-700 text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-charcoal dark:text-cream">
                Samantha
                <br />
                <span className="text-gradient">Kissa</span>
              </h1>
              <p className="font-heading text-lg sm:text-xl text-sage-500 dark:text-sage-400 font-medium">
                Cybersecurity Engineer · AI Developer · Full-Stack Builder
              </p>
            </motion.div>

            {/* Mission statement */}
            <motion.p variants={item} className="font-body text-base sm:text-lg text-charcoal/65 dark:text-cream/65 leading-relaxed max-w-lg">
              Building <span className="text-olive-600 dark:text-olive-300 font-medium">secure and intelligent digital systems</span> for Africa — where robust security meets thoughtful engineering and AI-driven innovation.
            </motion.p>

            {/* Capability tags */}
            <motion.div variants={item} className="flex flex-wrap gap-2">
              {tags.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/60 dark:bg-white/5 border border-charcoal/8 dark:border-white/8 text-charcoal/70 dark:text-cream/70 text-xs font-medium hover-lift"
                >
                  <Icon size={12} className="text-olive-500" />
                  {label}
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-olive-500 text-cream font-medium text-sm hover:bg-olive-600 transition-colors duration-200 shadow-card hover:shadow-card-hover"
              >
                View Projects
                <ArrowDown size={15} className="rotate-[-90deg]" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-olive-500/30 text-olive-600 dark:text-olive-300 font-medium text-sm hover:bg-olive-500/8 transition-all duration-200"
              >
                <Mail size={15} />
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social quick-links */}
            <motion.div variants={item} className="flex items-center gap-4 pt-1">
              <span className="text-xs text-charcoal/35 dark:text-cream/35 font-medium">Find me on</span>
              <a
                href="https://github.com/SamanthaKai"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-charcoal/50 dark:text-cream/50 hover:text-charcoal dark:hover:text-cream transition-colors text-xs font-medium"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/samantha-kissa5710"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-charcoal/50 dark:text-cream/50 hover:text-charcoal dark:hover:text-cream transition-colors text-xs font-medium"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Photo card — fades in after text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-olive-500/20 via-gold/15 to-terracotta/20 blur-xl" />

              {/* Photo frame */}
              <div className="relative w-72 h-96 sm:w-80 sm:h-[440px] rounded-3xl overflow-hidden border-2 border-olive-500/20 shadow-[0_20px_80px_rgba(85,107,47,0.2)]">
                <img
                  src="/Me.jpeg"
                  alt="Samantha Kissa"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-900/30 via-transparent to-transparent" />
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -left-8 top-12 glass-card rounded-xl px-3 py-2.5 shadow-card animate-float"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-olive-500/15 flex items-center justify-center">
                    <Shield size={14} className="text-olive-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-charcoal/50 dark:text-cream/50">Fellowship</p>
                    <p className="text-xs font-semibold text-charcoal dark:text-cream">Tech4Dev</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -right-8 bottom-20 glass-card rounded-xl px-3 py-2.5 shadow-card"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gold/15 flex items-center justify-center">
                    <Brain size={14} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] text-charcoal/50 dark:text-cream/50">Leadership</p>
                    <p className="text-xs font-semibold text-charcoal dark:text-cream">Aspire Institute</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="absolute -left-6 bottom-8 glass-card rounded-xl px-3 py-2 shadow-card"
              >
                <p className="text-[10px] text-charcoal/50 dark:text-cream/50 mb-0.5">Status</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-xs font-semibold text-charcoal dark:text-cream">Final Year IT Student</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-charcoal/30 dark:text-cream/30 hover:text-olive-500 dark:hover:text-olive-300 transition-colors">
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
