import { profile } from "@/data/content";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
  { label: "LinkedIn", value: "alberto-lopez-jimenez", href: profile.linkedin },
  { label: "GitHub", value: "AlbertoJALJ", href: profile.github },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-border bg-surface p-10 sm:p-14">
          <p className="section-label text-sm text-accent">CONTACTO</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            ¿Tienes un proyecto en mente? Hablemos.
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Disponible para proyectos freelance y colaboraciones. Respondo rápido
            por WhatsApp o correo.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between rounded-xl border border-border bg-surface-2 px-5 py-4 hover:border-accent/40 transition-colors"
              >
                <span className="section-label text-xs text-muted">
                  {channel.label.toUpperCase()}
                </span>
                <span className="text-foreground">{channel.value}</span>
              </a>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted">{profile.location}</p>
        </div>
      </div>
    </section>
  );
}
