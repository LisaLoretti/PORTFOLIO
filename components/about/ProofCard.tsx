import Link from "next/link";
import type { resolveProof } from "@/data/skills";

type Proof = ReturnType<typeof resolveProof>;

/**
 * Exemple concret d'une compétence, en ligne compacte : nom et précision.
 * Toute la ligne est cliquable quand l'exemple a une page dédiée
 * (Parcours ou Réalisations).
 */
export function ProofCard({ proof }: { proof: Proof }) {
  return (
    <article className="group/proof relative flex h-full items-center gap-4 rounded-r-lg border-l-2 border-sage px-4 py-2 transition-colors duration-(--duration-base) ease-smooth hover:border-olive hover:bg-sand">
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <h5 className="font-display text-small font-bold text-heading">
          {proof.href ? (
            <Link
              href={proof.href}
              className="rounded-sm after:absolute after:inset-0 after:rounded-r-lg after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-forest"
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
