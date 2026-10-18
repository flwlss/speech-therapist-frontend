import type { ReactNode } from "react";

interface ISectionContainer {
  id?: string;
  tone?: "paper" | "mist";
  children: ReactNode;
}

export default function SectionContainer({
  id,
  tone = "paper",
  children,
}: ISectionContainer) {
  return (
    <section
      id={id}
      className={`${tone === "mist" ? "bg-mist" : "bg-paper"} py-16 lg:py-24`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
