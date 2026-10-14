import type { ToolIconKey } from "@/components/about/toolIcons";

/** Compétences, langues et formations complémentaires. */

export type Tool =
  /** Logo issu de components/about/toolIcons.ts */
  | { name: string; icon: ToolIconKey; background?: string }
  /** Logo fourni en image (public/images/tools) : « cover » remplit la tuile, « contain » laisse une marge */
  | { name: string; image: { src: string; fit: "cover" | "contain" }; background?: string }
  /** Monogramme dans la couleur de la marque (logo indisponible) */
  | { name: string; monogram: string; background: string };

export const tools: { category: string; items: Tool[] }[] = [
  {
    category: "Bureautique",
    items: [
      { name: "Microsoft Office", image: { src: "/images/tools/microsoft-office.webp", fit: "contain" }, background: "#FFFFFF" },
      { name: "Google Workspace", image: { src: "/images/tools/google.webp", fit: "contain" }, background: "#FFFFFF" },
    ],
  },
  {
    category: "Gestion de projet",
    items: [
      { name: "Trello", image: { src: "/images/tools/trello.webp", fit: "cover" } },
      { name: "Monday", image: { src: "/images/tools/monday.webp", fit: "contain" }, background: "#FFFFFF" },
      { name: "Notion", icon: "notion" },
    ],
  },
  {
    category: "Création multimédia",
    items: [
      { name: "Adobe Creative Cloud", image: { src: "/images/tools/adobe-creative-cloud.webp", fit: "cover" } },
      { name: "Canva", image: { src: "/images/tools/canva.webp", fit: "cover" } },
      { name: "CapCut", image: { src: "/images/tools/capcut.webp", fit: "contain" }, background: "#000000" },
    ],
  },
  {
    category: "Sites web",
    items: [
      { name: "WordPress", icon: "wordpress" },
      { name: "Squarespace", icon: "squarespace" },
      { name: "OVHcloud", icon: "ovh" },
    ],
  },
  {
    category: "E-mailing & CRM",
    items: [
      { name: "Mailchimp", icon: "mailchimp" },
      { name: "Brevo", image: { src: "/images/tools/brevo.webp", fit: "cover" } },
    ],
  },
  {
    category: "Réseaux sociaux",
    items: [
      { name: "Instagram", icon: "instagram", background: "linear-gradient(45deg, #F58529, #DD2A7B 50%, #8134AF)" },
      { name: "LinkedIn", monogram: "in", background: "#0A66C2" },
      { name: "Facebook", icon: "facebook" },
      { name: "TikTok", icon: "tiktok" },
      { name: "YouTube", icon: "youtube" },
      { name: "Meta", icon: "meta" },
      { name: "Metricool", image: { src: "/images/tools/metricool.webp", fit: "cover" } },
    ],
  },
  {
    category: "Intelligence artificielle",
    items: [
      { name: "Claude", icon: "claude" },
      { name: "ChatGPT", image: { src: "/images/tools/chatgpt.webp", fit: "contain" }, background: "#000000" },
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
