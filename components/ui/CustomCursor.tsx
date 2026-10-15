"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [role='button'], summary, label";

/**
 * Curseur personnalisé : un point qui suit la souris et un cercle qui le suit
 * avec un léger retard, agrandi au survol des liens et boutons.
 * Activé au premier mouvement d'une vraie souris (ou d'un pavé tactile), sans
 * dépendre des réglages détectés par le navigateur. Avec « réduire les
 * animations », le cercle suit la souris sans retard ; au doigt ou au stylet,
 * le curseur du système est conservé.
 */
export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cursor = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!cursor || !dot || !ring) return;

    const html = document.documentElement;

    const target = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };
    let started = false;
    let frame = 0;

    // État du curseur selon l'élément survolé
    const update = (element: Element | null) => {
      const overVideo = element?.tagName === "IFRAME";
      cursor.dataset.visible = String(started && !overVideo);
      cursor.dataset.hover = String(Boolean(element?.closest(INTERACTIVE)));
      cursor.dataset.inverse = String(Boolean(element?.closest(".tone-inverse")));
    };

    const onMove = (event: PointerEvent) => {
      // Au doigt ou au stylet, on rend la main au curseur du système
      // (type vide ou inconnu : traité comme une souris)
      if (event.pointerType === "touch" || event.pointerType === "pen") {
        cursor.dataset.visible = "false";
        html.classList.remove("has-custom-cursor");
        return;
      }
      html.classList.add("has-custom-cursor");
      target.x = event.clientX;
      target.y = event.clientY;
      if (!started) {
        started = true;
        ringPos.x = target.x;
        ringPos.y = target.y;
      }
      update(event.target as Element);
    };
    // Au défilement, l'élément sous la souris change sans mouvement de souris
    const onScroll = () => started && update(document.elementFromPoint(target.x, target.y));
    const onLeave = () => (cursor.dataset.visible = "false");
    const onDown = (event: PointerEvent) => {
      if (event.pointerType === "touch" || event.pointerType === "pen") {
        cursor.dataset.visible = "false";
        html.classList.remove("has-custom-cursor");
        return;
      }
      cursor.dataset.pressed = "true";
    };
    const onUp = () => (cursor.dataset.pressed = "false");

    const tick = () => {
      // Retard du cercle supprimé si l'utilisateur réduit les animations
      const ease = reduced.matches ? 1 : 0.18;
      ringPos.x += (target.x - ringPos.x) * ease;
      ringPos.y += (target.y - ringPos.y) * ease;
      dot.style.translate = `${target.x}px ${target.y}px`;
      ring.style.translate = `${ringPos.x}px ${ringPos.y}px`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    html.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      html.removeEventListener("mouseleave", onLeave);
      html.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      data-visible="false"
      className="group pointer-events-none fixed inset-0 z-60 opacity-0 transition-opacity duration-(--duration-base) data-[visible=true]:opacity-100"
    >
      <div
        ref={ringRef}
        className="absolute top-0 left-0 -mt-5 -ml-5 size-10 rounded-full border-[1.5px] border-forest transition-[scale,background-color,border-color] duration-(--duration-base) ease-smooth group-data-[hover=true]:scale-160 group-data-[hover=true]:border-transparent group-data-[hover=true]:bg-sage/50 group-data-[inverse=true]:border-cream group-data-[inverse=true]:group-data-[hover=true]:bg-cream/20 group-data-[pressed=true]:scale-75"
      />
      <div
        ref={dotRef}
        className="absolute top-0 left-0 -mt-1 -ml-1 size-2 rounded-full bg-forest transition-[opacity,background-color] duration-(--duration-fast) group-data-[hover=true]:opacity-0 group-data-[inverse=true]:bg-cream"
      />
    </div>
  );
}
