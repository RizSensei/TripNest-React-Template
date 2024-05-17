import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const RoomCarousel = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      spaceBetween={10}
      navigation={true}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper2"
    >
      <SwiperSlide>
        <div className="swiper-image h-full w-full bg-gray-300"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image h-full w-full bg-gray-300"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image h-full w-full bg-gray-300"></div>
      </SwiperSlide>
    </Swiper>
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="swiper-image h-full w-full bg-gray-300"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image h-full w-full bg-gray-300"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image h-full w-full bg-gray-300"></div>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default RoomCarousel