import { ArrowRight } from 'lucide-react'
import Section from './Section'

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Things I've Built"
      intro="I enjoy building things that solve actual problems and give me an opportunity to learn along the way."
    >
      <article className="rounded-lg border border-charcoal/10 dark:border-cream/10 bg-white dark:bg-white/[0.03] p-6 sm:p-8">
        <h3 className="font-heading text-2xl font-medium text-charcoal dark:text-cream">CookSmart</h3>
        <p className="mt-1 text-sm font-medium text-olive-600 dark:text-olive-300">
          AI-powered African recipe platform
        </p>
        <div className="mt-5 space-y-3 text-charcoal/70 dark:text-cream/70 leading-relaxed max-w-2xl">
          <p>
            CookSmart is a full-stack web application designed to make it easier to discover and prepare African recipes.
          </p>
          <p>
            It uses AI to generate recipes, provide nutritional information, and take dietary preferences into account.
          </p>
        </div>
        <p className="mt-5 text-sm text-charcoal/55 dark:text-cream/55">
          React · Flask · Python · PostgreSQL · LLaMA 3 · Claude API
        </p>
        <a
          href="#/cooksmart"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-olive-600 dark:text-olive-300 hover:gap-2.5 transition-all"
        >
          View CookSmart
          <ArrowRight size={15} />
        </a>
      </article>
    </Section>
  )
}
