import Image from "next/image";
import Link from "next/link";
import { PhonesCover } from "@/components/projects/PhonesCover";
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
        sizes="(min-width: 64rem) 22vw, (min-width: 40rem) 45vw, 100vw"
        style={{ objectPosition: visual.position }}
        className="object-cover transition-transform duration-(--duration-slow) ease-smooth group-hover/proof:scale-[1.04]"
      />
    );
  }
  if (visual.kind === "logo") {
    return (
      <span className="absolute inset-0 flex items-center justify-center bg-white p-5 sm:p-8">
        <Image src={visual.src} alt="" width={240} height={120} sizes="12rem" className="max-h-full w-auto max-w-[60%] object-contain sm:max-w-[70%]" />
      </span>
    );
  }
  if (visual.kind === "phones") return <PhonesCover />;
  // Sans visuel : pictogramme « code » sur fond vert forêt
  return (
    <span className="absolute inset-0 flex items-center justify-center bg-forest text-sage">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-8 sm:size-12">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
      </svg>
    </span>
  );
}

/**
 * Exemple concret d'une compétence : visuel, nom et précision. Toute la carte
 * est cliquable quand l'exemple a une page dédiée (Parcours ou Réalisations).
 */
export function ProofCard({ proof }: { proof: Proof }) {
  return (
    <article className="group/proof relative flex h-full flex-col overflow-clip rounded-lg bg-sand/60 ring-1 ring-line transition-[translate,box-shadow] duration-(--duration-base) ease-smooth hover:-translate-y-1 hover:shadow-soft">
      {/* Bandeau plus bas sur mobile pour garder des cartes compactes */}
      <div aria-hidden="true" className="relative aspect-[5/2] overflow-clip bg-sage sm:aspect-video">
        <ProofVisual proof={proof} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1.5 p-4">
        <h5 className="font-display text-body font-bold text-heading">
          {proof.href ? (
            <Link
              href={proof.href}
              className="rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
            >
              {proof.label}
              <span className="sr-only"> : voir sur la page {proof.page}</span>
            </Link>
          ) : (
            proof.label
          )}
        </h5>
        {proof.detail && <p className="text-small text-ink-muted">{proof.detail}</p>}
        {proof.href && (
          <span aria-hidden="true" className="mt-auto pt-2 text-caption font-medium tracking-normal text-olive">
            Voir sur la page {proof.page}{" "}
            <span className="inline-block transition-transform duration-(--duration-base) ease-smooth group-hover/proof:translate-x-1">
              →
            </span>
          </span>
        )}
      </div>
    </article>
  );
}
