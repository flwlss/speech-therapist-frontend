"use client";

import { mockPersonFeatures } from "@/common/mock";
import Image from "next/image";

export default function About() {
  return (
    <section className="space-y-5 lg:space-y-10">
      <div className="flex flex-col items-center space-y-3 lg:flex-row lg:space-y-0">
        <Image
          width={300}
          className="min-w-[300px] min-h-[300px] xl:min-w-[400px] xl:min-h-[400px] "
          height={300}
          src={"/sofia.jpg"}
          alt="Photo of a speech therapist"
          priority
        />
        <div className="space-y-3">
          <h1 className="text-center text-2xl/tight whitespace-pre lg:text-left lg:text-3xl xl:text-4xl">
            {/* добавить автоматический подсчет */}
            {`Логопед-дефектолог\nсо стажем более 1 года`}
          </h1>
          <p className="font-light lg:text-lg xl:text-xl">
            Я — <strong>Нестерчук София</strong>, провожу работу с детьми,
            страдающими от задержек речевого развития, болезней центральной
            нервной системы. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. A explicabo, labore repudiandae quia enim voluptatem magni
            eos, ipsam non, velit dolores debitis. Quas mollitia, temporibus
            esse autem laborum quos aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="space-y-3 lg:grid lg:grid-cols-2 lg:gap-10 lg:space-y-0">
        {mockPersonFeatures.map((item) => (
          <article key={item.id}>
            <div className="flex space-x-1.5">
              <Image
                src={item.icon}
                className="min-w-[25px] max-h-[25px] xl:min-w-[30px] xl:min-h-[30px]"
                width={25}
                height={25}
                alt="icon"
              />
              <h3 className="text-xl mb-1 xl:text-2xl">{item.title}</h3>
            </div>
            <ul className="text-xs list-disc ml-4 font-light md:text-sm xl:text-lg xl:ml-5">
              {item.features.map((feat) => (
                <li key={feat.id}>
                  {feat.year && <b>{feat.year}&nbsp;</b>}
                  {feat.item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
