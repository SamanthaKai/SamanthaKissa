import Section from './Section'

const areas = [
  {
    title: 'Cybersecurity',
    body: 'Hands-on experience in vulnerability assessment, penetration testing, threat hunting, incident response, and security analysis.',
  },
  {
    title: 'AI & Software Development',
    body: 'I build web applications and work with AI APIs to create practical tools and user-focused solutions.',
  },
  {
    title: 'IT & Systems',
    body: 'My IT background gives me a broader understanding of how software, infrastructure, data, and people work together.',
  },
]

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="space-y-5 text-base leading-relaxed text-charcoal/75 dark:text-cream/75 max-w-2xl">
        <p>
          I&apos;m Samantha Kissa, an Information Technology graduate from Uganda with a growing focus on cybersecurity.
        </p>
        <p>
          My experience spans cybersecurity, software development, AI, and digital data collection. I&apos;ve worked on security assessments, incident response exercises, AI-powered applications, and projects that required both technical problem-solving and clear communication.
        </p>
        <p>
          I enjoy understanding how systems work, finding where they can be improved, and building things that are useful in the real world.
        </p>
        <p>
          I&apos;m particularly interested in cybersecurity and the role technology can play in solving problems across Africa.
        </p>
      </div>

      <h3 className="mt-12 mb-6 text-sm font-semibold text-charcoal dark:text-cream">
        A little more about my work
      </h3>
      <div className="grid sm:grid-cols-3 gap-8">
        {areas.map(({ title, body }) => (
          <div key={title}>
            <h4 className="font-medium text-olive-600 dark:text-olive-300 mb-2">{title}</h4>
            <p className="text-sm leading-relaxed text-charcoal/70 dark:text-cream/70">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
