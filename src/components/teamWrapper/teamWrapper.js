"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function TeamWrapper() {
  const swiperRef = useRef(null);

  return (
    <div className="mt-14 md:mt-20 lg:mt-24">
      <div className="flex flex-1 w-full justify-center mb-8 md:mb-8 lg:mb-10">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
          <h1 className=" text-cyan-950 font-bold text-3xl">Connect with your local team</h1>
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
          <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden mx-6 md:mx-114 lg:mx-20 mb-8 md:mb-12 lg:mb-16">
            <div className="flex relative overflow-hidden aspect-w-4 aspect-h-5 bg-neutral-2">
              <div className="relative w-full h-full">
                <img
                  src="https://media.licdn.com/dms/image/C4E03AQFIouVkA2Bfvw/profile-displayphoto-shrink_400_400/0/1539813596057?e=2147483647&v=beta&t=OW2xlJs0TQUQHbJmyP3B_mVZPvvldZfJ5M8n3rMdg7E"
                  className="size-full w-full object-cover transition-opacity duration-200 inset-0 text-transparent"
                ></img>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-white font-bold text-base">Patrick Crawford</h1>
                <h5 className=" text-white text-sm">SDDS Software Development Professor</h5>
              </div>
              <div className="absolute top-0 left-0 right-0 flex flex-col items-end space-y-0.5">
                <a className="relative size-16 flex justify-between bg-blue-950 text-white">
                  <FontAwesomeIcon className="p-4" icon={faPhone} />
                </a>
                <a className="relative size-16 flex justify-between bg-blue-950 text-white">
                  <FontAwesomeIcon className="p-4" icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden mx-8 md:mx-12 lg:mx-24 mb-8 md:mb-12 lg:mb-16">
            <div className="flex relative overflow-hidden aspect-w-4 aspect-h-5 bg-neutral-2">
              <div className="relative w-full h-full">
                <img
                  src="https://ih1.redbubble.net/image.2807373334.4276/raf,360x360,075,t,fafafa:ca443f4786.jpg"
                  className="size-full w-full object-cover transition-opacity duration-200 inset-0 text-transparent"
                ></img>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-white font-bold text-base">Hot Dog</h1>
                <h5 className=" text-white text-sm">SDDS Software Development Professor</h5>
              </div>
              <div className="absolute top-0 left-0 right-0 flex flex-col items-end space-y-0.5">
                <a className="relative size-16 flex justify-between bg-blue-950 text-white">
                  <FontAwesomeIcon className="p-4" icon={faPhone} />
                </a>
                <a className="relative size-16 flex justify-between bg-blue-950 text-white">
                  <FontAwesomeIcon className="p-4" icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden mx-6 md:mx-114 lg:mx-20 mb-8 md:mb-12 lg:mb-16">
            <div className="flex relative overflow-hidden aspect-w-4 aspect-h-5 bg-neutral-2">
              <div className="relative w-full h-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
                  className="size-full w-full object-cover transition-opacity duration-200 inset-0 text-transparent"
                ></img>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-white font-bold text-base">Hot Dog</h1>
                <h5 className=" text-white text-sm">SDDS Software Development Professor</h5>
              </div>
              <div className="absolute top-0 left-0 right-0 flex flex-col items-end space-y-0.5">
                <a className="relative size-16 flex justify-between bg-blue-950 text-white">
                  <FontAwesomeIcon className="p-4" icon={faPhone} />
                </a>
                <a className="relative size-16 flex justify-between bg-blue-950 text-white">
                  <FontAwesomeIcon className="p-4" icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden mx-6 md:mx-114 lg:mx-20 mb-8 md:mb-12 lg:mb-16">
            <div className="flex relative overflow-hidden aspect-w-4 aspect-h-5 bg-neutral-2">
              <div className="relative w-full h-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
                  className="size-full w-full object-cover transition-opacity duration-200 inset-0 text-transparent"
                ></img>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-white font-bold text-base">Hot Dog</h1>
                <h5 className=" text-white text-sm">SDDS Software Development Professor</h5>
              </div>
              <div className="absolute top-0 left-0 right-0 flex flex-col items-end space-y-0.5">
                <a className="relative size-16 flex justify-between bg-blue-950 text-white">
                  <FontAwesomeIcon className="p-4" icon={faPhone} />
                </a>
                <a className="relative size-16 flex justify-between bg-blue-950 text-white">
                  <FontAwesomeIcon className="p-4" icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden mx-6 md:mx-114 lg:mx-20 mb-8 md:mb-12 lg:mb-16">
            <div className="flex relative overflow-hidden aspect-w-4 aspect-h-5 bg-neutral-2">
              <div className="relative w-full h-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png"
                  className="size-full w-full object-cover transition-opacity duration-200 inset-0 text-transparent"
                ></img>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-white font-bold text-base">Hot Dog</h1>
                <h5 className=" text-white text-sm">SDDS Software Development Professor</h5>
              </div>
              <div className="absolute top-0 left-0 right-0 flex flex-col items-end space-y-0.5">
                <a className="relative size-16 flex justify-between bg-blue-950 text-white">
                  <FontAwesomeIcon className="p-4" icon={faPhone} />
                </a>
                <a className="relative size-16 flex justify-between bg-blue-950 text-white">
                  <FontAwesomeIcon className="p-4" icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
