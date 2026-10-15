export type ProjectFigure = {
  value: string;
  label: string;
};

/** Un paragraphe, ou plusieurs. Le texte entre **doubles astérisques** s'affiche en gras. */
export type Paragraphs = string | string[];

export type ProjectRole = {
  title: string;
  text?: Paragraphs;
  /** Liste à puces affichée après le texte. */
  items?: string[];
};

export type ProjectPhoto = {
  src: string;
  alt: string;
  caption: string;
  /** Cadrage de la photo dans sa case (object-position CSS). */
  position?: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Complément de titre (lieu, organisation…). */
  subtitle?: string;
  category: string;
  /** Résumé court, affiché sur les cartes. */
  summary: string;
  /** Projet mené en équipe, ou imaginé à mon initiative. */
  initiative: "collective" | "personal";
  /** Présentation du projet, en paragraphes. */
  context?: string[];
  /** Mon rôle, découpé par grandes missions. */
  roles?: ProjectRole[];
  /** Résultats chiffrés. */
  figures?: ProjectFigure[];
  /** Compétences mobilisées, affichées en étiquettes. */
  skills?: string[];
  /** Photos du projet, dans l'ordre de la mosaïque (la 2e est au format portrait). */
  gallery?: ProjectPhoto[];
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
    title: "Assemblée Générale 2026 en Corse",
    category: "Événementiel · Gestion de projets · Communication",
    initiative: "collective",
    summary:
      "Organisation d’une Assemblée Générale de trois jours en Corse, réunissant les membres et partenaires de L’Office. L’objectif : associer temps institutionnels, découverte du territoire et expériences collectives pour renforcer les liens entre les participants.",
    context: [
      "Organisation d’une Assemblée Générale de trois jours en Corse, réunissant les membres et partenaires de L’Office. L’objectif : associer temps institutionnels, découverte du territoire et expériences collectives pour renforcer les liens entre les participants.",
    ],
    roles: [
      {
        title: "Conception événementielle",
        text: "Participation à la création du programme et organisation d’une soirée des Oscars pour valoriser les organismes labellisés.",
      },
      {
        title: "Animation & cohésion",
        text: "Création d’un challenge en équipes sur trois jours, mêlant quiz sur la Corse et défi photo tout au long du séjour.",
      },
      {
        title: "Communication & création de contenus",
        text: "Réalisation des cartes de bienvenue, supports de présentation, vidéo récapitulative de l’année 2025, étiquettes de bagages et trombinoscope digital.",
      },
      {
        title: "Organisation & coordination",
        text: "Gestion des inscriptions, suivi logistique et coordination des différents temps forts de l’événement.",
      },
    ],
    figures: [
      { value: "3 jours", label: "d’événement" },
      { value: "50", label: "participants" },
      { value: "20", label: "partenaires" },
    ],
    skills: ["Gestion de projets", "Événementiel", "Animation", "Communication", "Création de contenus"],
    gallery: [
      {
        src: "/images/projects/assemblee-generale-2026/oscars-remise-prix.webp",
        alt: "Un participant, micro et statuette dorée en main, rit sur scène devant un écran au thème du cinéma",
        caption: "Soirée des Oscars",
        position: "50% 40%",
      },
      {
        src: "/images/projects/assemblee-generale-2026/carte-bienvenue.webp",
        alt: "Carte « Bienvenue à bord » présentant le programme et le quiz de l’Assemblée Générale",
        caption: "Carte de bienvenue personnalisée",
        position: "50% 65%",
      },
      {
        src: "/images/projects/assemblee-generale-2026/oscars-laureate.webp",
        alt: "Une lauréate souriante tient sa statuette dorée devant l’écran de la soirée",
        caption: "Remise des prix aux organismes",
        position: "50% 30%",
      },
      {
        src: "/images/projects/assemblee-generale-2026/convivialite.webp",
        alt: "Des participants rient et applaudissent autour d’une table de dîner",
        caption: "Moments de convivialité",
      },
      {
        src: "/images/projects/assemblee-generale-2026/animation-musicale.webp",
        alt: "Animation au piano devant le kakémono « Welcome on board – Assemblée Générale 2026 »",
        caption: "Animation musicale",
        position: "50% 35%",
      },
    ],
    image: {
      src: "/images/projects/assemblee-generale-2026.webp",
      alt: "Participants de l’Assemblée Générale 2026 applaudissant lors d’un dîner",
    },
    video: { youtubeId: "Fz8vciLSsBo" },
  },
  {
    slug: "village-sejours-linguistiques",
    title: "Village des séjours linguistiques et éducatifs",
    category: "Événementiel · Scénographie · Communication",
    initiative: "collective",
    summary:
      "Création d’un Village dédié aux séjours linguistiques et éducatifs au sein du Salon Post Bac du Figaro Étudiant. Un nouveau format imaginé pour renforcer la visibilité de L’Office et de ses organismes labellisés auprès d’un public plus large.",
    context: [
      "Création d’un Village dédié aux séjours linguistiques et éducatifs au sein du Salon Post Bac du Figaro Étudiant. Un nouveau format imaginé pour renforcer la visibilité de L’Office et de ses organismes labellisés auprès d’un public plus large.",
    ],
    roles: [
      {
        title: "Conception & scénographie",
        text: "Participation aux choix stratégiques et à la mise en scène d’un espace événementiel de 110 m².",
      },
      {
        title: "Programmation",
        text: "Élaboration et organisation d’ateliers participatifs et d’animations sur les deux jours du salon.",
      },
      {
        title: "Identité visuelle",
        text: "Prise en charge de l’univers graphique et des supports de communication du Village.",
      },
      {
        title: "Coordination & inscriptions",
        text: "Interlocutrice entre Le Figaro Étudiant et les organismes membres, gestion des inscriptions et suivi des besoins.",
      },
      {
        title: "Gestion de prestataire",
        text: "Préparation du brief et coordination du photographe en amont et sur place.",
      },
    ],
    figures: [
      { value: "110 m²", label: "d’espace événementiel" },
      { value: "14", label: "organismes labellisés" },
      { value: "+1 000", label: "visiteurs" },
    ],
    skills: ["Scénographie", "Gestion de projets", "Communication visuelle", "Programmation", "Coordination"],
    image: {
      src: "/images/projects/village-sejours-linguistiques.webp",
      alt: "Entrée de l’Espace Champerret, lieu du salon",
    },
    video: { youtubeId: "tgFNrcRRnoc", credit: "© PicNic Production" },
  },
  {
    slug: "tournee-membres",
    title: "Meet Our Members",
    category: "Gestion de projets · Communication digitale · Audiovisuel",
    initiative: "personal",
    summary:
      "Création d’un concept de rencontres et d’interviews vidéo pour mettre en lumière les organismes membres de L’Office. L’objectif : valoriser leurs activités, renforcer les liens et humaniser la communication sur les réseaux sociaux.",
    context: [
      "Création d’un concept de rencontres et d’interviews vidéo pour mettre en lumière les organismes membres de L’Office. L’objectif : valoriser leurs activités, renforcer les liens et humaniser la communication sur les réseaux sociaux.",
    ],
    roles: [
      {
        title: "Conception",
        text: "Imagination du concept, définition du format et des objectifs de communication.",
      },
      {
        title: "Organisation",
        text: "Prise de contact avec les organismes, planification des déplacements et coordination des rencontres.",
      },
      {
        title: "Production audiovisuelle",
        text: "Préparation des interviews, tournage et réalisation des vidéos.",
      },
      {
        title: "Communication digitale",
        text: "Montage, adaptation des formats et diffusion sur les réseaux sociaux.",
      },
    ],
    figures: [
      { value: "27", label: "organismes rencontrés" },
      { value: "21", label: "vidéos réalisées" },
      { value: "+30 000", label: "vues" },
    ],
    skills: ["Gestion de projets", "Relations partenaires", "Interview", "Création vidéo", "Réseaux sociaux"],
    shorts: [{ youtubeId: "Bbk5Sh3JHY4" }, { youtubeId: "bh07cWYqAVM" }],
  },
  {
    slug: "conseils-de-l-office",
    title: "Conseils de L’Office",
    category: "Communication externe · Marketing digital · Création de contenus",
    initiative: "personal",
    summary:
      "Création d’une série de vidéos courtes pour sensibiliser les jeunes aux séjours à l’étranger et valoriser l’expertise de L’Office à travers des conseils pratiques, accessibles et adaptés aux réseaux sociaux.",
    context: [
      "Création d’une série de vidéos courtes pour sensibiliser les jeunes aux séjours à l’étranger et valoriser l’expertise de L’Office à travers des conseils pratiques, accessibles et adaptés aux réseaux sociaux.",
    ],
    roles: [
      {
        title: "Stratégie éditoriale",
        text: "Conception du format, choix des thématiques et préparation des contenus.",
      },
      {
        title: "Production vidéo",
        text: "Tournage, montage sur CapCut et adaptation aux différentes plateformes.",
      },
      {
        title: "Community management",
        text: "Programmation des publications via Metricool et diffusion sur les réseaux sociaux.",
      },
      {
        title: "Communication 360°",
        text: "Intégration des vidéos aux campagnes de communication et aux temps forts de L’Office.",
      },
    ],
    figures: [
      { value: "14", label: "vidéos réalisées" },
      { value: "5", label: "plateformes de diffusion" },
    ],
    skills: ["Communication digitale", "Stratégie éditoriale", "Montage vidéo", "Réseaux sociaux", "Marketing"],
    shorts: [{ youtubeId: "d1-C1g3Ek0U" }, { youtubeId: "jtmo_AyEM0c" }],
  },
];
