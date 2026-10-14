"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

type YouTubeThumbnailProps = {
  youtubeId: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * Miniature d'origine d'une vidéo YouTube, en haute définition si elle existe.
 * Sinon, repli sur la miniature standard (toujours disponible), recadrée en
 * 16:9 par le conteneur pour supprimer ses bandes noires.
 */
export function YouTubeThumbnail({ youtubeId, alt, sizes, priority, className }: YouTubeThumbnailProps) {
  const [quality, setQuality] = useState<"maxresdefault" | "hqdefault">("maxresdefault");
  const fallback = () => setQuality("hqdefault");

  return (
    <Image
      src={`https://i.ytimg.com/vi/${youtubeId}/${quality}.jpg`}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      unoptimized
      // YouTube renvoie une image grise de 120 px quand la HD n'existe pas.
      onLoad={(event) => quality === "maxresdefault" && event.currentTarget.naturalWidth <= 120 && fallback()}
      onError={() => quality === "maxresdefault" && fallback()}
      className={cn("object-cover", className)}
    />
  );
}
