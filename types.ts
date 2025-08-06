
export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  Icon: React.FC<{ className?: string }>;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
  datasetLink?: string; 
  videoLink?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  logoUrl?: string; 
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  Icon?: React.FC<{ className?: string }>; // Optional: an icon for the skill
}
