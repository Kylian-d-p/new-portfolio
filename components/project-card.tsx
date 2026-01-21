"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
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
    >
      <Link href={`/projects/${project.slug}`}>
        <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group pt-0">
          <div className="aspect-video w-full overflow-hidden bg-zinc-100 rounded-t-lg">
            <Image src={project.image} alt={project.title} width={400} height={225} className="object-cover w-full h-full" />
          </div>

          <CardHeader>
            <CardTitle className="group-hover:text-slate-700 transition-colors">{project.title}</CardTitle>
            <CardDescription className="line-clamp-2">{project.shortDescription}</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.tags.length - 3}
                </Badge>
              )}
            </div>

            <div className="flex gap-3 text-sm text-slate-600">
              {project.githubUrl && (
                <span className="flex items-center gap-1">
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
