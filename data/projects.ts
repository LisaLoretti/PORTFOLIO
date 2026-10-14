export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  /** Lien vers le projet (page de détail ou site externe). */
  href: string;
  /** true pour les données de démonstration, à retirer avant la mise en ligne. */
  isDemo?: boolean;
};

/**
 * DONNÉES DE DÉMONSTRATION — ne représentent pas de véritables réalisations.
 * Elles servent uniquement à mettre au point le composant ProjectCard.
 * Les liens pointent vers /realisations tant que les pages de détail n'existent pas.
 */
export const demoProjects: Project[] = [
  {
    slug: "projet-demo-01",
    title: "Projet de démonstration 01",
    category: "Catégorie exemple",
    description: "Texte de remplacement décrivant brièvement un projet. À remplacer par un vrai contenu.",
    image: { src: "/images/projects/demo-01.svg", alt: "Visuel de démonstration : formes organiques vertes" },
    href: "/realisations",
    isDemo: true,
  },
  {
    slug: "projet-demo-02",
    title: "Projet de démonstration 02",
    category: "Catégorie exemple",
    description: "Texte de remplacement décrivant brièvement un projet. À remplacer par un vrai contenu.",
    image: { src: "/images/projects/demo-02.svg", alt: "Visuel de démonstration : composition géométrique sable et forêt" },
    href: "/realisations",
    isDemo: true,
  },
];
