"use client";

import Section from "../ui/Section";

export default function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
          01 / About
        </p>

        <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-7xl">
          I work where
          <span className="text-white/40">
            {" "}
            data, technology
          </span>{" "}
          and business meet.
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-white/60">
              I'm a Business Intelligence Data Analyst with a background in
              Computer Systems and Security. My work sits at the intersection
              of data analytics, software engineering, cybersecurity and
              digital products.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-white/60">
              I enjoy taking complex technical and business problems,
              understanding what the data is saying, and turning those
              insights into systems, dashboards and decisions that create
              measurable value.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Stat value="BI" label="Business Intelligence" />
            <Stat value="SQL" label="Data Engineering" />
            <Stat value="AI" label="Emerging Technology" />
            <Stat value="SEC" label="Cybersecurity" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">
      <div className="text-3xl font-bold text-cyan-400">
        {value}
      </div>

      <div className="mt-2 text-sm text-white/50">
        {label}
      </div>
    </div>
  );
}