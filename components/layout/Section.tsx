import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

const spacings = {
  default: "py-section",
  compact: "py-section-compact",
  none: "",
} as const;

const tones = {
  cream: "bg-cream text-ink",
  sand: "bg-sand text-ink",
  forest: "tone-inverse bg-forest text-ink",
} as const;

type SectionProps = {
  spacing?: keyof typeof spacings;
  tone?: keyof typeof tones;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"section">, "className" | "children">;

/** Bloc vertical de page : uniformise les espacements et le fond. */
export function Section({ spacing = "default", tone = "cream", className, children, ...props }: SectionProps) {
  return (
    <section className={cn(spacings[spacing], tones[tone], className)} {...props}>
      {children}
    </section>
  );
}
