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
import teamData from "../../../data/teamMembers";
import Image from "next/image";

export default function TeamWrapper() {
  const swiperRef = useRef(null);

  return (
    <div className="mt-14 md:mt-20 lg:mt-24">
      <div className="flex flex-1 justify-center md:mb-8 lg:mb-16">
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
        {teamData.map((emp) => (
          <SwiperSlide key={emp.empNum}>
            <div className="flex mx-6 md:mx-14 lg:mx-22 w-9/12 flex-col flex-1 justify-center overflow-x-hidden">
              <div className="flex relative overflow-hidden mb-8 md:mb-8 lg:mb-10">
                <div className="">
                  <Image
                    src={`/img/${emp.empImg}`}
                    alt={emp.empName}
                    width={400}
                    height={400}
                    className="transition-opacity duration-200"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
                <div className="absolute bottom-0 left-0 right-0 pb-4 px-7">
                  <h1 className="text-white font-bold text-base">{emp.empName}</h1>
                  <h5 className=" text-white text-sm font-semi-bold">
                    {emp.empPosition} {emp.empDepartment !== "" ? `- ${emp.empDepartment}` : ""}
                  </h5>
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
        ))}
      </Swiper>
    </div>
  );
}
