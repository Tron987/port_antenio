"use client";

import { BriefcaseBusiness, GitBranch, Mail } from "lucide-react";
import Section from "../ui/Section";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
          04 / Contact
        </p>

        <h2 className="max-w-4xl text-5xl font-bold leading-tight md:text-8xl">
          Let's build
          <br />
          something
          <span className="text-white/30"> useful.</span>
        </h2>

        <div className="mt-16 flex flex-wrap gap-4">
          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            <Mail size={18} />
            Email me
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-white/70 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <BriefcaseBusiness size={18} />
            LinkedIn
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-white/70 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <GitBranch size={18} />
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}