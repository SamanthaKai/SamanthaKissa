import { ArrowLeft } from 'lucide-react'
import { Container, Heading, Reveal } from '../components/ui'

const roles = [
  {
    org: 'Ubuntu Bridge Initiative',
    role: 'Cybersecurity Intern, SOC Analysis',
    when: 'June to August 2026, remote',
    intro: 'Operation Root Access follows one simulated incident at a fictional fintech company across seven stages. You start as a Tier-1 analyst looking at login records, and by the end you are writing to the board. A lot of the story was already sitting in alerts someone had dismissed.',
    points: [
      'Investigated authentication logs and ticket history to find suspicious logins and alerts that had been wrongly dismissed.',
      'Mapped the attack surface, including an exposed Elasticsearch index holding personal data, SQL injection, XSS, and SSRF to cloud metadata.',
      'Traced persistence, a sudoers misconfiguration and C2 beaconing, then built the incident timeline and IOC list.',
      'Wrote a GDPR breach notification, a risk register, a board memo and a 30/60/90 day remediation plan.',
      'Triaged around 96 change records to separate legitimate changes from ones that needed escalation.',
    ],
    outcome: 'I completed all seven stages, finished the Cyber Core stages with a score of 95/100, and was promoted from Intern to Cyber Core Associate.',
  },
  {
    org: 'Karmix Tech',
    role: 'Cybersecurity Intern',
    when: 'June to August 2026, remote',
    intro: 'Three months of vulnerability assessments and security reviews on live web applications. Finding the issue is half of the work. The other half is writing it up so the person who has to fix it actually can.',
    points: [
      'Ran vulnerability assessments and web application security reviews aligned to NIST CSF 2.0, ISO 27001:2022 and MITRE D3FEND.',
      'Analysed the attack surface of live web applications and documented exposure points for remediation.',
      'Wrote formal assessment reports for stakeholder and audit review.',
    ],
  },
  {
    org: 'Tech4Dev Women Techsters',
    role: 'Cybersecurity Fellow',
    when: 'September 2025 to now, remote',
    intro: 'The fellowship is where a lot of my hands-on practice happens: virtual labs, real tools and simulated attacks, across networking, cryptography, GRC and incident response.',
    points: [
      'Ran security assessments in virtual labs with Kali Linux, Nmap and Wireshark.',
      'Configured and tested role-based access control policies in Active Directory.',
      'Carried out wireless security audits and simulated penetration tests, from reconnaissance to post-exploitation.',
    ],
  },
  {
    org: 'Uganda Bureau of Statistics',
    role: 'Field Enumerator, Baseline Education Census 2025',
    when: 'June to August 2025, Uganda',
    intro: 'Before most of my security work, I spent three months collecting data for the national education census. It took me to more than 100 schools and institutions, from city universities to rural primary schools. Getting people comfortable with a digital tool, often somewhere with poor connectivity, turned out to be part of the job.',
    points: [
      'Collected data using computer-assisted personal interviewing (CAPI).',
      'Kept the data accurate and complete throughout collection.',
      'Worked with school administrators, teachers and community members to get the data collected.',
    ],
  },
]

const extras = [
  {
    title: 'Ongoing practice',
    body: 'Threat hunting and SOC practice on LetsDefend, and the Blue Team Junior Analyst Pathway on Blue Team Labs Online.',
  },
  {
    title: 'Education',
    body: 'Bachelor of Information Technology, Mbarara University of Science and Technology, 2023 to 2026.',
  },
  {
    title: 'Tools I use',
    body: 'Kali Linux, Nmap, Wireshark, Snort and Splunk for security work. Python, Flask, React, JavaScript, PostgreSQL and Bash for building. Claude, Groq and LLaMA 3 for AI.',
  },
  {
    title: 'Languages',
    body: 'English, Luganda, and some German.',
  },
]

export default function ExperienceDetail() {
  return (
    <Container className="pt-28 sm:pt-32">
      <a
        href="#experience"
        className="inline-flex items-center gap-1.5 text-sm text-charcoal/55 dark:text-cream/55 hover:text-charcoal dark:hover:text-cream transition-colors"
      >
        <ArrowLeft size={15} />
        Back to main page
      </a>

      <header className="mt-12 pb-16 sm:pb-20 hero-in">
        <Heading as="h1" className="text-6xl sm:text-8xl leading-[0.95]">Experience</Heading>
        <p className="mt-8 max-w-2xl font-heading text-2xl sm:text-[1.75rem] leading-snug text-charcoal/75 dark:text-cream/75">
          A closer look at each role, and what I took from it.
        </p>
      </header>

      {roles.map(({ org, role, when, intro, points, outcome }) => (
        <Reveal
          as="section"
          key={org}
          className="grid lg:grid-cols-12 gap-x-10 gap-y-6 py-14 sm:py-16 border-t border-charcoal/10 dark:border-cream/10"
        >
          <div className="lg:col-span-4">
            <Heading as="h2" className="text-2xl sm:text-3xl">{org}</Heading>
            <p className="mt-2 text-[15px] text-charcoal dark:text-cream">{role}</p>
            <p className="mt-1 text-sm text-charcoal/50 dark:text-cream/50">{when}</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 text-[15px] leading-relaxed text-charcoal/75 dark:text-cream/75">
            <p className="text-[17px]">{intro}</p>
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-[0.6rem] w-1 h-1 rounded-full bg-olive-600 dark:bg-olive-300 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            {outcome && <p className="mt-6 text-charcoal dark:text-cream">{outcome}</p>}
          </div>
        </Reveal>
      ))}

      <Reveal
        as="section"
        className="grid sm:grid-cols-2 gap-x-10 gap-y-10 py-16 sm:py-20 border-t border-charcoal/10 dark:border-cream/10"
      >
        {extras.map(({ title, body }) => (
          <div key={title}>
            <p className="text-sm text-charcoal/50 dark:text-cream/50">{title}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-charcoal/80 dark:text-cream/80">{body}</p>
          </div>
        ))}
      </Reveal>
    </Container>
  )
}
