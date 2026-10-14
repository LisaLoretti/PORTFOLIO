import Image from "next/image";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";
import { VideoEmbed } from "./VideoEmbed";

type ProjectFeatureProps = {
  project: Project;
  index: number;
};

/** Présentation détaillée d'un projet : contexte, média, rôle et résultats. */
export function ProjectFeature({ project, index }: ProjectFeatureProps) {
  const { slug, title, subtitle, category, summary, context, roles, figures, image, video } = project;
  const number = String(index + 1).padStart(2, "0");
  const reversed = index % 2 === 1;

  return (
    <article id={slug} aria-labelledby={`${slug}-titre`} className="flex scroll-mt-[calc(var(--spacing-header)+2rem)] flex-col gap-12">
      <header className={cn("reveal flex flex-col gap-4 md:flex-row md:items-end md:gap-10", reversed && "md:flex-row-reverse md:text-right")}>
        <span aria-hidden="true" className="reveal-zoom font-display text-display-xl leading-none font-extrabold text-sage">
          {number}
        </span>
        <div className={cn("flex flex-col gap-3", reversed && "md:items-end")}>
          <Eyebrow>{category}</Eyebrow>
          <Heading id={`${slug}-titre`} size="display-m" className="max-w-[20ch]">
            {title}
          </Heading>
          {subtitle && <p className="text-lead font-medium text-forest">{subtitle}</p>}
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <figure className={cn("reveal-zoom flex flex-col gap-2 lg:col-span-7", reversed && "lg:order-2")}>
          <div className={cn("relative aspect-video overflow-hidden rounded-lg", video ? "bg-charcoal" : "bg-sage")}>
            {video ? (
              <VideoEmbed youtubeId={video.youtubeId} title={title} />
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 64rem) 55vw, 100vw"
                unoptimized={image.src.endsWith(".svg")}
                className="object-cover"
              />
            )}
          </div>
          {video?.credit && <figcaption className="text-small text-ink-muted">{video.credit}</figcaption>}
        </figure>

        <div className={cn("reveal flex flex-col gap-5 lg:col-span-5", reversed && "lg:order-1")}>
          {(context ?? [summary]).map((paragraph) => (
            <Text key={paragraph}>{paragraph}</Text>
          ))}
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        {roles && roles.length > 0 && (
          <section aria-label="Mon rôle" className="flex flex-col gap-6 lg:col-span-8">
            <Heading as="h3" size="title">
              Mon rôle
            </Heading>
            <ol className="grid gap-6 sm:grid-cols-2">
              {roles.map((role, roleIndex) => (
                <li key={role.title} className="reveal flex flex-col gap-2 border-t border-line-strong pt-4">
                  <span className="text-caption font-medium text-ink-muted">{String(roleIndex + 1).padStart(2, "0")}</span>
                  <p className="font-display text-body font-bold text-heading">{role.title}</p>
                  <p className="text-small text-ink-muted">{role.text}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {figures && figures.length > 0 && (
          <section aria-label="Les résultats" className="reveal tone-inverse flex flex-col gap-6 self-start rounded-xl bg-forest p-8 text-ink lg:col-span-4">
            <Heading as="h3" size="title">
              Les résultats
            </Heading>
            <dl className="reveal-pop-children flex flex-col gap-5">
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
