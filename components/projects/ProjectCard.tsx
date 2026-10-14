import Image from "next/image";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  /** À activer pour les cartes visibles sans défilement (chargement prioritaire). */
  priority?: boolean;
  className?: string;
};

/**
 * Carte de projet. Quand une vidéo est renseignée, toute la carte devient
 * cliquable via un lien étendu sur le titre (un seul lien accessible par carte).
 */
export function ProjectCard({ project, priority = false, className }: ProjectCardProps) {
  const { title, category, description, figures, image, videoUrl } = project;
  const isPending = !description && !figures?.length && !videoUrl;

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
          className={cn(
            "object-cover",
            videoUrl && "transition-transform duration-(--duration-slow) ease-smooth group-hover:scale-[1.04]",
          )}
        />
        {videoUrl && (
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-small font-medium text-forest shadow-soft">
            <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3 fill-current">
              <path d="M4 2.5v11l9-5.5-9-5.5Z" />
            </svg>
            Vidéo
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-caption font-medium uppercase text-ink-muted">{category}</p>
        <h3 className="font-display text-title font-bold text-heading">
          {videoUrl ? (
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
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
              <span className="sr-only"> (vidéo, nouvel onglet)</span>
            </a>
          ) : (
            title
          )}
        </h3>

        {description && <p className="max-w-prose text-small text-ink-muted">{description}</p>}

        {figures && figures.length > 0 && (
          <dl className="mt-2 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-4">
            {figures.map((figure) => (
              <div key={figure.label} className="flex flex-col">
                <dt className="order-2 text-small text-ink-muted">{figure.label}</dt>
                <dd className="order-1 font-display text-title font-bold text-heading">{figure.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {isPending && <p className="text-small text-ink-muted">Présentation, chiffres et vidéo à venir.</p>}
      </div>

      {/* Anneau de focus clavier sur toute la carte */}
      {videoUrl && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-3 rounded-xl outline-2 outline-offset-0 outline-transparent group-has-focus-visible:outline-forest"
        />
      )}
    </article>
  );
}
