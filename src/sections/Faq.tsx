"use client";

import { mockFaqs } from "@/common/mock";
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
    <section id="faq">
      <SectionTitle title="Частые вопросы" />
      <div className="space-y-2 lg:space-y-2.5 xl:space-y-3">
        {mockFaqs.map((faq) => (
          <SkillItem
            key={faq.id}
            handleOpen={handleOpen}
            faq={faq}
            isOpen={accordionState[faq.id] || false}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
