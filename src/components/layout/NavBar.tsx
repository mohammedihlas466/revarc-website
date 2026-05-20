"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RevArcCtaPrimary } from "@/components/ui/RevArcCtaPrimary";
import { fontDisplay, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/how-we-work", label: "How We Work" },
  { href: "/proof", label: "The Proof" },
  { href: "/about", label: "About" },
] as const;

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="revarc-nav" aria-label="Primary">
        <Link
          href="/"
          className={cn("nav-logo", fontDisplay.className)}
          onClick={() => setMenuOpen(false)}
        >
          Rev<span className="nav-logo-accent">Arc</span>
        </Link>

        <ul className={cn("nav-links", fontUi.className)}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={cn("nav-cta", fontUi.className)}
        >
          Book a Call
        </Link>

        <button
          type="button"
          className="nav-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="nav-mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={16} strokeWidth={1.2} />
          ) : (
            <Menu size={16} strokeWidth={1.2} />
          )}
        </button>
      </nav>

      <div
        id="nav-mobile-menu"
        className={cn("nav-mobile-overlay", menuOpen && "nav-mobile-overlay--open")}
        aria-hidden={!menuOpen}
      >
        <ul className={cn("nav-mobile-links", fontUi.className)}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <RevArcCtaPrimary
          href="/contact"
          className="nav-mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Book a Call
        </RevArcCtaPrimary>
      </div>
    </>
  );
}
