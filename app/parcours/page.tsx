import type { Metadata } from "next";
import { ParcoursEntry } from "@/components/about/ParcoursEntry";
import { ParcoursSummary } from "@/components/about/ParcoursSummary";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Eyebrow, Heading } from "@/components/ui/Typography";
import { parcours } from "@/data/parcours";

export const metadata: Metadata = {
  title: "Parcours",
  description: "Mes expériences en événementiel et communication, et mes formations, en détail.",
};

// Étapes présentées sur cette page (le freelance n'y est pas détaillé)
const pageSteps = parcours.filter((step) => step.kind !== "Freelance");
// Étapes déjà classées du plus récent au plus ancien dans les données
const groups = [
  { id: "experiences", title: "Expériences", steps: pageSteps.filter((step) => step.kind !== "Formation") },
  { id: "formations", title: "Formations", steps: pageSteps.filter((step) => step.kind === "Formation") },
];

export default function ParcoursPage() {
  return (
    <>
      {/* Barre de progression de lecture, sous la navigation */}
      <div
        aria-hidden="true"
        className="scroll-progress pointer-events-none fixed inset-x-0 top-(--spacing-header) z-30 h-1 bg-olive"
      />

      <PageHeader
        eyebrow="Parcours"
        title="Mon parcours"
        intro="Mes expériences et mes formations en détail, de la plus récente à la plus ancienne."
        aside={<ParcoursSummary steps={pageSteps} />}
      >
        <nav aria-label="Sections du parcours" className="flex flex-wrap gap-3">
          {groups.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="rounded-full border border-line-strong px-5 py-2 text-small font-medium text-forest transition-colors duration-(--duration-base) hover:border-forest hover:bg-forest hover:text-cream"
            >
              {group.title} <span className="text-ink-muted">· {group.steps.length}</span>
            </a>
          ))}
        </nav>
      </PageHeader>

      {groups.map((group, index) => (
        <Section
          key={group.id}
          id={group.id}
          tone={index % 2 === 0 ? "sand" : "cream"}
          aria-labelledby={`${group.id}-titre`}
          className="scroll-mt-[var(--spacing-header)] overflow-x-clip"
        >
          <Container className="relative flex flex-col gap-12">
            {/* Grand mot en contour qui glisse au défilement */}
            <span
              aria-hidden="true"
              className="text-outline scroll-slide pointer-events-none absolute -top-10 left-gutter font-display text-[clamp(4.5rem,15vw,13rem)] leading-none font-extrabold whitespace-nowrap select-none"
            >
              {group.title}
            </span>
            <div className="reveal relative flex flex-col gap-4 pt-16 md:pt-24">
              <Eyebrow>
                {group.steps.length} étape{group.steps.length > 1 ? "s" : ""}
              </Eyebrow>
              <Heading id={`${group.id}-titre`} size="display-l" underline>
                {group.title}
              </Heading>
            </div>
            <div className="flex flex-col gap-10">
              {group.steps.map((step, stepIndex) => (
                <ParcoursEntry
                  key={step.slug}
                  step={step}
                  index={stepIndex}
                  total={group.steps.length}
                  surface={index % 2 === 0 ? "cream" : "sand"}
                />
              ))}
            </div>
          </Container>
        </Section>
      ))}
    </>
  );
}
