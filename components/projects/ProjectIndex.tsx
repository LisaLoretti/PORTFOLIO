import type { Project } from "@/data/projects";

/** Sommaire cliquable des réalisations (en-tête de la page Réalisations). */
export function ProjectIndex({ projects }: { projects: Project[] }) {
  return (
    <nav aria-label="Sommaire des réalisations">
      <ol className="reveal-right-children flex flex-col border-t border-line-strong">
        {projects.map((project, index) => (
          <li key={project.slug} className="border-b border-line-strong">
            <a
              href={`#${project.slug}`}
              className="group flex items-center gap-5 rounded-sm py-4 transition-[padding,background-color] duration-(--duration-base) ease-smooth hover:bg-sage/40 hover:px-4"
            >
              <span aria-hidden="true" className="w-[2.3ch] shrink-0 font-display tabular-nums text-display-m leading-none font-extrabold text-sage transition-colors duration-(--duration-base) group-hover:text-olive">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex flex-1 flex-col">
                <span className="text-caption font-medium uppercase text-ink-muted">{project.category}</span>
                <span className="font-display text-title font-bold text-heading">{project.title}</span>
              </span>
              <span
                aria-hidden="true"
                className="text-title text-olive transition-transform duration-(--duration-base) ease-smooth group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
