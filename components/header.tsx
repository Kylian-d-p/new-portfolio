"use client";

import { motion } from "framer-motion";
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
      className="sticky top-0 z-50 w-full border-b border-blue-500/20 bg-slate-900/80 backdrop-blur-md shadow-lg shadow-blue-900/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-end">
          <nav className="hidden md:flex items-center gap-2">
            <Button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-blue-200 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              À propos
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-blue-200 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Projets
            </Button>
            <Button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium text-blue-200 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Expérience
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium gap-2 bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/50"
            >
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
