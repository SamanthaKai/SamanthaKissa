import { Container, Heading, Reveal, TextLink } from './ui'

const more = [
  {
    kind: 'Offline AI tool, 2026',
    title: 'CodeScribe',
    body: "An assistant that writes documentation straight from Python code, with no internet connection. I built it for the Laptop LLM Challenge at the Africa Deep Tech Challenge 2026. After working with cloud APIs, this was a different kind of problem. On a laptop, model size and speed aren't details anymore. They decide whether the thing works at all.",
  },
  {
    kind: 'Security lab',
    title: 'Legacy services assessment',
    body: "A deliberately vulnerable machine (Metasploitable 2), a VirtualBox lab, and old services like FTP, Telnet and NFS. I found and documented a way in through each, and wrote it all up as two assessment reports. Old protocols are a good reminder that \"it still works\" and \"it's still safe\" are not the same thing.",
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-32 border-t border-charcoal/10 dark:border-cream/10">
      <Container>
        <Reveal>
          <Heading className="text-4xl sm:text-5xl">Selected work</Heading>
        </Reveal>

        {/* Featured project */}
        <Reveal as="article" className="mt-14 sm:mt-16">
          <a
            href="#/cooksmart"
            className="group block overflow-hidden rounded-lg border border-charcoal/10 dark:border-cream/10 bg-white"
            aria-label="Read about CookSmart"
          >
            <img
              src="/cooksmart.jpg"
              alt="The CookSmart home page, with a recipe search over a photo of jollof rice"
              className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              loading="lazy"
            />
          </a>
          <div className="mt-8 grid lg:grid-cols-12 gap-x-10 gap-y-5">
            <div className="lg:col-span-4">
              <p className="text-sm text-charcoal/50 dark:text-cream/50">Full-stack web app, 2026</p>
              <Heading as="h3" className="mt-2 text-3xl sm:text-4xl">CookSmart</Heading>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-[17px] leading-relaxed text-charcoal/75 dark:text-cream/75">
                An AI recipe platform for African food. Getting AI to write a recipe turned out to be the easy part. Getting it to write one that is true to the dish was the real work. I led the project and built it end to end.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
                <TextLink href="#/cooksmart">Read the project story</TextLink>
                <TextLink href="https://cooksmart-seven.vercel.app/" external>Visit the live site</TextLink>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Smaller pieces of work */}
        <div className="mt-20 sm:mt-24 grid md:grid-cols-2 gap-x-10 gap-y-14">
          {more.map(({ kind, title, body }) => (
            <Reveal as="article" key={title} className="border-t border-charcoal/15 dark:border-cream/15 pt-6">
              <p className="text-sm text-charcoal/50 dark:text-cream/50">{kind}</p>
              <Heading as="h3" className="mt-2 text-2xl sm:text-[1.75rem]">{title}</Heading>
              <p className="mt-4 text-[15px] leading-relaxed text-charcoal/70 dark:text-cream/70">{body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
