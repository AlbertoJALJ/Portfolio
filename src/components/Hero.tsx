import { profile } from "@/data/content";

const shellLines = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: `${profile.name} — ${profile.role}` },
  { prompt: true, text: "cat stack.txt" },
  { prompt: false, text: "Node.js · NestJS · TypeScript · React · Python" },
  { prompt: true, text: "" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-grid px-6 pt-32 pb-16"
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-4 py-1.5 text-sm text-accent">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Disponible para freelance
        </span>

        <h1 className="mt-8 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
          Hola, soy {profile.name.split(" ")[0]}.
        </h1>
        <h2 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-accent sm:text-6xl">
          {profile.role}.
        </h2>

        <p className="mt-6 max-w-xl text-base text-muted">
          {profile.yearsExperience} años construyendo aplicaciones empresariales:
          APIs escalables, arquitectura de software y sistemas de misión crítica.
          También imparto clases de programación de forma independiente.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
          >
            Contáctame
          </a>
          <a
            href="#projects"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-accent/60 transition-colors"
          >
            Ver proyectos →
          </a>
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Descargar CV
          </a>
        </div>
      </div>

      <div className="relative mt-14 w-full max-w-3xl overflow-hidden rounded-xl border border-border bg-surface shadow-2xl">
        <div className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="section-label text-xs text-muted">
              alberto · portfolio shell
            </span>
          </div>
          <span className="section-label hidden text-xs text-muted sm:block">
            alberto@portfolio:~
          </span>
        </div>

        <div className="space-y-1.5 p-6 text-left font-mono text-sm">
          {shellLines.map((line, i) =>
            line.prompt ? (
              <p key={i} className="text-foreground">
                <span className="text-accent">alberto@portfolio</span>
                <span className="text-muted"> ~ $ </span>
                {line.text}
              </p>
            ) : (
              <p key={i} className="pl-1 text-muted">
                {line.text}
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
}
