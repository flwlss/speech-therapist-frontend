"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { mockPrograms } from "@/common/mock";
import SectionTitle from "@/components/SectionTitle";
import SectionContainer from "@/components/SectionContainer";

const splitLead = (item: string): [string, string] => {
  const index = item.indexOf(" – ");
  return index > 0 ? [item.slice(0, index), item.slice(index)] : [item, ""];
};

const Programs = () => {
  const [activeId, setActiveId] = useState(mockPrograms[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeService =
    mockPrograms.find((service) => service.id === activeId) ?? mockPrograms[0];

  // Переключаем услугу и возвращаем текст в начало внутри контейнера.
  // Высота блока на широких экранах фиксирована, поэтому страница не прыгает.
  const selectService = (id: number) => {
    setActiveId(id);
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const last = mockPrograms.length - 1;
    let next = -1;

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      next = index === last ? 0 : index + 1;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      next = index === 0 ? last : index - 1;
    } else if (e.key === "Home") {
      next = 0;
    } else if (e.key === "End") {
      next = last;
    }

    if (next === -1) return;

    e.preventDefault();
    const target = mockPrograms[next];
    selectService(target.id);
    document.getElementById(`service-tab-${target.id}`)?.focus();
  };

  return (
    <SectionContainer id="programs">
      <SectionTitle title="Программы" className="mb-8 lg:mb-14" />

      <div className="lg:grid lg:grid-cols-[minmax(0,330px)_minmax(0,1fr)] lg:items-start lg:gap-12">
        {/* Телефон и планшет: выпадающий выбор услуги */}
        <div
          className="mb-6 lg:hidden"
          onKeyDown={(e) => {
            if (e.key === "Escape") setIsMenuOpen(false);
          }}
        >
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="service-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl bg-spruce px-5 py-4 text-left font-medium leading-snug text-white"
          >
            <span>{activeService.title}</span>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                isMenuOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {isMenuOpen && (
            <ul
              id="service-menu"
              className="animate-fade-in mt-2 overflow-hidden rounded-2xl bg-white ring-1 ring-ink/10"
            >
              {mockPrograms.map((service) => {
                const isActive = service.id === activeId;
                return (
                  <li
                    key={service.id}
                    className="border-t border-ink/10 first:border-t-0"
                  >
                    <button
                      type="button"
                      aria-current={isActive}
                      onClick={() => {
                        selectService(service.id);
                        setIsMenuOpen(false);
                      }}
                      className={`flex w-full cursor-pointer items-center justify-between gap-3 px-5 py-4 text-left leading-snug ${
                        isActive ? "bg-mist font-semibold text-spruce" : ""
                      }`}
                    >
                      <span>{service.title}</span>
                      {isActive && (
                        <svg
                          aria-hidden
                          viewBox="0 0 24 24"
                          className="h-5 w-5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m5 12 5 5L20 7" />
                        </svg>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Компьютер: список услуг слева */}
        <div
          role="tablist"
          aria-label="Услуги и цены"
          className="hidden lg:flex lg:flex-col lg:gap-1"
        >
          {mockPrograms.map((service, index) => {
            const isActive = service.id === activeId;
            return (
              <button
                key={service.id}
                type="button"
                role="tab"
                id={`service-tab-${service.id}`}
                aria-selected={isActive}
                aria-controls={`service-panel-${service.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectService(service.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`cursor-pointer rounded-xl px-5 py-4 text-left text-base leading-snug transition-colors ${
                  isActive
                    ? "bg-mist font-semibold text-spruce shadow-[inset_4px_0_0_var(--color-spruce)]"
                    : "text-ink/75 hover:bg-mist"
                }`}
              >
                {service.title}
              </button>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-ink/10 lg:h-[min(42rem,calc(100svh-8rem))]">
          <div
            ref={scrollRef}
            className="p-6 sm:p-8 lg:h-full lg:overflow-y-auto lg:p-10 lg:pb-16 lg:[scrollbar-color:var(--color-sage)_transparent] lg:[scrollbar-width:thin]"
          >
            {mockPrograms.map((service) => (
              <div
                key={service.id}
                role="tabpanel"
                id={`service-panel-${service.id}`}
                aria-labelledby={`service-tab-${service.id}`}
                hidden={service.id !== activeId}
                tabIndex={0}
                className="animate-fade-in"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h3 className="max-w-[28ch] font-serif text-2xl font-semibold leading-tight lg:text-3xl">
                    {service.title}
                  </h3>
                </div>

                <div className="mt-6 max-w-[64ch] space-y-4 text-ink/85">
                  {service.intro.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {service.note && (
                  <p className="mt-6 max-w-[64ch] rounded-2xl border-l-4 border-sun bg-mist p-5 text-ink/90">
                    {service.note}
                  </p>
                )}

                <div
                  className={`mt-8 grid gap-8 ${
                    service.lists.length > 1 ? "xl:grid-cols-2" : ""
                  }`}
                >
                  {service.lists.map((list) => (
                    <div key={list.title}>
                      <h4 className="font-serif text-xl font-semibold">
                        {list.title}
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {list.items.map((item, index) => {
                          const [lead, rest] = splitLead(item);
                          return (
                            <li key={index} className="flex gap-3">
                              <span
                                aria-hidden
                                className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-spruce"
                              />
                              <span className="text-ink/80">
                                {rest ? (
                                  <>
                                    <strong className="font-medium text-ink">
                                      {lead}
                                    </strong>
                                    {rest}
                                  </>
                                ) : (
                                  item
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-12 bg-gradient-to-t from-white to-transparent lg:block"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Programs;
