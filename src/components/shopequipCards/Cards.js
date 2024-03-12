"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export default function ShopEquipmentCards() {
  const swiperRef = useRef(null);

  return (
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
        <SwiperSlide>
          <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden pr-7 mx-6 md:mx-14 lg:mx-20 mb-8 md:mb-12 lg:mb-20">
            <div className="flex relative overflow-hidden aspect-w-4 aspect-h-5">
              <div className="relative overflow-hidden bg-blue-950">
                <img
                  src="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2F36447271a7ede0f3cea95c2c04a5cdba.webp&w=3840&q=75"
                  className="object-cover transition-opacity duration-200 group-hover:opacity-75"
                ></img>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
              <div className="absolute bottom-0 left-0 right-0 pb-12">
                <h1 className="text-white font-bold text-4xl pl-10 pb-8">Bars</h1>
                <div className="flex flex-wrap gap-4 items-center pl-10">
                  <a className="no-underline outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-semibold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-4.5 xl:px-7 text-[13px] xl:text-[15px] border-white text-white hover:bg-blue-950">
                    <span className="inline-flex gap-x-2 items-center leading-[30px] xl:leading-[38px] mt-[-2px]">
                      Shop Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden mx-6 pr-7 md:mx-14 lg:mx-20 mb-8 md:mb-12 lg:mb-16">
            <div className="flex relative overflow-hidden aspect-w-4 aspect-h-5">
              <div className="relative overflow-hidden bg-blue-950">
                <img
                  src="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2F833c0ca161d44ee9d17b44d0f803e04e.webp&w=3840&q=75"
                  className="object-cover transition-opacity duration-200 group-hover:opacity-75"
                ></img>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
              <div className="absolute bottom-0 left-0 right-0 pb-12">
                <h1 className="text-white font-bold text-4xl pl-10 pb-8">Plates</h1>
                <div className="flex flex-wrap gap-4 items-center pl-10">
                  <a className="no-underline outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-semibold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-4.5 xl:px-7 text-[13px] xl:text-[15px] border-white text-white hover:bg-blue-950">
                    <span className="inline-flex gap-x-2 items-center leading-[30px] xl:leading-[38px] mt-[-2px]">
                      Shop Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden mx-6 pr-7 md:mx-14 lg:mx-20 mb-8 md:mb-12 lg:mb-16">
            <div className="flex relative overflow-hidden aspect-w-4 aspect-h-5">
              <div className="relative overflow-hidden bg-blue-950">
                <img
                  src="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2Fd8952b95937b0fda2f5aa2b66377ac31.webp&w=3840&q=75"
                  className="object-cover transition-opacity duration-200 group-hover:opacity-75"
                ></img>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
              <div className="absolute bottom-0 left-0 right-0 pb-12">
                <h1 className="text-white font-bold text-4xl pl-10 pb-8">Dumbbells</h1>
                <div className="flex flex-wrap gap-4 items-center pl-10">
                  <a className="no-underline outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-semibold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-4.5 xl:px-7 text-[13px] xl:text-[15px] border-white text-white hover:bg-blue-950">
                    <span className="inline-flex gap-x-2 items-center leading-[30px] xl:leading-[38px] mt-[-2px]">
                      Shop Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden mx-6 pr-7 md:mx-14 lg:mx-20 mb-8 md:mb-12 lg:mb-16">
            <div className="flex relative overflow-hidden aspect-w-4 aspect-h-5">
              <div className="relative overflow-hidden bg-blue-950">
                <img
                  src="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2F6d29762f318a10a133f1316b4350a560.webp&w=3840&q=75"
                  className="object-cover transition-opacity duration-200 group-hover:opacity-75"
                ></img>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
              <div className="absolute bottom-0 left-0 right-0 pb-12">
                <h1 className="text-white font-bold text-4xl pl-10 pb-8">Kettlebells</h1>
                <div className="flex flex-wrap gap-4 items-center pl-10">
                  <a className="no-underline outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-semibold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-4.5 xl:px-7 text-[13px] xl:text-[15px] border-white text-white hover:bg-blue-950">
                    <span className="inline-flex gap-x-2 items-center leading-[30px] xl:leading-[38px] mt-[-2px]">
                      Shop Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden mx-6 pr-7 md:mx-14 lg:mx-20 mb-8 md:mb-12 lg:mb-16">
            <div className="flex relative overflow-hidden aspect-w-4 aspect-h-5">
              <div className="relative overflow-hidden bg-blue-950">
                <img
                  src="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2F277e2340c18ab872d22c91cd48bf1906.webp&w=3840&q=75"
                  className="object-cover transition-opacity duration-200 group-hover:opacity-75"
                ></img>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
              <div className="absolute bottom-0 left-0 right-0 pb-12">
                <h1 className="text-white font-bold text-4xl pl-10 pb-8">Benches</h1>
                <div className="flex flex-wrap gap-4 items-center pl-10">
                  <a className="no-underline outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-semibold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-4.5 xl:px-7 text-[13px] xl:text-[15px] border-white text-white hover:bg-blue-950">
                    <span className="inline-flex gap-x-2 items-center leading-[30px] xl:leading-[38px] mt-[-2px]">
                      Shop Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden mx-6 pr-7 md:mx-14 lg:mx-20 mb-8 md:mb-12 lg:mb-16">
            <div className="flex relative overflow-hidden aspect-w-4 aspect-h-5">
              <div className="relative overflow-hidden bg-blue-950">
                <img
                  src="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2Fd13236230d78781b1a49ac3a508e2c20.webp&w=3840&q=75"
                  className="object-cover transition-opacity duration-200 group-hover:opacity-75"
                ></img>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
              <div className="absolute bottom-0 left-0 right-0 pb-12">
                <h1 className="text-white font-bold text-4xl pl-10 pb-8">Racks</h1>
                <div className="flex flex-wrap gap-4 items-center pl-10">
                  <a className="no-underline outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-semibold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-4.5 xl:px-7 text-[13px] xl:text-[15px] border-white text-white hover:bg-blue-950">
                    <span className="inline-flex gap-x-2 items-center leading-[30px] xl:leading-[38px] mt-[-2px]">
                      Shop Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
