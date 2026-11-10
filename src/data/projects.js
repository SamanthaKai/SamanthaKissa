// Every project shown in the Work section. `caseStudy` is what opens in the drawer.

export const projects = [
  {
    slug: 'cooksmart',
    kind: 'Full-stack web app, 2026',
    title: 'CookSmart',
    summary:
      'An AI recipe platform for African food. Getting AI to write a recipe turned out to be the easy part. Getting it to write one that is true to the dish was the real work. I led the project and built it end to end.',
    visual: 'image',
    image: {
      src: '/cooksmart.jpg',
      alt: 'The CookSmart home page, with a recipe search over a photo of jollof rice',
    },
    tone: 'light',
    caseStudy: {
      lede: 'A web app that helps people find, understand and cook African recipes, with AI that works from real recipes instead of guessing.',
      liveUrl: 'https://cooksmart-seven.vercel.app/',
      facts: [
        { label: 'Role', value: 'Project lead and full-stack developer' },
        { label: 'When', value: 'February to May 2026' },
        { label: 'Built with', value: 'React, Flask, PostgreSQL, LLaMA 3 on Groq, Claude API' },
        { label: 'Hosted on', value: 'Vercel and Railway' },
      ],
      sections: [
        {
          title: 'Why I built it',
          paragraphs: [
            'CookSmart started with a simple idea: make African recipes easier to discover, understand, and adapt to different needs.',
            'Getting an AI model to write a recipe is easy. Getting one that is true to the dish is harder.',
            'That second part is the problem I actually wanted to solve.',
          ],
        },
        {
          title: 'How it works',
          paragraphs: [
            'Instead of asking a model to make up a recipe from nothing, CookSmart first looks up real recipes in its database and hands them to the model as context. The model works from something real, not from whatever it thinks jollof rice probably is.',
          ],
          flow: [
            { step: 'Someone asks for a recipe', where: 'React app on Vercel' },
            { step: 'The backend finds real recipes that match', where: 'Flask and PostgreSQL on Railway' },
            { step: 'LLaMA 3 writes the recipe, using those records as context', where: 'Groq API' },
            { step: 'Claude adds cooking tips and nutrition insights', where: 'Claude API' },
          ],
        },
        {
          title: 'Decisions along the way',
          items: [
            {
              title: 'Two models, two jobs',
              body: [
                "I didn't need one model to do everything. LLaMA 3 on Groq writes the recipes, because it's fast. Claude handles the cooking tips and nutrition insights. Flask decides which one gets called, and when.",
              ],
            },
            {
              title: 'Rate limits are real',
              body: [
                'Groq has rate limits, and under load some requests simply failed. Nobody wants to ask for a recipe and get an error, so I added retries with backoff and a queue to fall back on.',
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
          ],
        },
        {
          title: 'My role',
          paragraphs: [
            'I led the project from the first idea to a live site people can actually use. Along the way I wrote the prompts, connected the APIs, built the Flask and PostgreSQL backend and the React frontend, and did a fair amount of debugging in production.',
          ],
        },
        {
          title: 'What I learned',
          paragraphs: [
            'Getting each part working on its own was the easy bit. Getting them to work together, in production, is where most of the learning happened.',
            'It also made me pay attention to the things that never show up in a demo: API security, input validation, rate limiting, database access, CORS, deployment, and how far you can really trust what an AI model gives you.',
          ],
        },
      ],
    },
  },
  {
    slug: 'codescribe',
    kind: 'Offline AI tool, 2026',
    title: 'CodeScribe',
    summary:
      'An assistant that writes documentation straight from Python code, with no internet connection. I built it for the Laptop LLM Challenge at the Africa Deep Tech Challenge 2026.',
    visual: 'code',
    tone: 'dark',
    caseStudy: {
      lede: 'An assistant that writes documentation straight from Python code, with no internet connection.',
      sections: [
        {
          title: 'The project',
          paragraphs: [
            "An assistant that writes documentation straight from Python code, with no internet connection. I built it for the Laptop LLM Challenge at the Africa Deep Tech Challenge 2026. After working with cloud APIs, this was a different kind of problem. On a laptop, model size and speed aren't details anymore. They decide whether the thing works at all.",
          ],
        },
      ],
    },
  },
  {
    slug: 'legacy-services',
    kind: 'Security lab',
    title: 'Legacy services assessment',
    summary:
      'A deliberately vulnerable machine, a VirtualBox lab, and old services like FTP, Telnet and NFS. I found and documented a way in through each.',
    visual: 'terminal',
    tone: 'leaf',
    caseStudy: {
      lede: 'Old protocols are a good reminder that "it still works" and "it\'s still safe" are not the same thing.',
      sections: [
        {
          title: 'The lab',
          paragraphs: [
            'A deliberately vulnerable machine (Metasploitable 2), a VirtualBox lab, and old services like FTP, Telnet and NFS. I found and documented a way in through each, and wrote it all up as two assessment reports. Old protocols are a good reminder that "it still works" and "it\'s still safe" are not the same thing.',
          ],
        },
      ],
    },
  },
]
