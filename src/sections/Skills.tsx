"use client";

import { mockSkills } from "@/common/mock";
import SectionTitle from "@/components/SectionTitle";
import SkillItem from "@/components/SkillItem";
import { useCallback, useState } from "react";

const Skills = () => {
  const [accordionState, setAccordionState] = useState<Record<number, boolean>>(
    {},
  );

  const handleOpen = useCallback((code: number) => {
    setAccordionState((prev) => ({ ...prev, [code]: !prev[code] }));
  }, []);

  return (
    <section id="skills">
      <SectionTitle title="С чем помогу" />
      <div className="space-y-2 lg:space-y-2.5 xl:space-y-3">
        {mockSkills.map((skill) => (
          <SkillItem
            key={skill.id}
            handleOpen={handleOpen}
            skill={skill}
            isOpen={accordionState[skill.id] || false}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
