import SectionHeading from "./SectionHeading";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          title="Proyectos"
          description="Trabajo propio y para clientes: productos internos, sitios en producción y librerías open source."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium text-foreground">
                  {project.title}
                </h3>
                <span className="section-label shrink-0 rounded-full border border-border px-2 py-0.5 text-[11px] text-muted">
                  {project.tag}
                </span>
              </div>

              <p className="mt-3 flex-1 text-sm text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent-soft px-2.5 py-1 text-xs text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm text-foreground underline underline-offset-4 hover:text-accent"
                >
                  {project.linkLabel ?? "Ver proyecto"} →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
