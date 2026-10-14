export type ProjectFigure = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  /** Présentation du projet et de mon rôle. */
  description?: string;
  /** Chiffres clés (participants, partenaires, budget…). */
  figures?: ProjectFigure[];
  image: {
    src: string;
    /** Laisser vide pour un visuel purement décoratif. */
    alt: string;
  };
  /** Lien vers la vidéo du projet. */
  videoUrl?: string;
};

/*
 * À COMPLÉTER pour chaque projet : `description` (mon rôle), `figures` (chiffres)
 * et `videoUrl` (lien vidéo). Les visuels actuels sont provisoires et décoratifs.
 */
export const projects: Project[] = [
  {
    slug: "village-sejours-linguistiques",
    title: "Village des séjours linguistiques et éducatifs",
    category: "Événementiel",
    image: { src: "/images/projects/visuel-provisoire-1.svg", alt: "" },
  },
  {
    slug: "assemblee-generale",
    title: "Assemblée Générale",
    category: "Événementiel",
    image: { src: "/images/projects/visuel-provisoire-2.svg", alt: "" },
  },
];
