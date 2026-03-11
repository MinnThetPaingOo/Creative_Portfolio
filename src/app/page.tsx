"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import TechStackSection from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const ParticleBackground = dynamic(
  () => import("@/components/three/ParticleBackground"),
  { ssr: false },
);

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStackSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
