"use client";

import { mockSkills } from "@/common/mock";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { useState } from "react";

export default function Skills() {
  const [accordionState, setAccordionState] = useState<Record<number, boolean>>(
    {}
  );

  const handleOpen = (code: number) => {
    setAccordionState((prev) => ({ ...prev, [code]: !prev[code] }));
  };

  return (
    <section>
      <SectionTitle title="С чем помогу" />
      <div className="space-y-2 lg:space-y-2.5 xl:space-y-3">
        {mockSkills.map((skill) => (
          <div
            onClick={() => handleOpen(skill.id)}
            key={skill.id}
            className="bg-blue-100 p-5 cursor-pointer rounded-2xl space-y-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-lg/tight lg:text-xl xl:text-2xl">
                {skill.title}
              </p>
              <Image
                className={`duration-300 ease-in-out ${
                  accordionState[skill.id] && "-rotate-45"
                }`}
                src={"/plus.svg"}
                width={25}
                height={25}
                alt="icon"
              />
            </div>
            {accordionState[skill.id] && (
              <p className="text-sm font-light lg:text-lg xl:text-xl">
                {skill.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
