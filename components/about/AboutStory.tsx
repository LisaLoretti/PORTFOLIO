import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow, Heading, Text } from "@/components/ui/Typography";

const destinations = ["Tanzanie", "Australie", "Ouganda", "Bali", "Irlande", "Japon"];

/** Section « À propos de moi » : mon histoire. */
export function AboutStory() {
  return (
    <Section tone="sand" id="a-propos" aria-labelledby="a-propos-titre">
      <Container className="mb-12 flex flex-col gap-6">
        <Eyebrow>À propos de moi</Eyebrow>
        <Heading id="a-propos-titre" size="display-l" className="max-w-[16ch]">
          Créer du lien et rassembler.
        </Heading>
        <Text variant="lead" className="text-ink-muted">
          Je crois que tout a commencé avec les voyages.
        </Text>
      </Container>
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
            Et visiblement, ça ne s’arrête pas au travail : une soirée années 70, un anniversaire Western, un PACS façon
            pique-nique… je trouve toujours une bonne raison d’imaginer un concept et de réunir les gens autour.
          </Text>
          <Text>C’est donc assez naturellement que je me suis tournée vers la communication et l’événementiel.</Text>

          <blockquote className="my-4 border-l-2 border-olive pl-6">
            <p className="font-display text-title font-bold text-heading">
              Ce que j’aime dans mon métier ? Partir d’une idée, imaginer l’expérience, coordonner des personnes très
              différentes et voir le projet prendre vie.
            </p>
          </blockquote>

          <Text>
            Mes expériences en France comme à l’étranger m’ont appris à m’adapter, écouter, créer facilement du lien et
            embarquer différents interlocuteurs autour d’un même projet. Que ce soit pour un événement, une campagne de
            communication ou la coordination de partenaires, j’aime les projets vivants, collectifs et concrets.
          </Text>
          <Text>
            Master en Management du Tourisme et de l’Événementiel en poche, je repars pour un nouveau voyage, au Japon
            cette fois, pour retrouver des amies japonaises rencontrées quelques années plus tôt en Australie. Une jolie
            façon de boucler la boucle avant d’en commencer une nouvelle.
          </Text>
          <Text>
            De retour en France en octobre, je cherche ma prochaine aventure professionnelle : un projet dans lequel
            mettre mon énergie, ma créativité et ce qui reste finalement mon fil rouge depuis le début :{" "}
            <strong className="font-medium text-forest">créer du lien et rassembler.</strong>
          </Text>
        </div>
      </Container>
    </Section>
  );
}
