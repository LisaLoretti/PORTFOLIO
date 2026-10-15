import Image from "next/image";
import type { ParcoursStep } from "@/data/parcours";
import { cn } from "@/lib/cn";
import { ParcoursGlyph, kindTheme } from "./ParcoursIcon";

type ParcoursEntryProps = {
  step: ParcoursStep;
  /** Position dans la liste (0 = première carte). */
  index: number;
  total: number;
  /** Fond de la carte, à contraster avec celui de la section. */
  surface?: "cream" | "sand";
};

const pad = (value: number) => String(value).padStart(2, "0");

/*
 * Couleurs des panneaux : celles des tuiles (kindTheme), sauf pour les types
 * en crème, qui se confondraient avec le fond crème de la carte.
 */
const panelTheme: Record<ParcoursStep["kind"], string> = {
  ...kindTheme,
  Stage: "bg-sand text-forest",
  International: "bg-sage/45 text-forest",
};

/**
 * Fiche détaillée d'une étape du parcours, en carte : panneau aux couleurs
 * du type d'étape (repères, logos) et contenu (missions par thème).
 */
export function ParcoursEntry({ step, index, total, surface = "cream" }: ParcoursEntryProps) {
  const { slug, title, kind, organisation, place, period, detail, missions, logos } = step;

  return (
    <article
      id={slug}
      aria-labelledby={`${slug}-titre`}
      className={cn(
        "reveal-card group grid grid-cols-1 scroll-mt-[calc(var(--spacing-header)+2rem)] overflow-clip rounded-xl shadow-soft ring-1 ring-line transition-shadow duration-(--duration-slow) ease-smooth hover:shadow-lift lg:grid-cols-12",
        surface === "cream" ? "bg-cream" : "bg-sand",
      )}
    >
      {/* Panneau de repères aux couleurs du type d'étape */}
      <div
        className={cn(
          "relative flex flex-col gap-6 overflow-clip p-6 sm:p-8 lg:col-span-4 lg:p-10",
          panelTheme[kind],
        )}
      >
        {/* Numéro en filigrane, glissant au défilement */}
        <span
          aria-hidden="true"
          className="scroll-slide pointer-events-none absolute -right-4 -bottom-8 font-display text-[clamp(7rem,14vw,11rem)] leading-none font-extrabold opacity-15"
        >
          {pad(index + 1)}
        </span>

        <div className="reveal-left relative flex flex-col gap-6 lg:sticky lg:top-[calc(var(--spacing-header)+2.5rem)]">
          <div className="flex items-center justify-between gap-4">
            <span className="flex size-12 items-center justify-center rounded-full bg-current/10">
              <ParcoursGlyph kind={kind} className="size-6 motion-safe:group-hover:animate-wiggle" />
            </span>
            <span className="text-caption font-medium text-ink-muted">
              {pad(index + 1)} / {pad(total)}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-caption font-medium uppercase text-ink-muted">{kind}</span>
            {period && (
              <span className="font-display text-[clamp(1.75rem,1rem+1.6vw,2.6rem)] leading-[1.05] font-extrabold text-heading">
                {period}
              </span>
            )}
          </div>

          {(organisation || place) && (
            <p className="text-body font-medium text-heading">
              {organisation}
              {place && <span className="block text-small font-normal text-ink-muted">{place}</span>}
            </p>
          )}

          {logos && logos.length > 0 && (
            <ul className="reveal-bounce-children flex flex-wrap gap-3">
              {logos.map((logo) => (
                <li
                  key={logo.src}
                  className="flex h-20 items-center justify-center rounded-lg bg-white px-4 py-3 shadow-soft ring-1 ring-black/5"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    sizes="12rem"
                    className="h-full w-auto max-w-44 object-contain"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Contenu détaillé */}
      <div className="flex flex-col gap-8 p-6 sm:p-8 lg:col-span-8 lg:p-12">
        <h3 id={`${slug}-titre`} className="reveal max-w-[22ch] font-display hyphens-auto text-display-m font-bold text-heading">
          {title}
        </h3>

        {missions && missions.length > 0 ? (
          <div className="grid gap-10">
            {missions.map((group, groupIndex) => (
              <section key={group.title ?? groupIndex} className="flex flex-col gap-4">
                {group.title && (
                  <h4 className="reveal-left flex items-center gap-3 font-display text-title font-bold text-forest">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sage text-small font-extrabold">
                      {pad(groupIndex + 1)}
                    </span>
                    {group.title}
                  </h4>
                )}
                <ul className="reveal-right-children flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={item} className="group/item flex gap-3 text-body">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-olive transition-[width] duration-(--duration-base) ease-smooth group-hover/item:w-4"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ) : (
          detail && <p className="reveal max-w-prose text-lead text-ink-muted">{detail}</p>
        )}
      </div>
    </article>
  );
}
