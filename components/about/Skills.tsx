import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow, Heading } from "@/components/ui/Typography";
import { languages, softSkills, tools, trainings } from "@/data/profile";

/** Section « Compétences » : outils, savoir-être, langues et formations. */
export function Skills() {
  return (
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
  );
}
