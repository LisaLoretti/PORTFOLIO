import Image from "next/image";
import { Skills } from "@/components/about/Skills";
import { ContactBand } from "@/components/layout/ContactBand";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Marquee } from "@/components/ui/Marquee";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Typography";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

// Réalisations mises en avant : une en événementiel, une en communication
const featuredProjects = ["assemblee-generale-2026", "conseils-de-l-office"].flatMap((slug) =>
  projects.filter((project) => project.slug === slug),
);

export default function HomePage() {
  return (
    <>
      <Section spacing="none" className="relative overflow-hidden pt-section-compact pb-section">
        <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Portrait découpé dans une forme organique, posé sur la bulle verte */}
          <div className="relative w-48 justify-self-start motion-safe:animate-fade-up sm:w-60 lg:order-last lg:col-span-5 lg:w-full lg:max-w-88 lg:justify-self-end">
            <svg
              aria-hidden="true"
              viewBox="20 40 540 520"
              preserveAspectRatio="none"
              className="absolute -inset-[8%] size-[116%] rotate-[-8deg] text-sage motion-safe:animate-float"
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
                sizes="(min-width: 64rem) 22rem, 15rem"
                className="object-cover"
              />
            </div>
          </div>

          <div className="stagger relative flex flex-col gap-6 lg:col-span-7">
            <Eyebrow>{siteConfig.role}</Eyebrow>
            <Heading as="h1" size="display-xl" underline="load" className="max-w-[8ch]">
              {siteConfig.name}
              <span className="text-olive">.</span>
            </Heading>
            <p className="max-w-prose text-body text-ink-muted sm:text-[1.0625rem]">{siteConfig.intro}</p>
            <div className="flex flex-wrap items-center gap-3 text-small">
              <p className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-1.5 font-medium text-cream">
                Recherche {siteConfig.contact.lookingFor.join(" · ")}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" arrow>
                Mon profil LinkedIn
                <span className="sr-only"> (nouvel onglet)</span>
              </Button>
              <Button href="/contact" variant="secondary">
                Contactez-moi
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Marquee
        label="Événementiel, communication, gestion de projets, coordination : créer du lien et rassembler."
        items={["Événementiel", "Communication", "Gestion de projets", "Coordination", "Créer du lien", "Rassembler"]}
      />

      <Section aria-labelledby="realisations-titre">
        <Container className="flex flex-col gap-12">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <Eyebrow>Réalisations en événementiel et en communication</Eyebrow>
              <Heading id="realisations-titre" size="display-l" underline>
                Quelques réalisations
              </Heading>
            </div>
            <Button href="/realisations" variant="text">
              En savoir plus
            </Button>
          </div>
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} className={index % 2 === 1 ? "md:mt-24" : undefined} />
            ))}
          </div>
          <div className="reveal flex justify-center">
            <Button href="/parcours" arrow>
              Découvrir mon parcours
            </Button>
          </div>
        </Container>
      </Section>

      <Skills />

      <ContactBand />
    </>
  );
}
