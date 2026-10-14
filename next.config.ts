import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // L'ancienne page À propos est désormais intégrée à l'accueil.
  async redirects() {
    return [{ source: "/a-propos", destination: "/", permanent: true }];
  },
  images: {
    // Miniatures des vidéos YouTube des réalisations.
    remotePatterns: [new URL("https://i.ytimg.com/vi/**")],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
