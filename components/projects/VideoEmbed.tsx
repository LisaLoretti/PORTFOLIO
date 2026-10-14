type VideoEmbedProps = {
  youtubeId: string;
  title: string;
};

/**
 * Lecteur YouTube intégré tel quel : conserve le format et la miniature
 * d'origine de la vidéo. Chargé seulement à l'approche de l'écran (lazy),
 * en mode « nocookie ».
 */
export function VideoEmbed({ youtubeId, title }: VideoEmbedProps) {
  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
      title={`Vidéo : ${title}`}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="absolute inset-0 size-full border-0"
    />
  );
}
