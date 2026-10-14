import type { ReactNode } from "react";
import { Heading, Eyebrow, Text } from "@/components/ui/Typography";
import { Container } from "./Container";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
};

/** En-tête commun des pages : surtitre, titre XXL et introduction. */
export function PageHeader({ eyebrow, title, intro, children }: PageHeaderProps) {
  return (
    <header className="pt-section-compact pb-section-compact">
      <Container className="flex flex-col gap-6 motion-safe:animate-fade-up">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h1" size="display-xl" className="max-w-[14ch]">
          {title}
        </Heading>
        {intro && (
          <Text variant="lead" className="max-w-prose text-ink-muted">
            {intro}
          </Text>
        )}
        {children}
      </Container>
    </header>
  );
}
