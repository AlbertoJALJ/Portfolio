import SectionHeading from "./SectionHeading";
import { profile } from "@/data/content";
import {
  githubProfile,
  selectedRepos,
  contributionWeeks,
} from "@/data/github";
import { languageColors } from "@/data/techIcons";
import {
  FiGithub,
  FiStar,
  FiUsers,
  FiActivity,
  FiExternalLink,
  FiGitBranch,
} from "react-icons/fi";

const stats = [
  { label: "Repositorios públicos", value: githubProfile.publicRepos, Icon: FiGithub },
  { label: "Total de estrellas", value: githubProfile.totalStars, Icon: FiStar },
  { label: "Seguidores", value: githubProfile.followers, Icon: FiUsers },
  {
    label: "Contribuciones / año",
    value: githubProfile.contributionsLastYear,
    Icon: FiActivity,
  },
];

const levelColors = [
  "var(--surface-2)",
  "#0d3b2b",
  "#155e3d",
  "#1f9d5c",
  "var(--accent)",
];

function monthLabel(dateStr: string) {
  return new Date(dateStr + "T00:00:00Z").toLocaleDateString("es-MX", {
    month: "short",
    timeZone: "UTC",
  });
}

export default function GithubStats() {
  const monthMarks: { weekIndex: number; label: string }[] = [];
  let lastMonth = "";
  contributionWeeks.forEach((week, i) => {
    const firstDay = week.find((d) => d !== null);
    if (!firstDay) return;
    const label = monthLabel(firstDay.date);
    if (label !== lastMonth) {
      monthMarks.push({ weekIndex: i, label });
      lastMonth = label;
    }
  });

  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          title="GitHub"
          description={
            <>
              Actividad y repositorios seleccionados de{" "}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                @{githubProfile.username}
              </a>
              .
            </>
          }
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ label, value, Icon }) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Icon size={18} />
              </div>
              <p className="mt-3 text-2xl font-semibold text-foreground">
                {value.toLocaleString("en-US")}
              </p>
              <p className="section-label text-xs text-muted">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-border bg-surface p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-muted">
              {githubProfile.contributionsLastYear.toLocaleString("en-US")}{" "}
              contribuciones en el último año
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <span>Menos</span>
              {levelColors.map((c, i) => (
                <span
                  key={i}
                  className="h-2.5 w-2.5 rounded-sm"
                  style={{ backgroundColor: c }}
                />
              ))}
              <span>Más</span>
            </div>
          </div>

          <div className="mt-5 overflow-x-auto">
            <div className="inline-block min-w-full">
              <div
                className="grid text-[10px] text-muted"
                style={{
                  gridTemplateColumns: `repeat(${contributionWeeks.length}, minmax(11px, 1fr))`,
                }}
              >
                {contributionWeeks.map((_, i) => {
                  const mark = monthMarks.find((m) => m.weekIndex === i);
                  return (
                    <div key={i} className="pb-1">
                      {mark ? mark.label : ""}
                    </div>
                  );
                })}
              </div>
              <div
                className="grid gap-[3px]"
                style={{
                  gridTemplateColumns: `repeat(${contributionWeeks.length}, minmax(11px, 1fr))`,
                }}
              >
                {contributionWeeks.map((week, wi) => (
                  <div key={wi} className="grid gap-[3px]">
                    {week.map((day, di) =>
                      day ? (
                        <div
                          key={di}
                          title={`${day.count} contribuciones el ${day.date}`}
                          className="aspect-square rounded-[2px]"
                          style={{ backgroundColor: levelColors[day.level] }}
                        />
                      ) : (
                        <div key={di} className="aspect-square" />
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <p className="section-label text-xs text-muted">
            REPOSITORIOS SELECCIONADOS
          </p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-xs text-foreground hover:border-accent/40 transition-colors"
          >
            <FiGithub size={14} /> Todos los repositorios
          </a>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {selectedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-xl border border-border bg-surface p-5 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <FiGithub className="text-muted" size={16} />
                  <span className="font-medium text-foreground">{repo.name}</span>
                </div>
                <FiExternalLink className="shrink-0 text-muted" size={14} />
              </div>

              <p className="mt-2 flex-1 text-sm text-muted">{repo.description}</p>

              <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor: languageColors[repo.language] ?? "#8b98a5",
                    }}
                  />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <FiStar size={12} /> {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <FiGitBranch size={12} /> {repo.forks}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
