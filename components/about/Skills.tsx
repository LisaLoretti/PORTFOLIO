import type { CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow, Heading } from "@/components/ui/Typography";
import { languages, softSkills, tools, trainings } from "@/data/profile";
import { resolveProof, skillAxes } from "@/data/skills";
import { ProofCard } from "./ProofCard";
import { ToolBadge } from "./ToolBadge";

const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

/**
 * Section « Mes compétences en action » : domaines de compétences
 * (data/skills.ts) avec compétences clés et preuves reliées au parcours et
 * aux réalisations, puis outils, savoir-être, langues et formations.
 */
export function Skills() {
  return (
    <Section tone="sand" aria-labelledby="competences-titre" className="overflow-x-clip">
      <Container className="flex flex-col gap-16">
        <div className="reveal flex flex-col gap-4">
          <Eyebrow>Savoir-faire & savoir-être</Eyebrow>
          <Heading id="competences-titre" size="display-l" underline>
            Mes compétences en action
          </Heading>
        </div>

        {/* Les domaines : en-tête, compétences clés et preuves concrètes */}
        <ol className="flex flex-col gap-6 lg:gap-8">
          {skillAxes.map((axis) => {
            return (
              <li
                key={axis.id}
                id={axis.id}
                aria-labelledby={`${axis.id}-titre`}
                className="reveal-card flex scroll-mt-[calc(var(--spacing-header)+2rem)] flex-col gap-6 rounded-xl bg-cream p-6 shadow-soft ring-1 ring-line sm:p-8 lg:gap-8 lg:p-10"
              >
                {/* En-tête du domaine */}
                <div className="flex min-w-0 items-baseline gap-4 sm:gap-6">
                  <span
                    aria-hidden="true"
                    className="font-display text-[clamp(2.75rem,2rem+2.5vw,4.5rem)] leading-none font-extrabold text-sage"
                  >
                    {axis.number}
                  </span>
                  <h3
                    id={`${axis.id}-titre`}
                    className="min-w-0 font-display text-[clamp(1.5rem,1.15rem+1.1vw,2.25rem)] leading-tight font-bold hyphens-auto text-heading"
                  >
                    {axis.title}
                  </h3>
                </div>

                {/* Compétences clés */}
                <ul className="grid gap-x-8 gap-y-3 md:grid-cols-2">
                  {axis.skills.map((skill) => (
                    <li key={skill} className="flex gap-3 text-body">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-olive" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>

                {axis.proofs.length > 0 && (
                  <section aria-labelledby={`${axis.id}-exemples`} className="flex flex-col gap-4 border-t border-line pt-6">
                    <h4 id={`${axis.id}-exemples`} className="text-caption font-medium uppercase text-ink-muted">
                      Quelques réalisations
                    </h4>
                    <ul className="grid gap-x-6 gap-y-2 md:grid-cols-2">
                      {axis.proofs.map((raw) => {
                        const proof = resolveProof(raw);
                        return (
                          <li key={proof.key}>
                            <ProofCard proof={proof} />
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                )}
              </li>
            );
          })}
        </ol>

        <div className="grid gap-12 border-t border-line-strong pt-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <Heading as="h3" size="title">
              Outils
            </Heading>
            <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {tools.map((group) => (
                <div
                  key={group.category}
                  className={`flex flex-col gap-4 border-t border-line pt-4 ${group.items.length > 4 ? "sm:col-span-2" : ""}`}
                >
                  <dt className="reveal-left text-caption font-medium uppercase text-ink-muted">{group.category}</dt>
                  <dd>
                    <ul className="reveal-bounce-children flex flex-wrap gap-x-3 gap-y-4">
                      {group.items.map((tool) => (
                        <ToolBadge key={tool.name} tool={tool} />
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-12 lg:col-span-4 lg:col-start-9">
            <div className="reveal flex flex-col gap-4">
              <Heading as="h3" size="title">
                Savoir-être
              </Heading>
              <ul className="reveal-bounce-children flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-sage px-4 py-1.5 text-small text-forest transition-[background-color,color,translate] duration-(--duration-base) ease-smooth hover:-translate-y-0.5 hover:bg-forest hover:text-cream"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal flex flex-col gap-4">
              <Heading as="h3" size="title">
                Langues
              </Heading>
              <dl className="flex flex-col gap-5">
                {languages.map((language) => (
                  <div key={language.name} className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="font-medium text-forest">{language.name}</dt>
                      <dd className="text-small text-ink-muted">{language.level}</dd>
                    </div>
                    {/* Jauge A1 → C2 : chaque case se remplit l'une après l'autre au défilement */}
                    <div aria-hidden="true" className="grid grid-cols-6 gap-1">
                      {CEFR_LEVELS.map((level, index) => (
                        <span key={level} className="flex flex-col gap-1">
                          <span className="relative h-2 overflow-clip rounded-full bg-line">
                            <span
                              className="scroll-fill absolute inset-0 rounded-full bg-olive"
                              style={
                                {
                                  "--fill": Math.max(0, Math.min(1, language.cefr - index)),
                                  animationRange: `cover ${5 + index * 4}% cover ${20 + index * 4}%`,
                                } as CSSProperties
                              }
                            />
                          </span>
                          <span className="text-caption tracking-normal text-ink-muted">{level}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div className="reveal flex flex-col gap-4">
              <Heading as="h3" size="title">
                Formations complémentaires
              </Heading>
              <ul className="flex list-disc flex-col gap-2 pl-5 text-small marker:text-olive">
                {trainings.map((training) => (
                  <li key={training} className="reveal-right">
                    {training}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
