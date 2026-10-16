/** Configuration globale du site. */
export const siteConfig = {
  name: "Lisa Loretti",
  /** Logo typographique. */
  logo: "Lisa Loretti",
  role: "Gestion de projets — événementiel, communication & marketing",
  title: "Lisa Loretti — Gestion de projets en événementiel, communication & marketing",
  /** Présentation affichée sous le nom, sur l'accueil. */
  intro:
    "Diplômée d’un Master en Management de l’Événementiel, je conçois, coordonne et pilote des projets en événementiel, communication et marketing, aussi bien en interne qu’en externe. De la réflexion stratégique à la mise en œuvre opérationnelle, j’allie créativité, organisation et sens du relationnel pour donner vie à des projets porteurs de sens et d’impact.",
  description:
    "Créer du lien, des rencontres et du partage. Valoriser les projets qui ont du sens. Portfolio de Lisa Loretti, gestion de projets en événementiel et communication.",
  locale: "fr_FR",
  contact: {
    email: "lisa.lisaloretti@gmail.com",
    /** Affichage lisible et format international pour le lien tel:. */
    phone: { label: "+33 6 51 82 15 49", href: "tel:+33651821549" },
    location: "France",
    availability: "Disponible dès novembre 2026",
    /** Types de contrat recherchés. */
    lookingFor: ["CDI", "CDD", "Freelance"],
    linkedin: "https://www.linkedin.com/in/lisa-loretti-8040b4223/",
    /** CV en PDF, à déposer dans public/ : le bouton « Télécharger mon CV » n'apparaît qu'une fois renseigné. */
    cv: null as string | null,
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/** Pages principales, partagées par la navigation et le footer. */
export const mainNav: NavItem[] = [
  { label: "Parcours", href: "/parcours" },
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
