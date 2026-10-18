"use client";

import SectionTitle from "@/components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { mockReviews } from "@/common/mock";
import ReviewSlide from "@/components/ReviewSlide";
import SectionContainer from "@/components/SectionContainer";

const Reviews = () => {
  return (
    <SectionContainer id="reviews" tone="mist" labelledBy="reviews-title">
      <SectionTitle
        id="reviews-title"
        title="Отзывы"
        className="mb-10 lg:mb-14"
      />
      <Swiper
        className="reviews-swiper"
        navigation
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        simulateTouch={false}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        modules={[Pagination, Navigation]}
      >
        {mockReviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewSlide review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  );
};

export default Reviews;
