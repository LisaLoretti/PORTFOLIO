import type { ParcoursStep } from "@/data/parcours";
import { ParcoursIcon } from "./ParcoursIcon";

const labels: Record<ParcoursStep["kind"], [singular: string, plural: string]> = {
  Formation: ["formation", "formations"],
  Alternance: ["alternance", "alternances"],
  Stage: ["stage", "stages"],
  Freelance: ["activité freelance", "activités freelance"],
  International: ["expérience à l’étranger", "expériences à l’étranger"],
};

/** Résumé chiffré du parcours par type d'étape, calculé depuis les données. */
export function ParcoursSummary({ steps }: { steps: ParcoursStep[] }) {
  const counts = steps.reduce<Partial<Record<ParcoursStep["kind"], number>>>((acc, step) => {
    acc[step.kind] = (acc[step.kind] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <ul className="reveal-pop-children grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-1">
      {(Object.keys(labels) as ParcoursStep["kind"][])
        .filter((kind) => counts[kind])
        .map((kind) => {
          const count = counts[kind] ?? 0;
          return (
            <li key={kind} className="flex items-center gap-4">
              <ParcoursIcon kind={kind} className="size-12 border border-line-strong" />
              <p className="flex flex-col">
                <span className="font-display text-title font-extrabold text-heading">{count}</span>
                <span className="text-small text-ink-muted">{labels[kind][count > 1 ? 1 : 0]}</span>
              </p>
            </li>
          );
        })}
    </ul>
  );
}
