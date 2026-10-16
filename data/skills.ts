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
  skills: string[];
  proofs: SkillProof[];
};

/** Les 4 axes de compétences, reliés aux expériences et aux réalisations qui les illustrent. */
export const skillAxes: SkillAxis[] = [
  {
    id: "axe-evenements",
    number: "01",
    title: "Organiser des événements internes et externes",
    skills: [
      "Organisation d’événements de 60 à 300 personnes",
      "Séminaires, plénières, webinaires, formations, assemblées générales et salons",
      "Recherche et coordination des lieux, traiteurs et prestataires",
      "Animations et temps forts (Halloween, Noël, Octobre rose)",
      "Logistique et gestion des imprévus le jour J",
      "Bilans post-événement",
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
    title: "Communiquer en interne et en externe",
    skills: [
      "Newsletters",
      "Plans de communication et marque employeur",
      "Supports et visuels (écrans, signalétique, programmes)",
      "Intranet\u00a0: contenus et architecture",
      "Réseaux sociaux et vidéo",
      "Utilisation de l’IA pour créer et produire",
    ],
    proofs: [
      {
        type: "parcours",
        slug: "ebp-informatique",
        detail: "plan de communication marque employeur, newsletters, optimisation de l’intranet",
      },
      { type: "realisation", slug: "tournee-membres", detail: "21 vidéos, +30\u00a0000 vues" },
      { type: "realisation", slug: "conseils-de-l-office" },
      { type: "autre", label: "Ce portfolio", detail: "conçu et développé avec Claude Code" },
    ],
  },
  {
    id: "axe-quotidien",
    number: "03",
    title: "Faciliter le quotidien\u00a0: accueil, prestataires et logistique",
    skills: [
      "Accueil et conseil",
      "Ouverture et fermeture d’un lieu",
      "Suivi et relance des fournisseurs et prestataires",
      "Gestion des stocks et des fournitures",
      "Accueil et gestion des appels téléphoniques",
      "Interlocutrice de référence pour les équipes et les partenaires",
    ],
    proofs: [
      {
        type: "parcours",
        slug: "etam",
        detail: "ouverture et fermeture de la boutique, accueil, gestion des stocks (2019 – 2022)",
      },
      {
        type: "parcours",
        slug: "partenaires-fc",
        detail: "commandes, stocks, inventaires, suivi des fournisseurs, accueil téléphonique",
      },
      {
        type: "parcours",
        slug: "ebp-informatique",
        detail: "présentation et visite des bureaux lors des journées d’intégration",
      },
      {
        type: "realisation",
        slug: "village-sejours-linguistiques",
        detail: "coordination du photographe, interface avec Le Figaro Étudiant",
      },
    ],
  },
  {
    id: "axe-collaborateurs",
    number: "04",
    title: "Accueillir et accompagner les collaborateurs",
    skills: [
      "Onboarding des alternants (accueil et suivi)",
      "Animation des journées d’intégration pour l’ensemble des salariés (présentation de l’entreprise, des règles et des avantages, visite des bureaux)",
      "Conception et mise en place du livret d’accueil",
      "Supports pour managers et collaborateurs (guide du manager, charte de télétravail)",
      "Procédures RH simplifiées",
      "Entretiens et orientation de candidats",
    ],
    proofs: [
      {
        type: "parcours",
        slug: "ebp-informatique",
        detail:
          "onboarding des alternants, journées d’intégration, livret d’accueil conçu et mis en place, guide du manager, charte de télétravail, procédures RH simplifiées",
      },
      {
        type: "parcours",
        slug: "impact-sales-marketing",
        detail: "entretiens avec des candidats, partenariats avec des écoles",
      },
      {
        type: "parcours",
        slug: "office-sejours-linguistiques",
        label: "L’Office",
        detail: "accompagnement des membres et communication interne",
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
