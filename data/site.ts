/** Configuration globale du site. */
export const siteConfig = {
  name: "Lisa Loretti",
  /** Logo typographique. */
  logo: "Lisa Loretti",
  role: "Gestion de projets — événementiel & communication",
  title: "Lisa Loretti — Gestion de projets événementiel & communication",
  description:
    "Créer du lien, des rencontres et du partage. Valoriser les projets qui ont du sens. Portfolio de Lisa Loretti, gestion de projets en événementiel et communication.",
  locale: "fr_FR",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/** Pages principales, partagées par la navigation et le footer. */
export const mainNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Contact", href: "/contact" },
];

export type SocialLink = {
  label: string;
  href: string;
};

/**
 * Réseaux sociaux — volontairement vide tant que les comptes réels
 * ne sont pas renseignés. Ajouter ici les entrées { label, href }.
 */
export const socialLinks: SocialLink[] = [];
