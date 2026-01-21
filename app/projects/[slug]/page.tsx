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
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Projet introuvable</h1>
          <Link href="/#projects">
            <Button className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour aux projets
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header avec bouton retour */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <Link href="/#projects">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
          {/* Titre et meta */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{project.title}</h1>
            <p className="text-xl text-slate-600 mb-6">{project.shortDescription}</p>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code source
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Image principale */}
          <Image src={project.image} alt={project.title} width={800} height={450} className="object-cover w-full h-full rounded-lg mb-12" />

          {/* Stack technique */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Technologies utilisées</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Description détaillée */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">À propos du projet</h2>
              <p className="text-slate-600 leading-relaxed">{project.longDescription}</p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Le challenge</h2>
              <p className="text-slate-600 leading-relaxed">{project.challenge}</p>
            </section>

            <Separator />

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">La solution</h2>
              <p className="text-slate-600 leading-relaxed">{project.solution}</p>
            </section>
          </div>

          {/* Navigation vers autres projets */}
          <div className="mt-16 pt-8 border-t border-zinc-200">
            <Link href="/#projects">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voir tous les projets
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
