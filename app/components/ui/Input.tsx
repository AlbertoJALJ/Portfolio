import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export default function Input({ className, ...props }: InputProps) {
  const classes = [
    "rounded-xl border border-border-gray px-5 py-3 placeholder:text-blue-gray/60 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:border-zinc-700",
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
