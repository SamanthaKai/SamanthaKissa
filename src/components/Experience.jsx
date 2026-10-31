import { Container, Heading, Reveal, TextLink } from './ui'

const roles = [
  {
    when: 'June–August 2026',
    kind: 'Structured training',
    org: 'Ubuntu Bridge Initiative',
    role: 'Cybersecurity Training Programme',
    summary: 'Completed structured cybersecurity training involving a simulated SOC incident investigation. The exercise followed a suspicious login through investigation, analysis and reporting, culminating in a board-level incident report. Subsequently recognised as a Cyber Core Associate.',
  },
  {
    when: 'September 2025–present',
    kind: 'Fellowship',
    org: 'Tech4Dev Women Techsters',
    role: 'Cybersecurity Fellow',
    summary: 'Where a lot of my hands-on practice happens: labs, real tools and simulated attacks.',
  },
  {
    when: 'June–August 2025',
    kind: 'Professional experience',
    org: 'Uganda Bureau of Statistics',
    role: 'Field Enumerator',
    summary: 'Collected data for the national education census in more than 100 schools and institutions, from city universities to rural primary schools.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-charcoal/10 dark:border-cream/10">
      <Container>
        <Reveal>
          <Heading className="text-4xl sm:text-5xl">Experience &amp; Training</Heading>
        </Reveal>

        <Reveal as="ul" className="mt-14 sm:mt-16 border-t border-charcoal/15 dark:border-cream/15">
          {roles.map(({ when, kind, org, role, summary }) => (
            <li
              key={org}
              className="grid md:grid-cols-12 gap-x-10 gap-y-2 py-8 border-b border-charcoal/10 dark:border-cream/10"
            >
              <div className="md:col-span-3 md:pt-1">
                <p className="text-sm text-charcoal/50 dark:text-cream/50">{when}</p>
                <p className="mt-1 text-sm text-olive-600 dark:text-olive-300">{kind}</p>
              </div>
              <div className="md:col-span-4">
                <p className="font-heading text-xl text-charcoal dark:text-cream">{org}</p>
                <p className="mt-1 text-sm text-charcoal/60 dark:text-cream/60">{role}</p>
              </div>
              <p className="md:col-span-5 text-[15px] leading-relaxed text-charcoal/70 dark:text-cream/70 md:pt-1">
                {summary}
              </p>
            </li>
          ))}
        </Reveal>

        <div className="mt-10 text-[15px]">
          <TextLink href="#/experience">More detail on each</TextLink>
        </div>
      </Container>
    </section>
  )
}
