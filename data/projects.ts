export type ProjectFigure = {
  value: string;
  label: string;
};

export type ProjectRole = {
  title: string;
  /** Sans texte, les rôles s'affichent en étiquettes. */
  text?: string;
};

/** Paragraphe simple, ou paragraphe précédé d'un intertitre. */
export type ProjectContext = string | { title: string; text: string };

export type Project = {
  slug: string;
  title: string;
  /** Complément de titre (lieu, organisation…). */
  subtitle?: string;
  category: string;
  /** Résumé court, affiché sur les cartes. */
  summary: string;
  /** Paragraphes de présentation du projet. */
  context?: ProjectContext[];
  /** Mon rôle, découpé par grandes missions. */
  roles?: ProjectRole[];
  /** Chiffres clés. */
  figures?: ProjectFigure[];
  image?: {
    src: string;
    /** Laisser vide pour un visuel purement décoratif. */
    alt: string;
  };
  /** Vidéo au format paysage. */
  video?: {
    youtubeId: string;
    credit?: string;
  };
  /** Exemples de vidéos verticales (Shorts), affichés dans des téléphones. */
  shorts?: { youtubeId: string }[];
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
  {
    slug: "tournee-membres",
    title: "Tournée à la rencontre de nos membres",
    subtitle: "Un concept événementiel déployé dans plusieurs villes",
    category: "Événementiel · Contenus vidéo",
    summary:
      "Aller à la rencontre des organismes labellisés par L’Office et leur donner la parole à travers une série de vidéos tournées sur le terrain.",
    context: [
      {
        title: "Mon idée",
        text: "Aller à la rencontre des organismes labellisés par L’Office pour découvrir leurs équipes, leurs activités et leur quotidien.",
      },
      {
        title: "Les objectifs",
        text: "Présenter les missions de L’Office, renforcer les liens avec les membres et leur donner la parole à travers des interviews réalisées directement sur le terrain.",
      },
      "Une série de vidéos authentiques, humaines et incarnées, pour mettre en lumière celles et ceux qui font vivre le réseau.",
    ],
    roles: [
      { title: "Planification" },
      { title: "Prise de contact" },
      { title: "Coordination" },
      { title: "Préparation des interviews" },
      { title: "Tournage" },
      { title: "Montage" },
      { title: "Diffusion" },
    ],
    figures: [
      { value: "27", label: "organismes rencontrés" },
      { value: "21", label: "vidéos réalisées" },
      { value: "+30 000", label: "vues sur LinkedIn, Instagram & TikTok" },
    ],
    shorts: [{ youtubeId: "Bbk5Sh3JHY4" }, { youtubeId: "bh07cWYqAVM" }],
  },
  {
    slug: "conseils-de-l-office",
    title: "Série de vidéos : Conseils de L’Office",
    subtitle: "Chez L’Office",
    category: "Communication digitale · Vidéo",
    summary:
      "Une série de courtes vidéos de conseils pour sensibiliser les jeunes aux bénéfices d’un séjour à l’étranger de qualité.",
    context: [
      "Pour mettre en avant L’Office et sa mission, j’ai imaginé une série de courtes vidéos de conseils, diffusées sur plusieurs semaines.",
      {
        title: "Objectif",
        text: "Dynamiser les réseaux sociaux tout en sensibilisant les jeunes aux bénéfices d’un séjour à l’étranger de qualité et à l’importance de bien préparer leur expérience.",
      },
      {
        title: "Réalisation",
        text: "J’ai tourné les vidéos, avant de les monter sur CapCut. Les contenus ont ensuite été programmés via Metricool et adaptés aux différents réseaux sociaux : Instagram, Facebook, LinkedIn, TikTok & YouTube.",
      },
      {
        title: "Déploiement",
        text: "La campagne a été lancée dès le mois de septembre, à l’occasion de la rentrée scolaire, et intégrée à une stratégie de communication plus large comprenant une campagne de lancement d’un Guide des voyages scolaires, ainsi que des publications d’information et d’actualité. Le dispositif est prévu jusqu’au mois de novembre.",
      },
    ],
    figures: [{ value: "14", label: "vidéos réalisées" }],
    shorts: [{ youtubeId: "d1-C1g3Ek0U" }, { youtubeId: "jtmo_AyEM0c" }],
  },
];
