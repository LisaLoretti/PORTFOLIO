import Image from "next/image";
import { Skills } from "@/components/about/Skills";
import { Timeline } from "@/components/about/Timeline";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";
import { parcours } from "@/data/parcours";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Section spacing="none" className="relative overflow-hidden pt-section-compact pb-section">
        <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Portrait découpé dans une forme organique, posé sur la bulle verte */}
          <div className="relative w-56 justify-self-start motion-safe:animate-fade-up sm:w-72 lg:order-last lg:col-span-5 lg:w-full lg:max-w-md lg:justify-self-end">
            <svg
              aria-hidden="true"
              viewBox="20 40 540 520"
              preserveAspectRatio="none"
              className="absolute -inset-[8%] size-[116%] rotate-[-8deg] text-sage"
            >
              <path
                fill="currentColor"
                d="M452 98c62 52 104 140 92 222-12 83-77 160-158 196-81 37-178 33-247-12C70 459 28 375 40 292 51 209 116 127 196 84c80-42 194-38 256 14Z"
              />
            </svg>
            <div className="relative aspect-4/5 [mask-image:url(/images/forme-organique.svg)] [mask-repeat:no-repeat] [mask-size:100%_100%]">
              <Image
                src="/images/lisa-loretti.webp"
                alt="Portrait de Lisa Loretti"
                fill
                priority
                sizes="(min-width: 64rem) 28rem, 18rem"
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative flex flex-col gap-8 lg:col-span-7">
            <Eyebrow>{siteConfig.role}</Eyebrow>
            <Heading as="h1" size="display-xl" className="max-w-[8ch] motion-safe:animate-fade-up">
              {siteConfig.name}
              <span className="text-olive">.</span>
            </Heading>
            <div className="flex max-w-2xl flex-col gap-1">
              <Text variant="lead" className="font-display text-title font-bold text-heading">
                Créer du lien, des rencontres et du partage.
              </Text>
              <Text variant="lead" className="text-ink-muted">
                Valoriser les projets qui ont du sens.
              </Text>
            </div>
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-line-strong bg-cream/70 px-4 py-1.5 text-small">
              <span aria-hidden="true" className="size-2 rounded-full bg-olive" />
              {siteConfig.contact.availability} · {siteConfig.contact.location}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/#parcours" arrow>
                Voir mon parcours
              </Button>
              <Button href="/contact" variant="secondary">
                Contactez-moi
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sand" id="parcours" aria-labelledby="parcours-titre">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-4">
            <Eyebrow>Formation & expériences</Eyebrow>
            <Heading id="parcours-titre" size="display-l">
              Mon parcours
            </Heading>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Timeline steps={parcours} />
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="realisations-titre">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <Eyebrow>Réalisations</Eyebrow>
              <Heading id="realisations-titre" size="display-l">
                Quelques réalisations
              </Heading>
            </div>
            <Button href="/realisations" variant="text">
              Toutes les réalisations
            </Button>
          </div>
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={project.slug} project={project} className={index % 2 === 1 ? "md:mt-24" : undefined} />
            ))}
          </div>
        </Container>
      </Section>

      <Skills />

      <Section tone="forest" aria-labelledby="contact-titre">
        <Container className="flex flex-col items-start gap-8">
          <Heading id="contact-titre" size="display-l" className="max-w-[16ch]">
            Un projet qui rassemble ? Parlons-en.
          </Heading>
          <Button href="/contact" variant="light" arrow>
            Contactez-moi
          </Button>
        </Container>
      </Section>
    </>
  );
}
