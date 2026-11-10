// Every project shown in the Work section. `caseStudy` is what opens in the drawer.

export const projects = [
  {
    slug: 'cooksmart',
    kind: 'Full-stack web app, 2026',
    title: 'CookSmart',
    summary:
      'An AI-powered platform for discovering and cooking African recipes. Getting AI to generate a recipe was easy. Making sure the recipes stayed true to the actual dishes was the bigger challenge. I led the project and built it from the ground up.',
    visual: 'image',
    image: {
      src: '/cooksmart.jpg',
      alt: 'The CookSmart home page, with a recipe search over a photo of jollof rice',
    },
    tone: 'light',
    caseStudy: {
      lede: 'A web app that makes it easier to find, explore and cook African recipes. It uses real recipes stored in a database to give AI more accurate information to work with.',
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
            'CookSmart started with a simple idea: make African recipes easier to find, understand and adapt to different needs.',
            "Getting AI to generate a recipe isn't difficult. Getting it to produce something that actually reflects the dish is another matter. I wanted to work on that difference.",
          ],
        },
        {
          title: 'How it works',
          paragraphs: [
            'Rather than asking AI to create recipes from scratch, CookSmart first searches its database for real recipes. It then gives those recipes to the AI as a reference, helping it produce more relevant results.',
          ],
          flow: [
            { step: 'Someone searches for a recipe', where: 'React app on Vercel' },
            { step: 'The backend searches for matching recipes', where: 'Flask and PostgreSQL on Railway' },
            { step: 'LLaMA 3 generates the recipe using the information found', where: 'Groq API' },
            { step: 'Claude provides additional cooking tips and nutrition information', where: 'Claude API' },
          ],
        },
        {
          title: 'Decisions along the way',
          items: [
            {
              title: 'Using two models',
              body: [
                'I decided not to make one AI model handle everything. LLaMA 3 on Groq generates the recipes, while Claude provides cooking tips and nutrition information. Flask manages which model is used and when.',
              ],
            },
            {
              title: 'Handling rate limits',
              body: [
                'Groq has limits on how many requests can be made, and some requests failed when the system was busy. I added retries, delays and a backup queue to help handle these situations.',
              ],
            },
            {
              title: 'Keeping API keys safe',
              body: [
                'The API keys for Groq, Claude and the database are stored as environment variables on Railway. They are not exposed in the browser.',
              ],
            },
            {
              title: 'Fixing deployment issues',
              body: [
                'The frontend runs on Vercel and the backend on Railway. Some problems only appeared after deployment, especially with CORS. Everything worked locally, but the live application had different requirements. I had to fix the preflight headers and environment settings. This taught me to test the production setup much earlier instead of waiting until the end.',
              ],
            },
          ],
        },
        {
          title: 'My role',
          paragraphs: [
            'I led the project from the initial idea to the finished website. I worked on the prompts, connected the APIs, built the Flask and PostgreSQL backend, developed the React frontend, and handled debugging during deployment.',
          ],
        },
        {
          title: 'What I learned',
          paragraphs: [
            'Getting each part to work on its own was one thing. Getting everything to work together on a live website was a different experience.',
            'The project also helped me pay more attention to things that are easy to overlook during development, such as API security, input validation, rate limits, database access, CORS and deployment. I also learned to be more careful about relying on AI-generated information without checking it.',
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
      'A tool that reads Python code and generates documentation without needing an internet connection. I built it for the Laptop LLM Challenge at the Africa Deep Tech Challenge 2026.',
    visual: 'code',
    tone: 'dark',
    caseStudy: {
      lede: 'A tool that generates documentation directly from Python code, without needing an internet connection.',
      sections: [
        {
          title: 'The project',
          paragraphs: [
            'I built CodeScribe for the Laptop LLM Challenge at the Africa Deep Tech Challenge 2026. It takes Python code and generates documentation locally, without relying on cloud services.',
            'After working with online AI tools, I wanted to explore what it takes to run an AI model directly on a laptop. I had to work within the limits of the available memory, processing power and model size while making sure the tool remained useful.',
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
      'A vulnerable machine, a VirtualBox lab, and older services like FTP, Telnet and NFS. I explored each service, found ways to access the machine, and documented my findings.',
    visual: 'terminal',
    tone: 'leaf',
    caseStudy: {
      lede: "Just because an old service still works doesn't mean it's safe.",
      sections: [
        {
          title: 'The lab',
          paragraphs: [
            'I worked with a deliberately vulnerable machine (Metasploitable 2) inside a VirtualBox lab. I explored older services such as FTP, Telnet and NFS, identified ways to access the machine through each service, and documented my findings in two assessment reports.',
            'The exercise helped me understand why older services can create security risks when they are left running without proper protection.',
          ],
        },
      ],
    },
  },
]
