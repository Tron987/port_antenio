"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Shield,
  Wallet,
  Ticket,
  BrainCircuit,
} from "lucide-react";
import Section from "@/components/ui/Section";

const projects = [
  {
    number: "01",
    title: "GamePay",
    category: "Fintech / Escrow",
    description:
      "A digital escrow platform designed to facilitate secure transactions between buyers and sellers, with wallet functionality, authentication and transaction management.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "React",
    ],
    icon: Wallet,
  },
  {
    number: "02",
    title: "GamePay Tickets",
    category: "Digital Payments",
    description:
      "A ticketing and events platform concept connecting digital ticket purchases with mobile money payment flows and service-based transaction management.",
    technologies: [
      "Node.js",
      "PostgreSQL",
      "Airtel Money",
      "USSD",
    ],
    icon: Ticket,
  },
  {
    number: "03",
    title: "Xvault",
    category: "Cybersecurity",
    description:
      "A secure password-management concept focused on authentication, OTP-based verification and biometric access.",
    technologies: [
      "Security",
      "2FA",
      "OTP",
      "Biometrics",
    ],
    icon: Shield,
  },
  {
    number: "04",
    title: "AI × Blockchain",
    category: "Research",
    description:
      "Exploring AI-enhanced blockchain infrastructure for secure, transparent and fraud-resilient billing and payment systems across emerging digital economies.",
    technologies: [
      "Artificial Intelligence",
      "Blockchain",
      "Fintech",
      "Fraud Detection",
    ],
    icon: BrainCircuit,
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400">
            03 / Projects
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Things I've
            <br />
            <span className="text-white/40">
              built and explored.
            </span>
          </h2>

          <p className="mt-6 leading-8 text-white/45">
            A selection of software, security, fintech and research projects
            that represent how I approach technology beyond my day-to-day
            professional work.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8"
              >

                {/* Background glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

                <div className="relative">

                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5">
                      <Icon
                        size={22}
                        className="text-cyan-400"
                      />
                    </div>

                    <span className="text-xs text-white/20">
                      {project.number}
                    </span>
                  </div>

                  <p className="mt-8 text-xs uppercase tracking-[0.25em] text-cyan-400/70">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-7 text-white/45">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-sm text-white/30 transition-colors group-hover:text-cyan-400">
                    Explore project
                    <ArrowUpRight size={16} />
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </Section>
  );
}