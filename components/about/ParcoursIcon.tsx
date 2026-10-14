import type { ReactNode } from "react";
import type { ParcoursStep } from "@/data/parcours";
import { cn } from "@/lib/cn";

export type ParcoursKind = ParcoursStep["kind"];

/**
 * Couleur associée à chaque type d'étape, partagée par les tuiles du résumé
 * et les pastilles de la frise (code couleur commun).
 */
export const kindTheme: Record<ParcoursKind, string> = {
  Formation: "tone-inverse bg-forest text-cream",
  Alternance: "bg-sage text-forest",
  Stage: "border border-line-strong bg-cream text-forest",
  Freelance: "tone-inverse bg-charcoal text-cream",
  International: "border border-line-strong bg-cream text-forest",
};

/*
 * Pictogrammes bichromes (grille 24 × 24) : une forme pleine teintée
 * (fill-current/25) surmontée d'un trait.
 */
const glyphs: Record<ParcoursKind, ReactNode> = {
  // Chapeau de diplômé
  Formation: (
    <>
      <path className="fill-current/25 stroke-none" d="M12 4.5 2.5 9 12 13.5 21.5 9 12 4.5Z" />
      <path d="M12 4.5 2.5 9 12 13.5 21.5 9 12 4.5Z" />
      <path d="M6.5 11.2v4.3c0 1.7 2.5 3 5.5 3s5.5-1.3 5.5-3v-4.3" />
      <path d="M21.5 9v5.5" />
    </>
  ),
  // Mallette
  Alternance: (
    <>
      <rect className="fill-current/25 stroke-none" x="3" y="7" width="18" height="13" rx="3" />
      <rect x="3" y="7" width="18" height="13" rx="3" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18M12 11.5v2" />
    </>
  ),
  // Badge de stagiaire
  Stage: (
    <>
      <rect className="fill-current/25 stroke-none" x="5" y="6" width="14" height="15" rx="3" />
      <rect x="5" y="6" width="14" height="15" rx="3" />
      <path d="M10 3h4v4h-4zM9 17h6" />
      <circle cx="12" cy="12.5" r="2" />
    </>
  ),
  // Étincelles
  Freelance: (
    <>
      <path
        className="fill-current/25"
        d="M10 3.5c.7 4.4 2.6 6.3 7 7-4.4.7-6.3 2.6-7 7-.7-4.4-2.6-6.3-7-7 4.4-.7 6.3-2.6 7-7Z"
      />
      <path d="M18.5 14.5c.3 1.8 1.1 2.6 2.9 2.9-1.8.3-2.6 1.1-2.9 2.9-.3-1.8-1.1-2.6-2.9-2.9 1.8-.3 2.6-1.1 2.9-2.9Z" />
    </>
  ),
  // Avion
  International: (
    <>
      <path
        className="fill-current/25"
        d="M21 4 3 11.2l6.6 2.2L12 20l3.3-5.6L21 4Z"
      />
      <path d="m9.6 13.4 5.7-3.6" />
    </>
  ),
};

type GlyphProps = {
  kind: ParcoursKind;
  className?: string;
};

/** Pictogramme seul, à la couleur du texte courant. */
export function ParcoursGlyph({ kind, className }: GlyphProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6", className)}
    >
      {glyphs[kind]}
    </svg>
  );
}

/** Pastille ronde aux couleurs du type d'étape (utilisée sur la frise). */
export function ParcoursIcon({ kind, className }: GlyphProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("flex size-10 shrink-0 items-center justify-center rounded-full", kindTheme[kind], className)}
    >
      <ParcoursGlyph kind={kind} className="size-5" />
    </span>
  );
}
