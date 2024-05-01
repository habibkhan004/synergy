import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { Pagination, Navigation } from "swiper";

import slide_image_1 from "./gallary/one.jpg";
import slide_image_2 from "./gallary/2.jpg";
import slide_image_3 from "./gallary/3.jpg";
import slide_image_4 from "./gallary/4.jpeg";
import slide_image_5 from "./gallary/5.jpg";
import slide_image_6 from "./gallary/6.jpg";
import slide_image_7 from "./gallary/15.jpg";

function Team() {
  return (
    <div className="container1">
      <h1 className="heading1">Our Team</h1>
      <Swiper
        // effect={"coverflow"}
        // grabCursor={true}
        // centeredSlides={true}
        // loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className="sw">
          <img src={slide_image_7} alt="slide_image" />
          <h2>khan Khan</h2>
          <h4>Flutter Developer</h4>
        </SwiperSlide>
        <SwiperSlide className="sw">
          <img src={slide_image_7} alt="slide_image" />
          <h2>khan Khan</h2>
          <h4>Flutter Developer</h4>
        </SwiperSlide>
        <SwiperSlide className="sw">
          <img src={slide_image_7} alt="slide_image" />
          <h2>khan Khan</h2>
          <h4>Flutter Developer</h4>
        </SwiperSlide>
        <SwiperSlide className="sw">
          <img src={slide_image_7} alt="slide_image" />
          <h2>khan Khan</h2>
          <h4>Flutter Developer</h4>
        </SwiperSlide>
        <SwiperSlide className="sw">
          <img src={slide_image_7} alt="slide_image" />
          <h2>khan Khan</h2>
          <h4>Flutter Developer</h4>
        </SwiperSlide>
        <SwiperSlide className="sw">
          <img src={slide_image_7} alt="slide_image" />
          <h2>khan Khan</h2>
          <h4>Flutter Developer</h4>
        </SwiperSlide>
        <SwiperSlide className="sw">
          <img src={slide_image_7} alt="slide_image" />
          <h2>khan Khan</h2>
          <h4>Flutter Developer</h4>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline">{"<"}</ion-icon>
          </div>

          <div className="swiper-button-next slider-arrow ">
            <ion-icon name="arrow-forward-outline">{">"}</ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Team;
