import { memo, useCallback } from "react";
import Image from "next/image";
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
    <div
      onClick={handleClick}
      key={faq.id}
      className="bg-blue-100 p-5 cursor-pointer rounded-2xl space-y-4"
    >
      <div className="flex items-center justify-between">
        <p className="text-lg/tight lg:text-xl xl:text-2xl">{faq.title}</p>
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
          {faq.description}
        </p>
      )}
    </div>
  );
};

export default memo(FaqItem);
