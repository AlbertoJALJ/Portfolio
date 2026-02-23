import Link from "next/link";
import type { ReactNode } from "react";

type SocialItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

const socials: SocialItem[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alberto-lopez-jimenez-721159153",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8.25" />
        <path d="M8.6 12.6c0-2.2 1.2-3.5 3.4-3.5 1.8 0 2.9 1.1 2.9 2.7 0 1.6-1.2 2.7-2.9 2.7h-1.6" />
        <path d="M10.6 14.5h2.2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/AlbertoJALJ",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 9.5h8" />
        <path d="m10 14 2 2 2-2" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="6.5" cy="12.5" r="1.75" />
        <circle cx="17.5" cy="7.5" r="1.75" />
        <circle cx="17.5" cy="16.5" r="1.75" />
        <path d="M8.2 11.8 15.8 8.2" />
        <path d="M8.2 13.2 15.8 15.8" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <div className="flex items-center justify-center gap-8 py-2 md:gap-10">
      {socials.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center gap-2"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border-gray bg-white text-blue-gray transition-colors group-hover:border-brand-blue group-hover:text-brand-blue">
            {item.icon}
          </span>
          <span className="text-xs font-semibold uppercase tracking-section-label text-blue-gray group-hover:text-brand-blue">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
