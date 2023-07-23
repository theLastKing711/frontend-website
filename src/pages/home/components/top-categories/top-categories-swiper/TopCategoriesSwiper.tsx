// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Pagination } from "swiper/modules";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function FeaturedProductsSwiper({ children }: Props) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        spaceBetween={50}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          870: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1180: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
}
