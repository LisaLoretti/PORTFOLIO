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

export type SkillAxis = {
  /** Ancre de l'axe sur l'accueil (/#id). */
  id: string;
  number: string;
  title: string;
  /** Compétences clés du domaine. */
  skills: string[];
  /** Expériences et réalisations qui illustrent l'axe (facultatif). */
  proofs: SkillProof[];
};

/** Les domaines de compétences : compétences clés, et preuves reliées au parcours et aux réalisations. */
export const skillAxes: SkillAxis[] = [
  {
    id: "axe-evenements",
    number: "01",
    title: "Organiser des événements internes et externes",
    skills: [
      "Organisation de séminaires, plénières, assemblées générales et salons",
      "Recherche de lieux et coordination des traiteurs et prestataires",
      "Élaboration des programmes, rétroplannings et gestion des inscriptions",
      "Supervision du jour J et gestion des imprévus",
      "Bilans post-événement",
    ],
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
        label: "Village des séjours linguistiques et éducatifs — Salon Post Bac du Figaro Étudiant",
        detail: "Création d’un espace dédié aux organismes de séjours linguistiques au sein du salon, qui a accueilli plus de 1 000 visiteurs.",
      },
      {
        type: "realisation",
        slug: "assemblee-generale-2026",
        label: "Assemblées générales — Rouen et Corse",
        detail: "Organisation et coordination de deux assemblées générales de 3 jours (40 et 50 participants).",
      },
    ],
  },
  {
    id: "axe-communication",
    number: "02",
    title: "Concevoir et déployer des actions de communication et marketing",
    skills: [
      "Élaboration de plans de communication et calendriers éditoriaux",
      "Animation des réseaux sociaux et création de contenus vidéo",
      "Conception de supports print et digitaux",
      "Newsletters, e-mailings et communication interne",
      "Suivi des indicateurs de performance (KPI)",
    ],
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
        slug: "freelance-site-web",
        label: "Refonte d’un site internet",
        detail: "Pilotage de la refonte d’un site internet : maquette, direction artistique, contenus et parcours utilisateur.",
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
    skills: [
      "Analyse des besoins et rédaction de cahiers des charges",
      "Coordination d’équipes, de prestataires et de partenaires",
      "Suivi des budgets, des délais et des priorités",
      "Reportings, bilans et amélioration continue",
    ],
    proofs: [
      {
        type: "parcours",
        slug: "freelance-site-web",
        label: "Pilotage de la refonte d’un site internet",
        detail:
          "Responsabilité du projet de refonte d’un site internet, du cadrage initial à sa mise en œuvre. Définition des besoins, coordination des intervenants, organisation des contenus et suivi des évolutions pour moderniser l’interface, améliorer l’ergonomie et renforcer la visibilité de l’organisation.",
      },
      {
        type: "realisation",
        slug: "village-sejours-linguistiques",
        label: "Création du Village des séjours linguistiques et éducatifs — Salon Post Bac du Figaro Étudiant",
        detail:
          "Conception et pilotage d’un espace thématique dédié aux séjours linguistiques au sein du Salon Post Bac du Figaro Étudiant. Coordination des organismes participants, identification de leurs besoins et organisation des différentes étapes du projet, de sa préparation à sa réalisation.",
      },
    ],
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

/** Preuve prête à afficher : nom, lien et page de destination (sans lien pour « autre »). */
export function resolveProof(proof: SkillProof) {
  if (proof.type === "autre") return { ...proof, key: `autre-${proof.label}`, href: undefined, page: undefined };
  if (proof.type === "realisation") {
    const project = findProject(proof.slug);
    return {
      ...proof,
      key: `realisation-${proof.slug}-${proof.label ?? ""}`,
      label: proof.label ?? project.title,
      href: `/realisations#${proof.slug}`,
      page: "Réalisations",
    };
  }
  const step = findStep(proof.slug);
  return {
    ...proof,
    key: `parcours-${proof.slug}-${proof.label ?? ""}`,
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
