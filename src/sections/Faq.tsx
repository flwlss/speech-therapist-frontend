"use client";

import { mockFaqs } from "@/common/mock";
import SectionContainer from "@/components/SectionContainer";
import SectionTitle from "@/components/SectionTitle";
import SkillItem from "@/components/SkillItem";
import { useCallback, useState } from "react";

const Faq = () => {
  const [accordionState, setAccordionState] = useState<Record<number, boolean>>(
    {},
  );

  const handleOpen = useCallback((code: number) => {
    setAccordionState((prev) => ({ ...prev, [code]: !prev[code] }));
  }, []);

  return (
    <SectionContainer id="faq" tone="mist">
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
        <div className="mb-10 lg:mb-0">
          <div className="lg:top-28">
            <SectionTitle title="Частые вопросы" />
          </div>
        </div>
        <div>
          {mockFaqs.map((faq) => (
            <SkillItem
              key={faq.id}
              handleOpen={handleOpen}
              faq={faq}
              isOpen={accordionState[faq.id] || false}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Faq;
