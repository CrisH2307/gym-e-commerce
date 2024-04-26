import React from "react";

export const mainStyle = { backgroundColor: "#08384d" };
export const textStyle = { color: "#08384d" };
export const secondaryStyle = { backgroundColor: "#0b232e" };

export default function HeaderSection() {
  return (
    <div className="relative flex flex-col min-h-[calc(85vh-48px)] lg:min-h-[calc(75vh-48px)]">
      <div className="absolute inset-0 flex -z-100">
        <div style={mainStyle} className="relative flex-1 overflow-hidden"></div>
      </div>
      <div className="z-10 pointer-events-none absolute top-10 bottom-10 left-6 right-6 md:top-14 md:bottom-14 md:left-14 md:right-14 lg:top-20 lg:bottom-20 lg:left-20 lg:right-20">
        <span className="inline-block absolute top-0 right-0 md:top-auto md:bottom-0 lg:right-auto lg:bottom-auto lg:left-1/2 lg:top-1/2 transform origin-bottom-right md:origin-bottom-left lg:origin-center -rotate-90 -translate-y-full md:translate-y-0 md:translate-x-full lg:-translate-x-1/2 mr-[-2px] lg:mr-0 lg:-ml-[-1px] mt-[-0.4em] lg:mt-0 md:mb-[-1px] lg:mb-0"></span>
      </div>
      <div className="flex flex-1 w-full relative">
        <div className="flex flex-1 flex-col lg:flex-row">
          {/* Flex 1 */}
          <div className="relative flex flex-col flex-1 justify-end">
            <div className="absolute inset-0 flex -z-100">
              <div className="relative flex-1 overflow-hidden">
                {/* <video loop autoPlay muted>
                  <source src="https://ik.imagekit.io/eleiko/https://fra1.digitaloceanspaces.com/eleiko/cms-prod/50581c66ea32b03e7702c34c64d64411.mp4?tr=f-webm" />
                </video>
                <div
                  style={mainStyle}
                  className="absolute inset-0 opacity-10"
                ></div>
                <source
                  src="https://ik.imagekit.io/eleiko/https://fra1.digitaloceanspaces.com/eleiko/cms-prod/50581c66ea32b03e7702c34c64d64411.mp4?tr=f-webm"
                  type="video/mp4"
                />
                <video /> */}
                <img src="https://www.brandwavemarketing.com/wp-content/uploads/2019/01/Eleiko_7.jpg" alt=""></img>
                <div className="absolute inset-0 bg-black opacity-30"></div>
              </div>
            </div>
            <div className="z-10 pointer-events-none absolute top-10 bottom-10 left-6 right-6 md:top-14 md:bottom-14 md:left-14 md:right-14 lg:top-20 lg:bottom-20 lg:left-20 lg:right-20">
              <div className="inline-block absolute top-0 right-0 md:top-auto md:bottom-0 transform origin-bottom-right md:origin-bottom-left -rotate-90 -translate-y-full md:translate-y-0 md:translate-x-full mr-[-2px] mt-[-0.4em] md:mb-[-1px]">
                <div className="text-xs font-medium leading-none uppercase tracking-[0.4em] whitespace-nowrap text-accent"></div>
              </div>
            </div>
            <div className="w-full relative px-6 pt-28 pb-10 md:pt-28 md:pb-14 md:px-14 lg:pt-30 lg:pb-20 lg:px-20 flex flex-col gap-y-7 md:gap-y-10">
              <div className="flex flex-col gap-y-4 md:gap-y-5">
                <div className="flex flex-col gap-y-2">
                  <p className="font-medium text-h-sm md:text-h-base text-white">Introducing</p> <br />
                  <h1 className="font-bold text-5xl max-w-md md:max-w-lg xl:max-w-xl 2xl:max-w-2xl text-white">
                    {/* Eleiko Cables */}
                    Eleiko Storage
                  </h1>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto">
                <a className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle min-w-[160px] w-full sm:w-auto px-8 text-[15px] border-transparent hover:opacity-75 bg-white no-underline">
                  <span style={textStyle} className="inline-flex gap-x-2 items-center leading-[48px] mt-[-2px]">
                    Explore Eleiko Cables
                  </span>
                  {/* text-primary-dark */}
                </a>
                <a className="outline-none no-underline inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle min-w-[160px] w-full sm:w-auto px-8 text-[15px] bg-transparent hover:opacity-75 border-white text-white">
                  <span className="inline-flex gap-x-2 items-center leading-[48px] mt-[-2px]">Contact Sales</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
