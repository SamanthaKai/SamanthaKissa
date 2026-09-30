import Section from './Section'

const communities = [
  {
    name: 'Tech4Dev',
    description: 'A technology and skills development community supporting young people across Africa.',
  },
  {
    name: 'Women in CyberSecurity (WiCyS)',
    description: 'A professional community focused on supporting and connecting women in cybersecurity.',
  },
]

export default function Communities() {
  return (
    <Section id="communities" title="Communities I'm a Part Of">
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
        {communities.map(({ name, description }) => (
          <div key={name}>
            <h3 className="font-medium text-charcoal dark:text-cream">{name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70 dark:text-cream/70">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
