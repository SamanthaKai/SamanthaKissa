import { ArrowLeft } from 'lucide-react'
import { Container, Heading, Reveal } from '../components/ui'

const roles = [
  {
    org: 'Ubuntu Bridge Initiative',
    role: 'Cybersecurity Intern, SOC Analysis',
    when: 'June to August 2026, remote',
    intro: [
      'Operation Root Access follows a simulated security incident at a fictional fintech company across seven stages. I started as a Tier 1 analyst reviewing login records and worked through the investigation until I had to present my findings to the board.',
      'One thing that stood out was how much of the incident could have been spotted earlier. Some of the alerts that mattered had already been dismissed.',
    ],
    points: [
      'Investigated authentication logs and ticket history to identify suspicious logins and alerts that had been wrongly dismissed.',
      'Examined the attack surface, including an exposed Elasticsearch index containing personal data, SQL injection, XSS and SSRF to cloud metadata.',
      'Traced persistence, a sudoers misconfiguration and C2 beaconing. I also prepared the incident timeline and list of indicators of compromise (IOCs).',
      'Prepared a GDPR breach notification, risk register, board memo and 30/60/90-day remediation plan.',
      'Reviewed around 96 change records to separate legitimate changes from those that needed further investigation.',
    ],
    outcome: 'I completed all seven stages, scored 95/100 in the Cyber Core stages, and progressed from Intern to Cyber Core Associate.',
  },
  {
    org: 'Karmix Tech',
    role: 'Cybersecurity Intern',
    when: 'June to August 2026, remote',
    intro: ['I spent three months working on vulnerability assessments and security reviews of live web applications. The work involved identifying weaknesses, understanding the risks they posed and preparing reports that could help teams fix them.'],
    points: [
      'Conducted vulnerability assessments and web application security reviews using NIST CSF 2.0, ISO 27001:2022 and MITRE D3FEND as references.',
      'Reviewed the security of web applications and documented areas that needed attention.',
      'Prepared assessment reports for stakeholders and audit reviews.',
    ],
  },
  {
    org: 'Tech4Dev Women Techsters',
    role: 'Cybersecurity Fellow',
    when: 'September 2025 to now, remote',
    intro: ['The fellowship has given me room to practise cybersecurity using virtual labs, security tools and simulated attacks. My learning has covered networking, cryptography, governance, risk and compliance (GRC), and incident response.'],
    points: [
      'Practised security assessments in virtual labs using Kali Linux, Nmap and Wireshark.',
      'Configured and tested role-based access control policies in Active Directory.',
      'Carried out wireless security audits and simulated penetration tests, from initial reconnaissance to post-exploitation.',
    ],
  },
  {
    org: 'Uganda Bureau of Statistics',
    role: 'Field Enumerator, Baseline Education Census 2025',
    when: 'June to August 2025, Uganda',
    intro: [
      'Before getting into cybersecurity, I spent three months collecting data for the national education census. The work took me to more than 100 schools and institutions, from city universities to rural primary schools.',
      'I used digital tools to collect information, often working in areas with poor internet connectivity. It also gave me experience working with different people and helping them use digital tools to get the job done.',
    ],
    points: [
      'Collected data using computer-assisted personal interviewing (CAPI).',
      'Checked information throughout the exercise to keep the data accurate and complete.',
      'Worked with school administrators, teachers and community members during data collection.',
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
          A closer look at the work I&apos;ve done, the skills I&apos;ve developed, and what I&apos;ve learned along the way.
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
            <div className="space-y-4 text-[17px]">
              {intro.map((p) => <p key={p}>{p}</p>)}
            </div>
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-[0.6rem] w-1 h-1 rounded-full bg-brass-600 dark:bg-brass-300 flex-shrink-0" />
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
