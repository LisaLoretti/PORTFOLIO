import Link from "next/link";
import { mainNav, siteConfig, socialLinks } from "@/data/site";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="tone-inverse bg-forest text-ink">
      <Container size="wide" className="grid gap-12 py-section-compact md:grid-cols-12">
        <div className="flex flex-col gap-4 md:col-span-6">
          <p className="font-display text-display-m font-extrabold text-heading">
            {siteConfig.logo}
            <span aria-hidden="true" className="text-sage">.</span>
          </p>
          <p className="text-small text-ink-muted">{siteConfig.role}</p>
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-sm text-lead focus-visible:outline-cream"
          >
            <span className="underline decoration-line-strong underline-offset-[6px] transition-[text-decoration-color] duration-(--duration-base) group-hover:decoration-sage">
              Prendre contact
            </span>
            <span aria-hidden="true" className="transition-transform duration-(--duration-base) ease-smooth group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <nav aria-label="Pied de page" className="md:col-span-3">
          <p className="mb-4 text-caption font-medium uppercase text-ink-muted">Pages</p>
          <ul className="flex flex-col gap-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="rounded-sm hover:text-sage focus-visible:outline-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="mb-4 text-caption font-medium uppercase text-ink-muted">Réseaux</p>
          {socialLinks.length > 0 ? (
            <ul className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="rounded-sm hover:text-sage focus-visible:outline-cream">
                    {link.label}
                    <span className="sr-only"> (nouvel onglet)</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-small text-ink-muted">Liens à venir.</p>
          )}
        </div>
      </Container>

      <Container size="wide" className="border-t border-line py-6">
        <p className="text-small text-ink-muted">© {siteConfig.name}</p>
      </Container>
    </footer>
  );
}
