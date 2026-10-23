import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // L'ancienne page À propos est désormais intégrée à l'accueil.
  async redirects() {
    return [{ source: "/a-propos", destination: "/", permanent: true }];
  },
  // En-têtes de sécurité de base, sur toutes les pages
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
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
