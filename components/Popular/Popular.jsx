"use client";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import data_product from "../Assets/data";
import Item from "../Item/Item";

export default function Popular() {
  const swiperRef = useRef(null);
  return (
    <div className="border-0">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 ml-12 mt-16 p-7">
        <h1 className="text-cyan-950 font-bold text-4xl my-10">Popular Products</h1>
        <a className="font-medium text-md hover:no-underline hover:delay-300ms inline-flex items-end">
          <span className="inline-block text-blue-950 transition-all duration-300 no-underline hover:border-transparent">
            View All
          </span>
        </a>
      </div>
      <div>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            700: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          navigation={true}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          {data_product.map((item, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                des={item.des}
                single_price={item.single_price}
                className="p-5 bg-white rounded-md shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
