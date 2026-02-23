"use client";

import Link from "next/link";
import { useTheme } from "next-themes";

export default function Links() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-6 text-sm font-medium text-black dark:text-zinc-100">
      <div className="flex items-center gap-6">
        <Link href="/privacy" className="transition-colors hover:text-brand-blue">
          Privacy Policy
        </Link>
        <Link href="/terms" className="transition-colors hover:text-brand-blue">
          Terms of Service
        </Link>
      </div>

      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border-gray bg-white text-black transition-colors hover:border-brand-blue hover:text-brand-blue dark:bg-zinc-900 dark:text-zinc-100"
      >
        {isDark ? (
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 12.8A8.8 8.8 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
