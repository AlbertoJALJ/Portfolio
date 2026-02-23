type HeroBadgeProps = {
  text?: string;
};

export default function HeroBadge({ text = "AVAILABLE FOR FREELANCE" }: HeroBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2 text-xs font-semibold uppercase tracking-section-label text-brand-blue">
      <span className="h-2 w-2 rounded-full bg-brand-blue" />
      <span>{text}</span>
    </div>
  );
}
