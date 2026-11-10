import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Chapter, Container, Heading, Reveal } from './ui'
import CaseStudyDrawer from './CaseStudyDrawer'
import { projects } from '../data/projects'

const tones = {
  light: 'bg-white dark:bg-espresso text-charcoal dark:text-cream border border-charcoal/10 dark:border-cream/10',
  dark: 'bg-night dark:bg-[#0B0A09] text-cream border border-cream/10',
  leaf: 'bg-leaf-900 text-cream border border-cream/10',
}

// Old links to the separate CookSmart page now open its case study here.
const LEGACY_HASHES = { '#/cooksmart': 'cooksmart' }

export default function Work() {
  const stackRef = useRef(null)
  const reduced = useReducedMotion()
  const [openSlug, setOpenSlug] = useState(null)
  const [badge, setBadge] = useState(false)
  const [finePointer, setFinePointer] = useState(false)

  const { scrollYProgress } = useScroll({ target: stackRef, offset: ['start start', 'end end'] })

  // Pointer-following badge, springy enough to feel alive without lagging.
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 })

  useEffect(() => {
    setFinePointer(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
    function openFromHash() {
      const slug = LEGACY_HASHES[window.location.hash]
      if (!slug) return
      setOpenSlug(slug)
      history.replaceState(null, '', '#work')
      document.getElementById('work')?.scrollIntoView()
    }
    openFromHash()
    window.addEventListener('hashchange', openFromHash)
    return () => window.removeEventListener('hashchange', openFromHash)
  }, [])

  const close = useCallback(() => setOpenSlug(null), [])
  const index = projects.findIndex((p) => p.slug === openSlug)
  const open = projects[index] ?? null
  const next = open ? projects[(index + 1) % projects.length] : null

  function track(e) {
    x.set(e.clientX)
    y.set(e.clientY)
  }

  return (
    <section id="work" className="pt-24 sm:pt-32 pb-8 border-t border-charcoal/10 dark:border-cream/10">
      <Container>
        <Reveal>
          <Chapter n="02">What I&apos;ve built</Chapter>
          <Heading className="mt-5 text-4xl sm:text-5xl">Selected work</Heading>
        </Reveal>
      </Container>

      <div ref={stackRef} className="mt-14 sm:mt-16 max-w-6xl mx-auto px-4 sm:px-10">
        {projects.map((p, i) => (
          <Fragment key={p.slug}>
            {/* Gaps live in separate spacers: a sticky card's own margin would make it let go early. */}
            {i > 0 && <div aria-hidden="true" className="h-[30svh]" />}
            <StackCard
              project={p}
              i={i}
              total={projects.length}
              progress={scrollYProgress}
              reduced={reduced}
              hideCursor={finePointer}
              onOpen={() => { setBadge(false); setOpenSlug(p.slug) }}
              onEnter={(e) => { track(e); if (finePointer) setBadge(true) }}
              onMove={track}
              onLeave={() => setBadge(false)}
            />
          </Fragment>
        ))}
        {/* Lets the last card settle before the stack scrolls away together. Sticky
            items are bounded by their parent's content box, so this can't be padding. */}
        <div aria-hidden="true" className="h-[15svh]" />
      </div>

      {/* The badge that replaces the cursor over a project card. */}
      <motion.div
        aria-hidden="true"
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[55]"
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={false}
            animate={{ scale: badge ? 1 : 0, opacity: badge ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-brass-300 text-night px-4 py-2.5 text-sm font-medium shadow-lg"
          >
            View case study
            <ArrowUpRight size={15} />
          </motion.div>
        </div>
      </motion.div>

      <CaseStudyDrawer
        project={open}
        next={next}
        onClose={close}
        onNext={() => setOpenSlug(next.slug)}
      />
    </section>
  )
}

function StackCard({ project, i, total, progress, reduced, hideCursor, onOpen, onEnter, onMove, onLeave }) {
  // Each card shrinks a touch as later cards slide over it.
  const targetScale = reduced ? 1 : 1 - (total - 1 - i) * 0.05
  const scale = useTransform(progress, [i / total, 1], [1, targetScale])

  return (
    <div
      className="sticky"
      style={{ top: `calc(5.5rem + ${i * 1.25}rem)` }}
    >
      <motion.article
        style={{ scale, transformOrigin: 'top center' }}
        onPointerEnter={onEnter}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={`group relative overflow-hidden rounded-2xl shadow-[0_-12px_40px_-20px_rgba(27,23,20,0.35)] ${tones[project.tone]} ${hideCursor ? 'cursor-none' : ''}`}
      >
        <div className="grid md:grid-cols-12 md:h-[min(68svh,560px)]">
          <div className="md:col-span-7 relative overflow-hidden aspect-[16/10] md:aspect-auto">
            <ProjectVisual project={project} />
          </div>
          <div className="md:col-span-5 flex flex-col p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-between text-sm opacity-60">
              <span>{project.kind}</span>
              <span className="tabular-nums">{String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
            </div>
            <h3 className="mt-4 md:mt-8 font-heading font-normal tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1]">
              {project.title}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed opacity-75 line-clamp-4 md:line-clamp-none">{project.summary}</p>
            <span
              aria-hidden="true"
              className={`mt-6 md:mt-auto pt-2 inline-flex items-center gap-1.5 text-[15px] font-medium ${
                project.tone === 'light' ? 'text-brass-600 dark:text-brass-300' : 'text-brass-300'
              }`}
            >
              Read the case study
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>

        {/* The whole card opens the drawer. */}
        <button
          onClick={onOpen}
          className={`absolute inset-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass-500 ${hideCursor ? 'cursor-none' : ''}`}
          aria-label={`Open the ${project.title} case study`}
        />
      </motion.article>
    </div>
  )
}

function ProjectVisual({ project }) {
  if (project.visual === 'image') {
    return (
      <img
        src={project.image.src}
        alt={project.image.alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    )
  }

  // Illustrations for projects without screenshots. Decorative only.
  if (project.visual === 'code') {
    return (
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 bg-gradient-to-br from-espresso to-night">
        <pre className="w-full max-w-md font-mono text-[11px] sm:text-[13px] leading-relaxed text-cream/80 transition-transform duration-700 ease-out group-hover:-translate-y-1">
          <span className="text-brass-300">def</span> <span className="text-cream">parse_report</span>(path, strict=<span className="text-brass-300">True</span>):{'\n'}
          <span className="text-leaf-300">{'    """Read a report file and return its records.\n\n    Args:\n        path: Location of the report on disk.\n        strict: Stop at the first malformed line.\n\n    Returns:\n        A list of parsed records.\n    """'}</span>{'\n'}
          {'    '}...{'\n'}
          <span className="mt-4 inline-flex items-center gap-2 text-cream/40">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf-300" /> generated offline
          </span>
        </pre>
      </div>
    )
  }

  return (
    <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 bg-gradient-to-br from-leaf-700 to-leaf-900">
      <div className="w-full max-w-md rounded-lg bg-night/70 ring-1 ring-cream/10 shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-1">
        <div className="flex gap-1.5 px-4 py-3 border-b border-cream/10">
          <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
        </div>
        <pre className="px-4 py-4 font-mono text-[11px] sm:text-[13px] leading-relaxed text-cream/80">
          <span className="text-cream/40">PORT      STATE  SERVICE</span>{'\n'}
          21/tcp    <span className="text-brass-300">open</span>   ftp{'\n'}
          23/tcp    <span className="text-brass-300">open</span>   telnet{'\n'}
          2049/tcp  <span className="text-brass-300">open</span>   nfs{'\n'}
          {'\n'}
          <span className="text-leaf-300">it still works</span> <span className="text-cream/40">!=</span> <span className="text-brass-300">it&apos;s still safe</span>
        </pre>
      </div>
    </div>
  )
}
