import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

const sizes = {
  prose: "max-w-prose",
  content: "max-w-content",
  wide: "max-w-wide",
} as const;

type ContainerProps = {
  as?: ElementType;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
};

/** Centre le contenu avec des marges latérales (gutter) et une largeur maximale cohérentes. */
export function Container({ as: Tag = "div", size = "content", className, children }: ContainerProps) {
  return <Tag className={cn("mx-auto w-full px-gutter", sizes[size], className)}>{children}</Tag>;
}
