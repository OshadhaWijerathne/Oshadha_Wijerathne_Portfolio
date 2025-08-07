
import { NavLink, Project, Experience, Skill, SocialLink } from './types';
import { GitHubIcon, LinkedInIcon, EmailIcon, ReactIcon, NodeJSIcon, TSIcon, PythonIcon } from './components/icons'

export const YOUR_NAME = "Oshadha Wijerathne";
export const YOUR_TITLE = "Software Engineer";
export const YOUR_EMAIL = "rwkoshadhawijerathne@gmail.com";

export const HERO_TITLES = [
  "AI & Data Science Specialist",
  "Machine Learning Engineer",
  "Problem Solver",
  "Full-Stack Developer"
];
export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];


export const SKILLS_DATA: Skill[] = [
  // Programming Languages
  { id: 'python', name: 'Python', category: 'Programming Languages' },
  { id: 'java', name: 'Java', category: 'Programming Languages' },
  { id: 'javascript', name: 'JavaScript', category: 'Programming Languages' },
  { id: 'c++', name: 'C++', category: 'Programming Languages' },
  { id: 'sql', name: 'SQL', category: 'Programming Languages' },
  { id: 'html_css', name: 'HTML/CSS', category: 'Programming Languages' },

   // Backend & Frameworks
  { id: 'fastapi', name: 'FastAPI', category: 'Backend & Frameworks' },
  { id: 'flask', name: 'Flask', category: 'Backend & Frameworks' },
  { id: 'react', name: 'React JS', category: 'Backend & Frameworks' },
  { id: 'nodejs', name: 'Node JS', category: 'Backend & Frameworks' },
  { id: 'streamlit', name: 'Streamlit', category: 'Backend & Frameworks' },

  // Machine Learning & Data Science
  { id: 'pytorch', name: 'PyTorch', category: 'Machine Learning & Data Science' },
  { id: 'tensorflow', name: 'TensorFlow', category: 'Machine Learning & Data Science' },
  { id: 'scikit-learn', name: 'Scikit-learn', category: 'Machine Learning & Data Science' },
  { id: 'pandas', name: 'Pandas', category: 'Machine Learning & Data Science' },
  { id: 'numpy', name: 'NumPy', category: 'Machine Learning & Data Science' },
  { id: 'opencv', name: 'OpenCV', category: 'Machine Learning & Data Science' },
  { id: 'langchain', name: 'LangChain', category: 'Machine Learning & Data Science' },
  { id: 'langgraph', name: 'LangGraph', category: 'Machine Learning & Data Science' },
  { id: 'xgboost', name: 'XGBoost', category: 'Machine Learning & Data Science' },
  { id: 'yolov8', name: 'YOLOv8', category: 'Machine Learning & Data Science' },
  { id: 'seaborn', name: 'Seaborn', category: 'Machine Learning & Data Science' },
  { id: 'matplotlib', name: 'Matplotlib', category: 'Machine Learning & Data Science' },
  { id: 'easyocr', name: 'EasyOCR', category: 'Machine Learning & Data Science' },

 
  // Databases
  { id: 'mysql', name: 'MySQL', category: 'Databases' },
  { id: 'mongodb', name: 'MongoDB', category: 'Databases' },
  { id: 'chromadb', name: 'ChromaDB', category: 'Databases' },

  // Cloud & DevOps
  { id: 'aws', name: 'AWS', category: 'Cloud & DevOps' },
  { id: 'azure', name: 'Azure', category: 'Cloud & DevOps' },
  { id: 'gcp', name: 'GCP', category: 'Cloud & DevOps' },
  { id: 'docker', name: 'Docker', category: 'Cloud & DevOps' },
  { id: 'git', name: 'Git', category: 'Cloud & DevOps' },
  { id: 'ci_cd', name: 'CI/CD', category: 'Cloud & DevOps' },
  { id: 'rest_apis', name: 'REST APIs', category: 'Cloud & DevOps' },
];
