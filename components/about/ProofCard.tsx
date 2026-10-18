import Image from "next/image";
import Link from "next/link";
import type { resolveProof } from "@/data/skills";

type Proof = ReturnType<typeof resolveProof>;

/** Visuel de la carte : photo, logo sur fond blanc, illustration ou pictogramme. */
function ProofVisual({ proof }: { proof: Proof }) {
  const { visual } = proof;
  if (visual.kind === "photo") {
    return (
      <Image
        src={visual.src}
        alt=""
        fill
        sizes="4.5rem"
        style={{ objectPosition: visual.position }}
        className="object-cover transition-transform duration-(--duration-slow) ease-smooth group-hover/proof:scale-110"
      />
    );
  }
  if (visual.kind === "logo") {
    return (
      <span className="absolute inset-0 flex items-center justify-center bg-white p-2">
        <Image src={visual.src} alt="" width={240} height={120} sizes="4.5rem" className="max-h-full w-auto max-w-full object-contain" />
      </span>
    );
  }
  // Séries de vidéos : téléphone avec bouton lecture
  if (visual.kind === "phones") {
    return (
      <span className="absolute inset-0 flex items-center justify-center bg-forest">
        <span className="flex h-[70%] aspect-9/16 items-center justify-center rounded-md border-2 border-charcoal bg-cream">
          <span className="flex size-5 items-center justify-center rounded-full bg-forest text-cream">
            <svg aria-hidden="true" viewBox="0 0 16 16" className="size-2.5 translate-x-px fill-current">
              <path d="M4 2.5v11l9-5.5-9-5.5Z" />
            </svg>
          </span>
        </span>
      </span>
    );
  }
  // Sans visuel : pictogramme « code » sur fond vert forêt
  return (
    <span className="absolute inset-0 flex items-center justify-center bg-forest text-sage">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-7">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
      </svg>
    </span>
  );
}

/**
 * Exemple concret d'une compétence, en ligne compacte : vignette à gauche,
 * nom et précision à droite. Toute la ligne est cliquable quand l'exemple a
 * une page dédiée (Parcours ou Réalisations).
 */
export function ProofCard({ proof }: { proof: Proof }) {
  return (
    <article className="group/proof relative flex h-full items-center gap-4 rounded-lg p-2 transition-colors duration-(--duration-base) ease-smooth hover:bg-sand">
      <div aria-hidden="true" className="relative size-16 shrink-0 overflow-clip rounded-md bg-sage ring-1 ring-line sm:size-[4.5rem]">
        <ProofVisual proof={proof} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <h5 className="font-display text-small font-bold text-heading">
          {proof.href ? (
            <Link
              href={proof.href}
              className="rounded-sm after:absolute after:inset-0 after:rounded-lg after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-forest"
            >
              {proof.label}
              <span className="sr-only"> : voir sur la page {proof.page}</span>
            </Link>
          ) : (
            proof.label
          )}
        </h5>
        {proof.detail && <p className="text-small leading-snug text-ink-muted">{proof.detail}</p>}
      </div>
      {proof.href && (
        <span
          aria-hidden="true"
          className="shrink-0 pr-1 text-olive transition-transform duration-(--duration-base) ease-smooth group-hover/proof:translate-x-1"
        >
          →
        </span>
      )}
    </article>
  );
}
