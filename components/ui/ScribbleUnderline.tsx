import { cn } from "@/lib/cn";

type ScribbleUnderlineProps = {
  /**
   * `scroll` : le trait se dessine au défilement (titres de section).
   * `load` : le trait se dessine au chargement (titres visibles d'emblée).
   */
  trigger?: "scroll" | "load";
  className?: string;
};

/** Trait ondulé dessiné à la main, placé sous un élément en `relative`. */
export function ScribbleUnderline({ trigger = "scroll", className }: ScribbleUnderlineProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 20"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute top-full left-0 h-4 w-full text-olive", className)}
    >
      <path
        d="M3 12C40 3 70 19 110 11s70-9 105 1 60 6 82-4"
        pathLength={1}
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        className={trigger === "load" ? "draw-stroke-on-load" : "scroll-draw-stroke"}
      />
    </svg>
  );
}
