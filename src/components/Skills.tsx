import SectionHeading from "./SectionHeading";
import { certifications } from "@/data/content";
import { languageDistribution } from "@/data/github";
import { languageColors } from "@/data/techIcons";
import {
  languages,
  frameworks,
  data as dataSkills,
  tooling,
  analytics,
  practices,
  type TechIcon,
} from "@/data/techIcons";

const columns: { label: string; items: TechIcon[] }[] = [
  { label: "Lenguajes", items: languages },
  { label: "Frameworks", items: frameworks },
  { label: "Datos", items: dataSkills },
  { label: "DevOps & Cloud", items: tooling },
  { label: "Analítica & SEO", items: analytics },
  { label: "Prácticas", items: practices },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="06"
          title="Herramientas con las que trabajo"
          description="Lenguajes, frameworks y herramientas que uso día a día."
        />

        <div className="rounded-xl border border-border bg-surface p-6">
          <div className="flex items-center justify-between">
            <p className="section-label text-xs text-muted">
              DISTRIBUCIÓN DE LENGUAJES
            </p>
            <p className="section-label text-xs text-muted">por repos en GitHub</p>
          </div>

          <div className="mt-5 flex h-3 w-full overflow-hidden rounded-full bg-surface-2">
            {languageDistribution.map((lang) => (
              <div
                key={lang.name}
                style={{
                  width: `${lang.percent}%`,
                  backgroundColor: languageColors[lang.name] ?? "#8b98a5",
                }}
              />
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {languageDistribution.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2 text-sm">
                <span
                  className="h-2.5 w-2.5 rounded-sm"
                  style={{ backgroundColor: languageColors[lang.name] ?? "#8b98a5" }}
                />
                <span className="text-foreground">{lang.name}</span>
                <span className="text-muted">{lang.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((col) => (
            <div
              key={col.label}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <p className="section-label text-xs text-muted">
                {col.label.toUpperCase()}
              </p>
              <ul className="mt-4 space-y-3">
                {col.items.map(({ name, Icon, color }) => (
                  <li key={name} className="flex items-center gap-3 text-sm">
                    <Icon size={18} color={color} />
                    <span className="text-foreground">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {certifications.length > 0 && (
          <div className="mt-6 rounded-xl border border-border bg-surface p-6">
            <p className="section-label text-xs text-accent">CERTIFICACIONES</p>
            <ul className="mt-2 space-y-1">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-muted">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
