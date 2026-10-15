import { Reveal } from "@/components/animations/Reveal";

export function SectionHeading({ title }: { title: string }) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}
