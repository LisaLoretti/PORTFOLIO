import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Typography";
import { Container } from "./Container";
import { Section } from "./Section";

/** Bandeau d'appel à contact vert forêt, en fin de page. */
export function ContactBand() {
  return (
    <Section tone="forest" aria-labelledby="contact-titre" className="relative overflow-clip">
      {/* Forme organique qui tourne lentement au défilement */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        className="scroll-spin pointer-events-none absolute -right-32 -bottom-40 w-[min(80vw,36rem)] text-olive/30"
      >
        <path
          fill="currentColor"
          d="M452 98c62 52 104 140 92 222-12 83-77 160-158 196-81 37-178 33-247-12C70 459 28 375 40 292 51 209 116 127 196 84c80-42 194-38 256 14Z"
        />
      </svg>
      <Container className="relative flex flex-col items-start gap-8">
        <Heading id="contact-titre" size="display-l" className="scroll-slide max-w-[16ch]">
          Un projet qui rassemble ? Parlons-en.
        </Heading>
        <div className="reveal-pop">
          <Button href="/contact" variant="light" arrow>
            Contactez-moi
          </Button>
        </div>
      </Container>
    </Section>
  );
}
