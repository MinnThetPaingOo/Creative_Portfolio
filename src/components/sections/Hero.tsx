"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-2 border-neon-purple border-t-transparent animate-spin" />
    </div>
  ),
});

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "AI Integration Expert",
  "React Native Developer",
];

function useTypewriter() {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((b: boolean) => !b), 530);
    return () => clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    const current = roles[phraseIdx];
    const speed = deleting ? 45 : 90;
    const pause = deleting ? 0 : 1800;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setPhraseIdx((i: number) => (i + 1) % roles.length);
      return;
    }
    const t = setTimeout(() => {
      setText(
        deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1),
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, phraseIdx]);

  return { text, blink };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const { text: roleText, blink } = useTypewriter();
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start pt-1 md:pt-1"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-0 rounded-full text-xs font-medium glass border border-neon-purple/20 text-neon-purple">
              <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
              Available for freelance work
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <p className="text-gray-400 text-lg mt-4 mb-1 font-mono">
              &gt; Hello, I&apos;m
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="neon-text">Thet Paing</span>
              <br />
              <span className="text-white">Oo</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 min-h-[2.5rem] flex items-center gap-1">
              <span className="neon-text-alt">{roleText}</span>
              <span
                className="inline-block w-[2px] h-7 rounded-full bg-neon-purple align-middle"
                style={{ opacity: blink ? 1 : 0, transition: "opacity 0.1s" }}
              />
            </h2>
            <div className="flex flex-wrap gap-2 mt-3 justify-center lg:justify-start">
              {["Web Dev", "Mobile Dev", "AI Integration", "Cloud APIs"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-mono glass text-gray-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            Passionate about building modern web applications and AI-powered
            tools. Specializing in the MERN stack and creating scalable,
            performant, and visually engaging applications from Myanmar.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="btn-primary flex items-center gap-2 group"
            >
              <span>View Projects</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-secondary flex items-center gap-2"
            >
              <span>Contact Me</span>
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex gap-8 mt-4 justify-center lg:justify-start"
          >
            {[
              { label: "Projects", value: "8+" },
              { label: "Technologies", value: "20+" },
              { label: "AI Tools Built", value: "3+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold neon-text">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: 3D Scene + Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square max-w-lg mx-auto order-1 lg:order-2"
        >
          {/* Glow behind */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-neon-blue/10 to-neon-cyan/20 rounded-full blur-3xl" />

          {/* 3D Scene */}
          <div className="relative w-full h-full">
            <HeroScene />
          </div>

          {/* Profile image overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan p-[2px]">
            <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Profile picture"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs font-mono">scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-neon-purple" />
        </motion.div>
      </motion.div>
    </section>
  );
}
