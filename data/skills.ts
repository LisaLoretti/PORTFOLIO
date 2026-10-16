import { parcours } from "./parcours";
import { projects } from "./projects";

/** Preuve d'une compétence : une expérience (page Parcours) ou un projet (page Réalisations). */
export type SkillProof = {
  /** « parcours » renvoie vers /parcours#slug, « realisation » vers /realisations#slug. */
  type: "parcours" | "realisation";
  /** Slug existant dans data/parcours.ts ou data/projects.ts. */
  slug: string;
  /** Nom affiché (par défaut : titre du projet, ou structure de l'expérience). */
  label?: string;
  /** Précision affichée après le nom. */
  detail?: string;
};

export type SkillAxis = {
  /** Ancre de l'axe sur l'accueil (/#id). */
  id: string;
  number: string;
  title: string;
  skills: string[];
  proofs: SkillProof[];
};

/** Les 4 axes de compétences, reliés aux expériences et aux réalisations qui les illustrent. */
export const skillAxes: SkillAxis[] = [
  {
    id: "axe-evenements",
    number: "01",
    title: "Concevoir et organiser des événements",
    skills: [
      "Conception de l’expérience participants",
      "Programmation",
      "Scénographie",
      "Budget",
      "Logistique",
      "Coordination des prestataires",
      "Bilans qualitatifs et quantitatifs",
    ],
    proofs: [
      { type: "realisation", slug: "assemblee-generale-2026" },
      { type: "realisation", slug: "village-sejours-linguistiques" },
      { type: "parcours", slug: "ebp-informatique", detail: "événements internes de 60 à 300 participants" },
    ],
  },
  {
    id: "axe-communication",
    number: "02",
    title: "Communiquer et créer des contenus",
    skills: [
      "Plans de communication",
      "Calendriers éditoriaux",
      "Réseaux sociaux",
      "Création et montage vidéo",
      "Newsletters",
      "Communiqués",
      "Refonte de site web",
    ],
    proofs: [
      { type: "realisation", slug: "tournee-membres" },
      { type: "realisation", slug: "conseils-de-l-office" },
      { type: "parcours", slug: "ebp-informatique", detail: "plan de communication marque employeur" },
      { type: "parcours", slug: "office-sejours-linguistiques", label: "L’Office", detail: "stratégie et contenus" },
    ],
  },
  {
    id: "axe-pilotage",
    number: "03",
    title: "Piloter et coordonner des projets",
    skills: [
      "Planification",
      "Suivi des inscriptions et de la logistique",
      "Coordination de nombreuses parties prenantes",
      "Gestion des imprévus",
      "Esprit d’initiative",
    ],
    proofs: [
      { type: "realisation", slug: "tournee-membres", detail: "projet à mon initiative" },
      { type: "realisation", slug: "conseils-de-l-office", detail: "projet à mon initiative" },
      { type: "realisation", slug: "assemblee-generale-2026" },
      { type: "realisation", slug: "village-sejours-linguistiques" },
    ],
  },
  {
    id: "axe-partenaires",
    number: "04",
    title: "Fédérer partenaires et membres",
    skills: [
      "Relation avec les organismes membres",
      "Interface avec les partenaires",
      "Représentation sur salons et forums",
      "Mise en relation",
    ],
    proofs: [
      {
        type: "realisation",
        slug: "village-sejours-linguistiques",
        detail: "interlocutrice entre Le Figaro Étudiant et les organismes membres",
      },
      { type: "realisation", slug: "tournee-membres" },
      { type: "parcours", slug: "office-sejours-linguistiques", label: "L’Office", detail: "représentation, ambassades" },
      { type: "parcours", slug: "impact-sales-marketing", detail: "partenariats écoles" },
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

/** Preuve prête à afficher : nom, lien et type de page. */
export function resolveProof(proof: SkillProof) {
  if (proof.type === "realisation") {
    const project = findProject(proof.slug);
    return { ...proof, label: proof.label ?? project.title, href: `/realisations#${proof.slug}`, page: "Réalisations" };
  }
  const step = findStep(proof.slug);
  return { ...proof, label: proof.label ?? step.organisation ?? step.title, href: `/parcours#${proof.slug}`, page: "Parcours" };
}

/** Axes illustrés par une expérience ou un projet donné. */
export function axesFor(type: SkillProof["type"], slug: string) {
  return skillAxes.filter((axis) => axis.proofs.some((proof) => proof.type === type && proof.slug === slug));
}

// Vérifie au chargement (donc au build) que toutes les preuves pointent vers un contenu existant.
skillAxes.forEach((axis) => axis.proofs.forEach(resolveProof));
