"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { experiences, getTechnologiesByCategory, personalInfo, projects } from "@/lib/data";
import { motion } from "framer-motion";
import { Code2, Database, Download, Palette, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-8 flex justify-center">
              <Image src={personalInfo.avatar} alt={personalInfo.name} width={120} height={120} className="rounded-full border-4 border-slate-200" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">{personalInfo.name}</h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-6">{personalInfo.title}</p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">{personalInfo.tagline}</p>

            <Link href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" download>
              <Button size="lg" className="gap-2" variant={"outline"}>
                <Download className="w-4 h-4" />
                Télécharger mon CV
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* About & Stack Section - Bento Grid */}
        <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">À propos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Bio Card - Spans 2 columns */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Qui suis-je ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{personalInfo.bio}</p>
                </CardContent>
              </Card>

              {/* Frontend Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-slate-600" />
                    <CardTitle>Front-End</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {getTechnologiesByCategory("frontend").map((tech) => (
                      <Badge key={tech.name} variant="secondary">
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Backend Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-slate-600" />
                    <CardTitle>Back-End</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {getTechnologiesByCategory("backend").map((tech) => (
                      <Badge key={tech.name} variant="secondary">
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tools Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-slate-600" />
                    <CardTitle>Outils</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {getTechnologiesByCategory("tools").map((tech) => (
                      <Badge key={tech.name} variant="secondary">
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Design Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-slate-600" />
                    <CardTitle>Design</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {getTechnologiesByCategory("design").map((tech) => (
                      <Badge key={tech.name} variant="secondary">
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">Projets récents</h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">Découvrez une sélection de mes projets les plus significatifs</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Expérience professionnelle</h2>

            <div className="max-w-3xl mx-auto space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <p className="text-slate-600 font-medium mt-1">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">{exp.description}</p>
                      <Separator className="my-4" />
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
