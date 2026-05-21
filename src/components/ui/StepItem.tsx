import { fontDisplay, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type StepItemProps = {
  number: string;
  title: string;
  body: string;
  className?: string;
};

export function StepItem({ number, title, body, className }: StepItemProps) {
  return (
    <div className={cn("step-item", className)}>
      <span className={cn("step-number", fontDisplay.className)} aria-hidden="true">
        {number}
      </span>
      <div className="step-content">
        <p className={cn("step-title", fontUi.className)}>{title}</p>
        <p className={cn("step-body", fontUi.className)}>{body}</p>
      </div>
    </div>
  );
}
