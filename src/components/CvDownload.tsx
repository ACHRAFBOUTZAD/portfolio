import { profile } from "@/lib/content";

type CvDownloadProps = {
  className?: string;
  variant?: "primary" | "glass";
};

export function CvDownload({ className = "", variant = "glass" }: CvDownloadProps) {
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-accent to-accent-2 font-semibold text-ink-500 shadow-lg shadow-accent/30"
      : "glass font-medium text-foreground hover:bg-white/10";

  return (
    <a
      href={profile.cv}
      download={profile.cvFileName}
      className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 transition-transform hover:scale-[1.03] active:scale-95 ${styles} ${className}`}
    >
      <span aria-hidden>↓</span>
      Download CV
    </a>
  );
}
