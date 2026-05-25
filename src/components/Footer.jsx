import { Mail, Heart, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-charcoal/8 dark:border-white/8 bg-cream dark:bg-[#111410]">
      {/* Mission statement bar */}
      <div className="border-b border-charcoal/5 dark:border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-heading font-600 text-base text-charcoal dark:text-cream leading-snug">
              Building secure systems with intelligence,
              <br className="hidden sm:block" />
              <span className="text-gradient"> clarity, and purpose.</span>
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kissasamantha123@gmail.com"
              className="text-charcoal/40 dark:text-cream/40 hover:text-olive-500 dark:hover:text-olive-300 transition-colors"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/samantha-kissa5710"
              target="_blank"
              rel="noreferrer"
              className="text-charcoal/40 dark:text-cream/40 hover:text-olive-500 dark:hover:text-olive-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="https://github.com/SamanthaKai"
              target="_blank"
              rel="noreferrer"
              className="text-charcoal/40 dark:text-cream/40 hover:text-olive-500 dark:hover:text-olive-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-charcoal/35 dark:text-cream/35 flex items-center gap-1.5">
            © {year} Samantha Kissa · Built with
            <Heart size={11} className="text-terracotta" fill="currentColor" />
            in Uganda
          </p>
          <p className="text-xs text-charcoal/25 dark:text-cream/25 font-mono">
            Cybersecurity · AI · Full-Stack
          </p>
        </div>
      </div>
    </footer>
  )
}
