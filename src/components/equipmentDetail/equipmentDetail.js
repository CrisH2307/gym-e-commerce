import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/globals.css";
import Footer from "../footer/Footer";
import { mainStyle, secondaryStyle, textStyle } from "../headerSection/HeaderSection";
import Image from "next/image";
import { Rating } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default function EquipmentDetailbyID({ equipment }) {
  return (
    <div>
      <Header />
      <div style={secondaryStyle}>
        <Navbar />
      </div>
      <div className="mt-24 relative">
        <div className="relative flex flex-col">
          <div className="w-full mb-4 absolute top-0 left-0 z-10">
            <div className="relative w-full flex px-20 flex-col">
              <div className="flex justify-end whitespace-nowrap">
                <div className="flex gap-x-2 items-end">
                  <a className="h-[48px] lg:h-auto -my-4 lg:my-0 flex items-center font-bold text-xs md:text-sm hover:underline last:truncate ">
                    Equipment
                  </a>
                  <a className="h-[48px] lg:h-auto -my-4 lg:my-0 flex items-center font-bold text-xs md:text-sm hover:underline last:truncate ">
                    Special Offer
                  </a>
                  <a className="h-[48px] lg:h-auto -my-4 lg:my-0 flex items-center font-bold text-xs md:text-sm hover:underline last:truncate ">
                    Used
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full flex px-48 pt-20 flex-col flex-1 justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:flex lg:gap-x-8 xl:gap-x-20">
              <div className="relative flex-shrink-0">
                <div className="sticky top-0">
                  <div className="flex-1 max-w-3xl w-[1076px]">
                    <div className="">
                      <Image src={equipment.image} className="w-full"></Image>
                      <div className="my-4 px-6">
                        <div className="font-medium text-sm" style={textStyle}>
                          Product visuals are renderings and do not reflect the used condition.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-16 flex flex-col relative">
                <div className="relative w-full flex px-6 md:px-0 flex-col flex-1">
                  <div className="sticky top-0">
                    <div className="">
                      <h1>
                        <span className="font-bold text-4xl max-w-lg" style={textStyle}>
                          {equipment.name}
                        </span>
                        <span className="mt-1 block font-medium text-lg" style={textStyle}>
                          5kg, USED
                        </span>
                      </h1>
                    </div>
                    <div className="" style={textStyle}>
                      <p className="mt-8 font-medium text-xl lg:leading-normal max-w-xl ">
                        This is a used product. It is a fully functional product that has cosmetic damage from shipping
                        or from being used in events and competitions or from a customer sending it back due to regret.
                        It is in good working order but may show signs of wear. Eleiko Rubber Coated Change Plates
                        support smaller increases and manageable weight jumps when training. Consisting of a solid steel
                        core that is rubber coated, the change plates feature a minimalistic design with no center hub.
                        The plates have raised edges for easier handling and a snug, secure fit that takes less space on
                        the sleeve when plates are loaded. The black matte finish with white weight markings provides
                        easy weight identification. The change plates range from 1,25 to 5 kg and are sold individually.
                      </p>
                      <div className="flex flex-wrap gap-x-6 mt-6"></div>
                      <div className="mt-7 flex flex-wrap gap-x-6 items-baseline">
                        <div className="flex flex-wrap gap-x-3 items-baseline">
                          <div className="w-full">
                            <div className="inline-block mt-2 mb-1 bg-primary-2 px-3 pb-0.5 leading-[1.5rem] rounded-sm text-white font-medium text-xs tracking-wider uppercase- ">
                              Sold individually
                            </div>
                          </div>
                          <span className="font-medium text-3xl ">${equipment.new_price.toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="mt-9 flex flex-col gap-y-5 lg:max-w-md">
                        <div id="headlessui-radiogroup-:rk:" role="radiogroup" aria-labelledby="headlessui-label-:rl:">
                          <h3 className="font-bold text-h-base mb-3 " id="headlessui-label-:rl:" role="none">
                            Select Weight
                          </h3>
                          <div className="flex flex-wrap justify-start gap-3" role="none">
                            <div
                              className="select-none flex flex-shrink-0 items-center justify-center min-w-11 h-11 rounded-full border-solid border-4 font-bold text-sm transition duration-200 cursor-pointer border-transparent px-3 text-white"
                              style={mainStyle}
                              id="headlessui-radiogroup-option-:rm:"
                              role="radio"
                              aria-checked="true"
                              tabIndex="0"
                              data-headlessui-state="checked"
                              aria-labelledby="headlessui-label-:rn:"
                            >
                              <span>5 kg</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="productCtas" className="mt-10">
                        <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto">
                          <div className="flex justify-center items-center">
                            <button
                              className="outline-none flex-shrink-0 w-5 h-5 font-bold rounded-full flex items-center justify-center"
                              style={mainStyle}
                              aria-label="Remove"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                className="w-4 h-4 text-white"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </button>
                            <div className="select-none text-center w-8 font-bold text-base ">1</div>
                            <button
                              className="outline-none flex-shrink-0 w-5 h-5 font-bold rounded-full flex items-center justify-center"
                              style={mainStyle}
                              aria-label="Add"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                className="w-4 h-4 text-white"
                              >
                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                              </svg>
                            </button>
                          </div>
                          <button
                            className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-7 xl:px-8 text-[15px] border-transparent hover:opacity-75 text-white flex-grow sm:flex-none"
                            style={mainStyle}
                          >
                            <span className="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[-2px]">
                              Add to Cart
                            </span>
                          </button>
                          <button
                            id="addToQuoteButton"
                            className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-7 xl:px-8 text-[15px] bg-transparent hover:opacity-75 border-cyan-950  flex-grow sm:flex-none"
                          >
                            <span className="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[-2px]">
                              Add to Quote
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-x-6 mt-6">
                        <button className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold w-auto text-[15px] hover:opacity-75 ">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-6 h-6 duration-1000"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[-2px]">
                            Details
                          </span>
                        </button>
                        <button className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold w-auto text-[15px] hover:opacity-75 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-6 h-6 duration-1000"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                              clipRule="evenodd"
                            ></path>
                            <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z"></path>
                          </svg>
                          <span className="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[-2px]">
                            Product Sheet
                          </span>
                        </button>
                        <button
                          id="addToListButton"
                          className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold w-auto text-[15px] hover:opacity-75 "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-6 h-6 duration-1000"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                              clipRule="evenodd"
                            ></path>
                            <path
                              fillRule="evenodd"
                              d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[-2px]">
                            Add to List
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={mainStyle} className="py-20">
        <div className="relative w-full flex px-20 flex-col justify-center items-center">
          <div className="flex flex-1">
            <div className="relative w-full px-10 flex-col flex-1 justify-center">
              <div className="grid grid-cols-12 gap-x-5">
                <div className="col-span-3">
                  <h2 className="font-bold text-h-xl text-white">Feature</h2>
                </div>
                <div className="gap-y-8 grid grid-cols-1 gap-x-8 mt-8 col-span-8">
                  <div className="">
                    <div className="flex flex-col gap-y-3 sm:gap-y-4 pr-5">
                      <h2 className="flex flex-col gap-y-2 text-xl">
                        <p className="flex font-bold text-white">Designed For</p>
                        <p className="font-medium text-xl text-white">
                          Strength training and functional fitness in mixed use environments
                        </p>
                      </h2>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col gap-y-3 sm:gap-y-4 pr-5">
                      <h2 className="flex flex-col gap-y-2 text-xl">
                        <p className="flex font-bold text-white">Smaller Increases</p>
                        <p className="font-medium text-xl text-white">
                          Plates range from 1,25 – 5 kg for small increment adjustments
                        </p>
                      </h2>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col gap-y-3 sm:gap-y-4 pr-5">
                      <h2 className="flex flex-col gap-y-2 text-xl">
                        <p className="flex font-bold text-white">Minimalistic Design</p>
                        <p className="font-medium text-xl text-white">
                          Black matte rubber with white weight markings for easy identification
                        </p>
                      </h2>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col gap-y-3 sm:gap-y-4 pr-5">
                      <h2 className="flex flex-col gap-y-2 text-xl">
                        <p className="flex font-bold text-white">Lasting Performance</p>
                        <p className="font-medium text-xl text-white">Solid steel core coated in durable rubber</p>
                      </h2>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col gap-y-3 sm:gap-y-4 pr-5">
                      <h2 className="flex flex-col gap-y-2 text-xl">
                        <p className="flex font-bold text-white">Nestable and Compact</p>
                        <p className="font-medium text-xl text-white">
                          Snug and secure fit that takes less that space on the sleeve and provides stability when
                          plates are loaded
                        </p>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={secondaryStyle}
        className="relative flex flex-col px-10 pt-10 md:pt-14 lg:pt-20 pb-10 md:pb-14 lg:pb-20"
      >
        <div className="absolute inset-0 flex -z-100">
          <div className="relative flex-1 overflow-hidden bg-primary-dark"></div>
        </div>
        <div className="z-10 pointer-events-none absolute top-10 bottom-10 left-6 right-6 md:top-14 md:bottom-14 md:left-14 md:right-14 lg:top-20 lg:bottom-20 lg:left-20 lg:right-20">
          <div className="inline-block absolute top-0 right-0 md:top-auto md:bottom-0 transform origin-bottom-right md:origin-bottom-left -rotate-90 -translate-y-full md:translate-y-0 md:translate-x-full mr-[-2px] mt-[-0.4em] md:mb-[-1px]">
            <div className="text-xs font-medium leading-none uppercase tracking-[0.4em] whitespace-nowrap text-accent"></div>
          </div>
        </div>
        <div className="relative w-full flex px-6 md:px-14 lg:px-20 flex-col flex-1 justify-center">
          <div className="relative lg:grid lg:grid-cols-12 lg:gap-x-5">
            <div className="lg:col-span-4 xl:col-span-3">
              <h2 className="mb-8 lg:mb-0 font-bold text-h-xl lg:text-h-base text-white">Specifications</h2>
            </div>
            <div className="gap-y-6 grid grid-cols-2 gap-x-8 md:gap-x-8 md:grid-cols-4 sm:gap-y-6 lg:gap-x-5 lg:mt-0 lg:col-span-8 xl:col-span-6">
              <div className="">
                <div className="flex flex-col gap-y-3 sm:gap-y-4 pr-5">
                  <div className="flex flex-col gap-y-2 text-lg">
                    <p className="flex font-bold text-white">Unit of measurement</p>
                    <p className="font-medium text-md text-white">Sold individually</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col gap-y-3 sm:gap-y-4 pr-5">
                  <div className="flex flex-col gap-y-2 text-lg">
                    <p className="flex font-bold text-white">Article code</p>
                    <p className="font-medium text-md text-white">3085308-0050B</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col gap-y-3 sm:gap-y-4 pr-5">
                  <div className="flex flex-col gap-y-2 text-lg">
                    <p className="flex font-bold text-white">Width</p>
                    <p className="font-medium text-md text-white">28 mm / 1.1 in.</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col gap-y-3 sm:gap-y-4 pr-5">
                  <div className="flex flex-col gap-y-2 text-lg">
                    <p className="flex font-bold text-white">Weight</p>
                    <p className="font-medium text-md text-white">5 kg / 11.02 lbs</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col gap-y-3 sm:gap-y-4 pr-5">
                  <div className="flex flex-col gap-y-2 text-lg">
                    <p className="flex font-bold text-white">Condition</p>
                    <p className="font-medium text-md text-white">Used</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 mx-10">
        <div className="pl-20 flex flex-col">
          <h1 style={textStyle} className="text-4xl font-bold">
            Warranty
          </h1>
        </div>
        <div className="pl-20 mt-10 flex items-center flex-nowrap flex-row-reverse">
          <div className="w-full lg:w-1/2 flex-1">
            <div className="w-full"></div>
          </div>
          <div className="w-full flex flex-1 justify-end">
            <p style={textStyle} className="text-2xl leading-9">
              For used products warranty time goes up to a maximum of 2 years, but never more than corresponding new
              product. For example, a used XF bar has a warranty of 2 years (12 years for a new XF bar). The SKAI
              upholstery of a used flat bench has 6 months warranty, as it can't exceed the warranty time of 6 months
              for a new SKAI upholstery.
            </p>
          </div>
        </div>
      </div>
      <div className="p-20 mx-10">
        <h2>No Ratings</h2>
        <hr />
        <div className="px-20 flex justify-center">
          <div className="p-4">
            <p className="text-xl">Be the first to review this item</p>
            <div className="pl-7">
              <Rating maxRating={5} defaultRating={0} icon="star" size="massive" />
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <button
            className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-7 text-[13px] border-transparent hover:opacity-75 text-white flex-grow sm:flex-none"
            style={mainStyle}
          >
            <span className="inline-flex gap-x-2 items-center leading-[37px] mt-[-2px]">Write a Review</span>
          </button>
        </div>
        <hr />
      </div>
      <Footer />
    </div>
  );
}
