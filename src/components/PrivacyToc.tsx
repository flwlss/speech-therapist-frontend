"use client";

import { useEffect, useRef, useState } from "react";

interface ITocSection {
  id: string;
  number: string;
  title: string;
}

interface IPrivacyToc {
  sections: ITocSection[];
}

const PrivacyToc = ({ sections }: IPrivacyToc) => {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // Подсвечиваем в содержании раздел, который сейчас на экране
  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  const closeMobileList = () => {
    if (detailsRef.current) detailsRef.current.open = false;
  };

  const list = (
    <ol className="space-y-1">
      {sections.map((section) => {
        const isActive = section.id === activeId;
        return (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={closeMobileList}
              aria-current={isActive ? "location" : undefined}
              className={`flex gap-3 border-l-2 py-1.5 pl-4 text-sm leading-snug transition-colors ${
                isActive
                  ? "border-spruce font-medium text-spruce"
                  : "border-transparent text-ink/70 hover:text-spruce"
              }`}
            >
              <span className="w-5 shrink-0 tabular-nums">{section.number}.</span>
              <span>{section.title}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      {/* Телефон и планшет: раскрывающийся список */}
      <details
        ref={detailsRef}
        className="group rounded-2xl bg-white ring-1 ring-ink/10 lg:hidden"
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium [&::-webkit-details-marker]:hidden">
          Содержание
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </summary>
        <div className="border-t border-ink/10 px-5 py-4">{list}</div>
      </details>

      {/* Компьютер: список слева, прилипает при прокрутке */}
      <nav
        aria-label="Содержание"
        className="hidden lg:sticky lg:top-8 lg:block"
      >
        <p className="mb-4 font-serif text-xl font-semibold">Содержание</p>
        {list}
      </nav>
    </>
  );
};

export default PrivacyToc;
