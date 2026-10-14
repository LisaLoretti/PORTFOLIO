export type ProjectFigure = {
  value: string;
  label: string;
};

export type ProjectRole = {
  title: string;
  text: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Complément de titre (lieu, organisation…). */
  subtitle?: string;
  category: string;
  /** Résumé court, affiché sur les cartes. */
  summary: string;
  /** Paragraphes de présentation du projet. */
  context?: string[];
  /** Mon rôle, découpé par grandes missions. */
  roles?: ProjectRole[];
  /** Chiffres clés. */
  figures?: ProjectFigure[];
  image: {
    src: string;
    /** Laisser vide pour un visuel purement décoratif. */
    alt: string;
  };
  video?: {
    youtubeId: string;
    credit?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "assemblee-generale-2026",
    title: "Assemblée Générale 2026",
    subtitle: "Chez L’Office",
    category: "Événementiel · Institutionnel",
    summary:
      "Trois jours en Corse pour les organismes membres de L’Office et leurs partenaires : temps institutionnels, rencontres professionnelles, découverte du territoire et convivialité.",
    context: [
      "Chaque année, L’Office réunit ses 27 organismes membres et partenaires à l’occasion de son Assemblée Générale.",
      "Pour cette édition, avec l’équipe, nous avons souhaité redynamiser le format en allant au-delà des temps institutionnels. Nous avons choisi la Corse afin de faire découvrir aux organismes un territoire intéressant pour leurs activités et de favoriser les rencontres avec des partenaires issus de différents secteurs.",
      "Nous avons ainsi imaginé trois jours mêlant temps institutionnels, rencontres professionnelles, découverte du territoire et moments de convivialité.",
    ],
    roles: [
      {
        title: "Conception",
        text: "Réflexion sur l’ambiance, l’expérience souhaitée et les différents temps forts du séjour.",
      },
      {
        title: "Coordination",
        text: "Invitations, inscriptions, suivi des participants, budget, rétroplanning et création des supports de communication.",
      },
      {
        title: "Logistique & terrain",
        text: "Sélection et coordination des prestataires, briefs, suivi des besoins et gestion des différents temps du séjour.",
      },
    ],
    figures: [
      { value: "3 jours", label: "d’événement" },
      { value: "50", label: "participants" },
      { value: "20", label: "partenaires" },
    ],
    image: {
      src: "/images/projects/assemblee-generale-2026.webp",
      alt: "Participants de l’Assemblée Générale 2026 applaudissant lors d’un dîner",
    },
    // À vérifier : attribution des deux liens YouTube fournis.
    video: { youtubeId: "Fz8vciLSsBo" },
  },
  {
    slug: "village-sejours-linguistiques",
    title: "Village des séjours linguistiques et éducatifs",
    subtitle: "Salon Post Bac du Figaro Étudiant",
    category: "Événementiel · Salon",
    summary:
      "Un salon entièrement repensé avec un partenaire : un espace dédié à L’Office et à ses organismes labellisés au cœur du Salon Post Bac du Figaro Étudiant.",
    context: [
      "Chaque année, L’Office organisait son propre salon dans un lycée pour faire découvrir les séjours de qualité des organismes labellisés.",
      "Face à une baisse de visibilité de l’événement, nous avons souhaité, avec l’équipe, repenser entièrement son format et nous associer à un partenaire.",
      "C’est ainsi qu’est né le Village des Séjours Linguistiques et Éducatifs, intégré au Salon Post Bac du Figaro Étudiant, avec un espace dédié à L’Office et à ses organismes labellisés.",
    ],
    roles: [
      {
        title: "Conception",
        text: "Réflexion sur l’ambiance, l’identité visuelle et l’expérience souhaitée.",
      },
      {
        title: "Coordination",
        text: "Gestion des inscriptions, suivi des participants et coordination avec les équipes du Figaro Étudiant.",
      },
      {
        title: "Communication",
        text: "Création de supports print et digitaux : contenus pour les réseaux sociaux, newsletter, kit de communication, supports de présentation et site web.",
      },
      {
        title: "Suivi & bilan",
        text: "Analyse de la fréquentation et réalisation d’un bilan qualitatif et quantitatif.",
      },
    ],
    figures: [
      { value: "14", label: "organismes labellisés" },
      { value: "+1 000", label: "visiteurs" },
      { value: "1", label: "espace dédié" },
    ],
    image: {
      src: "/images/projects/village-sejours-linguistiques.webp",
      alt: "Entrée de l’Espace Champerret, lieu du salon",
    },
    video: { youtubeId: "tgFNrcRRnoc", credit: "© PicNic Production" },
  },
];
