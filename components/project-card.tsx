"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/lib/data";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Link href={`/projects/${project.slug}`}>
        <Card className="h-full hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer group pt-0 card-shine glow-border border-2 border-blue-800/50 hover:border-blue-600/50 overflow-hidden bg-slate-900/50">
          <div className="aspect-video w-full overflow-hidden bg-linear-to-br from-blue-950 to-slate-900 rounded-t-lg relative">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={225}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <CardHeader>
            <CardTitle className="group-hover:text-blue-400 transition-all duration-300 text-blue-100">{project.title}</CardTitle>
            <CardDescription className="line-clamp-2 text-blue-300/70">{project.shortDescription}</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + i * 0.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-xs bg-linear-to-r from-blue-900/60 to-blue-800/60 text-blue-200 border border-blue-700/30"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
              {project.tags.length > 3 && (
                <Badge variant="secondary" className="text-xs bg-linear-to-r from-blue-800/60 to-blue-900/60 text-blue-200 border border-blue-700/30">
                  +{project.tags.length - 3}
                </Badge>
              )}
            </div>

            <div className="flex gap-3 text-sm text-blue-300">
              {project.githubUrl && (
                <span className="flex items-center gap-1 group-hover:text-blue-400 transition-colors duration-300">
                  <Github className="w-4 h-4" />
                  <span>/{project.githubUrl.split("/")[4]}</span>
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
