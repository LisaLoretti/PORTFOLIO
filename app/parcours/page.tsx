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

// Du plus récent au plus ancien
const recentFirst = [...parcours].reverse();
const groups = [
  { id: "experiences", title: "Expériences", steps: recentFirst.filter((step) => step.kind !== "Formation") },
  { id: "formations", title: "Formations", steps: recentFirst.filter((step) => step.kind === "Formation") },
];

export default function ParcoursPage() {
  return (
    <>
      <PageHeader
        eyebrow="Parcours"
        title="Mon parcours"
        intro="Mes expériences et mes formations en détail, de la plus récente à la plus ancienne."
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

      <Section spacing="none" className="pb-section-compact">
        <Container>
          <div className="max-w-xl">
            <ParcoursSummary steps={parcours} />
          </div>
        </Container>
      </Section>

      {groups.map((group, index) => (
        <Section
          key={group.id}
          id={group.id}
          tone={index % 2 === 0 ? "sand" : "cream"}
          aria-labelledby={`${group.id}-titre`}
          className="scroll-mt-[var(--spacing-header)] overflow-x-clip"
        >
          <Container className="flex flex-col gap-12">
            <div className="reveal flex flex-col gap-4">
              <Eyebrow>
                {group.steps.length} étape{group.steps.length > 1 ? "s" : ""}
              </Eyebrow>
              <Heading id={`${group.id}-titre`} size="display-l">
                {group.title}
              </Heading>
            </div>
            <div className="flex flex-col gap-16">
              {group.steps.map((step) => (
                <ParcoursEntry key={step.slug} step={step} />
              ))}
            </div>
          </Container>
        </Section>
      ))}
    </>
  );
}
