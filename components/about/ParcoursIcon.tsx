import type { ReactNode } from "react";
import type { ParcoursStep } from "@/data/parcours";
import { cn } from "@/lib/cn";

type Kind = ParcoursStep["kind"];

/** Tracés des pictogrammes (grille 24 × 24, trait). */
const paths: Record<Kind, ReactNode> = {
  // Chapeau de diplômé
  Formation: (
    <>
      <path d="M2.5 9 12 4.5 21.5 9 12 13.5 2.5 9Z" />
      <path d="M6.5 11v4.5c0 1.6 2.5 3 5.5 3s5.5-1.4 5.5-3V11" />
      <path d="M21.5 9v5" />
    </>
  ),
  // Mallette
  Alternance: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
      <path d="M3 12.5h18" />
    </>
  ),
  // Bloc-notes
  Stage: (
    <>
      <rect x="5" y="4.5" width="14" height="16" rx="2" />
      <path d="M9 3h6v3H9z" />
      <path d="M8.5 11h7M8.5 15h4.5" />
    </>
  ),
  // Globe
  International: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.8 3.2 2.8 14.8 0 18M12 3c-2.8 3.2-2.8 14.8 0 18" />
    </>
  ),
};

type ParcoursIconProps = {
  kind: Kind;
  className?: string;
};

/** Pictogramme d'un type d'étape du parcours, dans une pastille ronde. */
export function ParcoursIcon({ kind, className }: ParcoursIconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("flex size-10 shrink-0 items-center justify-center rounded-full bg-cream text-forest", className)}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        {paths[kind]}
      </svg>
    </span>
  );
}
