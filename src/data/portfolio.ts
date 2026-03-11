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
  SiVuedotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiSpringboot,
  SiPython,
  SiDjango,
  SiSupabase,
  SiFirebase,
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
    technologies: ["Tailwind CSS", "React.js", "Gemini API"],
    stack: ["AI"],
    status: "Complete",
    liveUrl: "https://winterai.vercel.app",
    githubUrl: "#",
  },
  {
    id: "2",
    title: "Real-Time Chat Application",
    description:
      "Full-stack real-time chat application built with MERN stack. Features include user authentication, private messaging, group chats, and a responsive UI designed with Tailwind CSS.",
    technologies: [
      "Tailwind CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    stack: ["MERN"],
    status: "Complete",
    liveUrl: "https://himessage.vercel.app",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "Mini Social Media Platform",
    description:
      "A lightweight social media platform with core features like user profiles, posts, comments, and a feed.",
    technologies: [
      "Tailwind CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    stack: ["MERN"],
    status: "Complete",
    // liveUrl: "#",
    // githubUrl: "#",
  },
  {
    id: "4",
    title: "Dev Event Management System",
    description:
      "Full-stack event management system built with Python and Django, featuring event creation, registration, scheduling, and user authentication.",
    technologies: ["Tailwind CSS", "Next.js", "MongoDB"],
    stack: ["Next.js"],
    status: "Ongoing",
    // liveUrl: "#",
    // githubUrl: "#",
  },
  {
    id: "5",
    title: "Video Calling Mobile App",
    description:
      "A cross-platform video calling app built with React Native, featuring real-time video communication, user authentication, and a sleek UI designed with Tailwind CSS.",
    technologies: [
      "React Native",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    stack: ["React Native"],
    status: "Ongoing",
    // liveUrl: "#",
    // githubUrl: "#",
  },
  {
    id: "6",
    title: "Airline Reservation System",
    description:
      "Full-stack airline reservation system built with Python and Django, featuring flight search, seat selection, booking management, and user authentication.",
    technologies: ["Python", "Django"],
    stack: ["Django"],
    status: "Complete",
    // liveUrl: "#",
    // githubUrl: "#",
  },
  {
    id: "7",
    title: "Student Management System",
    description:
      "Full-stack student management system built with Spring Boot, featuring student records, grade management, and user authentication.",
    technologies: [
      "Bootstrap",
      "JavaScript",
      "Spring Boot",
      "PostgreSQL",
      "Supabase",
    ],
    stack: ["Spring Boot"],
    status: "Complete",
    // liveUrl: "#",
    // githubUrl: "#",
  },
  {
    id: "8",
    title: "Instagram Analytics Dashboard",
    description:
      "An analytics dashboard for Instagram built with React and Tailwind CSS, integrating the Instagram Graph API to display insights on followers, engagement, and content performance.",
    technologies: ["Figma AI"],
    stack: ["Figma Make"],
    status: "Complete",
    liveUrl: "https://mode-speak-92040017.figma.site",
    // githubUrl: "#",
  },
  {
    id: "9",
    title: "ORIPA SYSTEM",
    description:
      "An ORIPA system built with React and Tailwind CSS, integrating the ORIPA API to provide real-time data visualization and insights for users.",
    technologies: ["Figma AI"],
    stack: ["Figma Make"],
    status: "Complete",
    liveUrl: "https://saint-frown-70222356.figma.site",
    // githubUrl: "#",
  },
];

// ─── Skills ──────────────────────────────────────────────
export interface Skill {
  name: string;
  category: string;
}

export const skills: Skill[] = [
  // UI
  { name: "Bootstrap", category: "UI" },
  { name: "Tailwind CSS", category: "UI" },
  { name: "Figma", category: "UI" },
  // Frontend
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
  category:
    | "UI"
    | "Frontend"
    | "Backend"
    | "Database"
    | "AI"
    | "Dev Tools"
    | "Mobile";
  color: string;
  icon: IconType;
}

export const techStack: TechItem[] = [
  // UI
  {
    name: "Bootstrap",
    category: "UI",
    color: "#7952B3",
    icon: FaBootstrap,
  },
  {
    name: "Tailwind CSS",
    category: "UI",
    color: "#06B6D4",
    icon: SiTailwindcss,
  },
  {
    name: "Figma AI",
    category: "UI",
    color: "#F24E1E",
    icon: FaFigma,
  },
  // Frontend
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
  {
    name: "Vue.js",
    category: "Frontend",
    color: "#42B883",
    icon: SiVuedotjs,
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
  {
    name: "Python",
    category: "Backend",
    color: "#3776AB",
    icon: SiPython,
  },
  {
    name: "Django",
    category: "Backend",
    color: "#092E20",
    icon: SiDjango,
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
  {
    name: "Firebase",
    category: "Database",
    color: "#FF6F00",
    icon: SiFirebase,
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
  { label: "Tech Stack", href: "#techstack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ─── Social Links ────────────────────────────────────────
export const socialLinks = {
  github: "https://github.com/minnthetpaingoo",
  linkedin: "https://linkedin.com/in/thet-paing-oo-753926376",
  email: "minnthetpaingoo@gmail.com",
};
