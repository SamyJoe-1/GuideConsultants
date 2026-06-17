import { cn } from "@/lib/utils";

/** Standard section heading: optional eyebrow, title, and intro paragraph. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  as: TitleTag = "h2",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  as?: React.ElementType;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <TitleTag
        className={cn(
          "mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-navy-800",
          titleClassName,
        )}
      >
        {title}
      </TitleTag>
      {intro ? (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
