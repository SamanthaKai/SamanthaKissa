// Identity, contact details and the site index. Everything here is shown publicly.

export const person = {
  name: 'Samantha Kissa',
  role: 'IT Professional',
  location: 'Kampala, Uganda',
  focus: ['Cybersecurity', 'Security operations', 'Artificial intelligence', 'Software development'],
  availability: 'Open to entry-level roles, internships, fellowships and projects. Open to remote work.',
  photo: { src: '/images/samantha.webp', width: 900, height: 985, alt: 'Portrait of Samantha Kissa' },
}

export const contact = {
  email: 'kissasamantha123@gmail.com',
  linkedin: 'https://www.linkedin.com/in/samantha-kissa5710',
  github: 'https://github.com/SamanthaKai',
  // The first CV is the default "Download CV" link used across the site.
  // These PDFs are exported without a phone number; keep it that way.
  cvs: [
    {
      key: 'master',
      title: 'Full CV',
      body: 'Everything: cybersecurity, software and AI projects, fieldwork, coursework and leadership.',
      href: '/files/Samantha_Kissa_Master_CV.pdf',
      filename: 'Samantha_Kissa_Master_CV.pdf',
      meta: '3 pages · 76 KB · PDF',
    },
    {
      key: 'security',
      title: 'Cybersecurity CV',
      body: 'Focused on security operations, vulnerability assessment and blue-team practice.',
      href: '/files/Samantha_Kissa_Cybersecurity_CV.pdf',
      filename: 'Samantha_Kissa_Cybersecurity_CV.pdf',
      meta: '2 pages · 67 KB · PDF',
    },
    {
      key: 'it',
      title: 'General IT CV',
      body: 'Focused on software development, AI integration and digital data collection.',
      href: '/files/Samantha_Kissa_General_IT_CV.pdf',
      filename: 'Samantha_Kissa_General_IT_CV.pdf',
      meta: '2 pages · 68 KB · PDF',
    },
  ],
}

contact.cv = contact.cvs[0]

// The numbered index drives the header, the mobile menu, page headers and the footer.
export const pages = [
  { n: '01', to: '/', label: 'Home', blurb: 'Introduction and selected work' },
  { n: '02', to: '/about', label: 'About', blurb: 'Background, education and approach' },
  { n: '03', to: '/projects', label: 'Projects', blurb: 'Software, AI and security work' },
  { n: '04', to: '/explorations', label: 'Explorations', blurb: 'Independent website concepts' },
  { n: '05', to: '/experience', label: 'Experience', blurb: 'Internships and professional work' },
  { n: '06', to: '/credentials', label: 'Credentials', blurb: 'Education, certificates, communities' },
  { n: '07', to: '/contact', label: 'Contact', blurb: 'Email, LinkedIn, GitHub and CV' },
]

export const pageByPath = (path) => pages.find((p) => p.to === path)
