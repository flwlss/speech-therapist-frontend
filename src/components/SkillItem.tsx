import { memo, useCallback } from "react";
import Image from "next/image";
import type { Skill } from "@/types/skills";

interface ISkillItem {
  handleOpen: (id: number) => void;
  skill: Skill;
  isOpen: boolean;
}

const SkillItem = ({ handleOpen, skill, isOpen }: ISkillItem) => {
  const handleClick = useCallback(() => {
    handleOpen(skill.id);
  }, [handleOpen, skill.id]);

  return (
    <div
      onClick={handleClick}
      key={skill.id}
      className="bg-blue-100 p-5 cursor-pointer rounded-2xl space-y-4"
    >
      <div className="flex items-center justify-between">
        <p className="text-lg/tight lg:text-xl xl:text-2xl">{skill.title}</p>
        <Image
          className={`duration-300 ease-in-out ${isOpen && "-rotate-45"}`}
          src={"/plus.svg"}
          width={25}
          height={25}
          loading="lazy"
          alt={isOpen ? "Закрыть" : "Открыть"}
        />
      </div>
      {isOpen && (
        <p className="text-sm font-light lg:text-lg xl:text-xl">
          {skill.description}
        </p>
      )}
    </div>
  );
};

export default memo(SkillItem);
