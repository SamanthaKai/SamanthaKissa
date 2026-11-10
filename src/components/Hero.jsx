import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import AmbientCanvas from './AmbientCanvas'
import { TextLink } from './ui'

export default function Hero() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // As the story moves on, the words lift away and the photo settles back.
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -80])
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, reduced ? 1 : 0])
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0.92])
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 60])

  return (
    <section id="hero" ref={ref} className="relative overflow-hidden lg:min-h-[100svh]">
      <AmbientCanvas className="absolute inset-0 w-full h-full" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 pt-28 pb-16 lg:py-0 grid lg:grid-cols-2 gap-x-14 gap-y-14 lg:min-h-[100svh] items-center">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="hero-in lg:py-28">
          <p className="text-sm text-charcoal/60 dark:text-cream/60">
            <span className="font-medium text-charcoal dark:text-cream">Samantha Kissa</span>
            <span className="mx-2 text-brass-500" aria-hidden="true">/</span>
            Kampala, Uganda
          </p>

          <h1 className="mt-8 font-heading font-normal tracking-tight leading-[0.98] text-[2.9rem] sm:text-7xl xl:text-[5.5rem] text-charcoal dark:text-cream">
            I&apos;m building my way into{' '}
            <em className="italic text-brass-600 dark:text-brass-300">cybersecurity</em>.
          </h1>
          <p className="mt-8 max-w-lg font-heading text-xl sm:text-2xl leading-snug text-charcoal/70 dark:text-cream/70">
            Along the way, I work with AI and software. I&apos;m most curious about how systems are put together, and where they can go wrong.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-[15px]">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal dark:bg-cream text-paper dark:text-night font-medium hover:bg-brass-700 dark:hover:bg-brass-200 active:scale-[0.97] transition-all"
            >
              See my work
              <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <TextLink href="#contact" arrow={false}>Get in touch</TextLink>
          </div>
        </motion.div>

        <motion.div style={{ scale: photoScale, y: photoY }} className="relative lg:h-[100svh] lg:py-24 flex items-center">
          {/* Lamp glow behind the photo, picking up the warm light in the room. */}
          <div
            aria-hidden="true"
            className="absolute -inset-8 lg:inset-y-16 rounded-full bg-brass-300/30 dark:bg-brass-500/15 blur-3xl"
          />
          <div className="relative w-full photo-in rounded-2xl overflow-hidden shadow-[0_30px_80px_-30px_rgba(27,23,20,0.45)] aspect-[4/5] sm:aspect-[5/4] lg:aspect-auto lg:h-full">
            <img
              src="/samantha.jpg"
              alt="Samantha Kissa"
              width="900"
              height="985"
              className="absolute inset-0 w-full h-full object-cover object-[50%_20%] dark:brightness-95"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
