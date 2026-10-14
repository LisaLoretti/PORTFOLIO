import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  /** À activer pour les cartes visibles sans défilement (chargement prioritaire). */
  priority?: boolean;
  className?: string;
};

/**
 * Carte de projet. Toute la carte est cliquable via un lien étendu sur le titre,
 * ce qui garde un seul lien accessible par carte.
 */
export function ProjectCard({ project, priority = false, className }: ProjectCardProps) {
  const { title, category, description, image, href } = project;

  return (
    <article className={cn("group relative flex flex-col gap-5", className)}>
      <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-sage">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes="(min-width: 64rem) 40vw, (min-width: 48rem) 50vw, 100vw"
          unoptimized={image.src.endsWith(".svg")}
          className="object-cover transition-transform duration-(--duration-slow) ease-smooth group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-caption font-medium uppercase text-ink-muted">{category}</p>
        <h3 className="font-display text-title font-bold text-heading">
          <Link
            href={href}
            className="inline-flex items-baseline gap-2 rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            <span className="underline decoration-transparent decoration-2 underline-offset-[6px] transition-[text-decoration-color] duration-(--duration-base) ease-smooth group-hover:decoration-olive">
              {title}
            </span>
            <span
              aria-hidden="true"
              className="text-olive transition-transform duration-(--duration-base) ease-smooth group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              ↗
            </span>
          </Link>
        </h3>
        <p className="max-w-prose text-small text-ink-muted">{description}</p>
      </div>

      {/* Anneau de focus clavier sur toute la carte */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 rounded-xl outline-2 outline-offset-0 outline-transparent group-has-focus-visible:outline-forest"
      />
    </article>
  );
}
