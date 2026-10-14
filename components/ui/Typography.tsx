import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ScribbleUnderline } from "./ScribbleUnderline";

/*
 * Hiérarchie typographique.
 * Le niveau sémantique (`as`) est découplé de la taille visuelle (`size`)
 * pour pouvoir, par exemple, afficher un <h2> en taille XXL.
 */

const headingSizes = {
  "display-xl": "text-display-xl font-extrabold",
  "display-l": "text-display-l font-extrabold",
  "display-m": "text-display-m font-bold",
  title: "text-title font-bold",
} as const;

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  size?: keyof typeof headingSizes;
  children: ReactNode;
  className?: string;
  /** Ajoute un trait ondulé qui se dessine au défilement (`true`) ou au chargement (`"load"`). */
  underline?: boolean | "load";
  /** Classes du trait (sa couleur notamment). */
  underlineClassName?: string;
} & Omit<ComponentPropsWithoutRef<"h2">, "children" | "className">;

export function Heading({
  as: Tag = "h2",
  size = "display-m",
  className,
  children,
  underline,
  underlineClassName,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn("font-display text-heading", headingSizes[size], underline && "pb-[max(1.25rem,0.3em)]", className)}
      {...props}
    >
      {underline ? (
        /* Span en ligne : le trait suit la dernière ligne du titre, sur sa longueur */
        <span className="relative">
          {children}
          <ScribbleUnderline trigger={underline === "load" ? "load" : "scroll"} className={underlineClassName} />
        </span>
      ) : (
        children
      )}
    </Tag>
  );
}

const textVariants = {
  lead: "text-lead",
  body: "text-body",
  small: "text-small text-ink-muted",
} as const;

type TextProps<T extends ElementType> = {
  as?: T;
  variant?: keyof typeof textVariants;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function Text<T extends ElementType = "p">({ as, variant = "body", className, children, ...props }: TextProps<T>) {
  const Tag: ElementType = as ?? "p";
  return (
    <Tag className={cn("font-sans", textVariants[variant], className)} {...props}>
      {children}
    </Tag>
  );
}

/** Petit texte en capitales, au-dessus d'un titre ou pour une légende de catégorie. */
export function Eyebrow({ as: Tag = "p", className, children }: { as?: "p" | "span"; className?: string; children: ReactNode }) {
  return (
    <Tag className={cn("font-sans text-caption font-medium uppercase text-heading", className)}>
      {children}
    </Tag>
  );
}
