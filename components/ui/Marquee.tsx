import { Fragment } from "react";

type MarqueeProps = {
  items: string[];
  /** Phrase lue par les technologies d'assistance à la place du défilement. */
  label: string;
};

/**
 * Bandeau de mots défilant en continu (pause au survol). La liste est
 * dupliquée pour une boucle sans saut ; seul `label` est lu par les
 * technologies d'assistance.
 */
export function Marquee({ items, label }: MarqueeProps) {
  const row = (copy: number) => (
    <div key={copy} className="flex shrink-0 items-center">
      {items.map((item) => (
        <Fragment key={item}>
          <span className="px-6 font-display text-display-m font-extrabold whitespace-nowrap text-heading md:px-10">
            {item}
          </span>
          <span className="size-3 shrink-0 rounded-full bg-sage" />
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className="tone-inverse overflow-hidden bg-forest py-6 text-ink md:py-8">
      <p className="sr-only">{label}</p>
      <div aria-hidden="true" className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map(row)}
      </div>
    </div>
  );
}
