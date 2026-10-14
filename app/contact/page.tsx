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
  const { email, location, availability } = siteConfig.contact;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet"
        intro="De retour en France, je cherche ma prochaine aventure professionnelle : un projet dans lequel mettre mon énergie et ma créativité. Écrivez-moi !"
      />

      <Section spacing="none" className="pb-section">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col items-start gap-6 lg:col-span-7">
            <p className="text-caption font-medium uppercase text-ink-muted">E-mail</p>
            <a
              href={`mailto:${email}`}
              className="rounded-sm font-display text-title font-bold [overflow-wrap:anywhere] sm:text-display-m text-heading underline decoration-olive decoration-2 underline-offset-8 transition-colors duration-(--duration-base) hover:text-olive"
            >
              {email}
            </a>
            <Button href={`mailto:${email}`} arrow>
              Envoyer un e-mail
            </Button>
          </div>

          <dl className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
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
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-lead hover:text-olive">
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
