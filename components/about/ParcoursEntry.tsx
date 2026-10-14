import type { ParcoursStep } from "@/data/parcours";
import { ParcoursIcon } from "./ParcoursIcon";

/** Fiche détaillée d'une étape du parcours (page Parcours). */
export function ParcoursEntry({ step }: { step: ParcoursStep }) {
  const { slug, title, kind, organisation, place, period, detail, missions } = step;

  return (
    <article
      id={slug}
      aria-labelledby={`${slug}-titre`}
      className="grid scroll-mt-[calc(var(--spacing-header)+2rem)] gap-6 border-t border-line-strong pt-10 lg:grid-cols-12 lg:gap-12"
    >
      {/* Repères : type, période, structure */}
      <div className="reveal-left flex flex-col gap-4 self-start lg:sticky lg:top-[calc(var(--spacing-header)+2rem)] lg:col-span-4">
        <div className="flex items-center gap-3">
          <ParcoursIcon kind={kind} className="size-12" />
          <p className="flex flex-col">
            <span className="text-caption font-medium uppercase text-ink-muted">{kind}</span>
            {period && <span className="font-display text-title font-bold text-heading">{period}</span>}
          </p>
        </div>
        {(organisation || place) && (
          <p className="text-body font-medium text-forest">
            {organisation}
            {place && <span className="block text-small font-normal text-ink-muted">{place}</span>}
          </p>
        )}
      </div>

      {/* Contenu détaillé */}
      <div className="reveal flex flex-col gap-6 lg:col-span-8">
        <h3 id={`${slug}-titre`} className="max-w-[24ch] font-display text-display-m font-bold text-heading">
          {title}
        </h3>
        {missions && missions.length > 0 ? (
          <div className="grid gap-8">
            {missions.map((group, index) => (
              <section key={group.title ?? index} className="flex flex-col gap-3">
                {group.title && <h4 className="font-display text-title font-bold text-forest">{group.title}</h4>}
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-body">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-olive" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ) : (
          <p className="max-w-prose text-body text-ink-muted">{detail ?? "Détails à venir."}</p>
        )}
      </div>
    </article>
  );
}
