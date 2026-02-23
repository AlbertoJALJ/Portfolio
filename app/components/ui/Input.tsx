import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export default function Input({ className, ...props }: InputProps) {
  const classes = [
    "border border-border-gray px-5 py-3 rounded-xl placeholder:text-blue-gray/60",
    "transition-colors duration-200",
    "hover:border-blue-gray/70",
    "focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/25",
    "disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-gray-100",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <input
      className={classes}
      {...props}
    />
  );
}
