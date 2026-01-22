// Types stricts pour les données du portfolio
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Technology {
  name: string;
  category: "frontend" | "backend" | "tools" | "design";
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  challenge: string;
  solution: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  featured: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatar: string;
  cvUrl: string;
  email: string;
}

// Données personnelles
export const personalInfo: PersonalInfo = {
  name: "Kylian Dupouy Peron",
  title: "Développeur Full-Stack",
  tagline: "Je crée des expériences web modernes et performantes",
  bio: "Développeur passionné avec 5+ ans d'expérience en création d'applications web. Spécialisé dans React, Next.js et TypeScript. J'aime transformer des idées complexes en interfaces élégantes et intuitives.",
  avatar: "/avatar.jpg", // Placeholder
  cvUrl: "/cv.pdf",
  email: "kdperon@yahoo.com",
};

// Stack technique
export const technologies: Technology[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "Figma", category: "design" },
];

// Liens sociaux
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Kylian-d-p",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kylian-dupouy-peron/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:kdperon@yahoo.com",
    icon: "mail",
  },
];

// Expériences professionnelles
export const experiences: Experience[] = [
  {
    id: "1",
    title: "Développeur Web",
    company: "Association des commerçants de Mérignac-centre",
    period: "Avril 2025 - Juin 2025",
    description:
      "Création d'un site web vitrine pour l'association des commerçants de Mérignac-centre afin de promouvoir les commerces locaux et les événements organisés par l'association. Le site dispose d'une interface d'administration pour permettre aux membres de l'association de mettre à jour le contenu facilement.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Cloudflare"],
  },
  {
    id: "2",
    title: "Développeur Web Freelance",
    company: "GSCode",
    period: "2025",
    description:
      " Développement complet d'une solution pour la génération de QR Codes conformes à une nouvelle réglementation européenne. L'application permet aux utilisateurs de créer, personnaliser et gérer des QR Codes dynamiques avec des options avancées de suivi et d'analyse.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe"],
  },
  {
    id: "3",
    title: "Développeur Web Freelance",
    company: "Weespin",
    period: "2024",
    description: "Développement d'une plateforme permettant aux commerces de gagner des avis Google en échange de cadeaux offerts aux clients.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe"],
  },
];

// Projets
export const projects: Project[] = [
  {
    id: "1",
    slug: "tu-preferes",
    title: 'Jeux "Tu Préfères ?"',
    shortDescription: "Une application web interactive pour jouer au jeu populaire 'Tu Préfères ?' avec des amis.",
    longDescription:
      "Application web interactive permettant aux utilisateurs de jouer au jeu 'Tu Préfères ?' en ligne avec des amis. Les joueurs peuvent créer des dilemmes personnalisés, des playlists de questions, et les partager via un lien",
    challenge:
      "Le principal défi était de concevoir le projet dans un délai très court : 5 heures pour le développement complet, incluant la conception, le codage et le déploiement.",
    solution:
      "Pour relever ce défi, j'ai opté pour une architecture simple mais efficace en utilisant Next.js pour le frontend et backend, avec une base de données PostgreSQL pour stocker les questions. J'ai mis en place une interface utilisateur intuitive avec Tailwind CSS, permettant une expérience fluide et engageante. Le déploiement a été effectué sur Vercel pour assurer une mise en ligne rapide et fiable.",
    image: "/projects/tu-preferes.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Vercel", "Tailwind CSS"],
    githubUrl: "https://github.com/Kylian-d-p/tu-preferes",
    featured: true,
  },
  {
    id: "2",
    slug: "i-planify",
    title: "iPlanify",
    shortDescription: "Application de planification de rendez-vous pour les professionnels.",
    longDescription:
      "iPlanify est une application web conçue pour aider les professionnels à gérer leurs rendez-vous et leur emploi du temps de manière efficace. Elle offre des fonctionnalités telles que la prise de rendez-vous en ligne, les rappels automatiques et la gestion des clients.",
    challenge:
      "Le principal défi était de créer une interface utilisateur conviviale tout en intégrant des fonctionnalités complexes de gestion des rendez-vous.",
    solution:
      "Pour relever ce défi, j'ai utilisé Next.js pour construire une interface utilisateur réactive et intuitive,. J'ai intégré des fonctionnalités avancées telles que la gestion des disponibilités, les notifications par email, et un calendrier interactif. La base de données PostgreSQL assure la persistance des données, tandis que Stripe est utilisé pour la gestion des paiements. Le déploiement sur Vercel garantit une disponibilité optimale.",
    image: "/projects/i-planify.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/Kylian-d-p/i-planify-v2",
    featured: false,
  },
];

// Helper pour récupérer un projet par son slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

// Helper pour récupérer les projets featured
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

// Helper pour récupérer les technologies par catégorie
export function getTechnologiesByCategory(category: Technology["category"]): Technology[] {
  return technologies.filter((tech) => tech.category === category);
}
