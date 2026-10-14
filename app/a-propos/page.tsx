import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "À propos",
  description: "Présentation, parcours et approche.",
};

export default function AboutPage() {
  return (
    <PageHeader
      eyebrow="À propos — page provisoire"
      title="À propos"
      intro="Cette page présentera mon parcours, mes compétences et ma façon de travailler."
    />
  );
}
