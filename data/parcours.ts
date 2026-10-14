export type ParcoursStep = {
  title: string;
  kind: "Formation" | "Alternance" | "Stage" | "International";
  /** Entreprise ou établissement. */
  organisation?: string;
  place?: string;
  period?: string;
  detail?: string;
};

/** Parcours, du plus ancien au plus récent. */
export const parcours: ParcoursStep[] = [
  { title: "Baccalauréat", kind: "Formation" },
  {
    title: "Bachelor Marketing & Business Performance Management",
    kind: "Formation",
    organisation: "IDRAC Business School & SKALE",
    period: "2020 – 2023",
    detail: "Communication, gestion d’entreprise, gestion budgétaire, analyse de la performance et prise de décision stratégique. Dont un an d’études en Irlande et en Espagne.",
  },
  {
    title: "Assistante gestion de projets",
    kind: "Stage",
    organisation: "Impact Sales & Marketing",
    place: "Levallois-Perret",
    period: "Avril – août 2022",
    detail: "Gestion des comptes Instagram et LinkedIn à destination des jeunes publics, partenariats avec des écoles et entretiens avec des candidats.",
  },
  {
    title: "Assistante événementiel & communication interne",
    kind: "Alternance",
    organisation: "EBP Informatique",
    place: "Rambouillet",
    period: "2022 – 2023",
    detail: "Événements internes de 60 à 300 participants, animations mensuelles, plan de communication marque employeur et optimisation de l’intranet.",
  },
  { title: "Un an en Australie", kind: "International" },
  {
    title: "Master Management du Tourisme et de l’Événementiel",
    kind: "Formation",
    organisation: "Excelia — Paris",
    period: "2024 – 2026",
    detail: "Reprise des études. Projets de conception d’événements : benchmark, programmation, communication 360°, budget et recherche de financements, sponsoring, suivi des KPI et RSE.",
  },
  {
    title: "Chargée d’événementiel & de communication",
    kind: "Alternance",
    organisation: "Office national de garantie des séjours linguistiques et éducatifs",
    place: "Paris",
    period: "2024 – 2026",
    detail: "Stratégie et plans de communication, contenus pour les réseaux sociaux, refonte du site web, et organisation d’événements de A à Z : assemblées générales, Village des séjours linguistiques, tournée « Meet Our Members », webinaires.",
  },
];
