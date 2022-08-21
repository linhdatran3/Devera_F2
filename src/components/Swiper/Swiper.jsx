import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { PreviewItem } from "../PreviewItem";
import styled from "styled-components";
const StyledSwiper = styled.div``;
export const SwiperCustomize = ({ listProduct }) => {
  return (
    <StyledSwiper>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {listProduct.map((pro) => (
          <SwiperSlide>
            <PreviewItem
              Image={pro.Image}
              Price={pro.Price}
              store={pro.Store}
              id={pro.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiper>
  );
};
