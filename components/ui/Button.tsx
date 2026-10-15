import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "light" | "lightOutline" | "text";

const base =
  "group inline-flex items-center justify-center gap-2 font-sans font-medium whitespace-nowrap " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-(--duration-base) ease-smooth " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 " +
  "disabled:pointer-events-none disabled:opacity-45";

const variants: Record<Variant, string> = {
  primary:
    "h-12 rounded-full bg-forest px-7 text-body text-cream shadow-soft " +
    "hover:bg-charcoal hover:shadow-lift focus-visible:outline-forest active:translate-y-px",
  secondary:
    "h-12 rounded-full border border-line-strong bg-cream/60 px-7 text-body text-forest " +
    "hover:border-forest hover:bg-cream focus-visible:outline-forest active:translate-y-px",
  /** Pour les fonds vert forêt. */
  light:
    "h-12 rounded-full bg-cream px-7 text-body text-forest " +
    "hover:bg-sage focus-visible:outline-cream active:translate-y-px",
  /** Bouton secondaire pour les fonds vert forêt. */
  lightOutline:
    "h-12 rounded-full border border-cream/50 px-7 text-body text-cream " +
    "hover:border-cream hover:bg-cream/10 focus-visible:outline-cream active:translate-y-px",
  text:
    "rounded-sm px-0.5 text-body text-forest underline decoration-transparent decoration-1 underline-offset-[6px] " +
    "hover:decoration-forest focus-visible:outline-forest",
};

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="size-4 shrink-0 transition-transform duration-(--duration-base) ease-smooth group-hover:translate-x-1"
    >
      <path d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type CommonProps = {
  variant?: Variant;
  /** Affiche une flèche. Toujours visible pour la variante `text`. */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps & Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & { href?: undefined };
type ButtonAsLink = CommonProps & Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Bouton ou lien stylé : rend un <Link> si `href` est fourni, sinon un <button>. */
export function Button({ variant = "primary", arrow, className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);
  const content = (
    <>
      <span>{children}</span>
      {(arrow || variant === "text") && <Arrow />}
    </>
  );

  if (props.href !== undefined) {
    // Liens e-mail, téléphone, externes ou fichiers PDF : simple <a>, sans routage Next.js.
    if (/^(mailto:|tel:|https?:)|\.pdf$/.test(props.href)) {
      const { href, ...anchorProps } = props as ButtonAsLink;
      return (
        <a href={href} className={classes} {...(anchorProps as ComponentPropsWithoutRef<"a">)}>
          {content}
        </a>
      );
    }
    return (
      <Link className={classes} {...(props as ButtonAsLink)}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
