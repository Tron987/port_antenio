"use client";

import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6 md:px-12"
    >
      <a
        href="#"
        className="text-lg font-bold tracking-tight"
      >
        RK<span className="text-cyan-400">.</span>
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm text-white/60 transition hover:text-cyan-400"
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}