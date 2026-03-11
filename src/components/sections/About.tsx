"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    <SectionWrapper id="about" className="!pb-10 md:!pb-14">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neon-purple font-mono text-sm mb-3"
          >
            {"// 02. About Me"}
          </motion.p>
          <h2 className="section-heading">
            <span className="neon-text">Get to Know</span>{" "}
            <span className="text-white">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-2xl p-8 md:p-10 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Bio Text */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">
                A Passionate Builder 🚀
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I am a passionate Software Engineer from Myanmar who enjoys
                building modern web applications and AI-powered tools. I
                specialize in the MERN stack and have experience integrating AI
                APIs such as Gemini and OpenAI into real-world applications.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I enjoy learning new technologies like React Native and building
                innovative products such as AI chat apps, SaaS tools, and
                developer utilities. My goal is to create scalable, performant,
                and visually engaging applications.
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/5">
                {[
                  { label: "Location", value: "📍 Myanmar" },
                  { label: "Focus", value: "🌐 Full Stack + AI" },
                  { label: "Stack", value: "💻 MERN & Next.js" },
                  { label: "Learning", value: "📱 React Native" },
                ].map((info) => (
                  <div key={info.label}>
                    <p className="text-xs text-gray-500 font-mono">
                      {info.label}
                    </p>
                    <p className="text-sm text-gray-300 mt-1">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Block */}
            <div className="lg:col-span-2">
              <div className="glass rounded-xl overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-dark-800/80 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-gray-500 font-mono">
                    about.ts
                  </span>
                </div>
                <div className="p-4 font-mono text-sm space-y-1">
                  <p>
                    <span className="text-neon-purple">const</span>{" "}
                    <span className="text-neon-cyan">developer</span> = {"{"}
                  </p>
                  <p className="pl-4">
                    <span className="text-gray-400">name:</span>{" "}
                    <span className="text-green-400">
                      &quot;Thet Paing Oo&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    <span className="text-gray-400">role:</span>{" "}
                    <span className="text-green-400">
                      &quot;Software Engineer&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    <span className="text-gray-400">location:</span>{" "}
                    <span className="text-green-400">&quot;Myanmar&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-gray-400">skills:</span> [
                  </p>
                  <p className="pl-8">
                    <span className="text-yellow-400">&quot;Web Dev&quot;</span>
                    ,
                  </p>
                  <p className="pl-8">
                    <span className="text-yellow-400">
                      &quot;Mobile Dev&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-8">
                    <span className="text-yellow-400">
                      &quot;AI Integration&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-8">
                    <span className="text-yellow-400">
                      &quot;Cloud APIs&quot;
                    </span>
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-gray-400">passion:</span>{" "}
                    <span className="text-neon-purple">true</span>
                  </p>
                  <p>{"}"}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
