import profilePic from './assets/profile.jpg';

export const personalInfo = {
  name: 'Sathyasai',
  role: 'Software Developer',
  tagline: 'Focused on full-stack development, AIML & DataSience',
  email: 'sathyasai@gmail.com',
  github: 'https://github.com/ssathyasai',
  linkedin: 'linkedin.com/in/ssathyasai',
  resumeLink: '#',
  profilePic,
};

export const aboutText = `I'm a passionate software developer with a strong foundation in full-stack
development, machine learning, and data analysis. I thrive on turning complex
problems into elegant, efficient solutions — whether that's building scalable
web applications or extracting meaningful insights from data. I'm driven by
curiosity, a love for clean code, and the belief that great software can make
a real difference.`;

export const skills = [
  {
    category: 'Frontend',
    icon: '🖥️',
    items: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'React', level: 85 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'Python', level: 85 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    items: [
      { name: 'Machine Learning', level: 80 },
      { name: 'Deep Learning', level: 75 },
      { name: 'NLP', level: 72 },
      { name: 'Generative AI', level: 70 },
    ],
  },
  {
    category: 'Data Analysis',
    icon: '📊',
    items: [
      { name: 'NumPy', level: 82 },
      { name: 'Pandas', level: 85 },
      { name: 'Matplotlib', level: 80 },
      { name: 'Seaborn', level: 78 },
      { name: 'EDA', level: 83 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Memory-Augmented Chatbot',
    description:
      'An intelligent, production-ready conversational AI platform featuring Hybrid RAG, Neo4j Knowledge Graph integration, LangGraph orchestration, and real-time RAG quality analytics.',
    tech: ['Python', 'LangGraph', 'Streamlit', 'FAISS', 'Neo4j', 'MongoDB'],
    github: 'https://github.com/ssathyasai/memory-augmented-chatbot.git',
    live: 'https://memory-augmented-c.streamlit.app/',
    icon: '🧠',
    featured: true,
  },
  {
    id: 2,
    title: 'SMS Spam Transformer Model',
    description:
      'A spam detection system designed to identify and filter spam messages efficiently, providing accurate and real-time message classification through a web application.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python Libraries', 'Deep Learning'],
    github: 'https://github.com/ssathyasai/SMS_Spam_Transformer_Model.git',
    live: 'https://smsspamtransformermodel-y3.streamlit.app/',
    icon: '🛡️',
    featured: false,
  },
  {
    id: 3,
    title: 'MediConnect',
    description:
      'A user-friendly healthcare platform that simplifies personal health management, improves accessibility, and helps users stay connected with essential healthcare services.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/ssathyasai/mediconnect.git',
    live: 'https://mediconnect-gules.vercel.app/',
    icon: '🏥',
    featured: true,
  },
  {
    id: 4,
    title: 'CleanX',
    description:
      'A data transformation platform that automates CSV data cleaning and builds reliable, structured datasets for seamless analysis and model readiness.',
    tech: ['Python', 'Python Libraries', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ssathyasai/CleanX.git',
    live: null,
    icon: '🧹',
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    role: 'CEI-Celebal Excellence Internship',
    company: 'Celebal Technologies',
    duration: '2026',
    type: 'Virtual Internship',
    skills: ['ML', 'DL', 'GenAI'],
    bullets: [
      'Completed hands-on learning in AI & Data Science',
      'Worked on practical exercises and assignments',
      'Strengthened skills in developing projects of AI',
    ],
  },
  {
    id: 2,
    role: 'Data Science Master Virtual Intern',
    company: 'Altair',
    duration: '2024',
    type: 'Virtual Internship',
    bullets: [
      'Analysed real-world datasets to identify patterns and trends',
      'Applied machine learning concepts for basic predictive tasks',
      'Created visualizations to communicate insights effectively',
    ],
  },
  {
    id: 3,
    role: 'Data Analytics Process Automation',
    company: 'Alteryx',
    duration: '2025',
    type: 'Virtual Internship',
    bullets: [
      'Performed end-to-end data cleaning, filtering and joining using Designer workflows',
      'Strengthened practical data preparation and workflow automation skills',
      'Applied data transformation techniques to prepare analysis-ready datasets',
    ],
  },
];

export const certifications = [
  {
    id: 1,
    title: 'Data Science & AI Virtual Internship',
    issuer: 'Celebal Technologies',
    date: '2026',
    credentialUrl: '#',
    skills: ['Machine Learning', 'Deep Learning', 'Generative AI', 'Python'],
    icon: '📜',
  },
  {
    id: 2,
    title: 'Data Science Master Virtual Internship',
    issuer: 'Altair',
    date: '2024',
    credentialUrl: '#',
    skills: ['Data Analysis', 'Predictive Modeling', 'Data Visualization'],
    icon: '🎓',
  },
  {
    id: 3,
    title: 'Data Analytics Process Automation',
    issuer: 'Alteryx',
    date: '2025',
    credentialUrl: '#',
    skills: ['ETL Workflows', 'Data Preparation', 'Process Automation'],
    icon: '⚡',
  },
];

