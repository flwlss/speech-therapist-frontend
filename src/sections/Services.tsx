"use client";

import { mockServices } from "@/common/mock";
import SectionTitle from "@/components/SectionTitle";

export default function Services() {
  return (
    <section>
      <SectionTitle title="Услуги и цены" />
      <div className="space-y-5 lg:grid lg:grid-cols-2 lg:gap-10 lg:space-y-0">
        {mockServices.map((service) => (
          <div key={service.id} className="space-y-1.5">
            <div className="flex justify-between border-b border-b-blue-700 text-lg lg:text-xl xl:text-2xl">
              <h3 className="pb-1.5">{service.title}</h3>
              <span>{service.price}&nbsp;₽</span>
            </div>
            <p className="text-sm font-light lg:text-lg xl:text-xl">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
