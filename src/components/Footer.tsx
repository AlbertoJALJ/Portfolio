import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            WhatsApp
          </a>
        </div>
        <p className="text-xs text-muted/70">Construido con Next.js · Tailwind CSS</p>
      </div>
    </footer>
  );
}
