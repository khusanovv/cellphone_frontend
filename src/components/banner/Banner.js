import React from 'react';
import bannerImage from '../../assets/ui-icons/Group 1 (4).png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay
} from "swiper/core";
SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);
  

function Banner() {
    return (
        <div className="main__banner">
             <Swiper
          navigation={true}
          centeredSlides={true}
          slidesPerView="1"
          loop={true}
          autoplay={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          
          className="mySwiper"
        >
        <SwiperSlide className="image_slider_change">
                <img src={bannerImage} alt="" />
        </SwiperSlide>
        <SwiperSlide className="image_slider_change">
                <img src="https://texnomart.uz/frontend/web/uploads/slides/250798iphone13.jpg" alt="" />
        </SwiperSlide>
        </Swiper>
        </div>
    )
}

export default Banner
