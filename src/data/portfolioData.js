export const personalInfo = {
  name: 'Sathya',
  role: 'Software Developer',
  tagline: 'Focused on full-stack development, machine learning, and data analysis',
  email: 'sathya@example.com',
  github: 'https://github.com/sathya',
  linkedin: 'https://linkedin.com/in/sathya',
  resumeLink: '#',
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
    icon: '🎨',
    items: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
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
      { name: 'REST APIs', level: 82 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    category: 'Data / ML',
    icon: '🤖',
    items: [
      { name: 'Python', level: 88 },
      { name: 'Pandas', level: 82 },
      { name: 'NumPy', level: 80 },
      { name: 'Machine Learning', level: 75 },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    items: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 88 },
      { name: 'VS Code', level: 92 },
      { name: 'Jupyter', level: 80 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Full-Stack E-Commerce Platform',
    description:
      'A complete e-commerce solution with product listings, cart management, user authentication, and payment integration. Built with a React frontend and Node.js/Express backend.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/sathya/ecommerce-platform',
    live: 'https://ecommerce-demo.vercel.app',
    image: null,
    featured: true,
  },
  {
    id: 2,
    title: 'ML-Powered Sentiment Analyzer',
    description:
      'A machine learning application that analyzes text sentiment in real time using NLP techniques. Includes a REST API backend and an interactive React dashboard for visualization.',
    tech: ['Python', 'scikit-learn', 'Flask', 'React', 'Pandas'],
    github: 'https://github.com/sathya/sentiment-analyzer',
    live: null,
    image: null,
    featured: true,
  },
  {
    id: 3,
    title: 'Data Dashboard & Analytics Tool',
    description:
      'An interactive data visualization dashboard that ingests CSV/JSON datasets and renders charts, KPIs, and trend analysis. Supports filtering, sorting, and export.',
    tech: ['React', 'Python', 'Pandas', 'Chart.js', 'FastAPI'],
    github: 'https://github.com/sathya/data-dashboard',
    live: 'https://data-dashboard-demo.vercel.app',
    image: null,
    featured: false,
  },
  {
    id: 4,
    title: 'Task Management App',
    description:
      'A productivity-focused task manager with drag-and-drop boards, priority tagging, due dates, and real-time collaboration features powered by WebSockets.',
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/sathya/task-manager',
    live: 'https://taskmanager-demo.vercel.app',
    image: null,
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    role: 'Data Science Master Virtual Intern',
    company: 'Altair',
    duration: '2024',
    type: 'Virtual Internship',
    bullets: [
      "Completed hands-on projects in data wrangling, exploratory data analysis, and predictive modeling using Altair's industry-grade tools and datasets.",
      'Built and evaluated machine learning models for classification and regression tasks, applying best practices in feature engineering and model validation.',
      'Developed data visualization dashboards to communicate insights effectively, translating complex analytical findings into actionable business recommendations.',
    ],
  },
];
