// Experience, newest first. Wording follows the CV and the existing portfolio.

export const roles = [
  {
    org: 'Karmix Tech',
    role: 'Cybersecurity Intern',
    type: 'Internship',
    when: 'June – August 2026',
    where: 'Remote',
    intro:
      'Three months of vulnerability assessments and security reviews of live web applications: identifying weaknesses, understanding the risks they posed, and preparing reports that could help teams fix them.',
    points: [
      'Conducted vulnerability assessments and web application security reviews aligned to NIST CSF 2.0, ISO 27001:2022 and MITRE D3FEND.',
      'Performed attack surface analysis on live web applications, documenting exposure points for remediation.',
      'Produced formal security assessment documentation for stakeholder and audit review.',
    ],
    tags: ['Vulnerability assessment', 'NIST CSF 2.0', 'ISO 27001:2022', 'MITRE D3FEND'],
  },
  {
    org: 'Ubuntu Bridge Initiative',
    role: 'Cybersecurity Intern, SOC Analysis',
    type: 'Simulation-based internship',
    when: 'June – August 2026',
    where: 'Remote',
    intro:
      'Operation Root Access follows a simulated security incident at a fictional fintech company across seven stages. I started as a Tier 1 analyst reviewing login records and worked through the investigation to presenting findings to the board.',
    points: [
      'Investigated authentication logs, ticket-dismissal history and encoded threat-actor strings, producing suspicious-login evidence tables, a dismissal-pattern analysis, a business-impact brief and an ethics and escalation judgement essay.',
      'Decoded cipher payloads and leaked credential and configuration files as part of a simulated threat-actor attribution exercise.',
      'Mapped the attack surface, including an unauthenticated Elasticsearch index containing personal data, SQL injection, XSS and SSRF to cloud metadata.',
      'Traced persistence mechanisms, a sudoers misconfiguration and command-and-control beaconing, producing an attack map, IOC list, process triage and incident timeline.',
      'Drafted a GDPR Article 33 breach notification, risk register, board memo, 30/60/90-day remediation roadmap and NIST/ISO/MITRE control mapping.',
      'Reconciled around 96 alert-review candidates against change records across two rounds, separating legitimate changes from those needing escalation.',
    ],
    outcome: 'Completed all seven stages, scored 95/100 in the Cyber Core stages, and progressed from Intern to Cyber Core Associate.',
    tags: ['SOC alert triage', 'Incident response', 'Log analysis', 'Cryptanalysis', 'GRC reporting'],
  },
  {
    org: 'Tech4Dev · Women Techsters Fellowship',
    role: 'Cybersecurity Fellow',
    type: 'Fellowship',
    when: 'September 2025 – present',
    where: 'Remote',
    intro:
      'Hands-on cybersecurity practice through virtual labs, security tools and simulated attacks, covering networking, cryptography, governance, risk and compliance, and incident response.',
    points: [
      'Practised security assessments in virtual labs using Kali Linux, Nmap and Wireshark, including port scanning, packet analysis and vulnerability reconnaissance.',
      'Configured and tested role-based access control policies in Active Directory across simulated organisational environments.',
      'Carried out wireless security audits covering WEP, WPA and WPA2, and simulated penetration tests from reconnaissance to post-exploitation.',
      'Maintained more than 90% module completion across networking, cryptography, GRC and incident response.',
    ],
    tags: ['Kali Linux', 'Nmap', 'Wireshark', 'Active Directory', 'Wireless auditing'],
  },
  {
    org: 'Uganda Bureau of Statistics',
    role: 'Field Enumerator, Baseline Education Census 2025',
    type: 'Professional experience',
    when: 'June – August 2025',
    where: 'Uganda',
    intro:
      'Data collection for the national Baseline Education Census, carried out with the Ministry of Education and Sports. The work took me to more than 100 schools and institutions, from city universities to rural primary schools.',
    points: [
      'Collected data using computer-assisted personal interviewing (CAPI), often in areas with poor connectivity.',
      'Checked information throughout the exercise to keep the data accurate and complete.',
      'Worked with school administrators, teachers and community members during data collection.',
    ],
    tags: ['CAPI', 'Data quality', 'Fieldwork'],
  },
]

export const practice = [
  { title: 'LetsDefend', body: 'Ongoing threat-hunting and SOC practice.' },
  { title: 'Blue Team Labs Online', body: 'Enrolled in the Blue Team Junior Analyst Pathway (Security Blue Team).' },
  { title: 'Home lab', body: 'Metasploitable 2 vulnerability lab in VirtualBox, written up as two assessment reports.', to: '/projects/legacy-services-lab' },
  { title: 'Phishing analysis', body: 'Reviewing and triaging real phishing and scam emails to practise spotting social engineering.' },
]
