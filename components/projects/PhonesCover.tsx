import { cn } from "@/lib/cn";

/** Contenu stylisé d'un écran : ampoule « conseil », lignes de texte et bouton lecture. */
function Screen({ lines }: { lines: string[] }) {
  return (
    <div className="flex size-full flex-col items-center justify-between gap-2 bg-cream px-[12%] py-[18%]">
      {/* Ampoule */}
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[38%] text-olive">
        <path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3Z" className="fill-current/25" />
        <path d="M9.5 19h5M10.5 21.5h3" />
      </svg>
      <div className="flex w-full flex-col items-center gap-[0.35rem]">
        {lines.map((width, index) => (
          <span key={index} className={cn("h-1.5 rounded-full", index === 0 ? "bg-forest" : "bg-sage")} style={{ width }} />
        ))}
      </div>
      <span className="flex aspect-square w-[34%] items-center justify-center rounded-full bg-forest text-cream">
        <svg aria-hidden="true" viewBox="0 0 16 16" className="w-[45%] translate-x-[8%] fill-current">
          <path d="M4 2.5v11l9-5.5-9-5.5Z" />
        </svg>
      </span>
    </div>
  );
}

/**
 * Couverture illustrée pour une série de vidéos verticales : trois téléphones
 * stylisés sur fond vert forêt, qui s'écartent au survol de la carte.
 */
export function PhonesCover() {
  const phone =
    "absolute bottom-[-6%] aspect-9/16 overflow-clip rounded-[1.1rem] border-[5px] border-charcoal shadow-lift transition-transform duration-(--duration-slow) ease-smooth";

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-clip bg-forest">
      {/* Formes organiques en arrière-plan */}
      <svg viewBox="0 0 600 600" className="absolute -top-1/3 -left-[12%] w-[55%] text-olive/40 transition-transform duration-(--duration-slow) ease-smooth group-hover:rotate-12">
        <path fill="currentColor" d="M452 98c62 52 104 140 92 222-12 83-77 160-158 196-81 37-178 33-247-12C70 459 28 375 40 292 51 209 116 127 196 84c80-42 194-38 256 14Z" />
      </svg>
      <svg viewBox="0 0 600 600" className="absolute -right-[10%] -bottom-1/2 w-[50%] text-sage/25 transition-transform duration-(--duration-slow) ease-smooth group-hover:-rotate-12">
        <path fill="currentColor" d="M452 98c62 52 104 140 92 222-12 83-77 160-158 196-81 37-178 33-247-12C70 459 28 375 40 292 51 209 116 127 196 84c80-42 194-38 256 14Z" />
      </svg>

      <div className={cn(phone, "left-[24%] w-[22%] -rotate-12 group-hover:-translate-x-[12%] group-hover:-rotate-[15deg]")}>
        <Screen lines={["70%", "90%", "55%"]} />
      </div>
      <div className={cn(phone, "right-[24%] w-[22%] rotate-12 group-hover:translate-x-[12%] group-hover:rotate-[15deg]")}>
        <Screen lines={["60%", "85%", "70%"]} />
      </div>
      <div className={cn(phone, "bottom-[-10%] left-1/2 w-[26%] -translate-x-1/2 group-hover:-translate-y-[4%]")}>
        <Screen lines={["80%", "95%", "65%"]} />
      </div>
    </div>
  );
}
