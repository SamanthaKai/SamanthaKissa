import Section from './Section'

const certs = [
  {
    title: 'Cyber Core Associate',
    issuer: 'Ubuntu Bridge Initiative',
    year: '2026',
    description: 'Completed the Cyber Core programme covering SOC analysis, applied cryptography, web application security, incident response, and governance and risk.',
  },
  {
    title: 'AWS AI Practitioner Challenge',
    issuer: 'Amazon Web Services',
    year: '2026',
    description: 'Training covering AI and machine learning concepts on AWS, responsible AI, and cloud-based AI services.',
  },
  {
    title: 'AI for Beginners',
    issuer: 'Microsoft / LinkedIn Learning',
    year: '2024',
    description: 'Introduction to artificial intelligence, machine learning concepts, and practical AI applications.',
  },
  {
    title: 'Cyber Threat Hunting',
    issuer: 'Tech4Dev Women Techsters',
    year: '2024',
    description: 'Training in threat detection, IOC analysis, and cyber threat hunting.',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco / NetAcad',
    year: '2023',
    description: 'Foundations of cybersecurity, network security, and digital safety.',
  },
  {
    title: 'Introduction to Kali Linux',
    issuer: 'Offensive Security',
    year: '2024',
    description: 'Practical training in Kali Linux and its use in security testing and ethical hacking.',
  },
]

export default function Certifications() {
  return (
    <Section
      id="credentials"
      title="Credentials"
      intro="A selection of certifications, programmes, and professional training I have completed."
    >
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
        {certs.map(({ title, issuer, year, description }) => (
          <div key={title}>
            <h3 className="font-medium text-charcoal dark:text-cream">{title}</h3>
            <p className="mt-0.5 text-sm text-olive-600 dark:text-olive-300">
              {issuer} | {year}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70 dark:text-cream/70">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
