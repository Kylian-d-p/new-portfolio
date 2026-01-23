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
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div className="mb-8 flex justify-center" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse-glow" />
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-blue-400/30 shadow-2xl shadow-blue-900/50 relative z-10"
                />
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 text-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-blue-200 mb-6 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {personalInfo.title}
            </motion.p>
            <motion.p
              className="text-lg text-blue-300/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer" download>
                <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/50">
                  <Download className="w-4 h-4" />
                  Télécharger mon CV
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* About & Stack Section - Bento Grid */}
        <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">À propos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Bio Card - Spans 2 columns */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="md:col-span-2 card-shine glow-border border-2 border-blue-800/50 hover:border-blue-600/50 transition-all duration-500 bg-slate-900/50">
                  <CardHeader>
                    <CardTitle className="text-blue-100">Qui suis-je ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-200/80 leading-relaxed">{personalInfo.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Frontend Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="card-shine glow-border border-2 border-blue-800/50 hover:border-blue-600/50 transition-all duration-500 h-full bg-slate-900/50">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-blue-400" />
                      <CardTitle className="text-blue-100">Front-End</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {getTechnologiesByCategory("frontend").map((tech) => (
                        <Badge
                          key={tech.name}
                          variant="secondary"
                          className="bg-linear-to-r from-blue-900/60 to-blue-800/60 text-blue-200 hover:from-blue-800/80 hover:to-blue-700/80 transition-all duration-300 border border-blue-700/30"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Backend Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="card-shine glow-border border-2 border-blue-800/50 hover:border-blue-600/50 transition-all duration-500 h-full bg-slate-900/50">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Database className="w-5 h-5 text-blue-400" />
                      <CardTitle className="text-blue-100">Back-End</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {getTechnologiesByCategory("backend").map((tech) => (
                        <Badge
                          key={tech.name}
                          variant="secondary"
                          className="bg-linear-to-r from-blue-900/60 to-blue-800/60 text-blue-200 hover:from-blue-800/80 hover:to-blue-700/80 transition-all duration-300 border border-blue-700/30"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Tools Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <Card className="card-shine glow-border border-2 border-blue-800/50 hover:border-blue-600/50 transition-all duration-500 h-full bg-slate-900/50">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-blue-400" />
                      <CardTitle className="text-blue-100">Outils</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {getTechnologiesByCategory("tools").map((tech) => (
                        <Badge
                          key={tech.name}
                          variant="secondary"
                          className="bg-linear-to-r from-blue-900/60 to-blue-800/60 text-blue-200 hover:from-blue-800/80 hover:to-blue-700/80 transition-all duration-300 border border-blue-700/30"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Design Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <Card className="card-shine glow-border border-2 border-blue-800/50 hover:border-blue-600/50 transition-all duration-500 h-full bg-slate-900/50">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Palette className="w-5 h-5 text-blue-400" />
                      <CardTitle className="text-blue-100">Design</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {getTechnologiesByCategory("design").map((tech) => (
                        <Badge
                          key={tech.name}
                          variant="secondary"
                          className="bg-linear-to-r from-blue-900/60 to-blue-800/60 text-blue-200 hover:from-blue-800/80 hover:to-blue-700/80 transition-all duration-300 border border-blue-700/30"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-blue-400">Projets récents</h2>
            <p className="text-blue-300/80 text-center mb-12 max-w-2xl mx-auto">Découvrez une sélection de mes projets les plus significatifs</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">Expérience professionnelle</h2>

            <div className="max-w-3xl mx-auto space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5, y: -5 }}
                >
                  <Card className="card-shine glow-border border-2 border-blue-800/50 hover:border-blue-600/50 transition-all duration-500 bg-slate-900/50">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl text-blue-100">{exp.title}</CardTitle>
                          <p className="text-blue-200 font-medium mt-1">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="w-fit border-blue-600/50 text-blue-200 bg-linear-to-r from-blue-900/40 to-blue-800/40">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-200/80 mb-4">{exp.description}</p>
                      <Separator className="my-4 bg-linear-to-r from-blue-800/50 to-blue-700/50" />
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-linear-to-r from-blue-900/60 to-blue-800/60 text-blue-200 hover:from-blue-800/80 hover:to-blue-700/80 transition-all duration-300 border border-blue-700/30"
                          >
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
