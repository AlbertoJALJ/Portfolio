import SectionHeading from "./SectionHeading";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02" title="Experiencia" />

        <div className="space-y-8">
          {experience.map((item) => (
            <div
              key={`${item.org}-${item.period}`}
              className="grid gap-2 border-b border-border pb-8 last:border-none md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="text-foreground font-medium">{item.role}</p>
                <p className="text-sm text-accent">{item.org}</p>
                <p className="section-label mt-1 text-xs text-muted">
                  {item.period}
                </p>
              </div>
              <ul className="space-y-2 text-muted">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
