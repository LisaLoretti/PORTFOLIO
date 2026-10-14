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
 * À COMPLÉTER : `videoUrl` (liens vidéo) et `figures` (chiffres clés).
 * Les visuels actuels sont provisoires et décoratifs.
 */
export const projects: Project[] = [
  {
    slug: "village-sejours-linguistiques",
    title: "Village des séjours linguistiques et éducatifs",
    category: "Événementiel · Salon",
    description:
      "Un village dédié aux séjours linguistiques et éducatifs, organisé avec le salon du Figaro Étudiant pour l’Office national de garantie des séjours linguistiques et éducatifs. Mon rôle : piloter le projet de la conception à la coordination sur place, en passant par le budget, la logistique et le lien avec les partenaires.",
    image: { src: "/images/projects/visuel-provisoire-1.svg", alt: "" },
  },
  {
    slug: "assemblee-generale",
    title: "Assemblée Générale",
    category: "Événementiel · Institutionnel",
    description:
      "Organisation des assemblées générales de l’Office : conception de l’expérience des participants avant, pendant et après l’événement, coordination des intervenants et bilans qualitatifs et quantitatifs.",
    image: { src: "/images/projects/visuel-provisoire-2.svg", alt: "" },
  },
  {
    slug: "evenements-internes-ebp",
    title: "Événements internes — EBP Informatique",
    category: "Événementiel · Communication interne",
    description:
      "Journées d’intégration, formations managers, séminaires et plénières : coordination des prestataires (lieux, traiteur, animations, logistique), et animations mensuelles pour les équipes (Halloween, Noël, Octobre rose).",
    figures: [{ value: "60 à 300", label: "participants par événement" }],
    image: { src: "/images/projects/visuel-provisoire-3.svg", alt: "" },
  },
];
