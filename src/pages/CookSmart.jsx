import { ArrowLeft, ExternalLink } from 'lucide-react'
import Section from '../components/Section'

const LIVE_URL = 'https://cooksmart-seven.vercel.app/'

const features = [
  'Generates African recipes using AI',
  'Provides nutritional information',
  'Takes dietary preferences into account',
  'Stores user preferences and recipe history',
  'Uses multiple AI models for different tasks',
]

const stack = [
  { label: 'Frontend', items: 'React, Tailwind CSS, Vite, Axios' },
  { label: 'Backend', items: 'Python, Flask, Gunicorn' },
  { label: 'Database', items: 'PostgreSQL' },
  { label: 'AI', items: 'LLaMA 3, Groq API, Claude API' },
  { label: 'Deployment', items: 'Vercel, Railway, GitHub Actions' },
]

function LiveDemoButton() {
  return (
    <a
      href={LIVE_URL}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-olive-600 text-white text-sm font-medium hover:bg-olive-700 transition-colors"
    >
      Live Demo
      <ExternalLink size={14} />
    </a>
  )
}

export default function CookSmart() {
  return (
    <>
      <header className="pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-sm text-charcoal/60 dark:text-cream/60 hover:text-charcoal dark:hover:text-cream transition-colors"
          >
            <ArrowLeft size={15} />
            Back to main page
          </a>

          <h1 className="mt-8 font-heading text-5xl sm:text-6xl font-medium tracking-tight text-charcoal dark:text-cream">
            CookSmart
          </h1>
          <p className="mt-4 text-lg font-medium text-olive-600 dark:text-olive-300">
            Building a better way to discover African recipes
          </p>

          <div className="mt-8 space-y-4 text-lg leading-relaxed text-charcoal/70 dark:text-cream/70 max-w-2xl">
            <p>
              CookSmart started with a simple idea: make African recipes easier to discover, understand, and adapt to different needs.
            </p>
            <p>
              I built it as a full-stack application with an AI layer, a database, and separate frontend and backend services.
            </p>
            <p>
              The application uses LLaMA 3 for recipe generation and Claude for nutritional analysis. Flask handles the backend and API logic, while React powers the frontend.
            </p>
          </div>

          <div className="mt-8">
            <LiveDemoButton />
          </div>
        </div>
      </header>

      <Section id="what-it-does" title="What it does">
        <ul className="space-y-3">
          {features.map((f) => (
            <li key={f} className="flex gap-3 text-charcoal/75 dark:text-cream/75 leading-relaxed">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-olive-600 dark:bg-olive-300 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="built-with" title="Built with">
        <dl className="divide-y divide-charcoal/10 dark:divide-cream/10">
          {stack.map(({ label, items }) => (
            <div key={label} className="grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 py-4 first:pt-0">
              <dt className="font-medium text-charcoal dark:text-cream">{label}</dt>
              <dd className="text-charcoal/70 dark:text-cream/70">{items}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="what-i-learned" title="What I learned">
        <div className="space-y-4 text-charcoal/75 dark:text-cream/75 leading-relaxed max-w-2xl">
          <p>
            Building CookSmart gave me practical experience with connecting different parts of an application and getting them to work together in production.
          </p>
          <p>
            It also taught me to think about things like API security, input validation, rate limiting, database access, CORS, deployment, and the limitations of AI-generated output.
          </p>
        </div>
        <div className="mt-10">
          <LiveDemoButton />
        </div>
      </Section>
    </>
  )
}
