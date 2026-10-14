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
  contact: {
    email: "lisa.lisaloretti@gmail.com",
    /** Affichage lisible et format international pour le lien tel:. */
    phone: { label: "+33 6 51 82 15 49", href: "tel:+33651821549" },
    location: "France",
    availability: "Disponible à partir de novembre 2026",
    linkedin: "https://www.linkedin.com/in/lisa-loretti-8040b4223/",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/** Pages principales, partagées par la navigation et le footer. */
export const mainNav: NavItem[] = [
  { label: "À propos", href: "/" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Contact", href: "/contact" },
];

export type SocialLink = {
  label: string;
  href: string;
};

/**
 * Réseaux sociaux, affichés dans le footer et sur la page Contact.
 * Ajouter ici les entrées { label, href }.
 */
export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: siteConfig.contact.linkedin },
];
