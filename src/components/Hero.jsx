import { Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div className="max-w-xl">
          <h1 className="font-heading text-5xl sm:text-6xl font-medium leading-[1.05] tracking-tight text-charcoal dark:text-cream">
            Samantha Kissa
          </h1>
          <p className="mt-4 text-base font-medium text-olive-600 dark:text-olive-300">
            Cybersecurity | AI | Full-Stack Development
          </p>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/70 dark:text-cream/70">
            I build practical digital solutions with a focus on cybersecurity, AI, and software development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-md bg-olive-600 text-white text-sm font-medium hover:bg-olive-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-md border border-charcoal/20 dark:border-cream/20 text-sm font-medium text-charcoal dark:text-cream hover:border-charcoal/40 dark:hover:border-cream/40 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-sm text-charcoal/55 dark:text-cream/55">
            <a
              href="https://github.com/SamanthaKai"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-charcoal dark:hover:text-cream transition-colors"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/samantha-kissa5710"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-charcoal dark:hover:text-cream transition-colors"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </div>
        </div>

        <img
          src="/Me.jpeg"
          alt="Samantha Kissa"
          className="w-64 h-80 sm:w-72 sm:h-96 object-cover object-top rounded-lg border border-charcoal/10 dark:border-cream/10 justify-self-center md:justify-self-end"
        />
      </div>
    </section>
  )
}
