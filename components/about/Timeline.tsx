import type { ParcoursStep } from "@/data/parcours";

type TimelineProps = {
  steps: ParcoursStep[];
};

/** Frise chronologique verticale, numérotée, du plus ancien au plus récent. */
export function Timeline({ steps }: TimelineProps) {
  return (
    <ol className="relative border-l border-line-strong md:ml-6">
      {steps.map((step, index) => (
        <li key={step.title} className="relative grid gap-2 pb-12 pl-8 last:pb-0 md:grid-cols-[6rem_1fr] md:gap-8 md:pl-12">
          <span aria-hidden="true" className="absolute -left-[7px] top-2 size-3.5 rounded-full border-2 border-cream bg-olive" />
          <span aria-hidden="true" className="font-display text-display-m font-extrabold text-sage">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-col gap-2 md:pt-2">
            <p className="text-caption font-medium uppercase text-ink-muted">
              {step.kind}
              {step.period && <> · {step.period}</>}
            </p>
            <h3 className="max-w-[28ch] font-display text-title font-bold text-heading">{step.title}</h3>
            {(step.organisation || step.place) && (
              <p className="text-body font-medium text-forest">
                {[step.organisation, step.place].filter(Boolean).join(" — ")}
              </p>
            )}
            {step.detail && <p className="max-w-prose text-small text-ink-muted">{step.detail}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
