import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";

export default function HomePage() {
  return (
    <>
      <Section spacing="none" className="relative overflow-hidden pt-section-compact pb-section">
        {/* Forme organique décorative */}
        <svg
          aria-hidden="true"
          viewBox="0 0 600 600"
          className="pointer-events-none absolute -right-40 -top-24 w-[min(70vw,40rem)] text-sage motion-safe:animate-fade-up md:-right-24"
        >
          <path
            fill="currentColor"
            d="M452 98c62 52 104 140 92 222-12 83-77 160-158 196-81 37-178 33-247-12C70 459 28 375 40 292 51 209 116 127 196 84c80-42 194-38 256 14Z"
          />
        </svg>

        <Container className="relative flex flex-col gap-8">
          <Eyebrow>Accueil — page provisoire</Eyebrow>
          <Heading as="h1" size="display-xl" className="max-w-[12ch] motion-safe:animate-fade-up">
            Portfolio en construction<span className="text-olive">.</span>
          </Heading>
          <Text variant="lead" className="max-w-prose text-ink-muted">
            Cette page accueillera la présentation principale, une sélection de réalisations et un appel à la prise de
            contact.
          </Text>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/realisations" arrow>
              Voir les réalisations
            </Button>
            <Button href="/contact" variant="secondary">
              Me contacter
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
