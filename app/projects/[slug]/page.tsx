"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProjectBySlug } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-100 mb-4">Projet introuvable</h1>
          <Link href="/#projects">
            <Button className="gap-2 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-lg shadow-blue-900/50">
              <ArrowLeft className="w-4 h-4" />
              Retour aux projets
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header avec bouton retour */}
      <header className="sticky top-0 z-50 w-full border-b border-blue-500/20 bg-slate-900/80 backdrop-blur-md shadow-lg shadow-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <Link href="/#projects">
              <Button variant="ghost" size="sm" className="gap-2 text-blue-200 hover:text-blue-400 hover:bg-blue-900/30">
                <ArrowLeft className="w-4 h-4" />
                Retour
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          {/* Titre et meta */}
          <div className="mb-8">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-blue-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="text-xl text-blue-200 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {project.shortDescription}
            </motion.p>

            {/* Actions */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {project.githubUrl && (
                <Button
                  variant="outline"
                  asChild
                  className="border-blue-600/50 text-blue-200 hover:bg-blue-900/30 hover:border-blue-500 transition-all duration-300"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code source
                  </a>
                </Button>
              )}
            </motion.div>
          </div>

          {/* Image principale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative overflow-hidden rounded-lg mb-12 glow-fix-border"
          >
            <Image src={project.image} alt={project.title} width={800} height={450} className="object-cover w-full h-full rounded-lg" />
          </motion.div>

          {/* Stack technique */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Card className="mb-8 glow-border border-2 border-blue-800/50 hover:border-blue-600/50 transition-all duration-500 bg-slate-900/50">
              <CardHeader>
                <CardTitle className="text-blue-100">Technologies utilisées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-sm bg-linear-to-r from-blue-900/60 to-blue-800/60 text-blue-200 border border-blue-700/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Description détaillée */}
          <div className="space-y-8">
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
              <h2 className="text-2xl font-bold text-blue-100 mb-4">À propos du projet</h2>
              <p className="text-blue-200/80 leading-relaxed">{project.longDescription}</p>
            </motion.section>

            <Separator className="bg-linear-to-r from-blue-800/50 to-blue-700/50" />

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
              <h2 className="text-2xl font-bold text-blue-100 mb-4">Le challenge</h2>
              <p className="text-blue-200/80 leading-relaxed">{project.challenge}</p>
            </motion.section>

            <Separator className="bg-linear-to-r from-blue-800/50 to-blue-700/50" />

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
              <h2 className="text-2xl font-bold text-blue-100 mb-4">La solution</h2>
              <p className="text-blue-200/80 leading-relaxed">{project.solution}</p>
            </motion.section>
          </div>

          {/* Navigation vers autres projets */}
          <motion.div
            className="mt-16 pt-8 border-t border-blue-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Link href="/#projects">
              <Button
                variant="outline"
                className="gap-2 border-blue-600/50 text-blue-200 hover:bg-blue-900/30 hover:border-blue-500 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Voir tous les projets
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
