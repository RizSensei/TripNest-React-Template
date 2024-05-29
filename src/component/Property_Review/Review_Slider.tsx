import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../public/style/review-style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Review_Slider = () => {
  return (
    <>
      <Swiper
        breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            // 480: {
            //   slidesPerView: 2,
            // },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            // 1536: {
            //   slidesPerView: 4,
            // },
          }}
        spaceBetween={20}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {["1", "2", "3", "4", "5", "6"].map((item) => (
          <SwiperSlide className="p-6 border border-gray-400 rounded-xl">
            <div className="flex flex-col gap-5 text-sm">
                <div className="flex gap-2 items-center">
                    <div className="span rounded-full h-10 w-10 bg-emerald text-white flex flex-col items-center justify-center">A</div>
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold">Rishav Maskey</h1>
                        <p className="text-sm">Finland</p>
                    </div>
                </div>
                <p className="text-sm font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis, tempora tenetur corrupti nulla rem commodi accusantium aut modi asperiores.
                </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Review_Slider;
