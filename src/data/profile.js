export const profile = {
    firstName: 'Katrina',
    lastName: 'Chua',
    initials: 'KC',
    role: 'Full Stack Software Engineer',
    location: 'Singapore',
    residency: 'Singapore Permanent Resident',
    tagline: ['Engineer', 'Scrum Master', 'Builder', 'Mentor'],
    email: 'chua.katrina.ang@gmail.com',
    linkedin: 'https://www.linkedin.com/in/katrina-ang-chua/',
    github: 'https://github.com/diamondfrost',
};

export const about = {
    statement: [
        { text: 'I build' },
        { text: 'reliable trading', highlight: true },
        { text: 'and' },
        { text: 'surveillance', highlight: true },
        { text: 'software for global banks.' },
    ],
    paragraphs: [
        'Full stack engineer at **JPMorgan Chase & Co.** in Singapore, currently building internal Bullion and Agriculture trading applications with Python and TypeScript.',
        'Before that I spent three years on eCommunications Surveillance, shipping Flask services, Spring Boot microservices and dashboards, and ran the team\'s Scrum ceremonies as a **Certified Scrum Master**. I started out delivering frontend and DevOps work for OCBC and BNP Paribas.',
    ],
    stats: [
        { value: '6', suffix: '+', label: 'Years in fintech', delta: 'Since 2020', dir: 'up' },
        { value: '60', suffix: '%', label: 'Dashboard load time cut', delta: 'Spring Boot + SQL', dir: 'down', alt: true },
        { value: '3', label: 'Global banks', delta: 'JPM · OCBC · BNP', dir: 'flat' },
        { value: '4', label: 'Spoken languages', delta: 'EN · ZH · JA · FIL', dir: 'flat', alt: true },
    ],
};

export const experience = [
    {
        role: 'Software Engineer II, Full Stack',
        team: 'Commodities Trading',
        company: 'JPMorgan Chase & Co.',
        sym: 'JPM',
        desk: 'Bullion · Agriculture',
        location: 'Singapore',
        period: 'Sep 2025 – Present',
        current: true,
        points: [
            'Develop and maintain internal Bullion and Agriculture trading applications in Python and TypeScript, supporting business-critical trading workflows.',
            'Lead global deployment activities across regions, making sure releases meet security requirements, compliance expectations and delivery deadlines.',
            'Maintain and monitor scheduled jobs so business reports are generated and delivered on time with minimal downstream delays.',
            'Support an internal object-oriented database system, keeping data accurate, consistent and reliable.',
            'Help resolve trade deal issues by investigating application, data and workflow discrepancies.',
        ],
        tags: ['Python', 'TypeScript', 'Deployments', 'Scheduling'],
    },
    {
        role: 'Software Engineer II, Full Stack',
        team: 'eCommunications Surveillance',
        company: 'JPMorgan Chase & Co.',
        sym: 'JPM',
        desk: 'Compliance tech',
        location: 'Singapore',
        period: 'May 2022 – Sep 2025',
        points: [
            'Built scalable web applications that reconcile files in S3 buckets, with APIs and dashboards in Python Flask, JavaScript, HTML and CSS.',
            'Improved API microservice performance with Java Spring Boot and SQL, cutting dashboard load time by 60%.',
            'Delivered end-to-end features in Flask that integrate third-party APIs to automate a customised weekly email report and consistent daily message archiving.',
            'Deployed full stack applications and APIs to GAIA, JPMorgan Chase\'s internal cloud platform, through internal CI/CD pipelines.',
            'Owned the team\'s Scrum ceremonies: stand-ups, sprint planning, reviews and retrospectives.',
        ],
        tags: ['Flask', 'Spring Boot', 'SQL', 'AWS S3', 'Scrum'],
    },
    {
        role: 'Software Engineer Consultant, Frontend',
        team: 'via FDM Group',
        company: 'OCBC',
        sym: 'O39',
        desk: 'Mobile banking',
        location: 'Singapore',
        period: 'Oct 2021 – May 2022',
        points: [
            'Led the refactoring of critical design issues in the mobile banking app\'s UI functions using ReactJS, improving user experience and stability.',
            'Set up CI/CD pipelines so code was ready for UAT and production deployments of the mobile banking application.',
        ],
        tags: ['React', 'CI/CD', 'Mobile banking'],
    },
    {
        role: 'Service Delivery Engineer Consultant',
        team: 'via FDM Group',
        company: 'BNP Paribas',
        sym: 'BNP',
        desk: 'Release engineering',
        location: 'Singapore',
        period: 'Oct 2020 – Oct 2021',
        points: [
            'Streamlined a Jenkins pipeline server integrating Artifactory and Bitbucket, speeding up deployments.',
            'Led application delivery and deployment in UAT and production environments.',
            'Introduced JIRA tracking, improving project management and team collaboration.',
            'Started comprehensive application documentation that made deployments more efficient.',
        ],
        tags: ['Jenkins', 'Artifactory', 'Bitbucket', 'JIRA'],
    },
];

// Ticker tape: every figure comes from the resume.
export const ticker = [
    { sym: 'JPM', label: 'Commodities Trading', value: 'Sep 2025', dir: 'up' },
    { sym: 'XAU', label: 'Bullion desk apps', value: 'Python · TS', dir: 'up' },
    { sym: 'AGRI', label: 'Agriculture desk apps', value: 'Live', dir: 'up' },
    { sym: 'LOAD', label: 'Dashboard load time', value: '-60%', dir: 'down' },
    { sym: 'YRS', label: 'In financial services', value: '6+', dir: 'up' },
    { sym: 'CSM', label: 'Certified Scrum Master', value: 'Active', dir: 'up' },
    { sym: 'S3', label: 'File reconciliation', value: 'Flask', dir: 'up' },
    { sym: 'GAIA', label: 'Cloud deployments', value: 'CI/CD', dir: 'up' },
    { sym: 'O39', label: 'OCBC mobile banking', value: 'React', dir: 'up' },
    { sym: 'BNP', label: 'Jenkins pipelines', value: 'Faster', dir: 'up' },
];

export const projects = [
    {
        title: 'React Notes App',
        description: 'A simple React application styled with custom styled-components that saves the notes you write to browser storage.',
        url: 'https://diamondfrost.github.io/react-notes-app/#/',
        tags: ['React', 'styled-components', 'LocalStorage'],
    },
    {
        title: 'Profile Page',
        description: 'This site. A single-page portfolio built with React and Vite, with a light and dark theme, deployed to GitHub Pages.',
        url: 'https://github.com/diamondfrost/profile-page',
        tags: ['React', 'Vite', 'GitHub Pages'],
    },
];

export const skills = [
    { group: 'Frontend', items: ['HTML', 'CSS', 'React', 'JavaScript', 'TypeScript', 'jQuery', 'Figma'] },
    { group: 'Backend', items: ['Python', 'Flask', 'Java', 'Spring Boot', 'SQL', 'MSSQL', 'Node.js', 'Shell scripting', 'Visual Basic'] },
    { group: 'DevOps & QA', items: ['Jenkins', 'AWS', 'CI/CD', 'Selenium', 'Postman', 'Unit testing', 'Integration testing'] },
    { group: 'Languages', items: ['English', 'Mandarin', 'Hokkien', 'Japanese', 'Filipino (Tagalog)'] },
];

export const education = {
    degree: 'BS Computer Engineering',
    school: 'Ateneo de Manila University',
    location: 'Metro Manila, Philippines',
    date: 'Dec 2019',
};

export const certifications = [
    { name: 'Cybersecurity Course', issuer: 'NUS x Emeritus', date: 'Mar – Jun 2025' },
    { name: 'Certified Scrum Master (CSM)', issuer: 'Scrum Alliance', date: 'Certified' },
    { name: 'Java Development Training Programme', issuer: 'FDM Group', date: 'May – Oct 2020' },
    { name: 'Cybersecurity and Ethical Hacking', issuer: 'CODESTACK.PH', date: 'Jun 2019' },
];

export const volunteering = [
    {
        org: 'Love Kuching Project',
        period: 'Jul 2024 – Present',
        description: 'Caring for rescued cats and kittens: feeding, giving medication when needed, and cleaning their living space on Sundays.',
    },
    {
        org: 'United Women Singapore',
        period: 'Feb 2023 – Aug 2023',
        description: 'Mentored two STEM students through the Girls2Pioneers STEMentorship programme.',
    },
];

export const navLinks = [
    { id: 'about', label: 'About', num: '01' },
    { id: 'experience', label: 'Experience', num: '02' },
    { id: 'projects', label: 'Projects', num: '03' },
    { id: 'skills', label: 'Skills', num: '04' },
    { id: 'beyond', label: 'Beyond', num: '05' },
    { id: 'contact', label: 'Contact', num: '06' },
];
