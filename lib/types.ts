export interface Social {
  github?: string;
  linkedin?: string;
  twitter?: string;
  dribbble?: string;
  behance?: string;
  instagram?: string;
  youtube?: string;
  medium?: string;
  devto?: string;
}

export interface Personal {
  name: string;
  title: string;
  tagline: string;
  email: string;
  location: string;
  avatar: string;
  resume?: string;
  social: Social;
}

export interface About {
  summary: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  tools: string[];
  other: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  achievements: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface PortfolioData {
  personal: Personal;
  about: About;
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  education: Education[];
  certifications: Certification[];
  testimonials: Testimonial[];
}
