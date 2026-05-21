import { fontDisplay, fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type CountryItemProps = {
  country: string;
  source: string;
  className?: string;
};

export function CountryItem({ country, source, className }: CountryItemProps) {
  return (
    <div className={cn("country-item", className)}>
      <span className={cn("country-name", fontDisplay.className)}>
        {country}
      </span>
      <span className={cn("country-source", fontMono.className)}>{source}</span>
    </div>
  );
}
