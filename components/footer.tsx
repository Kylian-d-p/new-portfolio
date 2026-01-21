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
    <footer id="contact" className="border-t border-zinc-200 bg-white">
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
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Kylian Dupouy Peron. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
