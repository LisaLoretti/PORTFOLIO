import { parcours } from "./parcours";
import { projects } from "./projects";

/**
 * Preuve d'une compétence : une expérience (page Parcours), un projet (page
 * Réalisations) ou une autre réalisation sans page dédiée (affichée sans lien).
 */
export type SkillProof =
  | {
      /** « parcours » renvoie vers /parcours#slug, « realisation » vers /realisations#slug. */
      type: "parcours" | "realisation";
      /** Slug existant dans data/parcours.ts ou data/projects.ts. */
      slug: string;
      /** Nom affiché (par défaut : titre du projet, ou structure de l'expérience). */
      label?: string;
      /** Précision affichée après le nom. */
      detail?: string;
    }
  | { type: "autre"; label: string; detail?: string };

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type SkillAxis = {
  /** Ancre de l'axe sur l'accueil (/#id). */
  id: string;
  number: string;
  title: string;
  /** Court texte d'introduction. */
  intro: string;
  /** Sous-catégories de compétences. */
  groups: SkillGroup[];
  /** Expériences et réalisations qui illustrent l'axe (facultatif). */
  proofs: SkillProof[];
};

/** Les 4 domaines de compétences : sous-catégories, et preuves reliées au parcours et aux réalisations. */
export const skillAxes: SkillAxis[] = [
  {
    id: "axe-evenements",
    number: "01",
    title: "Organiser des événements internes et externes",
    intro:
      "De la conception à la réalisation, j’organise et coordonne des événements réunissant de 60 à 300 participants, en veillant à leur bon déroulement et à l’expérience des participants.",
    groups: [
      {
        title: "Conception et planification",
        skills: [
          "Organisation de séminaires, plénières et assemblées générales",
          "Organisation de salons, webinaires et formations",
          "Élaboration des programmes et rétroplannings",
          "Planification et coordination des différentes étapes",
        ],
      },
      {
        title: "Coordination et logistique",
        skills: [
          "Recherche et sélection de lieux",
          "Recherche et coordination des traiteurs et prestataires",
          "Gestion des inscriptions et des participants",
          "Organisation logistique et suivi opérationnel",
          "Coordination des intervenants et partenaires",
        ],
      },
      {
        title: "Animation et expérience participant",
        skills: [
          "Conception et coordination d’animations",
          "Organisation de temps forts : Halloween, Noël, Octobre rose",
          "Création de moments fédérateurs",
          "Accueil et accompagnement des participants",
        ],
      },
      {
        title: "Pilotage et bilan",
        skills: [
          "Supervision du déroulement le jour J",
          "Gestion des imprévus et adaptation en temps réel",
          "Coordination des équipes et prestataires sur place",
          "Réalisation des bilans post-événement",
        ],
      },
    ],
    proofs: [
      {
        type: "parcours",
        slug: "ebp-informatique",
        detail: "journées d’intégration, séminaires, plénières, animations mensuelles",
      },
      {
        type: "realisation",
        slug: "assemblee-generale-2026",
        detail: "inscriptions, logistique, coordination des temps forts",
      },
      {
        type: "realisation",
        slug: "village-sejours-linguistiques",
        detail: "coordination et suivi des besoins des organismes",
      },
    ],
  },
  {
    id: "axe-communication",
    number: "02",
    title: "Concevoir et déployer des actions de communication",
    intro:
      "De la stratégie à la création de contenus, je contribue à développer la visibilité des projets, à renforcer l’image de marque et à transmettre des messages adaptés à chaque public.",
    groups: [
      {
        title: "Stratégie et planification",
        skills: [
          "Élaboration de plans de communication",
          "Identification des cibles et messages clés",
          "Création de calendriers éditoriaux",
          "Déploiement de campagnes de communication",
          "Veille concurrentielle et sectorielle",
          "Analyse des résultats des actions de communication",
        ],
      },
      {
        title: "Communication digitale",
        skills: [
          "Animation et gestion des réseaux sociaux",
          "Community management",
          "Création et programmation de publications",
          "Rédaction et mise à jour de contenus web",
          "Conception de newsletters et emailings",
          "Suivi des statistiques et de l’engagement",
        ],
      },
      {
        title: "Création graphique et éditoriale",
        skills: [
          "Conception de supports print et digitaux",
          "Création d’affiches, flyers et brochures",
          "Création de visuels pour les réseaux sociaux",
          "Rédaction de contenus éditoriaux",
          "Déclinaison de chartes graphiques",
          "Création de présentations professionnelles",
          "Réalisation et montage de contenus vidéo",
        ],
      },
      {
        title: "Communication interne",
        skills: [
          "Rédaction de communications internes",
          "Création de newsletters collaborateurs",
          "Valorisation des projets et réussites internes",
          "Communication autour des événements d’entreprise",
          "Création de supports d’information",
          "Animation des canaux de communication interne",
        ],
      },
      {
        title: "Communication externe",
        skills: [
          "Développement de la visibilité et de la notoriété",
          "Valorisation de l’image de marque",
          "Création de supports de communication externe",
          "Communication auprès des partenaires et publics cibles",
          "Déploiement de campagnes de sensibilisation",
          "Communication et promotion événementielle",
        ],
      },
      {
        title: "Gestion de projets de communication",
        skills: [
          "Coordination des actions de communication",
          "Gestion des plannings et des priorités",
          "Coordination des équipes et prestataires",
          "Suivi de production des supports",
          "Analyse des performances et bilans",
        ],
      },
    ],
    proofs: [
      {
        type: "parcours",
        slug: "ebp-informatique",
        detail: "plan de communication marque employeur, newsletters, optimisation de l’intranet",
      },
      { type: "realisation", slug: "tournee-membres", detail: "21 vidéos, +30\u00a0000 vues" },
      { type: "realisation", slug: "conseils-de-l-office", detail: "14 vidéos sur les bénéfices et bienfaits des séjours" },
      { type: "autre", label: "Ce portfolio", detail: "conçu et développé avec Claude Code" },
    ],
  },
  {
    id: "axe-marketing",
    number: "03",
    title: "Concevoir et déployer des actions marketing",
    intro:
      "De l’analyse des besoins à la mise en œuvre d’actions opérationnelles, je participe à la valorisation des offres, au développement de la notoriété et à l’engagement des publics.",
    groups: [
      {
        title: "Stratégie et analyse marketing",
        skills: [
          "Analyse des marchés et des tendances",
          "Veille concurrentielle et sectorielle",
          "Identification des cibles et personas",
          "Analyse des besoins et comportements clients",
          "Élaboration de plans d’actions marketing",
          "Positionnement et valorisation des offres",
        ],
      },
      {
        title: "Marketing opérationnel",
        skills: [
          "Déploiement d’actions marketing",
          "Organisation d’opérations promotionnelles",
          "Création de supports marketing et commerciaux",
          "Coordination des campagnes multicanales",
          "Mise en avant de produits et services",
          "Coordination des prestataires et partenaires",
        ],
      },
      {
        title: "Marketing digital",
        skills: [
          "Déploiement de campagnes digitales",
          "Création de campagnes d’email marketing",
          "Marketing sur les réseaux sociaux",
          "Création de contenus promotionnels",
          "Optimisation des contenus web (SEO)",
          "Suivi des performances digitales",
        ],
      },
      {
        title: "Marketing relationnel et fidélisation",
        skills: [
          "Gestion de la relation client",
          "Segmentation des bases de contacts",
          "Création d’actions de fidélisation",
          "Personnalisation des communications",
          "Conception de parcours clients",
          "Réalisation d’enquêtes de satisfaction",
        ],
      },
      {
        title: "Marketing événementiel et partenariats",
        skills: [
          "Organisation d’opérations marketing événementielles",
          "Participation aux lancements de produits et services",
          "Valorisation des marques lors de salons",
          "Recherche et développement de partenariats",
          "Coordination des actions promotionnelles",
          "Création d’expériences de marque",
        ],
      },
      {
        title: "Analyse et suivi des performances",
        skills: [
          "Définition et suivi des indicateurs de performance (KPI)",
          "Analyse des résultats des campagnes",
          "Suivi des taux d’ouverture et de clics",
          "Mesure de l’engagement des publics",
          "Réalisation de bilans et reportings",
          "Identification des axes d’amélioration",
        ],
      },
    ],
    proofs: [],
  },
  {
    id: "axe-pilotage",
    number: "04",
    title: "Piloter et coordonner des projets",
    intro:
      "De la définition des objectifs à la réalisation opérationnelle, je pilote et coordonne des projets transversaux en veillant au respect des délais, des ressources et des objectifs fixés.",
    groups: [
      {
        title: "Conception et cadrage de projets",
        skills: [
          "Analyse des besoins et définition des objectifs",
          "Élaboration de cahiers des charges",
          "Identification des parties prenantes",
          "Définition des livrables et des échéances",
          "Évaluation des ressources nécessaires",
          "Identification des contraintes et des risques",
        ],
      },
      {
        title: "Planification et organisation",
        skills: [
          "Élaboration de plannings et rétroplannings",
          "Définition des étapes et priorités",
          "Répartition et coordination des missions",
          "Gestion des ressources humaines et matérielles",
          "Anticipation des besoins et contraintes",
          "Gestion simultanée de plusieurs projets",
        ],
      },
      {
        title: "Coordination et management transversal",
        skills: [
          "Coordination d’équipes pluridisciplinaires",
          "Collaboration entre différents services",
          "Animation de réunions et points d’avancement",
          "Communication avec les parties prenantes",
          "Coordination des prestataires et partenaires",
          "Mobilisation des acteurs autour d’objectifs communs",
        ],
      },
      {
        title: "Pilotage opérationnel",
        skills: [
          "Suivi de l’avancement des projets",
          "Gestion des délais et des priorités",
          "Suivi des budgets et des ressources",
          "Contrôle de la qualité des livrables",
          "Gestion des imprévus et résolution des problèmes",
          "Ajustement des actions selon les besoins",
        ],
      },
      {
        title: "Suivi et évaluation des performances",
        skills: [
          "Définition et suivi des indicateurs de performance (KPI)",
          "Création de tableaux de bord",
          "Analyse des résultats et des écarts",
          "Réalisation de reportings et bilans",
          "Recueil des retours des parties prenantes",
          "Identification des axes d’amélioration",
        ],
      },
      {
        title: "Optimisation et amélioration continue",
        skills: [
          "Analyse des processus existants",
          "Identification des leviers d’optimisation",
          "Mise en place d’actions correctives",
          "Formalisation de procédures et bonnes pratiques",
          "Capitalisation sur les retours d’expérience",
          "Optimisation des méthodes de travail",
        ],
      },
    ],
    proofs: [],
  },
];

function findProject(slug: string) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Compétences : projet « ${slug} » introuvable dans data/projects.ts`);
  return project;
}

function findStep(slug: string) {
  const step = parcours.find((item) => item.slug === slug);
  if (!step) throw new Error(`Compétences : étape « ${slug} » introuvable dans data/parcours.ts`);
  return step;
}

/** Preuve prête à afficher : nom, lien et type de page (sans lien pour « autre »). */
export function resolveProof(proof: SkillProof) {
  if (proof.type === "autre") return { ...proof, key: `autre-${proof.label}`, href: undefined, page: undefined };
  if (proof.type === "realisation") {
    const project = findProject(proof.slug);
    return {
      ...proof,
      key: `realisation-${proof.slug}`,
      label: proof.label ?? project.title,
      href: `/realisations#${proof.slug}`,
      page: "Réalisations",
    };
  }
  const step = findStep(proof.slug);
  return {
    ...proof,
    key: `parcours-${proof.slug}`,
    label: proof.label ?? step.organisation ?? step.title,
    href: `/parcours#${proof.slug}`,
    page: "Parcours",
  };
}

/** Axes illustrés par une expérience ou un projet donné. */
export function axesFor(type: "parcours" | "realisation", slug: string) {
  return skillAxes.filter((axis) =>
    axis.proofs.some((proof) => proof.type === type && "slug" in proof && proof.slug === slug),
  );
}

// Vérifie au chargement (donc au build) que toutes les preuves pointent vers un contenu existant.
skillAxes.forEach((axis) => axis.proofs.forEach(resolveProof));
