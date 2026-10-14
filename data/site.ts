/**
 * Configuration globale du site.
 * Les valeurs marquées « provisoire » sont à remplacer par le contenu définitif.
 */
export const siteConfig = {
  /** Logo typographique provisoire. */
  logo: "Portfolio",
  /** Titre par défaut (provisoire). */
  title: "Portfolio",
  description: "Portfolio personnel — design, projets et parcours.",
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
