import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="/images/sliders/01.jpg" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sliders/02.jpg" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/sliders/03.jpg" alt="slider" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
