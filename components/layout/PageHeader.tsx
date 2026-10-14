import type { ReactNode } from "react";
import { Heading, Eyebrow, Text } from "@/components/ui/Typography";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  /** Contenu affiché à droite du titre en grand écran (en dessous sur mobile). */
  aside?: ReactNode;
};

/** En-tête commun des pages : surtitre, titre XXL et introduction. */
export function PageHeader({ eyebrow, title, intro, children, aside }: PageHeaderProps) {
  const hasAside = Boolean(aside);
  return (
    <header className="pt-section-compact pb-section-compact">
      <Container className={cn(hasAside && "grid items-center gap-12 lg:grid-cols-12 lg:gap-10")}>
        <div className={cn("flex flex-col gap-6 motion-safe:animate-fade-up", hasAside && "lg:col-span-6")}>
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
        </div>
        {hasAside && <div className="lg:col-span-6">{aside}</div>}
      </Container>
    </header>
  );
}
