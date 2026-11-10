import { Container, TextLink } from './ui'

// The heading's line breaks are set by hand on large screens so each line ends on a
// natural pause. Smaller screens let it wrap, balanced so no line is left with one word.
const headingLines = [
  'IT Professional with a focus on',
  'Cybersecurity, Security Operations,',
  'Artificial Intelligence and',
  'Software Development.',
]

export default function Hero() {
  return (
    <section id="hero" className="border-b border-charcoal/10 dark:border-cream/10">
      <Container className="pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 grid lg:grid-cols-12 gap-x-10 gap-y-14 lg:items-center">
        <div className="lg:col-span-8 hero-in">
          <p className="text-sm text-charcoal/55 dark:text-cream/55">Samantha Kissa · Kampala, Uganda</p>

          <h1 className="mt-6 font-heading font-normal tracking-[-0.015em] leading-[1.12] text-[2rem] sm:text-[2.6rem] lg:text-[2.5rem] xl:text-[2.875rem] text-balance text-charcoal dark:text-cream">
            {headingLines.map((line, i) => (
              <span key={line} className="lg:block">
                {line}
                {i < headingLines.length - 1 && ' '}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-charcoal/70 dark:text-cream/70">
            I also enjoy working with AI and building software. I&apos;m curious about how technology works, how systems can fail, and how we can make them safer.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-[15px]">
            <a
              href="#work"
              className="inline-flex items-center px-5 py-2.5 rounded-md bg-charcoal dark:bg-cream text-paper dark:text-night text-sm font-medium hover:bg-brass-700 dark:hover:bg-brass-200 transition-colors"
            >
              See my work
            </a>
            <TextLink href="#contact" arrow={false}>Get in touch</TextLink>
          </div>
        </div>

        <div className="lg:col-span-4 hero-in hero-in-late">
          <img
            src="/samantha.jpg"
            alt="Samantha Kissa"
            width="900"
            height="985"
            className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none aspect-[4/5] object-cover object-[50%_22%] rounded-md ring-1 ring-charcoal/10 dark:ring-cream/10"
          />
        </div>
      </Container>
    </section>
  )
}
