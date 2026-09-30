import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// Shared layout for every content section: heading on the left, content on the right.
export default function Section({ id, title, intro, children }) {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id={id} className="border-t border-charcoal/10 dark:border-cream/10">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 py-16 sm:py-20 grid md:grid-cols-[220px_1fr] gap-6 md:gap-12 section-reveal ${visible ? 'visible' : ''}`}
      >
        <h2 className="font-heading text-3xl font-medium leading-tight text-charcoal dark:text-cream">
          {title}
        </h2>
        <div>
          {intro && (
            <p className="text-base leading-relaxed text-charcoal/70 dark:text-cream/70 max-w-2xl mb-10">
              {intro}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
