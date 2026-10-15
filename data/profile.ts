import type { ToolIconKey } from "@/components/about/toolIcons";

/** Compétences, langues et formations complémentaires. */

export type Tool = {
  name: string;
  /** Site de l'outil, ouvert dans un nouvel onglet. */
  url: string;
} & (
  /** Logo issu de components/about/toolIcons.ts */
  | { icon: ToolIconKey; background?: string }
  /** Logo fourni en image (public/images/tools) : « cover » remplit la tuile, « contain » laisse une marge */
  | { image: { src: string; fit: "cover" | "contain" }; background?: string }
  /** Monogramme dans la couleur de la marque (logo indisponible) */
  | { monogram: string; background: string }
);

export const tools: { category: string; items: Tool[] }[] = [
  {
    category: "Bureautique",
    items: [
      { name: "Microsoft Office", url: "https://www.microsoft.com/fr-fr/microsoft-365", image: { src: "/images/tools/microsoft-office.webp", fit: "contain" }, background: "#FFFFFF" },
      { name: "Google Workspace", url: "https://workspace.google.com/intl/fr/", image: { src: "/images/tools/google.webp", fit: "contain" }, background: "#FFFFFF" },
    ],
  },
  {
    category: "Gestion de projet",
    items: [
      { name: "Trello", url: "https://trello.com/", image: { src: "/images/tools/trello.webp", fit: "cover" } },
      { name: "Monday", url: "https://monday.com/", image: { src: "/images/tools/monday.webp", fit: "contain" }, background: "#FFFFFF" },
      { name: "Notion", url: "https://www.notion.com/", icon: "notion" },
      {
        name: "HtoH",
        url: "https://apps.apple.com/fr/app/htoh-travel-superapp/id1584656427",
        image: { src: "/images/tools/htoh.webp", fit: "cover" },
        background: "#FFFFFF",
      },
    ],
  },
  {
    category: "Création multimédia",
    items: [
      { name: "Adobe Creative Cloud", url: "https://www.adobe.com/fr/creativecloud.html", image: { src: "/images/tools/adobe-creative-cloud.webp", fit: "cover" } },
      { name: "Canva", url: "https://www.canva.com/", image: { src: "/images/tools/canva.webp", fit: "cover" } },
      { name: "CapCut", url: "https://www.capcut.com/", image: { src: "/images/tools/capcut.webp", fit: "contain" }, background: "#000000" },
    ],
  },
  {
    category: "Sites web",
    items: [
      { name: "WordPress", url: "https://wordpress.org/", icon: "wordpress" },
      { name: "Squarespace", url: "https://www.squarespace.com/", icon: "squarespace" },
      { name: "OVHcloud", url: "https://www.ovhcloud.com/fr/", icon: "ovh" },
    ],
  },
  {
    category: "E-mailing & CRM",
    items: [
      { name: "Mailchimp", url: "https://mailchimp.com/", icon: "mailchimp" },
      { name: "Brevo", url: "https://www.brevo.com/fr/", image: { src: "/images/tools/brevo.webp", fit: "cover" } },
    ],
  },
  {
    category: "Réseaux sociaux",
    items: [
      { name: "Instagram", url: "https://www.instagram.com/", icon: "instagram", background: "linear-gradient(45deg, #F58529, #DD2A7B 50%, #8134AF)" },
      { name: "LinkedIn", url: "https://www.linkedin.com/", monogram: "in", background: "#0A66C2" },
      { name: "Facebook", url: "https://www.facebook.com/", icon: "facebook" },
      { name: "TikTok", url: "https://www.tiktok.com/", icon: "tiktok" },
      { name: "YouTube", url: "https://www.youtube.com/", icon: "youtube" },
      { name: "Meta", url: "https://www.meta.com/", icon: "meta" },
      { name: "Metricool", url: "https://metricool.com/fr/", image: { src: "/images/tools/metricool.webp", fit: "cover" } },
    ],
  },
  {
    category: "Intelligence artificielle",
    items: [
      { name: "Claude", url: "https://claude.ai/", icon: "claude" },
      { name: "ChatGPT", url: "https://chatgpt.com/", image: { src: "/images/tools/chatgpt.webp", fit: "contain" }, background: "#000000" },
    ],
  },
];

export const softSkills = [
  "Organisation et sens du détail",
  "Sens du service",
  "Adaptabilité et réactivité",
  "Aisance relationnelle",
  "Gestion des priorités et du temps",
  "Proactivité et sens des solutions",
];

/** `cefr` : position sur l'échelle A1 → C2 (1 à 6) ; 4.5 = B2+. */
export const languages = [
  { name: "Français", level: "Langue maternelle", cefr: 6 },
  { name: "Anglais", level: "B2+ — intermédiaire avancé", cefr: 4.5 },
];

export const trainings = [
  "Événements responsables : Fresque du Climat, Fresque du Tourisme et « Construire les bases d’une démarche durable »",
  "Management : « Comment être un bon manager »",
];
