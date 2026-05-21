"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type RevArcBorderMagicButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * RevArc wrapper — Aceternity Border Magic button (re-tokenized).
 */
export function RevArcBorderMagicButton({
  href,
  children,
  className,
}: RevArcBorderMagicButtonProps) {
  return (
    <Link
      href={href}
      className={cn("revarc-border-magic-btn", fontUi.className, className)}
    >
      <span className="revarc-border-magic-btn__spin" aria-hidden="true">
        <span className="revarc-border-magic-btn__spin-inner" />
      </span>
      <span className="revarc-border-magic-btn__inner">
        <span>{children}</span>
        <ArrowRight size={14} strokeWidth={1.2} aria-hidden="true" />
      </span>
    </Link>
  );
}
