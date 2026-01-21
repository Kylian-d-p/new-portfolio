"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-end">
          <nav className="hidden md:flex items-center">
            <Button onClick={() => scrollToSection("about")} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              À propos
            </Button>
            <Button onClick={() => scrollToSection("projects")} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Projets
            </Button>
            <Button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Expérience
            </Button>
            <Button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
