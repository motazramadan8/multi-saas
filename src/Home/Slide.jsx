import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { FreeMode, Pagination } from "swiper";

import './home.css'


const Slide = () => {
  return (
    <div>
         <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              width: 400,
              slidesPerView: 1,
            },
            768: {
              width: 400,
              slidesPerView: 2,
            },
          }}
          modules={[FreeMode, Pagination]}
        >
            <SwiperSlide><img src="images/logo-business-solutions-logo-0b17ba8eb3-seeklogocom1669454922.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/logo-download-logo-fc481339f0-seeklogocom1669455101.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/logo-hype-logo-454781a438-seeklogocom1669455080.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/themakers-logo-7271b98da0-seeklogocom1669454925.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/horsetemplate-logo-5368257f26-seeklogocom1669455023.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/logo-business-solutions-logo-0b17ba8eb3-seeklogocom1669454922.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/logo-download-logo-fc481339f0-seeklogocom1669455101.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/logo-hype-logo-454781a438-seeklogocom1669455080.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/themakers-logo-7271b98da0-seeklogocom1669454925.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/horsetemplate-logo-5368257f26-seeklogocom1669455023.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/logo-business-solutions-logo-0b17ba8eb3-seeklogocom1669454922.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/logo-download-logo-fc481339f0-seeklogocom1669455101.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/logo-hype-logo-454781a438-seeklogocom1669455080.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/themakers-logo-7271b98da0-seeklogocom1669454925.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images/horsetemplate-logo-5368257f26-seeklogocom1669455023.png" alt="" /></SwiperSlide>
  
      </Swiper>

    </div>
  )
}

export default Slide