import type { SVGProps } from "react";

export default function RocketIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4.5 19.5c2.5-.5 4.5-2.5 5-5L5 10l1.5-1.5 4.5 4.5c2.5-.5 4.5-2.5 5-5L21 3l-4.5 5c-.5 2.5-2.5 4.5-5 5L7 8.5 5.5 10 10 14.5c-.5 2.5-2.5 4.5-5 5Z" />
    </svg>
  );
}
