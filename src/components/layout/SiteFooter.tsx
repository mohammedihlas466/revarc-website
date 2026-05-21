import { Mail } from "lucide-react";
import Link from "next/link";
import { fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

function LinkedInIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const FOOTER_LEGAL = "© 2026 RevArc Systems · Wyoming LLC";

const FOOTER_EMAIL = "contact@revarcsystems.com";

const LINKEDIN_URL = "https://linkedin.com/in/PLACEHOLDER";

const FOOTER_NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/proof", label: "The Proof" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <div className="site-footer-zone">
      <div className="site-footer-stage" aria-hidden="true">
        <div className="site-footer-stage__glow" />
        <span className={cn("site-footer-stage__mark", fontUi.className)}>
          RevArc
        </span>
        <span className="site-footer-stage__flare" />
      </div>

      <footer className="site-footer" role="contentinfo">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <p className={cn("site-footer__legal", fontMono.className)}>
              {FOOTER_LEGAL}
            </p>
            <div className="site-footer__social">
              <a
                href={`mailto:${FOOTER_EMAIL}`}
                className="site-footer__social-link"
                aria-label={`Email ${FOOTER_EMAIL}`}
              >
                <Mail size={16} strokeWidth={1.2} aria-hidden="true" />
              </a>
              <a
                href={LINKEDIN_URL}
                className="site-footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <nav className="site-footer__nav" aria-label="Footer">
            <ul className={cn("site-footer__nav-list", fontUi.className)}>
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="site-footer__nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={`mailto:${FOOTER_EMAIL}`}
            className={cn("site-footer__email", fontMono.className)}
          >
            {FOOTER_EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}
