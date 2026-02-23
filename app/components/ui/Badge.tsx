import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

export const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide",
  {
    variants: {
      variant: {
        tech: "border-border-gray bg-white/90 ",
      },
    },
    defaultVariants: {
      variant: "tech",
    },
  }
);

type BadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>; 

export default function Badge({ variant, className, ...props }: BadgeProps) {
  const classes = [badgeVariants({ variant }), className].filter(Boolean).join(" ");
  return <span className={classes} {...props} />;
}
