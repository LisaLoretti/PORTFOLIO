import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description: "Me contacter pour un projet en événementiel ou en communication.",
};

export default function ContactPage() {
  return (
    <PageHeader
      eyebrow="Contact"
      title="Parlons de votre projet"
      intro="De retour en France en octobre, je cherche ma prochaine aventure professionnelle. Le formulaire et mes coordonnées arrivent très bientôt."
    />
  );
}
