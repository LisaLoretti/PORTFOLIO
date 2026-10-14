import Image from "next/image";
import Link from "next/link";
import { mainNav, siteConfig, socialLinks } from "@/data/site";
import { Container } from "./Container";

const linkClass = "rounded-sm transition-colors duration-(--duration-base) hover:text-sage focus-visible:outline-cream";

export function SiteFooter() {
  return (
    <footer className="tone-inverse bg-forest text-ink">
      <Container
        size="wide"
        className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between md:gap-12"
      >
        {/* Identité : portrait croqué, nom et coordonnées */}
        <div className="flex items-center gap-5">
          <Image
            src="/images/lisa-loretti-croquis.webp"
            alt="Portrait dessiné de Lisa Loretti"
            width={400}
            height={400}
            sizes="7rem"
            className="reveal-pop size-24 shrink-0 rounded-full ring-2 ring-sage/60 md:size-28"
          />
          <div className="flex flex-col gap-1">
            <p className="reveal-clip font-display text-title font-extrabold text-heading md:text-display-m md:leading-none">
              {siteConfig.logo}
              <span aria-hidden="true" className="text-sage">.</span>
            </p>
            <p className="text-small text-ink-muted">{siteConfig.role}</p>
            <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-small">
              <a href={`mailto:${siteConfig.contact.email}`} className={linkClass}>
                {siteConfig.contact.email}
              </a>
              <a href={siteConfig.contact.phone.href} className={`whitespace-nowrap ${linkClass}`}>
                {siteConfig.contact.phone.label}
              </a>
            </p>
          </div>
        </div>

        {/* Navigation et réseaux */}
        <div className="flex flex-col gap-3 md:items-end">
          <nav aria-label="Pied de page">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {socialLinks.length > 0 && (
            <ul aria-label="Réseaux" className="flex flex-wrap gap-x-6 gap-y-2 text-small text-ink-muted">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {link.label} <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (nouvel onglet)</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>

      <Container size="wide" className="border-t border-line py-4">
        <p className="text-caption text-ink-muted">© {siteConfig.name}</p>
      </Container>
    </footer>
  );
}
