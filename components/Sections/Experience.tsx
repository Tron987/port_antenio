"use client";

import Section from "../ui/Section";

const experience = [
  {
    period: "2024 — Present",
    company: "Airtel Malawi",
    role: "Business Intelligence Data Analyst",
    description:
      "Developing executive dashboards, performance reporting and analytical solutions supporting digital adoption, transaction trends, customer engagement, revenue performance and product monitoring.",
    technologies: [
      "Power BI",
      "SQL",
      "Python",
      "DAX",
      "Power Query",
      "ETL",
    ],
  },
  {
    period: "2022 — 2024",
    company: "TNM",
    role: "Prepaid Billing / IT",
    description:
      "Worked with prepaid billing and enterprise systems, supporting product configuration, system monitoring, reconciliation, integrations and second-level technical support.",
    technologies: [
      "BSS",
      "Linux",
      "SQL",
      "APIs",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    period: "2022",
    company: "NEEF",
    role: "IT Intern / IT Officer Intern",
    description:
      "Supported core banking technology, client onboarding, reconciliation, server and network operations, technical support and IT reporting.",
    technologies: [
      "Banking Systems",
      "Networking",
      "Servers",
      "Databases",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
          02 / Experience
        </p>

        <h2 className="text-4xl font-bold md:text-7xl">
          The journey.
        </h2>

        <div className="mt-20 space-y-16">
          {experience.map((item, index) => (
            <div
              key={item.company}
              className="grid gap-6 border-t border-white/10 pt-8 md:grid-cols-[180px_1fr]"
            >
              <div>
                <span className="text-sm text-cyan-400">
                  {item.period}
                </span>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-white/40">
                  {item.company}
                </p>

                <h3 className="mt-2 text-2xl font-semibold md:text-4xl">
                  {item.role}
                </h3>

                <p className="mt-6 max-w-3xl leading-relaxed text-white/60">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}