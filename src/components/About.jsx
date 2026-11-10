import { Chapter, Container, Heading, Reveal } from './ui'

const habits = [
  {
    lead: 'Understand the problem first.',
    body: 'Before jumping into a solution, I like to understand what is actually wrong, who it affects, and what needs to be done.',
  },
  {
    lead: 'Start with the evidence.',
    body: "When something goes wrong, I don't want to rely on guesses. I look at the logs, check what happened, and work from there.",
  },
  {
    lead: 'Think about security from the start.',
    body: "Security shouldn't be something we remember just before launching a product. It needs to be part of how we build and manage systems.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <Reveal className="grid lg:grid-cols-12 gap-x-10 gap-y-8">
          <div className="lg:col-span-4">
            <Chapter n="01">Who I am</Chapter>
            <Heading className="mt-5 text-4xl sm:text-5xl">About me</Heading>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-[17px] leading-relaxed text-charcoal/75 dark:text-cream/75">
            <p>
              I graduated with a Bachelor of Information Technology from Mbarara University of Science and Technology in 2026. Of everything I studied, cybersecurity is the area I want to explore further.
            </p>
            <p>
              Most of my time goes into learning and practising security operations. I work with logs, investigate simulated incidents, and test systems to understand where they might be vulnerable. I also enjoy building software, especially web applications that use AI.
            </p>
            <p>
              Working in both areas has taught me something important. Security labs help me understand how systems can be broken, while building software helps me see the other side and understand the decisions that go into making them work.
            </p>
            <p>
              In 2025, I joined the Aspire Leadership Program alongside a global group of emerging leaders. It gave me room to think more about the kind of leader I want to become and the contribution I hope to make, especially here in Africa.
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
