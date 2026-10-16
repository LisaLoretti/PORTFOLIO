import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";
import { PhonesCover } from "./PhonesCover";
import { YouTubeThumbnail } from "./YouTubeThumbnail";

type ProjectCardProps = {
  project: Project;
  /** À activer pour les cartes visibles sans défilement (chargement prioritaire). */
  priority?: boolean;
  className?: string;
};

/**
 * Carte de projet menant à sa présentation détaillée sur la page Réalisations.
 * Toute la carte est cliquable via un lien étendu sur le titre (un seul lien par carte).
 */
export function ProjectCard({ project, priority = false, className }: ProjectCardProps) {
  const { slug, title, subtitle, category, summary, figures, image, video, shorts, cardCover } = project;
  // Vidéo dont la miniature illustre la carte : paysage, sinon premier exemple vertical
  const thumbnailId = video?.youtubeId ?? shorts?.[0]?.youtubeId;

  return (
    <article className={cn("group relative flex flex-col gap-5", className)}>
      <div className="reveal-clip relative aspect-video overflow-hidden rounded-lg bg-sage">
        {cardCover === "phones" ? (
          <PhonesCover />
        ) : thumbnailId ? (
          <YouTubeThumbnail
            youtubeId={thumbnailId}
            alt={`Miniature de la vidéo : ${title}`}
            priority={priority}
            sizes="(min-width: 64rem) 40vw, (min-width: 48rem) 50vw, 100vw"
            className="transition-transform duration-(--duration-slow) ease-smooth group-hover:scale-[1.04]"
          />
        ) : image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes="(min-width: 64rem) 40vw, (min-width: 48rem) 50vw, 100vw"
            unoptimized={image.src.endsWith(".svg")}
            className="object-cover transition-transform duration-(--duration-slow) ease-smooth group-hover:scale-[1.04]"
          />
        ) : null}
        {thumbnailId && (
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-small font-medium text-forest shadow-soft">
            <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3 fill-current">
              <path d="M4 2.5v11l9-5.5-9-5.5Z" />
            </svg>
            Vidéo
          </span>
        )}
      </div>

      <div className="reveal flex flex-col gap-2">
        <p className="text-caption font-medium uppercase text-ink-muted">{category}</p>
        <h3 className="font-display text-title font-bold text-heading">
          <Link
            href={`/realisations#${slug}`}
            className="rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            <span className="underline decoration-transparent decoration-2 underline-offset-[6px] transition-[text-decoration-color] duration-(--duration-base) ease-smooth group-hover:decoration-olive">
              {title}
            </span>
            <span
              aria-hidden="true"
              className="ml-2 inline-block text-olive transition-transform duration-(--duration-base) ease-smooth group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </h3>
        {subtitle && <p className="text-small font-medium text-forest">{subtitle}</p>}
        <p className="max-w-prose text-small text-ink-muted">{summary}</p>

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
      </div>

      {/* Anneau de focus clavier sur toute la carte */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 rounded-xl outline-2 outline-offset-0 outline-transparent group-has-focus-visible:outline-forest"
      />
    </article>
  );
}
