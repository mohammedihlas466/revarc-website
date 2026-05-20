import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type RevArcCtaGhostProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function RevArcCtaGhost({ href, children, className }: RevArcCtaGhostProps) {
  return (
    <Link href={href} className={cn("cta-ghost", fontUi.className, className)}>
      <span>{children}</span>
      <ArrowRight size={14} strokeWidth={1.2} aria-hidden="true" />
    </Link>
  );
}
