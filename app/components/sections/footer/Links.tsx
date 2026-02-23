import Link from "next/link";

export default function Links() {
  return (
    <div className="flex items-center gap-6 text-sm font-medium text-black">
      <div className="flex items-center gap-6">
        <Link href="/privacy" className="transition-colors hover:text-brand-blue">
          Privacy
        </Link>
        <Link href="/terms" className="transition-colors hover:text-brand-blue">
          Terms
        </Link>
      </div>

      <button
        type="button"
        aria-label="Toggle dark mode"
        title="Toggle dark mode"
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border-gray bg-white text-black transition-colors hover:border-brand-blue hover:text-brand-blue"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 12.8A8.8 8.8 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      </button>
    </div>
  );
}
