"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { mainNav, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  // Fermeture du menu mobile avec la touche Échap.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);
  const pageLinks = mainNav.filter((item) => item.href !== "/contact");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/90 backdrop-blur-md">
      <Container size="wide" className="flex h-header items-center justify-between gap-6">
        <Link
          href="/"
          onClick={close}
          className="font-display text-xl font-extrabold tracking-tight text-forest"
          aria-label={`${siteConfig.logo} — accueil`}
        >
          {siteConfig.logo}
          <span aria-hidden="true" className="text-olive">.</span>
        </Link>

        {/* Navigation desktop */}
        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {pageLinks.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-sm py-2 text-small font-medium transition-colors duration-(--duration-base) ease-smooth",
                      "after:absolute after:inset-x-0 after:bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-olive",
                      "after:transition-transform after:duration-(--duration-base) after:ease-smooth",
                      active ? "text-forest after:scale-x-100" : "text-ink-muted after:scale-x-0 hover:text-forest hover:after:scale-x-100",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Button
                href="/contact"
                aria-current={isActive(pathname, "/contact") ? "page" : undefined}
                className="h-10 px-5 text-small"
              >
                Contact
              </Button>
            </li>
          </ul>
        </nav>

        {/* Bouton menu mobile */}
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong text-forest md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
          <span aria-hidden="true" className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-(--duration-base) ease-smooth",
                open && "translate-y-[5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-(--duration-base) ease-smooth",
                open && "-translate-y-[5px] -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      {/* Navigation mobile */}
      <nav
        id={menuId}
        aria-label="Navigation principale"
        hidden={!open}
        className="border-t border-line bg-cream md:hidden"
      >
        <Container size="wide" className="py-6">
          <ul className="flex flex-col">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-line last:border-b-0">
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-sm py-4 font-display text-title font-bold",
                      active ? "text-forest" : "text-ink-muted hover:text-forest",
                    )}
                  >
                    {item.label}
                    {active && <span aria-hidden="true" className="size-2 rounded-full bg-olive" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </nav>
    </header>
  );
}
