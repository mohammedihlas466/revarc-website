import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type RevArcCtaPrimaryProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function RevArcCtaPrimary({
  href,
  children,
  className,
  onClick,
}: RevArcCtaPrimaryProps) {
  return (
    <Link
      href={href}
      className={cn("cta-primary", fontUi.className, className)}
      onClick={onClick}
    >
      <span>{children}</span>
      <ArrowRight size={14} strokeWidth={1.2} aria-hidden="true" />
    </Link>
  );
}
