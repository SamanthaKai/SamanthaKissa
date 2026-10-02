import { Container, Heading, Reveal, TextLink } from './ui'

const roles = [
  {
    when: 'Jun to Aug 2026',
    org: 'Ubuntu Bridge Initiative',
    role: 'Cybersecurity Intern, SOC Analysis',
    summary: 'One simulated incident at a fictional fintech company, followed from the first suspicious login all the way to the board report. Promoted to Cyber Core Associate.',
  },
  {
    when: 'Jun to Aug 2026',
    org: 'Karmix Tech',
    role: 'Cybersecurity Intern',
    summary: 'Vulnerability assessments and web app security reviews, and reports clear enough for someone else to act on.',
  },
  {
    when: 'Sep 2025 to now',
    org: 'Tech4Dev Women Techsters',
    role: 'Cybersecurity Fellow',
    summary: 'Where a lot of my hands-on practice happens: labs, real tools and simulated attacks.',
  },
  {
    when: 'Jun to Aug 2025',
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
          <Heading className="text-4xl sm:text-5xl">Experience so far</Heading>
        </Reveal>

        <Reveal as="ul" className="mt-14 sm:mt-16 border-t border-charcoal/15 dark:border-cream/15">
          {roles.map(({ when, org, role, summary }) => (
            <li
              key={org}
              className="grid md:grid-cols-12 gap-x-10 gap-y-2 py-8 border-b border-charcoal/10 dark:border-cream/10"
            >
              <p className="md:col-span-3 text-sm text-charcoal/50 dark:text-cream/50 md:pt-1">{when}</p>
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
          <TextLink href="#/experience">More about each role</TextLink>
        </div>
      </Container>
    </section>
  )
}
