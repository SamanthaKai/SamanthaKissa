import Section from './Section'

const experiences = [
  {
    role: 'Cybersecurity Intern, SOC Analysis',
    org: 'Ubuntu Bridge Initiative (UBI)',
    meta: 'June 2026 to Present | Remote',
    paragraphs: [
      'A cybersecurity internship focused on SOC analysis and practical security work.',
      'I have worked through security exercises covering foundations, applied cryptography, web application security, incident response, and governance and risk.',
      'I completed the Cyber Core stages with a final score of 95/100 and progressed from Intern to Cyber Core Associate.',
    ],
  },
  {
    role: 'Cybersecurity Intern',
    org: 'Karmix Tech',
    meta: 'May to August 2026 | Remote',
    paragraphs: [
      'A three-month cybersecurity internship focused on vulnerability assessment, ethical hacking, and security reporting.',
      'I worked on network vulnerability assessments, security testing of legacy services, proof-of-concept exploits, remediation recommendations, and technical documentation.',
    ],
  },
  {
    role: 'Cybersecurity Fellow',
    org: 'Tech4Dev Women Techsters',
    meta: '2024 to Present | Remote',
    paragraphs: [
      'Through the Women Techsters Cybersecurity Fellowship, I have developed practical experience in penetration testing, threat intelligence, threat hunting, Linux security, vulnerability assessment, and security simulations.',
    ],
  },
  {
    role: 'Field Enumerator',
    org: 'Uganda Bureau of Statistics',
    meta: '2023 | Uganda',
    paragraphs: [
      'Worked on digital data collection during national census operations.',
      'The role involved using digital tools in the field, maintaining accurate data, communicating with different communities, and working with field teams to ensure reliable reporting.',
    ],
  },
]

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      intro="My experience has given me opportunities to work on real technical problems, develop practical security skills, and learn how technology is used in different environments."
    >
      <div className="divide-y divide-charcoal/10 dark:divide-cream/10">
        {experiences.map(({ role, org, meta, paragraphs }) => (
          <article key={role + org} className="py-8 first:pt-0 last:pb-0">
            <h3 className="text-lg font-semibold text-charcoal dark:text-cream">{role}</h3>
            <p className="mt-1 font-medium text-olive-600 dark:text-olive-300">{org}</p>
            <p className="mt-1 text-sm text-charcoal/50 dark:text-cream/50">{meta}</p>
            <div className="mt-4 space-y-3 text-charcoal/70 dark:text-cream/70 leading-relaxed max-w-2xl">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
