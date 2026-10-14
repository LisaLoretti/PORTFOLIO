import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ProjectFeature } from "@/components/projects/ProjectFeature";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Assemblée Générale 2026 de L’Office et Village des séjours linguistiques et éducatifs : quelques réalisations en événementiel et communication.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Réalisations"
        title="Quelques réalisations"
        intro="Des événements et des projets collectifs, de l’idée à leur réalisation."
      />
      <Section spacing="none" className="pb-section">
        <Container className="flex flex-col gap-section">
          {projects.map((project, index) => (
            <ProjectFeature key={project.slug} project={project} index={index} />
          ))}
        </Container>
      </Section>
    </>
  );
}
