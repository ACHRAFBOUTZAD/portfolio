import Image from "next/image";
import { profile } from "@/lib/content";

export function Logo({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={profile.logo}
      alt={`${profile.name} logo`}
      width={size}
      height={size}
      priority
      unoptimized
      className={`object-contain mix-blend-screen ${className}`}
    />
  );
}
