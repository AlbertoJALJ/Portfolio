export default function FeaturedTitle() {
  return (
    <div className="space-y-4">
      <p className="text-xs font-bold tracking-section-label text-brand-blue uppercase">Portfolio</p>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="text-4xl font-bold tracking-tight text-black lg:text-5xl">Featured Projects</h2>

        <p className="max-w-[430px] text-base leading-relaxed text-blue-gray lg:text-right">
          A selection of my recent works ranging from complex dashboards to
          high-conversion landing pages.
        </p>
      </div>
    </div>
  );
}
