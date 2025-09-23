import { Rewiew } from "@/types/Rewiews";
import Image from "next/image";

interface IRewiewSlide {
  rewiew: Rewiew;
}

export default function RewiewSlide({ rewiew }: IRewiewSlide) {
  return (
    <div className="pb-7 space-y-4 px-10">
      <div className="flex items-center space-x-5">
        <div className="border border-blue-700 rounded-full w-[80px] h-[80px] min-w-[80px] xl:w-[100px] xl:h-[100px] xl:min-w-[100px]">
          <Image
            src={rewiew.photo ?? "/noPhoto.svg"}
            width={100}
            height={100}
            className="rounded-full w-full h-full object-cover"
            alt="rewiew photo"
          />
        </div>
        <div>
          <p className="text-lg lg:text-xl xl:text-2xl">{rewiew.name}</p>
          <p className="text-xs xl:text-sm">{rewiew.date}</p>
        </div>
      </div>
      <p className="text-sm font-light lg:text-lg xl:text-xl">{rewiew.text}</p>
    </div>
  );
}
