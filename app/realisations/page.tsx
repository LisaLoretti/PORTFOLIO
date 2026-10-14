import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { demoProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Sélection de projets.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Réalisations — page provisoire"
        title="Réalisations"
        intro="Cette page présentera mes projets. Les cartes ci-dessous sont des données de démonstration servant à valider la mise en forme."
      />
      <Section spacing="none" className="pb-section">
        <Container>
          <p className="mb-8 inline-flex rounded-full border border-line-strong px-4 py-1.5 text-caption font-medium uppercase">
            Données de démonstration
          </p>
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
            {demoProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} priority={index === 0} className={index % 2 === 1 ? "md:mt-24" : undefined} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
