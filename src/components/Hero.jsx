import { Container, TextLink } from './ui'

export default function Hero() {
  return (
    <section id="hero" className="border-b border-charcoal/10 dark:border-cream/10 overflow-hidden">
      <Container className="pt-28 sm:pt-32 grid lg:grid-cols-12 gap-x-10 items-end">
        <div className="lg:col-span-7 pb-16 lg:pb-28 hero-in">
          <p className="text-sm text-charcoal/50 dark:text-cream/50">Kampala, Uganda</p>
          <h1 className="mt-5 font-heading font-normal tracking-tight leading-[0.95] text-[3.75rem] sm:text-8xl lg:text-[7.5rem] text-charcoal dark:text-cream">
            Samantha
            <br />
            Kissa
          </h1>
          <p className="mt-10 max-w-xl font-heading text-2xl sm:text-[1.75rem] leading-snug text-charcoal/75 dark:text-cream/75">
            I&apos;m building my way into cybersecurity, and working with AI and software along the way. I&apos;m most curious about how systems are put together, and where they can go wrong.
          </p>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-[15px]">
            <TextLink href="#work">See my work</TextLink>
            <TextLink href="#contact" arrow={false}>Get in touch</TextLink>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end hero-in hero-in-late">
          <img
            src="/samantha.jpg"
            alt="Samantha Kissa"
            width="900"
            height="985"
            className="w-72 sm:w-80 lg:w-full max-w-[420px] h-auto rounded-lg dark:brightness-95"
          />
        </div>
      </Container>
    </section>
  )
}
