import type { Metadata } from "next";
import { ContactBand } from "@/components/layout/ContactBand";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ProjectFeature } from "@/components/projects/ProjectFeature";
import { ProjectIndex } from "@/components/projects/ProjectIndex";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Assemblée Générale 2026, Village des séjours linguistiques et éducatifs, tournée à la rencontre des membres et série de vidéos de conseils : quelques réalisations en événementiel et communication chez L’Office.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Barre de progression de lecture, sous la navigation */}
      <div
        aria-hidden="true"
        className="scroll-progress pointer-events-none fixed inset-x-0 top-(--spacing-header) z-30 h-1 bg-olive"
      />

      <PageHeader
        eyebrow="Mes réalisations"
        title="De l’idée à la concrétisation"
        titleSize="display-m"
        intro="Événementiel, communication, marketing et création de contenus : découvrez quatre projets auxquels j’ai contribué, de la réflexion stratégique à leur mise en œuvre opérationnelle."
        aside={<ProjectIndex projects={projects} />}
      />

      {projects.map((project, index) => {
        const tone = index % 2 === 0 ? "sand" : "cream";
        return (
          <Section key={project.slug} tone={tone} spacing="compact" className="overflow-x-clip">
            <Container>
              <ProjectFeature project={project} index={index} total={projects.length} />
            </Container>
          </Section>
        );
      })}

      <ContactBand
        title="Et si nous travaillions ensemble ?"
        actions={
          <>
            <Button href="/contact" variant="light" arrow>
              Contactez-moi
            </Button>
            {siteConfig.contact.cv && (
              <Button href={siteConfig.contact.cv} variant="lightOutline" download>
                Télécharger mon CV
              </Button>
            )}
          </>
        }
      />
    </>
  );
}
