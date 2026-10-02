import { ArrowLeft } from 'lucide-react'
import { Container, Heading, Reveal, TextLink } from '../components/ui'

const LIVE_URL = 'https://cooksmart-seven.vercel.app/'

const facts = [
  { label: 'Role', value: 'Project lead and full-stack developer' },
  { label: 'When', value: 'February to May 2026' },
  { label: 'Built with', value: 'React, Flask, PostgreSQL, LLaMA 3 on Groq, Claude API' },
  { label: 'Hosted on', value: 'Vercel and Railway' },
]

const flow = [
  { step: 'Someone asks for a recipe', where: 'React app on Vercel' },
  { step: 'The backend finds real recipes that match', where: 'Flask and PostgreSQL on Railway' },
  { step: 'LLaMA 3 writes the recipe, using those records as context', where: 'Groq API' },
  { step: 'Claude adds cooking tips and nutrition insights', where: 'Claude API' },
]

const decisions = [
  {
    title: 'Two models, two jobs',
    body: [
      "I didn't need one model to do everything. LLaMA 3 on Groq writes the recipes, because it's fast. Claude handles the cooking tips and nutrition insights. Flask decides which one gets called, and when.",
    ],
  },
  {
    title: 'Rate limits are real',
    body: [
      "Groq has rate limits, and under load some requests simply failed. Nobody wants to ask for a recipe and get an error, so I added retries with backoff and a queue to fall back on.",
    ],
  },
  {
    title: 'Keys stay on the server',
    body: [
      'The API keys for Groq, Claude and the database live in environment variables on Railway. Nothing secret goes anywhere near the browser.',
    ],
  },
  {
    title: 'Production had other ideas',
    body: [
      'The frontend runs on Vercel and the backend on Railway. Some of the CORS issues only showed up after deployment. Everything looked fine locally, then production had other ideas.',
      'Fixing it meant sorting out preflight headers and environment settings on a live app. Now I test the production setup much earlier, before it has a chance to surprise me.',
    ],
  },
]

function Block({ title, children }) {
  return (
    <Reveal as="section" className="grid lg:grid-cols-12 gap-x-10 gap-y-6 py-16 sm:py-20 border-t border-charcoal/10 dark:border-cream/10">
      <Heading className="lg:col-span-4 text-3xl sm:text-4xl">{title}</Heading>
      <div className="lg:col-span-7 lg:col-start-6 text-[17px] leading-relaxed text-charcoal/75 dark:text-cream/75">
        {children}
      </div>
    </Reveal>
  )
}

export default function CookSmart() {
  return (
    <article>
      <Container className="pt-28 sm:pt-32">
        <a
          href="#work"
          className="inline-flex items-center gap-1.5 text-sm text-charcoal/55 dark:text-cream/55 hover:text-charcoal dark:hover:text-cream transition-colors"
        >
          <ArrowLeft size={15} />
          Back to all work
        </a>

        <header className="mt-12 hero-in">
          <Heading as="h1" className="text-6xl sm:text-8xl leading-[0.95]">CookSmart</Heading>
          <p className="mt-8 max-w-2xl font-heading text-2xl sm:text-[1.75rem] leading-snug text-charcoal/75 dark:text-cream/75">
            A web app that helps people find, understand and cook African recipes, with AI that works from real recipes instead of guessing.
          </p>
        </header>

        <dl className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6 border-t border-charcoal/15 dark:border-cream/15 pt-6 hero-in hero-in-late">
          {facts.map(({ label, value }) => (
            <div key={label}>
              <dt className="text-sm text-charcoal/50 dark:text-cream/50">{label}</dt>
              <dd className="mt-1 text-[15px] text-charcoal dark:text-cream">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 text-[15px] hero-in hero-in-late">
          <TextLink href={LIVE_URL} external>Visit the live site</TextLink>
        </div>

        <Reveal className="mt-16 overflow-hidden rounded-lg border border-charcoal/10 dark:border-cream/10 bg-white">
          <img
            src="/cooksmart.jpg"
            alt="The CookSmart home page, with a recipe search over a photo of jollof rice"
            className="w-full h-auto"
          />
        </Reveal>

        <div className="mt-20 sm:mt-24">
          <Block title="Why I built it">
            <div className="space-y-5">
              <p>
                CookSmart started with a simple idea: make African recipes easier to discover, understand, and adapt to different needs.
              </p>
              <p>
                Getting an AI model to write a recipe is easy. Getting one that is true to the dish is harder.
              </p>
              <p>That second part is the problem I actually wanted to solve.</p>
            </div>
          </Block>

          <Block title="How it works">
            <p>
              Instead of asking a model to make up a recipe from nothing, CookSmart first looks up real recipes in its database and hands them to the model as context. The model works from something real, not from whatever it thinks jollof rice probably is.
            </p>
            <ol className="mt-10 border-t border-charcoal/15 dark:border-cream/15">
              {flow.map(({ step, where }, i) => (
                <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-x-2 py-5 border-b border-charcoal/10 dark:border-cream/10">
                  <span className="text-sm tabular-nums text-olive-600 dark:text-olive-300 pt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-charcoal dark:text-cream">{step}</p>
                    <p className="mt-0.5 text-sm text-charcoal/50 dark:text-cream/50">{where}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Block>

          <Block title="Decisions along the way">
            <div className="space-y-10">
              {decisions.map(({ title, body }) => (
                <div key={title}>
                  <p className="font-heading text-xl text-charcoal dark:text-cream">{title}</p>
                  <div className="mt-2 space-y-4">
                    {body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Block>

          <Block title="My role">
            <p>
              I led the project from the first idea to a live site people can actually use. Along the way I wrote the prompts, connected the APIs, built the Flask and PostgreSQL backend and the React frontend, and did a fair amount of debugging in production.
            </p>
          </Block>

          <Block title="What I learned">
            <div className="space-y-5">
              <p>
                Getting each part working on its own was the easy bit. Getting them to work together, in production, is where most of the learning happened.
              </p>
              <p>
                It also made me pay attention to the things that never show up in a demo: API security, input validation, rate limiting, database access, CORS, deployment, and how far you can really trust what an AI model gives you.
              </p>
            </div>
          </Block>
        </div>

        <div className="py-16 sm:py-20 border-t border-charcoal/10 dark:border-cream/10 flex flex-wrap gap-x-10 gap-y-4 text-[15px]">
          <TextLink href={LIVE_URL} external>Visit the live site</TextLink>
          <TextLink href="#work" arrow={false}>Back to all work</TextLink>
        </div>
      </Container>
    </article>
  )
}
