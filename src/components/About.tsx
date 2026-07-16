import SectionHeading from "./SectionHeading";
import { education, profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="01"
          title="Sobre mí"
          description="Un poco de contexto sobre quién soy y cómo trabajo."
        />

        <div className="grid gap-10 md:grid-cols-[auto_1fr_1fr]">
          <div className="justify-self-center md:justify-self-start">
            <div className="h-40 w-40 overflow-hidden rounded-2xl border border-border bg-surface sm:h-48 sm:w-48">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 text-muted">
            <p>
              Soy <span className="text-foreground">Full Stack Developer</span> con{" "}
              {profile.yearsExperience} años de experiencia desarrollando aplicaciones
              empresariales, con especial enfoque en{" "}
              <span className="text-foreground">backend y arquitectura de software</span>.
              También desarrollo interfaces frontend cuando el proyecto lo requiere.
            </p>
            <p>
              Trabajo como Full Stack Developer en Exclusivas Automotrices Sánchez,
              liderando el desarrollo técnico de un sistema POS multi-sucursal. En
              paralelo, tomo proyectos freelance y doy clases de programación de
              forma independiente.
            </p>
            <p>
              Me interesa el código limpio, la arquitectura mantenible y escalable, y
              automatizar todo lo que se pueda. Actualmente me estoy preparando para la
              certificación{" "}
              <span className="text-foreground">
                AWS Certified Solutions Architect – Associate
              </span>
              .
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="section-label text-xs text-accent">UBICACIÓN</p>
              <p className="mt-2 text-foreground">{profile.location}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="section-label text-xs text-accent">EDUCACIÓN</p>
              <p className="mt-2 text-foreground">{education.degree}</p>
              <p className="text-sm text-muted">
                {education.school} · {education.period}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="section-label text-xs text-accent">FACTURACIÓN</p>
              <p className="mt-2 text-foreground">
                Puedo facturar a clientes mexicanos que lo requieran.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
