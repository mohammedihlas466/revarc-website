import { fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ContactItemProps = {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  external?: boolean;
  className?: string;
};

export function ContactItem({
  href,
  icon,
  label,
  value,
  external = false,
  className,
}: ContactItemProps) {
  return (
    <a
      href={href}
      className={cn("contact-item", className)}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <span className="contact-icon-wrap" aria-hidden="true">
        {icon}
      </span>
      <span className={cn("contact-label", fontMono.className)}>{label}</span>
      <span className={cn("contact-value", fontUi.className)}>{value}</span>
    </a>
  );
}
