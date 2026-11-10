import { Chapter, Container, Heading, Reveal } from './ui'

const credentials = [
  { title: 'Cyber Core Associate', issuer: 'Ubuntu Bridge Initiative' },
  { title: 'AWS AI Practitioner Challenge', issuer: 'Udacity' },
  { title: 'Introduction to Kali Linux Basics', issuer: 'Simplilearn SkillUp' },
  { title: 'Cyber Threat Hunting', issuer: 'Infosec, via Coursera' },
  { title: 'AI for Beginners', issuer: 'HP LIFE' },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy' },
]

const communities = [
  {
    name: 'Tech4Dev',
    body: 'A community that helps young people across Africa develop technology skills and access opportunities.',
  },
  {
    name: 'Women in CyberSecurity (WiCyS)',
    body: 'A professional community that connects and supports women working in or pursuing cybersecurity.',
  },
]

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 sm:py-32 border-t border-charcoal/10 dark:border-cream/10">
      <Container className="grid lg:grid-cols-12 gap-x-10 gap-y-20">
        <Reveal className="lg:col-span-6">
          <Chapter n="04">Along the way</Chapter>
          <Heading className="mt-5 text-3xl sm:text-4xl">Credentials</Heading>
          <ul className="mt-10">
            {credentials.map(({ title, issuer }) => (
              <li
                key={title}
                className="flex flex-col sm:flex-row sm:justify-between gap-x-6 gap-y-0.5 py-3.5 border-b border-charcoal/10 dark:border-cream/10 first:border-t"
              >
                <span className="text-[15px] text-charcoal dark:text-cream">{title}</span>
                <span className="text-sm text-charcoal/50 dark:text-cream/50 sm:text-right">{issuer}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-5 lg:col-start-8">
          <Heading className="lg:mt-9 text-3xl sm:text-4xl">Communities I&apos;m a part of</Heading>
          <div className="mt-10 space-y-8">
            {communities.map(({ name, body }) => (
              <div key={name}>
                <p className="text-[15px] font-medium text-charcoal dark:text-cream">{name}</p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-charcoal/65 dark:text-cream/65">{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
