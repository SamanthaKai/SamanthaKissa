import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { TextLink } from './ui'

// Slide-out panel that shows a project's full story without leaving the page.
export default function CaseStudyDrawer({ project, next, onClose, onNext }) {
  const reduced = useReducedMotion()

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="drawer"
          className="fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            onClick={onClose}
            aria-hidden="true"
            className="absolute inset-0 bg-night/40 dark:bg-black/60 backdrop-blur-[3px]"
          />
          <Panel project={project} next={next} onClose={onClose} onNext={onNext} reduced={reduced} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Panel({ project, next, onClose, onNext, reduced }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)
  const { caseStudy: cs } = project

  // Focus, Escape, a simple focus trap, and no page scroll behind the panel.
  useEffect(() => {
    const opener = document.activeElement
    closeRef.current?.focus()
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    function onKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key !== 'Tab') return
      const focusable = panelRef.current.querySelectorAll('a[href], button:not([disabled])')
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      opener?.focus?.()
    }
  }, [onClose])

  // Moving to the next project starts the panel at the top again.
  useEffect(() => {
    panelRef.current?.scrollTo(0, 0)
  }, [project.slug])

  return (
    <motion.aside
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
      initial={{ x: reduced ? 0 : '100%' }}
      animate={{ x: 0 }}
      exit={{ x: reduced ? 0 : '100%' }}
      transition={{ type: 'spring', stiffness: 260, damping: 32 }}
      className="absolute right-0 top-0 h-full w-full sm:max-w-xl lg:max-w-2xl overflow-y-auto overscroll-contain bg-paper dark:bg-espresso shadow-[-30px_0_80px_-20px_rgba(0,0,0,0.35)]"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between px-6 sm:px-10 h-16 bg-paper/90 dark:bg-espresso/90 backdrop-blur-sm border-b border-charcoal/10 dark:border-cream/10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass-600 dark:text-brass-300">Case study</p>
        <button
          ref={closeRef}
          onClick={onClose}
          className="group -mr-2 p-2 rounded-full text-charcoal/60 dark:text-cream/60 hover:text-charcoal dark:hover:text-cream hover:bg-charcoal/5 dark:hover:bg-cream/10 transition-colors"
          aria-label="Close case study"
        >
          <X size={20} className="transition-transform duration-300 group-hover:rotate-90" />
        </button>
      </div>

      <motion.div
        key={project.slug}
        initial={{ opacity: 0, y: reduced ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 sm:px-10 pt-10 pb-16"
      >
        <p className="text-sm text-charcoal/50 dark:text-cream/50">{project.kind}</p>
        <h2 id="drawer-title" className="mt-2 font-heading font-normal tracking-tight text-5xl sm:text-6xl leading-[0.95] text-charcoal dark:text-cream">
          {project.title}
        </h2>
        <p className="mt-6 font-heading text-xl sm:text-2xl leading-snug text-charcoal/75 dark:text-cream/75">{cs.lede}</p>

        {cs.facts && (
          <dl className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-5 border-t border-charcoal/15 dark:border-cream/15 pt-6">
            {cs.facts.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-sm text-charcoal/50 dark:text-cream/50">{label}</dt>
                <dd className="mt-1 text-[15px] text-charcoal dark:text-cream">{value}</dd>
              </div>
            ))}
          </dl>
        )}

        {cs.liveUrl && (
          <div className="mt-8 text-[15px]">
            <TextLink href={cs.liveUrl} external>Visit the live site</TextLink>
          </div>
        )}

        {project.image && (
          <div className="mt-10 overflow-hidden rounded-xl border border-charcoal/10 dark:border-cream/10 bg-white">
            <img src={project.image.src} alt={project.image.alt} className="w-full h-auto" />
          </div>
        )}

        {cs.sections.map((s) => (
          <section key={s.title} className="mt-14 pt-8 border-t border-charcoal/10 dark:border-cream/10">
            <h3 className="font-heading font-normal tracking-tight text-3xl text-charcoal dark:text-cream">{s.title}</h3>
            <div className="mt-5 space-y-5 text-[16px] leading-relaxed text-charcoal/75 dark:text-cream/75">
              {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
            </div>

            {s.flow && (
              <ol className="mt-8 border-t border-charcoal/15 dark:border-cream/15">
                {s.flow.map(({ step, where }, i) => (
                  <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-x-2 py-4 border-b border-charcoal/10 dark:border-cream/10">
                    <span className="text-sm tabular-nums text-brass-600 dark:text-brass-300 pt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-charcoal dark:text-cream">{step}</p>
                      <p className="mt-0.5 text-sm text-charcoal/50 dark:text-cream/50">{where}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}

            {s.items && (
              <div className="mt-2 space-y-8">
                {s.items.map(({ title, body }) => (
                  <div key={title}>
                    <p className="font-heading text-xl text-charcoal dark:text-cream">{title}</p>
                    <div className="mt-2 space-y-4 text-[16px] leading-relaxed text-charcoal/75 dark:text-cream/75">
                      {body.map((p) => <p key={p}>{p}</p>)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {next && (
          <button
            onClick={onNext}
            className="group mt-16 w-full text-left rounded-xl border border-charcoal/10 dark:border-cream/10 p-6 hover:border-brass-400 hover:bg-brass-50 dark:hover:bg-cream/5 transition-colors"
          >
            <span className="text-sm text-charcoal/50 dark:text-cream/50">Next project</span>
            <span className="mt-1 flex items-center justify-between font-heading text-2xl text-charcoal dark:text-cream">
              {next.title}
              <ArrowRight size={20} className="text-brass-600 dark:text-brass-300 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        )}
      </motion.div>
    </motion.aside>
  )
}
