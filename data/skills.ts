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
      /** Image à la place du visuel par défaut (photo du projet ou logo de la structure). */
      image?: { src: string; alt: string };
    }
  | { type: "autre"; label: string; detail?: string; image?: { src: string; alt: string } };

/** Visuel d'une preuve : photo, logo, illustration de téléphones, ou aucun. */
export type ProofVisual =
  | { kind: "photo"; src: string; alt: string; position?: string }
  | { kind: "logo"; src: string; alt: string }
  | { kind: "phones" }
  | { kind: "none" };

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type SkillAxis = {
  /** Ancre de l'axe sur l'accueil (/#id). */
  id: string;
  number: string;
  title: string;
  /** Sous-catégories de compétences. */
  groups: SkillGroup[];
  /** Intitulé de la liste des preuves (par défaut « Quelques réalisations »). */
  proofsTitle?: string;
  /** Expériences et réalisations qui illustrent l'axe (facultatif). */
  proofs: SkillProof[];
};

/** Les domaines de compétences : sous-catégories, et preuves reliées au parcours et aux réalisations. */
export const skillAxes: SkillAxis[] = [
  {
    id: "axe-evenements",
    number: "01",
    title: "Organiser des événements internes et externes",
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
    proofsTitle: "Quelques réalisations",
    proofs: [
      {
        type: "parcours",
        slug: "ebp-informatique",
        label: "Organisation d’une plénière de 300 personnes",
        detail: "Organisation et coordination d’un événement interne réunissant 300 collaborateurs.",
      },
      {
        type: "parcours",
        slug: "ebp-informatique",
        label: "Organisation d’un séminaire managers",
        detail: "Conception et coordination d’un séminaire dédié aux managers et aux échanges professionnels.",
      },
      {
        type: "parcours",
        slug: "ebp-informatique",
        label: "Octobre Rose — Sensibilisation en entreprise",
        detail: "Mise en place d’une action de prévention avec distribution d’un kit à toutes les collaboratrices de l’entreprise.",
      },
      {
        type: "parcours",
        slug: "ebp-informatique",
        label: "Noël — Calendrier de l’Avent géant",
        detail: "Création d’un calendrier de l’Avent géant pour animer la vie interne de l’entreprise.",
      },
      {
        type: "realisation",
        slug: "village-sejours-linguistiques",
        label: "Village des séjours linguistiques — Salon Figaro Étudiant",
        detail: "Création d’un espace dédié aux organismes de séjours linguistiques au sein du salon.",
      },
      {
        type: "realisation",
        slug: "assemblee-generale-2026",
        label: "Assemblées générales — Rouen et Corse",
        detail: "Organisation et coordination de deux assemblées générales.",
      },
    ],
  },
  {
    id: "axe-communication",
    number: "02",
    title: "Concevoir et déployer des actions de communication et marketing",
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
        title: "Stratégie marketing",
        skills: [
          "Analyse des marchés et des tendances",
          "Identification des cibles et personas",
          "Élaboration de plans d’actions marketing",
          "Positionnement et valorisation des offres",
          "Création de campagnes d’email marketing",
          "Recherche et développement de partenariats",
          "Définition et suivi des indicateurs de performance (KPI)",
        ],
      },
    ],
    proofsTitle: "Mes réalisations",
    proofs: [
      {
        type: "parcours",
        slug: "ebp-informatique",
        label: "Création du Guide du bon manager",
        detail: "Conception d’un guide regroupant des conseils et bonnes pratiques destinés aux managers.",
      },
      {
        type: "realisation",
        slug: "conseils-de-l-office",
        label: "Série de vidéos-conseils",
        detail: "Création de contenus vidéo pédagogiques pour transmettre des conseils pratiques.",
      },
      {
        type: "parcours",
        slug: "ebp-informatique",
        label: "Refonte d’un intranet d’entreprise",
        detail: "Refonte d’un espace digital interne pour faciliter l’accès à l’information.",
      },
      {
        type: "parcours",
        slug: "office-sejours-linguistiques",
        label: "Refonte d’un site internet",
        detail: "Participation à la modernisation d’un site internet et de ses contenus.",
      },
      {
        type: "realisation",
        slug: "tournee-membres",
        label: "Meet Our Members",
        detail: "Création d’une série de portraits pour valoriser les membres d’une organisation.",
      },
    ],
  },
  {
    id: "axe-pilotage",
    number: "03",
    title: "Piloter et coordonner des projets",
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
  const override: ProofVisual | undefined = proof.image ? { kind: "photo", ...proof.image } : undefined;
  if (proof.type === "autre") {
    return {
      ...proof,
      key: `autre-${proof.label}`,
      href: undefined,
      page: undefined,
      visual: override ?? ({ kind: "none" } as ProofVisual),
    };
  }
  if (proof.type === "realisation") {
    const project = findProject(proof.slug);
    // Visuel par défaut : première photo du projet, sinon illustration pour les vidéos verticales
    const photo = project.gallery?.[0] ?? project.image;
    const visual: ProofVisual =
      override ??
      (project.gallery?.[0]
        ? { kind: "photo", src: project.gallery[0].src, alt: project.gallery[0].alt, position: project.gallery[0].position }
        : project.shorts?.length
          ? { kind: "phones" }
          : photo
            ? { kind: "photo", src: photo.src, alt: photo.alt }
            : { kind: "none" });
    return {
      ...proof,
      key: `realisation-${proof.slug}-${proof.label ?? ""}`,
      label: proof.label ?? project.title,
      href: `/realisations#${proof.slug}`,
      page: "Réalisations",
      visual,
    };
  }
  const step = findStep(proof.slug);
  const logo = step.logos?.[0];
  return {
    ...proof,
    key: `parcours-${proof.slug}-${proof.label ?? ""}`,
    label: proof.label ?? step.organisation ?? step.title,
    href: `/parcours#${proof.slug}`,
    page: "Parcours",
    visual: override ?? (logo ? ({ kind: "logo", src: logo.src, alt: logo.alt } as ProofVisual) : ({ kind: "none" } as ProofVisual)),
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
