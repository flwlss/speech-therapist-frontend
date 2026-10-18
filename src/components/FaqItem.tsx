import { memo, useCallback } from "react";
import type { Faq } from "@/types/faq";

interface IFaqItem {
  handleOpen: (id: number) => void;
  faq: Faq;
  isOpen: boolean;
}

const FaqItem = ({ handleOpen, faq, isOpen }: IFaqItem) => {
  const handleClick = useCallback(() => {
    handleOpen(faq.id);
  }, [handleOpen, faq.id]);

  return (
    <div className="border-t border-ink/15 last:border-b">
      <h3>
        <button
          type="button"
          id={`faq-button-${faq.id}`}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${faq.id}`}
          onClick={handleClick}
          className="group flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left"
        >
          <span
            className={`font-serif text-xl font-medium leading-snug transition-colors group-hover:text-spruce lg:text-2xl ${
              isOpen ? "text-spruce" : ""
            }`}
          >
            {faq.title}
          </span>
          <span
            aria-hidden
            className="relative mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-spruce/40 text-spruce transition-colors group-hover:bg-spruce group-hover:text-white"
          >
            <span className="absolute h-0.5 w-4 bg-current" />
            <span
              className={`absolute h-4 w-0.5 bg-current transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </span>
        </button>
      </h3>
      <div
        id={`faq-panel-${faq.id}`}
        role="region"
        aria-labelledby={`faq-button-${faq.id}`}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[65ch] pb-7 pr-12 text-ink/85">
            {faq.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(FaqItem);
