import type { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaBootstrap,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiSpringboot,
  SiSupabase,
  SiOpenai,
  SiGoogle,
} from "react-icons/si";

// ─── Projects ────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  stack: string[];
  status: "Complete" | "Ongoing";
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Chat Application",
    description:
      "Real-time AI chat application powered by Gemini API with streaming responses, conversation history, and multi-model support. Features a sleek dark UI and responsive design.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
    ],
    stack: ["MERN", "AI"],
    status: "Complete",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "2",
    title: "SaaS Dashboard Platform",
    description:
      "Full-stack SaaS platform with multi-tenant architecture, Stripe integration, role-based access control, and real-time analytics dashboard.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    stack: ["Next.js", "MERN"],
    status: "Complete",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "AI Code Review Tool",
    description:
      "Automated code review tool that uses OpenAI API to analyze code quality, detect bugs, suggest improvements, and generate documentation.",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    stack: ["Next.js", "AI"],
    status: "Ongoing",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "4",
    title: "E-Commerce API",
    description:
      "RESTful e-commerce backend built with Spring Boot featuring JWT authentication, payment processing, inventory management, and order tracking.",
    technologies: ["Spring Boot", "Java", "PostgreSQL", "Docker"],
    stack: ["Spring Boot"],
    status: "Complete",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "5",
    title: "Mobile Fitness Tracker",
    description:
      "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with real-time sync and social features.",
    technologies: ["React Native", "Node.js", "MongoDB", "Express.js"],
    stack: ["React Native", "MERN"],
    status: "Ongoing",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "6",
    title: "DevOps Monitoring Dashboard",
    description:
      "Real-time infrastructure monitoring dashboard with alerting, log aggregation, and performance metrics visualization for cloud deployments.",
    technologies: ["Next.js", "Node.js", "DynamoDB", "AWS", "Tailwind CSS"],
    stack: ["Next.js", "MERN"],
    status: "Ongoing",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "7",
    title: "AI Content Generator",
    description:
      "AI-powered content generation SaaS tool for blog posts, social media captions, and marketing copy. Supports multiple AI models and tone customization.",
    technologies: [
      "React.js",
      "Node.js",
      "Gemini API",
      "OpenAI API",
      "MongoDB",
    ],
    stack: ["MERN", "AI"],
    status: "Complete",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "8",
    title: "Task Management App",
    description:
      "Kanban-style project management tool with drag-and-drop, real-time collaboration, sprint planning, and Slack integration.",
    technologies: ["React.js", "Express.js", "MongoDB", "Supabase"],
    stack: ["MERN"],
    status: "Complete",
    liveUrl: "#",
    githubUrl: "#",
  },
];

// ─── Skills ──────────────────────────────────────────────
export interface Skill {
  name: string;
  category: string;
}

export const skills: Skill[] = [
  // UI
  { name: "Figma", category: "UI" },
  // Frontend
  { name: "Bootstrap", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  // Database
  { name: "MongoDB", category: "Database" },
  { name: "DynamoDB", category: "Database" },
  { name: "Supabase", category: "Database" },
  { name: "SQL", category: "Database" },
  // AI & APIs
  { name: "Gemini API", category: "AI & APIs" },
  { name: "OpenAI API", category: "AI & APIs" },
  { name: "REST APIs", category: "AI & APIs" },
  // Mobile
  { name: "React Native", category: "Mobile" },
];

// ─── Tech Stack (for dedicated section) ──────────────────
export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "AI" | "Dev Tools" | "Mobile";
  color: string;
  icon: IconType;
}

export const techStack: TechItem[] = [
  // Frontend
  {
    name: "Bootstrap",
    category: "Frontend",
    color: "#7952B3",
    icon: FaBootstrap,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    color: "#06B6D4",
    icon: SiTailwindcss,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    color: "#F7DF1E",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    color: "#3178C6",
    icon: SiTypescript,
  },
  { name: "React.js", category: "Frontend", color: "#61DAFB", icon: FaReact },
  {
    name: "Next.js",
    category: "Frontend",
    color: "#E2E8F0",
    icon: SiNextdotjs,
  },
  // Backend
  { name: "Node.js", category: "Backend", color: "#68A063", icon: FaNodeJs },
  {
    name: "Express.js",
    category: "Backend",
    color: "#E2E8F0",
    icon: SiExpress,
  },
  {
    name: "Spring Boot",
    category: "Backend",
    color: "#6DB33F",
    icon: SiSpringboot,
  },
  // Database
  { name: "MongoDB", category: "Database", color: "#47A248", icon: SiMongodb },
  { name: "DynamoDB", category: "Database", color: "#4B73D8", icon: FaAws },
  {
    name: "Supabase",
    category: "Database",
    color: "#3FCF8E",
    icon: SiSupabase,
  },
  { name: "SQL", category: "Database", color: "#336791", icon: FaDatabase },
  // AI
  { name: "Gemini API", category: "AI", color: "#8E75B2", icon: SiGoogle },
  { name: "OpenAI API", category: "AI", color: "#74AA9C", icon: SiOpenai },
  // Mobile
  { name: "React Native", category: "Mobile", color: "#61DAFB", icon: FaReact },
  // Dev Tools
  { name: "AWS", category: "Dev Tools", color: "#FF9900", icon: FaAws },
  { name: "Git", category: "Dev Tools", color: "#F05032", icon: FaGitAlt },
  { name: "GitHub", category: "Dev Tools", color: "#E2E8F0", icon: FaGithub },
  { name: "Docker", category: "Dev Tools", color: "#2496ED", icon: FaDocker },
  {
    name: "Figma Make",
    category: "Dev Tools",
    color: "#F24E1E",
    icon: FaFigma,
  },
];

// ─── Navigation ──────────────────────────────────────────
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Contact", href: "#contact" },
];

// ─── Social Links ────────────────────────────────────────
export const socialLinks = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  email: "thetpaingoo@example.com",
};
