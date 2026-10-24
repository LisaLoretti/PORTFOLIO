import Image from "next/image";
import type { Tool } from "@/data/profile";
import { cn } from "@/lib/cn";
import { toolIcons } from "./toolIcons";

/** Texte blanc ou anthracite selon la luminosité de la couleur de fond. */
function glyphColor(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.6 ? "#1F2421" : "#FFFFFF";
}

/** Outil présenté comme une icône d'application (carré arrondi aux couleurs de la marque + nom), lien vers son site. */
export function ToolBadge({ tool }: { tool: Tool }) {
  const icon = "icon" in tool ? toolIcons[tool.icon] : undefined;
  const image = "image" in tool ? tool.image : undefined;
  const background = tool.background ?? icon?.hex ?? "#183D2E";
  const color =
    ("color" in tool ? tool.color : undefined) ?? (background.startsWith("#") ? glyphColor(background) : "#FFFFFF");

  return (
    <li className="w-18">
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center gap-2 rounded-lg text-center"
      >
        <span
          aria-hidden="true"
          style={{ background, color }}
          className="relative flex size-14 items-center overflow-hidden justify-center rounded-2xl shadow-soft ring-1 ring-black/5 transition-[translate,box-shadow] duration-(--duration-base) ease-smooth group-hover:-translate-y-1 group-hover:shadow-lift motion-safe:group-hover:animate-wiggle"
        >
          {image ? (
            <Image
              src={image.src}
              alt=""
              width={192}
              height={192}
              sizes="3.5rem"
              className={cn(image.fit === "cover" ? "absolute inset-0 size-full object-cover" : "size-8 object-contain")}
            />
          ) : icon ? (
            <svg viewBox="0 0 24 24" className="size-7 fill-current">
              <path d={icon.path} />
            </svg>
          ) : (
            // Monogramme affiché en CSS : il ne s'ajoute pas au texte du lien (« LinkedIn »)
            <span
              data-monogram={"monogram" in tool ? tool.monogram : undefined}
              className="font-display text-title font-extrabold tracking-tight before:content-[attr(data-monogram)]"
            />
          )}
        </span>
        <span className="text-caption leading-tight tracking-normal text-ink underline decoration-transparent underline-offset-2 transition-colors duration-(--duration-base) group-hover:decoration-olive">
          {tool.name}
          <span className="sr-only"> (nouvel onglet)</span>
        </span>
      </a>
    </li>
  );
}
