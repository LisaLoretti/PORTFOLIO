import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig, socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Me contacter pour un projet ou une opportunité en événementiel et communication.",
};

export default function ContactPage() {
  const { email, phone, location, availability } = siteConfig.contact;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet"
        intro={
          <>
            Imaginer, créer et coordonner des projets qui mettent en valeur le travail de chacun, rassemblent les
            personnes et créent des moments de partage.{" "}
            <span className="mt-3 block font-medium text-forest">C’est ce que j’aime dans mon métier.</span>
          </>
        }
      />

      <Section spacing="none" className="pb-section">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col items-start gap-6">
            <p className="text-caption font-medium uppercase text-ink-muted">E-mail</p>
            <a
              href={`mailto:${email}`}
              className="relative rounded-sm pb-1 font-display text-title font-bold [overflow-wrap:anywhere] text-heading transition-colors duration-(--duration-base) after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-olive hover:text-olive motion-safe:after:animate-draw-x sm:text-display-m"
            >
              {email}
            </a>
            <div className="flex flex-wrap items-center gap-4">
              <Button href={`mailto:${email}`} arrow>
                Envoyer un e-mail
              </Button>
              <Button href={phone.href} variant="secondary">
                Appeler
              </Button>
            </div>
          </div>

          <dl className="stagger grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            <div className="flex flex-col gap-1 border-t border-line pt-4">
              <dt className="text-caption font-medium uppercase text-ink-muted">Téléphone</dt>
              <dd>
                <a href={phone.href} className="-my-1 inline-block whitespace-nowrap rounded-sm py-1 text-lead hover:text-olive">
                  {phone.label}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1 border-t border-line pt-4">
              <dt className="text-caption font-medium uppercase text-ink-muted">Disponibilité</dt>
              <dd className="text-lead">{availability}</dd>
            </div>
            <div className="flex flex-col gap-1 border-t border-line pt-4">
              <dt className="text-caption font-medium uppercase text-ink-muted">Localisation</dt>
              <dd className="text-lead">{location}</dd>
            </div>
            {socialLinks.length > 0 && (
              <div className="flex flex-col gap-1 border-t border-line pt-4">
                <dt className="text-caption font-medium uppercase text-ink-muted">Réseaux</dt>
                {socialLinks.map((link) => (
                  <dd key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="-my-1 inline-block py-1 text-lead hover:text-olive">
                      {link.label}
                      <span className="sr-only"> (nouvel onglet)</span>
                    </a>
                  </dd>
                ))}
              </div>
            )}
          </dl>
        </Container>
      </Section>
    </>
  );
}
