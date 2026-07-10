import { Reveal } from "@/components/animations/Reveal";

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <Reveal>
        <div className="mb-3 flex items-center gap-3 font-mono text-sm text-accent-2">
          <span>{index}</span>
          <span className="h-px w-10 bg-gradient-to-r from-accent-2 to-transparent" />
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg text-muted">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
