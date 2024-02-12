"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export default function Products() {
  const swiperRef = useRef(null);

  return (
    <div>
      <div className="w-11.4/12 flex flex-col flex-1 justify-center overflow-x-hidden ml-12 mt-16 p-7">
        <div className="flex flex-wrap items-center justify-between gap-x-4 pag-y-3">
          <h2 className="font-bold text-blue-950 text-4xl">Popular Products</h2>
          <a className="font-medium text-md hover:no-underline hover:delay-300ms inline-flex items-end">
            <span className="inline-block text-blue-950 transition-all duration-300 no-underline group-hover:border-transparent">
              View All
            </span>
          </a>
        </div>
      </div>
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
        <SwiperSlide>
          <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden pr-7 mx-6 md:mx-14 lg:mx-20 mb-8 md:mb-12 lg:mb-20">
            <div className="flex relative overflow-hidden aspect-w-4 aspect-h-5">
              <div className="relative overflow-hidden bg-blue-950">
                <img
                  src="https://eleiko.com/_next/image?url=https%3A%2F%2Fmedia.eleiko.com%2Fimages%2Fupload%2F4x5%2F%2F3060350-25_10.jpg&w=3840&q=75"
                  className="object-contain w-full h-full duration-200 ease-in-out hover:scale-103"
                ></img>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between align-top">
                <h4 className="font-bold text-base">IPF Powerlifting Competition Plates</h4>
              </div>
              <div className="flex flex-wrap mt-1 gap-x-3">
                <p className="font-medium text-sm">Price from $100.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
