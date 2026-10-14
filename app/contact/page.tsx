import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description: "Formulaire et informations de contact.",
};

export default function ContactPage() {
  return (
    <PageHeader
      eyebrow="Contact — page provisoire"
      title="Parlons de votre projet"
      intro="Cette page accueillera le formulaire de contact et mes coordonnées. Le formulaire n'est pas encore disponible."
    />
  );
}
