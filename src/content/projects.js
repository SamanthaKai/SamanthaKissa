// Projects, taken from the existing portfolio, the CV and the public GitHub repositories.
// `visual` decides how the preview is drawn: a real screenshot, or a clearly labelled text panel.

export const projects = [
  {
    slug: 'cooksmart',
    title: 'CookSmart',
    category: 'Software & AI',
    year: '2026',
    tagline: 'An AI-powered platform for discovering and cooking African recipes.',
    summary:
      'Getting AI to generate a recipe was easy. Making sure the recipes stayed true to the actual dishes was the harder problem. I led the project and built it from the ground up.',
    visual: {
      type: 'image',
      src: '/images/cooksmart.webp',
      width: 1400,
      height: 875,
      alt: 'The CookSmart home page, with a recipe search over a photo of jollof rice',
      caption: 'Screenshot of the live CookSmart home page',
    },
    facts: [
      { label: 'Role', value: 'Project lead and full-stack developer' },
      { label: 'Timeline', value: 'February to May 2026' },
      { label: 'Hosting', value: 'Vercel (frontend) and Railway (backend)' },
    ],
    stack: ['React', 'Flask', 'PostgreSQL', 'LLaMA 3 on Groq', 'Claude API', 'Vercel', 'Railway'],
    objective:
      'Make African recipes easier to find, understand and adapt, and ground AI-generated recipes in real recipe data so they reflect the actual dishes.',
    links: [
      { label: 'Live site', href: 'https://cooksmart-seven.vercel.app/' },
      { label: 'Source on GitHub', href: 'https://github.com/SamanthaKai/cooksmart' },
    ],
    sections: [
      {
        title: 'Why I built it',
        body: [
          'CookSmart started with a simple idea: make African recipes easier to find, understand and adapt to different needs.',
          "Getting AI to generate a recipe isn't difficult. Getting it to produce something that actually reflects the dish is another matter. I wanted to work on that difference.",
        ],
      },
      {
        title: 'How it works',
        body: [
          'Rather than asking AI to create recipes from scratch, CookSmart first searches its database for real recipes. It then gives those recipes to the AI as a reference, which helps it produce more relevant results.',
        ],
        flow: [
          { step: 'Someone searches for a recipe', where: 'React app on Vercel' },
          { step: 'The backend searches for matching recipes', where: 'Flask and PostgreSQL on Railway' },
          { step: 'LLaMA 3 generates the recipe using what was found', where: 'Groq API' },
          { step: 'Claude adds cooking tips and nutrition information', where: 'Claude API' },
        ],
      },
      {
        title: 'Decisions along the way',
        items: [
          {
            title: 'Two models, two jobs',
            body: 'LLaMA 3 on Groq generates the recipes, while Claude provides cooking tips and nutrition information. Flask decides which model is used and when.',
          },
          {
            title: 'Handling rate limits',
            body: 'Groq limits how many requests can be made, and some requests failed when the system was busy. I added retries, delays and a backup queue to handle these cases.',
          },
          {
            title: 'Keeping API keys safe',
            body: 'The keys for Groq, Claude and the database are stored as environment variables on Railway. They are never exposed in the browser.',
          },
          {
            title: 'Fixing deployment issues',
            body: 'Some problems only appeared after deployment, especially with CORS. I had to fix preflight headers and environment settings, and learned to test the production setup much earlier.',
          },
        ],
      },
      {
        title: 'What I learned',
        body: [
          'Getting each part to work on its own was one thing. Getting everything to work together on a live website was a different experience.',
          'The project made me pay closer attention to things that are easy to overlook: API security, input validation, rate limits, database access, CORS and deployment. It also made me more careful about relying on AI-generated information without checking it.',
        ],
      },
    ],
  },
  {
    slug: 'codescribe',
    title: 'CodeScribe',
    category: 'Software & AI',
    year: '2026',
    tagline: 'An offline assistant that writes documentation for Python code.',
    summary:
      'A command-line tool that finds Python functions and classes without docstrings and generates them with a small language model running on the laptop itself. No cloud API, no network calls during generation.',
    visual: {
      type: 'terminal',
      caption: 'Example run, reproduced as text from the project README. Not a screenshot.',
      lines: [
        '$ python cli.py tests/eval_samples/sample_basic.py',
        'parsed tests\\eval_samples\\sample_basic.py: 2 top-level functions, 1 classes',
        'starting local model...',
        'generated 4 docstring(s), wrote preview to tests\\eval_samples\\sample_basic.py.codescribe.md',
      ],
    },
    facts: [
      { label: 'Built for', value: 'Africa Deep Tech Challenge 2026, Laptop LLM Challenge' },
      { label: 'Timeline', value: 'September 2026' },
      { label: 'Model', value: 'Qwen2.5-Coder-1.5B-Instruct, GGUF Q4_K_M' },
    ],
    stack: ['Python', 'llama.cpp', 'GGUF', 'Qwen2.5-Coder 1.5B', 'Python ast'],
    objective:
      'Give students and developers with limited or unreliable connectivity a documentation assistant that runs entirely on their own machine once the model is downloaded.',
    links: [{ label: 'Source on GitHub', href: 'https://github.com/SamanthaKai/codescribe' }],
    sections: [
      {
        title: 'The project',
        body: [
          'I built CodeScribe for the Laptop LLM Challenge at the Africa Deep Tech Challenge 2026. It takes a Python file and generates documentation locally, without relying on cloud services.',
          'After working with online AI tools, I wanted to explore what it takes to run a model directly on a laptop. I had to work within the limits of available memory, processing power and model size while keeping the tool useful.',
        ],
      },
      {
        title: 'How it works',
        body: [
          'CodeScribe never modifies the source file. It writes a separate preview file next to it, so generated docstrings are always reviewed before they are used.',
        ],
        flow: [
          { step: 'Parse the .py file and find undocumented code', where: 'Python ast' },
          { step: 'Build a prompt from the surrounding code context', where: 'CLI' },
          { step: 'Generate the docstring with a local model', where: 'llama-server (llama.cpp)' },
          { step: 'Write a preview file for review', where: '<file>.py.codescribe.md' },
        ],
      },
      {
        title: 'Status',
        body: ['Phase 1, docstring generation for a single file, is complete and tested. The repository includes a technical report and a log of design decisions.'],
      },
    ],
  },
  {
    slug: 'legacy-services-lab',
    title: 'Legacy Services Assessment',
    category: 'Security lab',
    year: 'Independent practice',
    tagline: "Just because an old service still works doesn't mean it's safe.",
    summary:
      'A deliberately vulnerable machine in a VirtualBox lab, and older services like FTP, Telnet and NFS. I explored each service, found ways into the machine, and documented the findings.',
    visual: {
      type: 'diagram',
      caption: 'Illustration of the lab setup. No screenshots from this lab are published.',
      host: 'Metasploitable 2 · VirtualBox',
      services: [
        { port: '21/tcp', name: 'FTP' },
        { port: '23/tcp', name: 'Telnet' },
        { port: '2049/tcp', name: 'NFS' },
      ],
    },
    facts: [
      { label: 'Type', value: 'Independent lab exercise' },
      { label: 'Environment', value: 'Metasploitable 2 in VirtualBox' },
      { label: 'Output', value: 'Two written assessment reports' },
    ],
    stack: ['VirtualBox', 'Metasploitable 2', 'FTP', 'Telnet', 'NFS'],
    objective:
      'Understand, through hands-on testing, why older network services create risk when they are left running without proper protection.',
    links: [],
    sections: [
      {
        title: 'The lab',
        body: [
          'I worked with a deliberately vulnerable machine, Metasploitable 2, inside a VirtualBox lab. I explored older services such as FTP, Telnet and NFS, identified ways to access the machine through each one, and documented my findings in two assessment reports.',
          'The exercise helped me understand why older services can create security risks when they are left running without proper protection.',
        ],
      },
    ],
  },
]

export const projectBySlug = (slug) => projects.find((p) => p.slug === slug)
