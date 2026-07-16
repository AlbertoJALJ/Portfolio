import { clients } from "@/data/content";

export default function Clients() {
  return (
    <section className="border-y border-border bg-surface/50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label mb-6 text-center text-xs text-muted">
          EMPRESAS Y CLIENTES CON LOS QUE HE TRABAJADO
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((client) => (
            <span
              key={client}
              className="text-sm text-muted/80 hover:text-foreground transition-colors"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
