"use client";

import HeroScene from "@/components/3d/HeroScene";
import Navbar from "@/components/3d/Navbar";

import About from "@/components/Sections/About";
import Experience from "@/components/Sections/Experience";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050509] text-white">
      <Navbar />

      {/* Fixed 3D universe */}
      <div className="fixed inset-0 z-0">
        <HeroScene />
      </div>

      {/* Content */}
      <div className="relative z-10 pointer-events-none">

        {/* HERO */}
        <section className="flex min-h-screen items-center px-8 md:px-20">
          <div className="max-w-5xl">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
              Business Intelligence · Data · Technology
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-8xl">
              Raphael
              <br />
              <span className="text-white/40">
                Kazembe.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              Business Intelligence Data Analyst building
              data-driven systems, digital products and
              technology solutions.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
              >
                Explore my work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact me
              </a>
            </div>
          </div>
        </section>

        <About />
        <Experience />
        <Projects />
        <Contact />

      </div>
    </main>
  );
}