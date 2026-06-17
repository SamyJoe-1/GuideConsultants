import { cn } from "@/lib/utils";

/** Centered max-width content wrapper with responsive horizontal padding. */
export function Container({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return <Tag className={cn("container-px", className)}>{children}</Tag>;
}
