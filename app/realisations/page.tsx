import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Quelques réalisations en événementiel et communication.",
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
        <Container>
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                priority={index === 0}
                className={index % 2 === 1 ? "md:mt-24" : undefined}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
