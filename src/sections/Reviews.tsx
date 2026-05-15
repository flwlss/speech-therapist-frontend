"use client";

import SectionTitle from "@/components/SectionTitle";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import RewiewSlide from "@/components/RewiewSlide";
import { mockReviews } from "@/common/mock";

const Rewiews = () => {
  return (
    <section>
      <SectionTitle title="Отзывы" />
      <Swiper
        navigation
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        simulateTouch={false}
        style={{ "--swiper-navigation-size": "24px" } as React.CSSProperties}
        modules={[Pagination, Navigation]}
      >
        {mockReviews.map((rewiew) => (
          <SwiperSlide key={rewiew.id}>
            <RewiewSlide rewiew={rewiew} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Rewiews;
