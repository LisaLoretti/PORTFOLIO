export type ParcoursStep = {
  title: string;
  kind: "Formation" | "Expérience" | "International";
  /** Période (ex. « 2021 – 2023 ») — à compléter. */
  period?: string;
  detail?: string;
};

/** Parcours, du plus ancien au plus récent. */
export const parcours: ParcoursStep[] = [
  { title: "Baccalauréat", kind: "Formation" },
  { title: "Bachelor en marketing et business", kind: "Formation" },
  { title: "Alternance chez EBP Informatique", kind: "Expérience" },
  { title: "Un an en Australie", kind: "International" },
  {
    title: "Master Management du Tourisme et de l’Événementiel",
    kind: "Formation",
    detail: "Reprise des études — 2 ans.",
  },
  {
    title: "Alternance à l’Office national de garantie des séjours linguistiques et éducatifs",
    kind: "Expérience",
  },
];
