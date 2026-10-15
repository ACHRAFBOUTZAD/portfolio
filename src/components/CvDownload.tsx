import { profile } from "@/lib/content";

type CvDownloadProps = {
  className?: string;
  variant?: "primary" | "secondary";
};

export function CvDownload({ className = "", variant = "secondary" }: CvDownloadProps) {
  const styles =
    variant === "primary"
      ? "bg-accent font-semibold text-ink-500 hover:bg-tangerine-600"
      : "border border-border font-medium text-foreground hover:border-muted-dark hover:bg-surface";

  return (
    <a
      href={profile.cv}
      download={profile.cvFileName}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 transition-colors active:scale-[0.98] ${styles} ${className}`}
    >
      <span aria-hidden>↓</span>
      Download CV
    </a>
  );
}
