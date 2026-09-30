import Section from './Section'

export default function Leadership() {
  return (
    <Section id="leadership" title="Leadership">
      <h3 className="text-lg font-semibold text-charcoal dark:text-cream">Aspire Leadership Program</h3>
      <p className="mt-1 font-medium text-olive-600 dark:text-olive-300">Aspire Fellow | 2024</p>
      <div className="mt-4 space-y-3 text-charcoal/70 dark:text-cream/70 leading-relaxed max-w-2xl">
        <p>
          I was selected for the Aspire Leadership Program, where I worked with a global cohort of emerging leaders.
        </p>
        <p>
          The programme gave me the opportunity to learn about leadership, decision-making, problem-solving, and working across different cultures and perspectives.
        </p>
        <p>
          It also challenged me to think more carefully about the kind of leader I want to become and the kind of work I want to contribute to.
        </p>
      </div>
    </Section>
  )
}
