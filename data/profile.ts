import type { ToolIconKey } from "@/components/about/toolIcons";

/** Compétences, langues et formations complémentaires. */

export type Tool =
  /** Logo issu de components/about/toolIcons.ts */
  | { name: string; icon: ToolIconKey; background?: string }
  /** Monogramme dans la couleur de la marque (logo absent de Simple Icons) */
  | { name: string; monogram: string; background: string };

export const tools: { category: string; items: Tool[] }[] = [
  {
    category: "Bureautique",
    items: [
      { name: "Microsoft Office", monogram: "Of", background: "#D83B01" },
      { name: "Google Workspace", icon: "google" },
    ],
  },
  {
    category: "Gestion de projet",
    items: [
      { name: "Trello", icon: "trello" },
      { name: "Monday", monogram: "m", background: "#6161FF" },
      { name: "Notion", icon: "notion" },
    ],
  },
  {
    category: "Création multimédia",
    items: [
      { name: "Adobe Creative Cloud", monogram: "Cc", background: "#FA0F00" },
      { name: "Canva", monogram: "C", background: "#00C4CC" },
      { name: "CapCut", monogram: "Cc", background: "#000000" },
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
      { name: "Brevo", icon: "brevo" },
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
      { name: "Metricool", monogram: "M", background: "#183D2E" },
    ],
  },
  {
    category: "Intelligence artificielle",
    items: [
      { name: "Claude", icon: "claude" },
      { name: "ChatGPT", monogram: "AI", background: "#10A37F" },
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

export const languages = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais", level: "B2+ — intermédiaire avancé" },
];

export const trainings = [
  "Événements responsables : Fresque du Climat, Fresque du Tourisme et « Construire les bases d’une démarche durable »",
  "Management : « Comment être un bon manager »",
];
