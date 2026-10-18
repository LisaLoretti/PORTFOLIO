import type { CSSProperties } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow, Heading } from "@/components/ui/Typography";
import Link from "next/link";
import { languages, softSkills, tools, trainings } from "@/data/profile";
import { resolveProof, skillAxes } from "@/data/skills";
import { ToolBadge } from "./ToolBadge";

const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

/**
 * Section « Mes compétences en action » : 4 domaines de compétences
 * (data/skills.ts) avec sous-catégories dépliables et preuves reliées au
 * parcours et aux réalisations, puis outils, savoir-être, langues et formations.
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

        {/* Les 4 domaines : présentation, sous-catégories dépliables et preuves concrètes */}
        <ol className="flex flex-col gap-6 lg:gap-8">
          {skillAxes.map((axis) => {
            const count = axis.groups.reduce((total, group) => total + group.skills.length, 0);
            return (
              <li
                key={axis.id}
                id={axis.id}
                aria-labelledby={`${axis.id}-titre`}
                className="reveal-card grid grid-cols-1 scroll-mt-[calc(var(--spacing-header)+2rem)] gap-8 rounded-xl bg-cream p-6 shadow-soft ring-1 ring-line sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10"
              >
                {/* Présentation du domaine */}
                <div className="flex flex-col gap-5 lg:col-span-5">
                  <span aria-hidden="true" className="font-display text-[clamp(3rem,2.2rem+3vw,5rem)] leading-none font-extrabold text-sage">
                    {axis.number}
                  </span>
                  <h3 id={`${axis.id}-titre`} className="font-display text-[clamp(1.6rem,1.2rem+1.2vw,2.25rem)] leading-tight font-bold text-heading">
                    {axis.title}
                  </h3>
                  <p className="max-w-prose text-body text-ink-muted">{axis.intro}</p>
                  <p className="text-caption font-medium uppercase text-olive">
                    {axis.groups.length} sous-catégories · {count} compétences
                  </p>

                  {axis.proofs.length > 0 && (
                    <div className="mt-2 flex flex-col gap-3 border-t border-line pt-5">
                      <p className="text-caption font-medium uppercase text-ink-muted">Quelques réalisations</p>
                      <ul className="flex flex-col gap-2">
                        {axis.proofs.map((raw) => {
                          const proof = resolveProof(raw);
                          const content = (
                            <>
                              <span
                                aria-hidden="true"
                                className="text-olive transition-transform duration-(--duration-base) ease-smooth group-hover/proof:translate-x-1"
                              >
                                →
                              </span>
                              <span>
                                <span className="font-medium text-forest">{proof.label}</span>
                                {proof.detail && <span className="text-ink-muted"> — {proof.detail}</span>}
                                {proof.page && <span className="text-ink-muted"> · {proof.page}</span>}
                              </span>
                            </>
                          );
                          return (
                            <li key={proof.key}>
                              {proof.href ? (
                                <Link
                                  href={proof.href}
                                  className="group/proof -mx-2 flex items-baseline gap-2 rounded-md px-2 py-1 text-small transition-colors duration-(--duration-base) ease-smooth hover:bg-sage/40"
                                >
                                  {content}
                                </Link>
                              ) : (
                                <p className="-mx-2 flex items-baseline gap-2 px-2 py-1 text-small">{content}</p>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Sous-catégories : accordéons natifs (clavier : Tab puis Entrée ou Espace) */}
                <div className="grid content-start items-start gap-3 sm:grid-cols-2 lg:col-span-7">
                  {axis.groups.map((group, groupIndex) => (
                    <details
                      key={group.title}
                      open={groupIndex === 0}
                      className="group/sub rounded-lg bg-sand/60 ring-1 ring-line transition-[background-color,box-shadow] duration-(--duration-base) ease-smooth open:bg-sand open:shadow-soft"
                    >
                      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 rounded-lg px-4 py-3 marker:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest [&::-webkit-details-marker]:hidden">
                        <h4 className="font-display text-body font-bold text-heading">{group.title}</h4>
                        <span className="flex shrink-0 items-center gap-2 text-caption font-medium text-ink-muted">
                          {group.skills.length}
                          <span className="sr-only"> compétences</span>
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="size-4 text-olive transition-transform duration-(--duration-base) ease-smooth group-open/sub:rotate-180"
                          >
                            <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </summary>
                      <ul className="flex flex-wrap gap-2 px-4 pt-1 pb-4">
                        {group.skills.map((skill) => (
                          <li key={skill} className="rounded-full bg-sage px-3 py-1 text-small text-forest">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
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
