"use client";

import Image from "next/image";
import { useState } from "react";

type VideoEmbedProps = {
  youtubeId: string;
  title: string;
  poster: { src: string; alt: string };
};

/**
 * Vidéo YouTube chargée uniquement au clic : aucune requête vers YouTube
 * tant que la personne ne lance pas la lecture (mode « nocookie »).
 */
export function VideoEmbed({ youtubeId, title, poster }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 size-full border-0"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group absolute inset-0 size-full cursor-pointer focus-visible:outline-offset-4"
    >
      <Image
        src={poster.src}
        alt={poster.alt}
        fill
        sizes="(min-width: 64rem) 55vw, 100vw"
        className="object-cover transition-transform duration-(--duration-slow) ease-smooth group-hover:scale-[1.03]"
      />
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-forest shadow-lift transition-transform duration-(--duration-base) ease-smooth group-hover:scale-110"
      >
        <svg viewBox="0 0 16 16" className="ml-1 size-6 fill-current">
          <path d="M4 2.5v11l9-5.5-9-5.5Z" />
        </svg>
      </span>
      <span className="sr-only">Lire la vidéo : {title}</span>
    </button>
  );
}
