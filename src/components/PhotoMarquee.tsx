export function PhotoMarquee({ imgs, itemClass = "w-56", speed = 40, className = "" }: { imgs: string[]; itemClass?: string; speed?: number; className?: string }) {
  const loop = [...imgs, ...imgs];
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="flex h-full w-max animate-[marquee_var(--d)_linear_infinite] gap-1.5" style={{ ["--d" as string]: `${speed}s` }}>
        {loop.map((src, i) => (
          <img key={i} src={src} alt="" loading="lazy" aria-hidden={i >= imgs.length} className={`h-full shrink-0 object-cover ${itemClass}`} />
        ))}
      </div>
    </div>
  );
}
