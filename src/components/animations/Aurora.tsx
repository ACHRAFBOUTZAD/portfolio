"use client";

export function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="aurora-blob absolute -left-[15%] top-[-8%] h-[22rem] w-[22rem] rounded-full opacity-70 blur-[50px] sm:h-[28rem] sm:w-[28rem]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,125,0,0.4), transparent 70%)",
          animationDuration: "22s",
        }}
      />
      <div
        className="aurora-blob absolute right-[-8%] top-[8%] h-[20rem] w-[20rem] rounded-full opacity-70 blur-[50px] sm:h-[26rem] sm:w-[26rem]"
        style={{
          background:
            "radial-gradient(circle, rgba(62,197,218,0.35), transparent 70%)",
          animationDuration: "28s",
          animationDelay: "-8s",
        }}
      />
      <div
        className="aurora-blob absolute bottom-[-10%] left-[28%] h-[18rem] w-[18rem] rounded-full opacity-60 blur-[45px] sm:h-[24rem] sm:w-[24rem]"
        style={{
          background:
            "radial-gradient(circle, rgba(230,98,53,0.3), transparent 70%)",
          animationDuration: "26s",
          animationDelay: "-14s",
        }}
      />
    </div>
  );
}
