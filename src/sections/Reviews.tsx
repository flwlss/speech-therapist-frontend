"use client";

import SectionTitle from "@/components/SectionTitle";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { mockReviews } from "@/common/mock";
import ReviewSlide from "@/components/ReviewSlide";

const Reviews = () => {
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
        {mockReviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewSlide review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
