export type ProjectFigure = {
  value: string;
  label: string;
};

/** Un paragraphe, ou plusieurs. */
export type Paragraphs = string | string[];

export type ProjectRole = {
  title: string;
  /** Sans texte, les rôles s'affichent en étiquettes. */
  text?: Paragraphs;
  /** Liste à puces affichée après le texte. */
  items?: string[];
};

/** Paragraphe simple, ou paragraphe(s) précédé(s) d'un intertitre. */
export type ProjectContext = string | { title: string; text: Paragraphs };

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
  /** Titre de la partie rôle (par défaut « Mon rôle »). */
  rolesTitle?: string;
  /** Chiffres clés. */
  figures?: ProjectFigure[];
  /** Titre du panneau de chiffres (par défaut « Les résultats »). */
  figuresTitle?: string;
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
    subtitle: "L’Office national de garantie des séjours linguistiques et éducatifs",
    category: "Événementiel · Gestion de projets · Communication · Expérience participant",
    summary:
      "Pour l’édition 2026 de son Assemblée Générale, L’Office a réuni ses membres et partenaires pendant trois jours en Corse.",
    context: [
      {
        title: "Le projet",
        text: [
          "Pour l’édition 2026 de son Assemblée Générale, L’Office a réuni ses membres et partenaires pendant trois jours en Corse.",
          "Au-delà des temps institutionnels, notre ambition était de proposer une expérience fédératrice, mêlant échanges professionnels, découverte du territoire et moments de convivialité.",
          "J’ai participé à la conception et à l’organisation de cet événement, en travaillant notamment sur l’animation du programme, l’expérience des participants et la création des supports de communication.",
        ],
      },
    ],
    rolesTitle: "Mes actions concrètes",
    roles: [
      {
        title: "Organisation d’une soirée des Oscars",
        text: [
          "Conception et organisation d’une soirée de remise de prix sur le thème des Oscars, destinée à mettre à l’honneur les organismes labellisés de L’Office.",
          "L’objectif : valoriser les membres, célébrer leurs engagements et créer un moment de partage convivial dans une ambiance festive.",
        ],
      },
      {
        title: "Création d’un challenge collectif sur trois jours",
        text: [
          "Imagination d’un fil rouge ludique pour encourager les échanges et renforcer la cohésion entre les participants, répartis en équipes.",
          "Le challenge comprenait deux temps forts :",
        ],
        items: [
          "Un quiz d’introduction à la Corse dès l’arrivée, pour découvrir le territoire de manière interactive.",
          "Un challenge photo en équipe tout au long du séjour, pour favoriser les échanges, la créativité et les souvenirs partagés.",
        ],
      },
      {
        title: "Création des supports de communication",
        text: "Conception de supports print et digitaux pour accompagner les participants et assurer une communication cohérente tout au long de l’événement :",
        items: [
          "Cartes de bienvenue personnalisées.",
          "Supports de présentation pour les différents temps forts.",
          "Vidéo récapitulative des moments marquants de l’année 2025.",
          "Étiquettes de bagages pour les participants.",
          "Trombinoscope digital pour faciliter l’identification des participants et les échanges.",
        ],
      },
      {
        title: "Coordination & organisation opérationnelle",
        text: "Participation à la préparation et au bon déroulement de l’événement : gestion des participants, coordination des différents temps du programme, suivi des besoins logistiques et accompagnement sur place.",
      },
    ],
    figures: [
      { value: "3 jours", label: "d’événement" },
      { value: "50", label: "participants" },
      { value: "20", label: "partenaires" },
    ],
    figuresTitle: "Les chiffres clés",
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
    title: "Série de vidéos\u00a0: Conseils de L’Office",
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
