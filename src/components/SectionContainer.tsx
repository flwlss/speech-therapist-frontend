import type { ReactNode } from "react";

interface ISectionContainer {
  id?: string;
  tone?: "paper" | "mist";
  labelledBy?: string;
  children: ReactNode;
}

export default function SectionContainer({
  id,
  tone = "paper",
  labelledBy,
  children,
}: ISectionContainer) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${tone === "mist" ? "bg-mist" : "bg-paper"} py-16 lg:py-24`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
