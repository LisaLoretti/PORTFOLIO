import type { Metadata } from "next";
import { Timeline } from "@/components/about/Timeline";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";
import { parcours } from "@/data/parcours";
import { languages, softSkills, tools, trainings } from "@/data/profile";

export const metadata: Metadata = {
  title: "À propos",
  description: "Mon histoire, mon métier et mon parcours, de la communication à l’événementiel.",
};

const destinations = ["Tanzanie", "Australie", "Ouganda", "Bali", "Irlande", "Japon"];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos de moi"
        title="Créer du lien et rassembler."
        intro="Je crois que tout a commencé avec les voyages."
      />

      <Section spacing="none" className="pb-section">
        <Container className="grid gap-12 lg:grid-cols-12">
          <aside className="flex flex-col gap-6 lg:col-span-4">
            <Eyebrow as="p">Les voyages</Eyebrow>
            <ul className="flex flex-wrap gap-2" aria-label="Pays visités">
              {destinations.map((place) => (
                <li key={place} className="rounded-full border border-line-strong px-4 py-1.5 text-small text-forest">
                  {place}
                </li>
              ))}
            </ul>
          </aside>

          <div className="flex max-w-prose flex-col gap-6 lg:col-span-7 lg:col-start-6">
            <Text variant="lead">
              De la Tanzanie à l’Australie, en passant par l’Ouganda, Bali ou l’Irlande, j’ai vite compris que ce que je
              préférais n’était pas seulement découvrir de nouveaux endroits, mais rencontrer les gens, partager des
              expériences et créer des souvenirs avec eux. C’est probablement de là que vient mon goût pour les projets
              qui rassemblent.
            </Text>
            <Text>
              Et visiblement, ça ne s’arrête pas au travail : une soirée années 70, un anniversaire Western, un PACS
              façon pique-nique… je trouve toujours une bonne raison d’imaginer un concept et de réunir les gens autour.
            </Text>
            <Text>
              C’est donc assez naturellement que je me suis tournée vers la communication et l’événementiel.
            </Text>

            <blockquote className="my-4 border-l-2 border-olive pl-6">
              <p className="font-display text-title font-bold text-heading">
                Ce que j’aime dans mon métier ? Partir d’une idée, imaginer l’expérience, coordonner des personnes très
                différentes et voir le projet prendre vie.
              </p>
            </blockquote>

            <Text>
              Mes expériences en France comme à l’étranger m’ont appris à m’adapter, écouter, créer facilement du lien
              et embarquer différents interlocuteurs autour d’un même projet. Que ce soit pour un événement, une
              campagne de communication ou la coordination de partenaires, j’aime les projets vivants, collectifs et
              concrets.
            </Text>
            <Text>
              Master en Management du Tourisme et de l’Événementiel en poche, je repars pour un nouveau voyage, au Japon
              cette fois, pour retrouver des amies japonaises rencontrées quelques années plus tôt en Australie. Une
              jolie façon de boucler la boucle avant d’en commencer une nouvelle.
            </Text>
            <Text>
              De retour en France en octobre, je cherche ma prochaine aventure professionnelle : un projet dans lequel
              mettre mon énergie, ma créativité et ce qui reste finalement mon fil rouge depuis le début :{" "}
              <strong className="font-medium text-forest">créer du lien et rassembler.</strong>
            </Text>
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

      <Section aria-labelledby="competences-titre">
        <Container className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <Eyebrow>Savoir-faire & savoir-être</Eyebrow>
            <Heading id="competences-titre" size="display-l">
              Compétences
            </Heading>
          </div>

          <div className="grid gap-16 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-7">
              <Heading as="h3" size="title">
                Outils
              </Heading>
              <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {tools.map((group) => (
                  <div key={group.category} className="flex flex-col gap-2 border-t border-line pt-4">
                    <dt className="text-caption font-medium uppercase text-ink-muted">{group.category}</dt>
                    <dd className="text-body">{group.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col gap-12 lg:col-span-4 lg:col-start-9">
              <div className="flex flex-col gap-4">
                <Heading as="h3" size="title">
                  Savoir-être
                </Heading>
                <ul className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <li key={skill} className="rounded-full bg-sage px-4 py-1.5 text-small text-forest">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <Heading as="h3" size="title">
                  Langues
                </Heading>
                <dl className="flex flex-col gap-2">
                  {languages.map((language) => (
                    <div key={language.name} className="flex justify-between gap-4 border-b border-line pb-2">
                      <dt className="font-medium text-forest">{language.name}</dt>
                      <dd className="text-small text-ink-muted">{language.level}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex flex-col gap-4">
                <Heading as="h3" size="title">
                  Formations complémentaires
                </Heading>
                <ul className="flex list-disc flex-col gap-2 pl-5 text-small marker:text-olive">
                  {trainings.map((training) => (
                    <li key={training}>{training}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="compact" tone="forest">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <Heading size="display-m" className="max-w-[18ch]">
            Et la suite ? Je cherche ma prochaine aventure.
          </Heading>
          <Button href="/contact" variant="light" arrow>
            Contactez-moi
          </Button>
        </Container>
      </Section>
    </>
  );
}
