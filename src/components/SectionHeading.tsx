import type { ReactNode } from "react";

export default function SectionHeading({
  index,
  total = "07",
  title,
  description,
}: {
  index: string;
  total?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <div className="mb-12">
      <p className="section-label text-sm text-accent">
        [ {index}/{total} ]
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-muted">{description}</p>
      )}
    </div>
  );
}
