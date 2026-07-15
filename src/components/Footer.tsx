import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 sm:py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 px-4 text-center text-sm text-muted sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Motion.
        </p>
        <a
          href="#top"
          className="transition-colors hover:text-foreground"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
