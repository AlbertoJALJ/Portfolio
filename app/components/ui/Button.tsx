"use client"
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-brand-blue text-white hover:bg-brand-blue/90",
        outline: "bg-white text-black border-2 border-gray-900 hover:bg-gray-50",
        link: "bg-transparent",
      },
      size: {
        sm: "h-9 rounded-xl px-6 py-5 text-md leading-none",
        md: "h-11 rounded-xl px-7 text-md leading-none",
        lg: "rounded-xl px-8 py-4 text-md leading-none",
      },
      tone: {
        brand: "",
        muted: "",
      },
      icon: {
        true: "gap-3",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        size: "lg",
        class: "shadow-[0_8px_24px_rgba(37,123,244,0.35)]",
      },
      {
        variant: "link",
        class: "px-0!",
      },
      {
        variant: "link",
        tone: "brand",
        class: "text-brand-blue hover:text-brand-blue/80",
      },
      {
        variant: "link",
        tone: "muted",
        class: "text-blue-gray hover:text-blue-gray/80",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      tone: "brand",
      icon: false,
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({ variant, size, tone, icon, className, ...props }: ButtonProps) {
  const classes = [buttonVariants({ variant, size, tone, icon }), className].filter(Boolean).join(" ");
  return <button className={classes} {...props} />;
}