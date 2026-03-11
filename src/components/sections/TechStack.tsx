"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { techStack, TechItem } from "@/data/portfolio";

const categories = [
  "All",
  "UI",
  "Frontend",
  "Backend",
  "Database",
  "AI",
  "Mobile",
  "Dev Tools",
] as const;

const categoryConfig: Record<string, { icon: string; gradient: string }> = {
  UI: { icon: "🎨", gradient: "from-pink-500 to-rose-500" },
  Frontend: { icon: "⚛️", gradient: "from-neon-purple to-neon-blue" },
  Backend: { icon: "⚙️", gradient: "from-green-500 to-emerald-500" },
  Database: { icon: "🗄️", gradient: "from-neon-blue to-neon-cyan" },
  AI: { icon: "🤖", gradient: "from-neon-purple to-neon-pink" },
  Mobile: { icon: "📱", gradient: "from-neon-cyan to-green-400" },
  "Dev Tools": { icon: "🔧", gradient: "from-orange-500 to-yellow-500" },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  return (
    <motion.div
      variants={itemVariants}
      layout
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      className="glass-card rounded-xl p-5 flex flex-col items-center gap-3 group cursor-default relative overflow-hidden"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${tech.color}15, transparent 70%)`,
        }}
      />

      {/* Icon circle */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.2,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {(() => {
          const TechIcon = tech.icon;
          return (
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${tech.color}22, ${tech.color}08)`,
                border: `1px solid ${tech.color}35`,
                boxShadow: `0 0 0 0 ${tech.color}00`,
              }}
            >
              <TechIcon size={27} style={{ color: tech.color }} />
            </div>
          );
        })()}
        {/* Floating dot */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 }}
          className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
          style={{ backgroundColor: tech.color }}
        />
      </motion.div>

      {/* Name */}
      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center">
        {tech.name}
      </span>

      {/* Category badge */}
      <span className="text-[10px] font-mono text-gray-500 px-2 py-0.5 rounded-full bg-dark-700/50">
        {tech.category}
      </span>
    </motion.div>
  );
}

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredTech =
    activeCategory === "All"
      ? techStack
      : techStack.filter((t) => t.category === activeCategory);

  return (
    <SectionWrapper id="techstack" className="!pt-10 md:!pt-14">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neon-purple font-mono text-sm mb-3"
          >
            {"// 03. Tech Stack"}
          </motion.p>
          <h2 className="section-heading">
            <span className="neon-text">My Tech</span>{" "}
            <span className="text-white">Arsenal</span>
          </h2>
          <p className="section-subheading mx-auto mt-3">
            Technologies and tools I use to bring ideas to life.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-lg shadow-neon-purple/20"
                  : "glass text-gray-400 hover:text-white hover:border-neon-purple/30"
              }`}
            >
              {cat !== "All" && (
                <span className="text-sm">{categoryConfig[cat]?.icon}</span>
              )}
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Tech Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {filteredTech.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            {
              label: "Frontend",
              count: techStack.filter((t) => t.category === "Frontend").length,
              icon: "⚛️",
            },
            {
              label: "Backend",
              count: techStack.filter((t) => t.category === "Backend").length,
              icon: "⚙️",
            },
            {
              label: "Mobile",
              count: techStack.filter((t) => t.category === "Mobile").length,
              icon: "📱",
            },
            { label: "Total Tools", count: techStack.length, icon: "🛠️" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-4 text-center"
            >
              <span className="text-xl">{stat.icon}</span>
              <p className="text-2xl font-bold neon-text mt-2">{stat.count}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
