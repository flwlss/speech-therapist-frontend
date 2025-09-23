"use client";

import { mockContacts } from "@/common/mock";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";

export default function Contaсts() {
  return (
    <section>
      <SectionTitle title="Запись на приём" />
      <div className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-10 lg:space-x-0">
        <div className="space-y-10">
          {mockContacts.map((contant) => (
            <div key={contant.id} className="space-y-1">
              <Link
                target="_blank"
                href={contant.url}
                className="text-blue-700 text-lg/tight lg:text-xl xl:text-2xl"
              >
                {contant.title}
              </Link>
              <div className="flex items-center space-x-2 my-2">
                <Image
                  src={"/location.svg"}
                  width={25}
                  height={25}
                  alt="icon"
                />
                <p className="text-sm lg:text-lg">{contant.address}</p>
              </div>
              {contant.metro.map((x) => (
                <div
                  key={x.id}
                  className="flex items-center space-x-2 text-sm font-light lg:text-lg"
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full block" />
                  <p>{x.name}</p>
                  <Image
                    src={"/subway.svg"}
                    width={25}
                    height={25}
                    alt="icon"
                  />
                  <p>{x.time}&nbsp;мин</p>
                </div>
              ))}
              <div className="flex items-center space-x-2 mt-2">
                <Image src={"/phone.svg"} width={25} height={25} alt="icon" />
                <a
                  className="text-sm lg:text-lg"
                  href={`tel:${contant.phoneNumber}`}
                >
                  {contant.phoneNumber}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-full border border-blue-700 rounded-3xl min-h-[300px] flex items-center justify-center">
          Карта
        </div>
      </div>
    </section>
  );
}
