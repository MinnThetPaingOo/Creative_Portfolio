"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { projects, Project } from "@/data/portfolio";

const stackFilters = [
  "All",
  "MERN",
  "AI",
  "Next.js",
  "Spring Boot",
  "React Native",
];
const statusFilters = ["All", "Complete", "Ongoing"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { duration: 0.3 },
  },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="glass-card rounded-2xl overflow-hidden group"
    >
      {/* Card header gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan" />

      <div className="p-6 space-y-4">
        {/* Status & Title */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-5 h-5 text-neon-purple"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              <h3 className="text-lg font-bold text-white group-hover:text-neon-purple transition-colors">
                {project.title}
              </h3>
            </div>
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                project.status === "Complete"
                  ? "bg-green-500/10 text-green-400 border border-green-500/20"
                  : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  project.status === "Complete"
                    ? "bg-green-400"
                    : "bg-yellow-400 animate-pulse"
                }`}
              />
              {project.status}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded-md bg-dark-700/80 text-gray-400 border border-white/5 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-3 border-t border-white/5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-neon-cyan transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-neon-purple transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeStack, setActiveStack] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const stackMatch =
        activeStack === "All" || project.stack.includes(activeStack);
      const statusMatch =
        activeStatus === "All" || project.status === activeStatus;
      return stackMatch && statusMatch;
    });
  }, [activeStack, activeStatus]);

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neon-purple font-mono text-sm mb-3"
          >
            {"// 02. Projects"}
          </motion.p>
          <h2 className="section-heading">
            <span className="neon-text">Featured</span>{" "}
            <span className="text-white">Projects</span>
          </h2>
          <p className="section-subheading mx-auto mt-3">
            A collection of projects showcasing my experience in full-stack
            development, AI integration, and mobile development.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Filters */}
        <div className="space-y-4 mb-12">
          {/* Stack filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-xs text-gray-500 font-mono mr-2 self-center">
              stack:
            </span>
            {stackFilters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveStack(filter)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeStack === filter
                    ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-lg shadow-neon-purple/20"
                    : "glass text-gray-400 hover:text-white hover:border-neon-purple/30"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          {/* Status filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-xs text-gray-500 font-mono mr-2 self-center">
              status:
            </span>
            {statusFilters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveStatus(filter)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeStatus === filter
                    ? "bg-gradient-to-r from-neon-cyan to-neon-blue text-white shadow-lg shadow-neon-cyan/20"
                    : "glass text-gray-400 hover:text-white hover:border-neon-cyan/30"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Project count */}
        <motion.p
          key={`${activeStack}-${activeStatus}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-gray-500 mb-8 font-mono"
        >
          showing {filteredProjects.length} project
          {filteredProjects.length !== 1 ? "s" : ""}
        </motion.p>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeStack}-${activeStatus}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">
              No projects match the current filters.
            </p>
            <button
              onClick={() => {
                setActiveStack("All");
                setActiveStatus("All");
              }}
              className="mt-4 text-neon-purple hover:text-neon-cyan transition-colors text-sm font-mono"
            >
              Reset filters
            </button>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}
