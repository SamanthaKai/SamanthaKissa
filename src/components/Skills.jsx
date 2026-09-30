import Section from './Section'

const categories = [
  { label: 'Cybersecurity', skills: 'Kali Linux, Nmap, Wireshark, Splunk, OWASP, Penetration Testing, Threat Hunting, Linux Security' },
  { label: 'Development', skills: 'Python, Flask, React, JavaScript, HTML, CSS, Tailwind CSS, REST APIs' },
  { label: 'AI & APIs', skills: 'Claude API, Groq API, LLaMA 3, Prompt Engineering' },
  { label: 'Cloud & Deployment', skills: 'Vercel, Railway, GitHub Actions, Linux Administration' },
  { label: 'Databases', skills: 'PostgreSQL, MySQL, SQLite, Database Design, RBAC' },
  { label: 'Tools', skills: 'Git, GitHub, VS Code, Postman, Figma, Notion, Trello, Linux Terminal' },
]

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Tools">
      <dl className="divide-y divide-charcoal/10 dark:divide-cream/10">
        {categories.map(({ label, skills }) => (
          <div key={label} className="grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 py-4 first:pt-0">
            <dt className="font-medium text-charcoal dark:text-cream">{label}</dt>
            <dd className="text-charcoal/70 dark:text-cream/70 leading-relaxed">{skills}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
