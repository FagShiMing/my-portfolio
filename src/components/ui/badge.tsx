import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
};

export function Badge({ className = "", children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-medium ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
