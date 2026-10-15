import Image from "next/image";
import type { Paragraphs, Project } from "@/data/projects";
import { cn } from "@/lib/cn";
import { Heading, Text } from "@/components/ui/Typography";
import { VideoEmbed } from "./VideoEmbed";

type ProjectFeatureProps = {
  project: Project;
  index: number;
  total: number;
  /** Fond de la bande qui accueille le projet (les cartes prennent l'autre teinte). */
  tone?: "cream" | "sand";
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
 * Présentation détaillée d'un projet, en structure identique pour tous :
 * numéro et catégorie, titre, vidéo, contexte et objectifs, rôle, résultats
 * chiffrés et compétences mobilisées.
 */
export function ProjectFeature({ project, index, total, tone = "cream" }: ProjectFeatureProps) {
  const { slug, title, subtitle, category, initiative, summary, context, roles, figures, skills, image, video, shorts } =
    project;
  const reversed = index % 2 === 1;
  const vertical = Boolean(shorts?.length);
  const cardSurface = tone === "cream" ? "bg-sand" : "bg-cream";
  const badge = initiativeBadge[initiative];

  return (
    <article
      id={slug}
      aria-labelledby={`${slug}-titre`}
      className="relative flex scroll-mt-[calc(var(--spacing-header)+2rem)] flex-col gap-12 lg:gap-16"
    >
      {/* Grand numéro en contour, glissant au défilement */}
      <span
        aria-hidden="true"
        className={cn(
          "text-outline scroll-slide pointer-events-none absolute -top-16 font-display text-[clamp(8rem,22vw,18rem)] leading-none font-extrabold select-none",
          reversed ? "left-0" : "right-0",
        )}
      >
        {pad(index + 1)}
      </span>

      <header className="reveal relative flex flex-col gap-4">
        <p className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-forest px-3 py-1 text-caption font-medium text-cream">
            {pad(index + 1)} / {pad(total)}
          </span>
          <span className="text-caption font-medium uppercase text-ink-muted">{category}</span>
        </p>
        <Heading id={`${slug}-titre`} size="display-l" underline className="max-w-[20ch]">
          {title}
        </Heading>
        {subtitle && <p className="text-lead font-medium text-forest">{subtitle}</p>}
        <p
          className={cn(
            "inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-small font-medium",
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
            className="size-4"
          >
            <path d={badge.icon} />
          </svg>
          {badge.label}
        </p>
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

        <section
          aria-labelledby={`${slug}-contexte`}
          className={cn(
            "reveal-right-children flex flex-col gap-4 border-l-2 border-olive pl-5",
            vertical ? "lg:col-span-7" : "lg:col-span-5",
            reversed && "lg:order-1",
          )}
        >
          <h3 id={`${slug}-contexte`} className="font-display text-title font-bold text-heading">
            Contexte & objectifs
          </h3>
          {(context ?? [summary]).map((paragraph) => (
            <Text key={paragraph}>
              <RichText text={paragraph} />
            </Text>
          ))}
        </section>
      </div>

      {roles && roles.length > 0 && (
        <section aria-labelledby={`${slug}-role`} className="flex flex-col gap-6">
          <Heading as="h3" id={`${slug}-role`} size="title" className="reveal-left">
            Mon rôle
          </Heading>
          <ol className="reveal-bounce-children grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, roleIndex) => (
              <li
                key={role.title}
                className={cn(
                  "flex flex-col gap-2 rounded-lg p-5 shadow-soft ring-1 ring-line transition-[translate,box-shadow] duration-(--duration-base) ease-smooth hover:-translate-y-1 hover:shadow-lift",
                  cardSurface,
                )}
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-sage text-small font-extrabold text-forest">
                  {pad(roleIndex + 1)}
                </span>
                <p className="font-display text-body font-bold text-heading">{role.title}</p>
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

      {figures && figures.length > 0 && (
        <section
          aria-labelledby={`${slug}-resultats`}
          className="reveal-zoom tone-inverse relative flex flex-col gap-6 overflow-clip rounded-xl bg-forest p-8 text-ink shadow-lift lg:p-10"
        >
          {/* Forme organique qui tourne au défilement */}
          <svg
            aria-hidden="true"
            viewBox="0 0 600 600"
            className="scroll-spin pointer-events-none absolute -right-24 -bottom-32 w-72 text-olive/35"
          >
            <path
              fill="currentColor"
              d="M452 98c62 52 104 140 92 222-12 83-77 160-158 196-81 37-178 33-247-12C70 459 28 375 40 292 51 209 116 127 196 84c80-42 194-38 256 14Z"
            />
          </svg>
          <div className="relative flex items-center gap-3">
            {/* Trophée */}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-7 text-sage"
            >
              <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" className="fill-current/25" />
              <path d="M7 6H4.5a2.5 2.5 0 0 0 2.5 4M17 6h2.5a2.5 2.5 0 0 1-2.5 4M12 14v3M8.5 20h7M10 17h4l.5 3h-5l.5-3Z" />
            </svg>
            <Heading as="h3" id={`${slug}-resultats`} size="title">
              Résultats
            </Heading>
          </div>
          {/* En ligne sur ordinateur, sur deux colonnes sur mobile (le dernier chiffre impair prend toute la largeur) */}
          <dl className="reveal-bounce-children relative grid grid-cols-2 gap-x-6 gap-y-6 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none [&>:last-child:nth-child(odd)]:col-span-2 lg:[&>:last-child:nth-child(odd)]:col-span-1">
            {figures.map((figure) => (
              <div key={figure.label} className="flex flex-col gap-1 border-t border-line pt-4">
                <dt className="order-2 text-small text-ink-muted">{figure.label}</dt>
                <dd className="order-1 font-display text-display-m leading-none font-extrabold text-heading">
                  {figure.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {skills && skills.length > 0 && (
        <section aria-labelledby={`${slug}-competences`} className="flex flex-col gap-3">
          <h3
            id={`${slug}-competences`}
            className="font-sans text-caption font-medium uppercase text-ink-muted"
          >
            Compétences mobilisées
          </h3>
          <ul className="reveal-bounce-children flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-line-strong px-3 py-1 text-caption font-medium text-forest"
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
