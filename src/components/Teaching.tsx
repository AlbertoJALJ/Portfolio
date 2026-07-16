import SectionHeading from "./SectionHeading";

const topics = [
  "JavaScript desde cero",
  "React",
  "Node.js y NestJS",
  "Python",
  "SQL y bases de datos",
  "IA Generativa & Prompt Engineering",
];

export default function Teaching() {
  return (
    <section id="teaching" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="07"
          title="Docencia"
          description="Además de desarrollar software, imparto clases de programación de forma independiente en Superprof."
        />

        <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="section-label text-xs text-accent">SUPERPROF</p>
            <p className="mt-2 text-foreground">
              Perfil optimizado, entre los primeros 10 lugares en CDMX.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                JavaScript: desde fundamentos hasta POO avanzada, programación
                funcional y async/await.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                Node.js, React, Python y SQL / bases de datos.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                Testing y patrones de diseño aplicados a proyectos reales.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                Proyectos guiados: por ejemplo, un sistema de gestión de
                calificaciones en Node.js con OOP y métodos de arrays.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="section-label text-xs text-accent">TEMAS QUE ENSEÑO</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full bg-accent-soft px-3 py-1.5 text-sm text-accent"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
