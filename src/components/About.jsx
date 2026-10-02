import { Container, Heading, Reveal } from './ui'

const habits = [
  {
    lead: 'Find the real problem.',
    body: "The first version of a problem is rarely the real one. I'd rather spend time asking what's actually wrong, and who it's for, before I build anything.",
  },
  {
    lead: 'Read the logs first.',
    body: 'When something breaks, my first guess is usually wrong. The logs usually aren\'t. So I read them before I start changing things.',
  },
  {
    lead: "Security isn't the last step.",
    body: "Once you've seen how an exposed database or a leaked key gets used, you stop treating security as something to add before launch.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <Reveal className="grid lg:grid-cols-12 gap-x-10 gap-y-8">
          <Heading className="lg:col-span-4 text-4xl sm:text-5xl">About me</Heading>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-[17px] leading-relaxed text-charcoal/75 dark:text-cream/75">
            <p>
              I graduated in Information Technology from Mbarara University of Science and Technology in 2026. Of everything I studied, security is the part I want to go deeper in.
            </p>
            <p>
              These days most of my time goes into security operations: reading logs, working through simulated incidents, and poking at systems that were built to be broken. I also build software, mostly web apps that use AI.
            </p>
            <p>
              The two teach me different things. Labs show me how systems break. Building my own shows me how easy it is to be the person who broke them.
            </p>
            <p>
              In 2025 I joined the Aspire Leadership Program with a global cohort of emerging leaders. It left me with harder questions than I came in with: what kind of leader do I want to be, and what work do I actually want to contribute, especially here in Africa?
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-24 sm:mt-28 grid lg:grid-cols-12 gap-x-10 gap-y-10">
          <h3 className="lg:col-span-4 text-sm text-charcoal/50 dark:text-cream/50 pt-1">How I work</h3>
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-10">
            {habits.map(({ lead, body }) => (
              <div key={lead} className="border-t border-charcoal/15 dark:border-cream/15 pt-5">
                <p className="font-heading text-xl text-charcoal dark:text-cream">{lead}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal/65 dark:text-cream/65">{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
