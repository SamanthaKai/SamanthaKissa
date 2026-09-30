import Section from './Section'

const principles = [
  {
    title: 'Start with the problem',
    body: 'I first try to understand what needs to be solved and who the solution is for.',
  },
  {
    title: 'Think about the system',
    body: 'I look at how the different parts need to work together before building them.',
  },
  {
    title: 'Build and test',
    body: 'I prefer learning by building, testing, breaking things, and fixing them.',
  },
  {
    title: 'Keep security in mind',
    body: 'Security is something I consider throughout development rather than only at the end.',
  },
  {
    title: 'Learn from what breaks',
    body: "When something doesn't work, I follow the evidence, investigate the cause, and fix the actual problem.",
  },
]

export default function HowIBuild() {
  return (
    <Section
      id="process"
      title="How I Approach Building"
      intro="I like to understand the problem before jumping into implementation."
    >
      <ol className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
        {principles.map(({ title, body }, i) => (
          <li key={title} className="flex gap-4">
            <span className="text-sm tabular-nums text-charcoal/40 dark:text-cream/40 pt-0.5">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-medium text-charcoal dark:text-cream mb-1">{title}</h3>
              <p className="text-sm leading-relaxed text-charcoal/70 dark:text-cream/70">{body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
