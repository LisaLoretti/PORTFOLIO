import Link from "next/link";
import type { SkillAxis } from "@/data/skills";
import { cn } from "@/lib/cn";

/** Étiquettes d'axes de compétences, chacune renvoyant vers l'axe sur l'accueil. */
export function SkillAxisTags({ axes, className }: { axes: SkillAxis[]; className?: string }) {
  if (axes.length === 0) return null;
  return (
    <ul className={cn("reveal-bounce-children flex flex-wrap gap-2", className)}>
      {axes.map((axis) => (
        <li key={axis.id}>
          <Link
            href={`/#${axis.id}`}
            aria-label={`Compétence ${axis.number} : ${axis.title} (voir sur l’accueil)`}
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-3 py-1 text-caption font-medium tracking-normal text-forest transition-colors duration-(--duration-base) ease-smooth hover:border-forest hover:bg-forest hover:text-cream"
          >
            <span className="font-display font-extrabold text-olive group-hover:text-sage">{axis.number}</span>
            {axis.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
