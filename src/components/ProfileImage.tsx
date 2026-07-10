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
      <div className="grid h-full w-full place-items-center bg-gradient-to-br from-surface via-teal-200 to-surface">
        <span className="font-display text-6xl font-bold text-gradient sm:text-7xl">
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
      priority
      sizes="(max-width: 768px) 80vw, 420px"
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}
