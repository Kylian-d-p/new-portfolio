"use client";

import { socialLinks } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Footer() {
  return (
    <footer id="contact" className="border-t border-blue-500/20 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-125 hover:rotate-6"
                  aria-label={link.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          <p className="text-sm text-blue-300/70">© {new Date().getFullYear()} Kylian Dupouy Peron. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
