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
const toParagraphs = (text?: Paragraphs) => (text === undefined ? [] : typeof text === "string" ? [text] : text);

/** Présentation détaillée d'un projet : contexte, média, rôle et résultats. */
export function ProjectFeature({ project, index, total, tone = "cream" }: ProjectFeatureProps) {
  const { slug, title, subtitle, category, summary, context, roles, rolesTitle, figures, figuresTitle, image, video, shorts } =
    project;
  const reversed = index % 2 === 1;
  const vertical = Boolean(shorts?.length);
  // Rôles sans description : affichés en étiquettes plutôt qu'en cartes détaillées
  const roleTags = roles?.every((role) => !role.text);
  const cardSurface = tone === "cream" ? "bg-sand" : "bg-cream";

  return (
    <article
      id={slug}
      aria-labelledby={`${slug}-titre`}
      className="relative flex scroll-mt-[calc(var(--spacing-header)+2rem)] flex-col gap-12"
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

      <header className={cn("reveal relative flex flex-col gap-4", reversed && "md:items-end md:text-right")}>
        <p className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-forest px-3 py-1 text-caption font-medium text-cream">
            {pad(index + 1)} / {pad(total)}
          </span>
          <span className="text-caption font-medium uppercase text-ink-muted">{category}</span>
        </p>
        <Heading id={`${slug}-titre`} size="display-l" underline className="max-w-[18ch]">
          {title}
        </Heading>
        {subtitle && <p className="text-lead font-medium text-forest">{subtitle}</p>}
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
            "reveal-right-children flex flex-col gap-6",
            vertical ? "lg:col-span-7" : "lg:col-span-5",
            reversed && "lg:order-1",
          )}
        >
          {(context ?? [summary]).map((item) =>
            typeof item === "string" ? (
              <Text key={item} variant="lead" className="text-ink">
                {item}
              </Text>
            ) : (
              <div key={item.title} className="flex flex-col gap-2 border-l-2 border-olive pl-5">
                <h3 className="font-display text-title font-bold text-heading">{item.title}</h3>
                {toParagraphs(item.text).map((paragraph) => (
                  <Text key={paragraph}>{paragraph}</Text>
                ))}
              </div>
            ),
          )}
        </div>
      </div>

      <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-12">
        {roles && roles.length > 0 && (
          <section aria-label={rolesTitle ?? "Mon rôle"} className="flex flex-col gap-6 lg:col-span-8">
            <Heading as="h3" size="title" className="reveal-left">
              {rolesTitle ?? "Mon rôle"}
            </Heading>
            {roleTags ? (
              <ul className="reveal-bounce-children flex flex-wrap gap-2">
                {roles.map((role) => (
                  <li
                    key={role.title}
                    className="rounded-full bg-sage px-4 py-2 text-small font-medium text-forest transition-[background-color,color,translate] duration-(--duration-base) ease-smooth hover:-translate-y-0.5 hover:bg-forest hover:text-cream"
                  >
                    {role.title}
                  </li>
                ))}
              </ul>
            ) : (
              <ol
                className={cn(
                  "reveal-bounce-children grid gap-4 sm:grid-cols-2",
                  roles.length % 3 === 0 && "lg:grid-cols-3",
                )}
              >
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
                        {paragraph}
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
            )}
          </section>
        )}

        {figures && figures.length > 0 && (
          <section
            aria-label={figuresTitle ?? "Les résultats"}
            className={cn(
              "reveal-zoom tone-inverse relative flex flex-col gap-6 self-start overflow-clip rounded-xl bg-forest p-8 text-ink shadow-lift lg:col-span-4",
              !roles?.length && "lg:col-start-9",
            )}
          >
            {/* Forme organique qui tourne au défilement */}
            <svg
              aria-hidden="true"
              viewBox="0 0 600 600"
              className="scroll-spin pointer-events-none absolute -right-24 -bottom-24 w-64 text-olive/35"
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
              <Heading as="h3" size="title">
                {figuresTitle ?? "Les résultats"}
              </Heading>
            </div>
            <dl className="reveal-bounce-children relative flex flex-col gap-5">
              {figures.map((figure) => (
                <div key={figure.label} className="flex flex-col">
                  <dt className="order-2 text-small text-ink-muted">{figure.label}</dt>
                  <dd className="order-1 font-display text-display-m font-extrabold text-heading">{figure.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </div>
    </article>
  );
}
