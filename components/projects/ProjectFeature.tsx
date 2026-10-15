import Image from "next/image";
import type { Paragraphs, Project } from "@/data/projects";
import { cn } from "@/lib/cn";
import { Heading, Text } from "@/components/ui/Typography";
import { VideoEmbed } from "./VideoEmbed";

type ProjectFeatureProps = {
  project: Project;
  index: number;
  total: number;
};

const pad = (value: number) => String(value).padStart(2, "0");

/** Met en gras le texte entouré de **doubles astérisques**. */
function RichText({ text }: { text: string }) {
  return text
    .split(/\*\*(.+?)\*\*/)
    .map((part, index) =>
      index % 2 === 1 ? (
        <strong key={index} className="font-semibold text-heading">
          {part}
        </strong>
      ) : (
        part
      ),
    );
}

/** Emplacement des photos dans la mosaïque, par position. */
const galleryLayout = [
  "col-span-2 row-span-2 lg:col-span-4",
  "row-span-2 lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "col-span-2 row-span-2 lg:col-span-2 lg:row-span-1",
];

/** Intitulé de partie : petites capitales discrètes. */
const labelClass =
  "flex items-center gap-2 text-caption font-medium uppercase text-forest before:h-px before:w-6 before:bg-olive";

const toParagraphs = (text?: Paragraphs) => (text === undefined ? [] : typeof text === "string" ? [text] : text);

/** Projet mené en équipe ou imaginé à mon initiative : libellé et pictogramme. */
const initiativeBadge = {
  collective: {
    label: "Projet collectif",
    className: "bg-sage text-forest",
    // Deux personnes
    icon: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2.5 19c.4-3 2.7-5 5.5-5s5.1 2 5.5 5M14 14.2c.6-.2 1.3-.2 2-.2 2.5 0 4.6 1.8 5 4.5",
  },
  personal: {
    label: "Projet à mon initiative",
    className: "border border-olive text-forest",
    // Ampoule
    icon: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3Z",
  },
} as const;

/**
 * Présentation d'un projet, en structure identique pour tous : numéro,
 * catégories et type de projet, titre, vidéo, présentation, chiffres clés,
 * rôle en blocs numérotés et compétences mobilisées.
 */
export function ProjectFeature({ project, index, total }: ProjectFeatureProps) {
  const { slug, title, category, initiative, summary, context, roles, figures, skills, gallery, image, video, shorts } =
    project;
  const reversed = index % 2 === 1;
  const vertical = Boolean(shorts?.length);
  const badge = initiativeBadge[initiative];

  return (
    <article
      id={slug}
      aria-labelledby={`${slug}-titre`}
      className="relative flex scroll-mt-[calc(var(--spacing-header)+2rem)] flex-col gap-10 lg:gap-14"
    >
      {/* Grand numéro en contour, glissant au défilement */}
      <span
        aria-hidden="true"
        className={cn(
          "text-outline scroll-slide pointer-events-none absolute -top-12 font-display text-[clamp(7rem,18vw,15rem)] leading-none font-extrabold select-none",
          reversed ? "left-0" : "right-0",
        )}
      >
        {pad(index + 1)}
      </span>

      <header className="reveal relative flex flex-col gap-4">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="rounded-full bg-forest px-3 py-1 text-caption font-medium text-cream">
            {pad(index + 1)} / {pad(total)}
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-caption font-medium",
              badge.className,
            )}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3.5"
            >
              <path d={badge.icon} />
            </svg>
            {badge.label}
          </span>
        </p>
        <Heading id={`${slug}-titre`} size="display-l" underline className="max-w-[20ch]">
          {title}
        </Heading>
        <p className="text-caption font-medium uppercase text-ink-muted">{category}</p>
      </header>

      <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {vertical ? (
          /* Exemples de vidéos verticales dans des téléphones qui s'inclinent en arrivant */
          <figure
            aria-label="Exemples de vidéos"
            className={cn("flex items-start justify-center gap-4 py-6 sm:gap-6 lg:col-span-5", reversed && "lg:order-2")}
          >
            {shorts?.map((short, shortIndex) => (
              <div
                key={short.youtubeId}
                className={cn(
                  "relative aspect-9/16 w-[min(42vw,15rem)] overflow-clip rounded-[2rem] border-[6px] border-charcoal bg-charcoal shadow-lift",
                  shortIndex % 2 === 0 ? "scroll-tilt-left" : "scroll-tilt-right mt-16",
                )}
              >
                <VideoEmbed youtubeId={short.youtubeId} title={`${title} — exemple ${shortIndex + 1}`} />
              </div>
            ))}
          </figure>
        ) : (
          <figure className={cn("flex flex-col gap-2 lg:col-span-7", reversed && "lg:order-2")}>
            <div
              className={cn(
                "reveal-clip relative aspect-video overflow-hidden rounded-xl shadow-lift",
                video ? "bg-charcoal" : "bg-sage",
              )}
            >
              {video ? (
                <VideoEmbed youtubeId={video.youtubeId} title={title} />
              ) : (
                image && (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 64rem) 55vw, 100vw"
                    unoptimized={image.src.endsWith(".svg")}
                    className="object-cover"
                  />
                )
              )}
            </div>
            {video?.credit && <figcaption className="text-small text-ink-muted">{video.credit}</figcaption>}
          </figure>
        )}

        <div
          className={cn(
            "flex flex-col gap-8",
            vertical ? "lg:col-span-7" : "lg:col-span-5",
            reversed && "lg:order-1",
          )}
        >
          <section aria-labelledby={`${slug}-projet`} className="reveal-right-children flex flex-col gap-3">
            <h3 id={`${slug}-projet`} className={labelClass}>
              Le projet
            </h3>
            {(context ?? [summary]).map((paragraph) => (
              <Text key={paragraph} variant="lead" className="text-ink">
                <RichText text={paragraph} />
              </Text>
            ))}
          </section>

          {figures && figures.length > 0 && (
            <section
              aria-labelledby={`${slug}-chiffres`}
              className="reveal-zoom tone-inverse @container relative flex flex-col gap-5 overflow-clip rounded-xl bg-forest p-6 text-ink shadow-lift sm:p-8"
            >
              {/* Forme organique qui tourne au défilement */}
              <svg
                aria-hidden="true"
                viewBox="0 0 600 600"
                className="scroll-spin pointer-events-none absolute -right-20 -bottom-24 w-56 text-olive/35"
              >
                <path
                  fill="currentColor"
                  d="M452 98c62 52 104 140 92 222-12 83-77 160-158 196-81 37-178 33-247-12C70 459 28 375 40 292 51 209 116 127 196 84c80-42 194-38 256 14Z"
                />
              </svg>
              <h3 id={`${slug}-chiffres`} className="relative flex items-center gap-2 text-caption font-medium uppercase text-sage">
                {/* Trophée */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" className="fill-current/25" />
                  <path d="M7 6H4.5a2.5 2.5 0 0 0 2.5 4M17 6h2.5a2.5 2.5 0 0 1-2.5 4M12 14v3M8.5 20h7M10 17h4l.5 3h-5l.5-3Z" />
                </svg>
                Chiffres clés
              </h3>
              {/* Autant de chiffres par ligne que la largeur le permet, sans chevauchement */}
              <dl className="reveal-bounce-children relative grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-6 gap-y-5">
                {figures.map((figure) => (
                  <div key={figure.label} className="flex flex-col gap-1">
                    <dt className="order-2 text-small text-ink-muted">{figure.label}</dt>
                    <dd className="order-1 font-display text-[clamp(1.5rem,6.5cqi,2.5rem)] leading-none font-extrabold whitespace-nowrap text-heading">
                      {figure.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </div>
      </div>

      {roles && roles.length > 0 && (
        <section aria-labelledby={`${slug}-role`} className="flex flex-col gap-5">
          <h3 id={`${slug}-role`} className={cn(labelClass, "reveal-left")}>
            Mon rôle
          </h3>
          {/* Une ligne de blocs numérotés sur ordinateur : lecture rapide des missions */}
          <ol className="reveal-bounce-children grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
            {roles.map((role, roleIndex) => (
              <li
                key={role.title}
                className="group/role flex flex-col gap-2 border-t-2 border-line-strong pt-4 transition-colors duration-(--duration-base) ease-smooth hover:border-olive"
              >
                {/* Numéro et intitulé côte à côte sur mobile, empilés sur ordinateur */}
                <div className="flex items-baseline gap-3 lg:flex-col lg:gap-2">
                  <span className="font-display text-title leading-none font-extrabold text-sage transition-colors duration-(--duration-base) ease-smooth group-hover/role:text-olive lg:text-display-m">
                    {pad(roleIndex + 1)}
                  </span>
                  <p className="font-display text-body font-bold text-heading">{role.title}</p>
                </div>
                {toParagraphs(role.text).map((paragraph) => (
                  <p key={paragraph} className="text-small text-ink-muted">
                    <RichText text={paragraph} />
                  </p>
                ))}
                {role.items && (
                  <ul className="flex flex-col gap-1.5 text-small text-ink-muted">
                    {role.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-olive" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      {gallery && gallery.length > 0 && (
        <section aria-labelledby={`${slug}-images`} className="flex flex-col gap-5">
          <h3 id={`${slug}-images`} className={cn(labelClass, "reveal-left")}>
            En images
          </h3>
          {/* Mosaïque : grande photo + portrait, puis une ligne de trois (sur mobile, deux colonnes) */}
          <ul className="reveal-pop-children grid auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] lg:grid-cols-6 lg:gap-4">
            {gallery.map((photo, photoIndex) => (
              <li
                key={photo.src}
                className={cn(
                  "group/photo relative overflow-clip rounded-lg bg-sage shadow-soft",
                  galleryLayout[photoIndex] ?? "lg:col-span-2",
                )}
              >
                <figure className="size-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={photoIndex === 0 ? "(min-width: 64rem) 50vw, 100vw" : "(min-width: 64rem) 25vw, 50vw"}
                    style={{ objectPosition: photo.position }}
                    className="object-cover transition-transform duration-(--duration-slow) ease-smooth group-hover/photo:scale-[1.04]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-charcoal/80 to-transparent px-4 pt-10 pb-3 text-small font-medium text-cream">
                    {photo.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      )}

      {skills && skills.length > 0 && (
        <section
          aria-labelledby={`${slug}-competences`}
          className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4"
        >
          <h3 id={`${slug}-competences`} className={labelClass}>
            Compétences mobilisées
          </h3>
          <ul className="reveal-bounce-children flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-line-strong px-3 py-1 text-caption font-medium text-forest transition-colors duration-(--duration-base) ease-smooth hover:border-forest hover:bg-forest hover:text-cream"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
