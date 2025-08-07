
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

  // Backend & Frameworks
  { id: 'fastapi', name: 'FastAPI', category: 'Backend & Frameworks' },
  { id: 'flask', name: 'Flask', category: 'Backend & Frameworks' },
  { id: 'react', name: 'React JS', category: 'Backend & Frameworks' },
  { id: 'nodejs', name: 'Node JS', category: 'Backend & Frameworks' },
  { id: 'streamlit', name: 'Streamlit', category: 'Backend & Frameworks' },

  // Cloud & DevOps
  { id: 'aws', name: 'AWS', category: 'Cloud & DevOps' },
  { id: 'azure', name: 'Azure', category: 'Cloud & DevOps' },
  { id: 'gcp', name: 'GCP', category: 'Cloud & DevOps' },
  { id: 'docker', name: 'Docker', category: 'Cloud & DevOps' },
  { id: 'git', name: 'Git', category: 'Cloud & DevOps' },
  { id: 'ci_cd', name: 'CI/CD', category: 'Cloud & DevOps' },
  { id: 'rest_apis', name: 'REST APIs', category: 'Cloud & DevOps' },
];


export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj1',
    title: 'Personal Travel Planner (LLM-based Multi-Agent System)',
    description: 'A final year research project developing a multi-agent personal travel planner using Large Language Models. This system generates personalized itineraries by understanding user preferences, querying databases, and integrating with calendar events. It leverages LangGraph for dynamic trip updates and feedback loops, enhancing travel planning automation.',
    imageUrl: '/images/travel-planner.png',
    techStack: ['Python', 'LangGraph', 'OpenAI', 'Hugging Face', 'MongoDB'],
    repoLink: 'https://github.com/OshadhaWijerathne',
  },
  {
    id: 'proj2',
    title: 'Skin Lesion Classifier (CNN)',
    description: 'Trained and evaluated Convolutional Neural Network models (VGG16, DenseNet121) on the HAM10000 dataset to classify 7 types of skin lesions. Applied data augmentation and class balancing techniques to improve model generalization and achieved high accuracy and robustness using TensorFlow and Keras.',
    imageUrl: '/images/skin-lesion.png',
    techStack: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Jupyter Notebooks'],
    repoLink: 'https://github.com/OshadhaWijerathne',
  },
  {
    id: 'proj3',
    title: '12-Lead ECG Classifier',
    description: 'Developed a full-stack web tool for identifying cardiac abnormalities from ECG data. The system uses a Neural Network trained on a large dataset of approximately 40,000 ECG records. The backend is built with FastAPI and the frontend with React, creating a complete solution for data analysis and visualization.',
    imageUrl: '/images/ecg-classifier.png',
    techStack: ['Python', 'PyTorch', 'FastAPI', 'React JS', 'Node JS'],
    repoLink: 'https://github.com/OshadhaWijerathne',
  },
  {
    id: 'proj4',
    title: 'Smart Plant Health',
    description: 'Created a user-friendly web app with Streamlit for real-time plant disease classification from leaf images. The application features an interactive chatbot, enhanced by a Retrieval-Augmented Generation (RAG) architecture using ChromaDB as a vector store for improved information retrieval on plant health.',
    imageUrl: '/images/plant-health.png',
    techStack: ['Python', 'Streamlit', 'ChromaDB', 'CNN'],
    repoLink: 'https://github.com/OshadhaWijerathne',
  },
    {
    id: 'proj5',
    title: 'Parkinson\'s Disease Detection Model',
    description: 'Built a robust machine learning pipeline to predict Parkinson\'s disease from biomedical voice measurements. The project involved feature selection, data scaling, and handling class imbalance with RandomOverSampler. The final XGBoost model achieved 84% accuracy and a high validation ROC-AUC score.',
    imageUrl: '/images/parkinsons-detection.png',
    techStack: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Joblib'],
    repoLink: 'https://github.com/OshadhaWijerathne',
  },
  {
    id: 'proj6',
    title: 'Smart License Detect',
    description: 'Engineered a deep learning solution to automatically detect Sri Lankan driver\'s licenses from images and extract textual content. The system utilizes a YOLOv8 model for precise object detection and leverages OpenCV with EasyOCR for accurate text extraction from the identified license regions.',
    imageUrl: '/images/license-detect.png',
    techStack: ['Python', 'YOLOv8', 'OpenCV', 'EasyOCR', 'FastAPI'],
    repoLink: 'https://github.com/OshadhaWijerathne',
  },
];