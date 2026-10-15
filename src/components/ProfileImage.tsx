"use client";

import Image from "next/image";
import { useState } from "react";

export function ProfileImage({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="grid h-full w-full place-items-center bg-surface">
        <span className="font-display text-6xl font-semibold text-accent sm:text-7xl">
          {initials}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      loading="eager"
      fetchPriority="high"
      sizes="(max-width: 768px) 80vw, 420px"
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}
