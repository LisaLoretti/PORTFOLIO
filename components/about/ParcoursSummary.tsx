import type { ParcoursStep } from "@/data/parcours";
import { cn } from "@/lib/cn";
import { ParcoursGlyph, kindTheme, type ParcoursKind } from "./ParcoursIcon";

type Tile = {
  kind: ParcoursKind;
  label: [singular: string, plural: string];
  /** Emplacement dans la grille bento (2 colonnes). */
  layout: string;
  /** Illustration décorative des tuiles larges. */
  art?: "sparkle" | "flight";
};

// Ordre et disposition des tuiles du résumé
const tiles: Tile[] = [
  { kind: "Formation", label: ["formation", "formations"], layout: "" },
  { kind: "Alternance", label: ["alternance", "alternances"], layout: "" },
  { kind: "Stage", label: ["stage", "stages"], layout: "" },
  { kind: "Job étudiant", label: ["job étudiant", "jobs étudiants"], layout: "" },
  { kind: "Freelance", label: ["activité freelance", "activités freelance"], layout: "", art: "sparkle" },
  { kind: "International", label: ["an à l’étranger", "expériences à l’étranger"], layout: "col-span-2", art: "flight" },
];

/** Trajet d'avion en pointillés, décoratif. */
function FlightArt() {
  return (
    <svg aria-hidden="true" viewBox="0 0 140 60" fill="none" className="h-14 w-32 text-olive">
      <path
        d="M4 52C30 50 38 20 66 22s30 26 54-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 7"
      />
      <circle cx="4" cy="52" r="4" fill="currentColor" />
      <g className="text-forest transition-transform duration-(--duration-slow) ease-smooth group-hover:translate-x-1 group-hover:-translate-y-1">
        <path fill="currentColor" d="m136 6-22 9 8 2.7 2.8 8.3L136 6Z" />
      </g>
    </svg>
  );
}

/** Grande étincelle en rotation lente, décorative. */
function SparkleArt() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="absolute -top-3 -right-3 size-16 text-sage/80 motion-safe:animate-[spin_12s_linear_infinite]"
    >
      <path
        fill="currentColor"
        d="M12 1.5c.9 6 3.5 8.6 9.5 9.5-6 .9-8.6 3.5-9.5 9.5-.9-6-3.5-8.6-9.5-9.5 6-.9 8.6-3.5 9.5-9.5Z"
      />
    </svg>
  );
}

/** Résumé du parcours en tuiles colorées, chiffres calculés depuis les données. */
export function ParcoursSummary({ steps }: { steps: ParcoursStep[] }) {
  const count = (kind: ParcoursKind) => steps.filter((step) => step.kind === kind).length;
  const visible = tiles.filter((tile) => count(tile.kind) > 0);
  const smallTiles = visible.filter((tile) => tile.art !== "flight");

  return (
    <ul className="reveal-pop-children grid grid-cols-2 gap-3">
      {visible.map((tile) => {
        const value = count(tile.kind);
        const wide = tile.art === "flight";
        // Nombre impair de petites tuiles : la dernière prend toute la largeur
        const fill = !wide && smallTiles.length % 2 === 1 && tile === smallTiles.at(-1);
        return (
          <li
            key={tile.kind}
            className={cn(
              "group relative flex min-h-28 justify-between gap-3 overflow-clip rounded-lg p-4 shadow-soft transition-[translate,box-shadow] duration-(--duration-base) ease-smooth hover:-translate-y-1 hover:shadow-lift",
              kindTheme[tile.kind],
              wide ? "items-center" : "flex-col",
              tile.layout,
              fill && "col-span-2",
            )}
          >
            <div className={cn("relative flex flex-col", wide ? "gap-1" : "h-full justify-between gap-3")}>
              <ParcoursGlyph
                kind={tile.kind}
                className="size-7 transition-transform duration-(--duration-base) ease-smooth group-hover:-rotate-8"
              />
              <p className="flex flex-col">
                <span className="font-display text-display-m font-extrabold leading-none text-heading">
                  {value}
                </span>
                <span className="mt-1 text-small font-medium text-ink-muted">
                  {tile.label[value > 1 ? 1 : 0]}
                </span>
              </p>
            </div>
            {tile.art === "flight" && <FlightArt />}
            {tile.art === "sparkle" && <SparkleArt />}
          </li>
        );
      })}
    </ul>
  );
}
