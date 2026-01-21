# Portfolio Personnel

Un portfolio moderne et épuré créé avec Next.js 14+, TypeScript et Tailwind CSS.

## 🚀 Stack Technique

- **Framework**: Next.js 14+ (App Router)
- **Langage**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS
- **UI Library**: Shadcn/UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Package Manager**: pnpm

## 🎨 Design

- Style **Bento Grid** moderne et épuré
- Typographie soignée avec Geist Sans
- **Light mode uniquement** avec palette Zinc/Slate
- Layout responsive **mobile-first**

## 📂 Structure du Projet

```
.
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css         # Styles globaux
│   ├── not-found.tsx       # Page 404
│   └── projects/
│       └── [slug]/
│           └── page.tsx    # Page détail projet
├── components/
│   ├── ui/                 # Composants Shadcn/UI
│   ├── header.tsx          # Header sticky
│   ├── footer.tsx          # Footer avec liens sociaux
│   └── project-card.tsx    # Carte de projet
└── lib/
    ├── data.ts             # Données et types
    └── utils.ts            # Utilitaires
```

## 🛠️ Installation

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Build pour la production
pnpm build

# Lancer la version production
pnpm start
```

## 📝 Personnalisation

### Données Personnelles

Modifiez le fichier `lib/data.ts` pour ajouter vos propres informations :

- **personalInfo** : Nom, titre, bio, email, etc.
- **technologies** : Votre stack technique
- **experiences** : Vos expériences professionnelles
- **projects** : Vos projets avec détails complets
- **socialLinks** : Liens vers vos réseaux sociaux

### Couleurs et Thème

Les couleurs sont définies dans `app/globals.css` avec une palette Zinc/Slate douce.

### Ajouter des Projets

Ajoutez simplement un nouvel objet dans le tableau `projects` du fichier `lib/data.ts`. Les routes dynamiques se génèrent automatiquement.

## 📄 Pages

- **/** : Page d'accueil avec Hero, À propos, Stack, Projets et Expérience
- **/projects/[slug]** : Page de détail pour chaque projet

## ✨ Fonctionnalités

- ✅ Navigation fluide avec ancres
- ✅ Animations subtiles au scroll (Framer Motion)
- ✅ Cartes de projets interactives
- ✅ Pages de détail dynamiques
- ✅ Design responsive mobile-first
- ✅ SEO optimisé
- ✅ Performance optimale

## 📦 Composants Shadcn/UI Utilisés

- Card
- Button
- Badge
- Separator

## 🎯 Prochaines Étapes

1. Remplacer les placeholders d'images par vos vraies photos
2. Ajouter votre CV dans `/public/cv.pdf`
3. Personnaliser les métadonnées SEO dans `app/layout.tsx`
4. Ajouter votre photo de profil dans `/public/avatar.jpg`
5. Déployer sur Vercel ou votre plateforme préférée

## 📄 License

MIT

# or

pnpm dev

# or

bun dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```
