import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/globals.css";
import Footer from "../footer/Footer";
import { mainStyle, secondaryStyle, textStyle } from "../headerSection/HeaderSection";
import Image from "next/image";

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
          <div className="relative w-full flex px-20 flex-col flex-1 justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:flex lg:gap-x-8 xl:gap-x-20">
              <div className="relative flex-shrink-0">
                <div className="sticky top-0">
                  <div className="flex-1 max-w-lg w-[676px]">
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
                    <div class="" style={textStyle}>
                      <p class="mt-8 font-medium text-base lg:leading-normal max-w-lg ">
                        This is a used product. It is a fully functional product that has cosmetic damage from shipping
                        or from being used in events and competitions or from a customer sending it back due to regret.
                        It is in good working order but may show signs of wear. Eleiko Rubber Coated Change Plates
                        support smaller increases and manageable weight jumps when training. Consisting of a solid steel
                        core that is rubber coated, the change plates feature a minimalistic design with no center hub.
                        The plates have raised edges for easier handling and a snug, secure fit that takes less space on
                        the sleeve when plates are loaded. The black matte finish with white weight markings provides
                        easy weight identification. The change plates range from 1,25 to 5 kg and are sold individually.
                      </p>
                      <div class="flex flex-wrap gap-x-6 mt-6"></div>
                      <div class="mt-7 flex flex-wrap gap-x-6 items-baseline">
                        <div class="flex flex-wrap gap-x-3 items-baseline">
                          <div class="w-full">
                            <div class="inline-block mt-2 mb-1 bg-primary-2 px-3 pb-0.5 leading-[1.5rem] rounded-sm text-white font-medium text-xs tracking-wider uppercase- ">
                              Sold individually
                            </div>
                          </div>
                          <span class="font-medium text-3xl ">${equipment.new_price.toFixed(2)}</span>
                        </div>
                      </div>
                      <div class="mt-9 flex flex-col gap-y-5 lg:max-w-md">
                        <div id="headlessui-radiogroup-:rk:" role="radiogroup" aria-labelledby="headlessui-label-:rl:">
                          <h3 class="font-bold text-h-base mb-3 " id="headlessui-label-:rl:" role="none">
                            Select Weight
                          </h3>
                          <div class="flex flex-wrap justify-start gap-3" role="none">
                            <div
                              class="select-none flex flex-shrink-0 items-center justify-center min-w-11 h-11 rounded-full border-solid border-4 font-bold text-sm transition duration-200 cursor-pointer border-transparent px-3 text-white"
                              style={mainStyle}
                              id="headlessui-radiogroup-option-:rm:"
                              role="radio"
                              aria-checked="true"
                              tabindex="0"
                              data-headlessui-state="checked"
                              aria-labelledby="headlessui-label-:rn:"
                            >
                              <span>5 kg</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="productCtas" class="mt-10">
                        <div class="flex flex-wrap gap-4 items-center w-full sm:w-auto">
                          <div class="flex justify-center items-center">
                            <button
                              class="outline-none flex-shrink-0 w-5 h-5 font-bold rounded-full flex items-center justify-center"
                              style={mainStyle}
                              aria-label="Remove"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                class="w-4 h-4 text-white"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                            <div class="select-none text-center w-8 font-bold text-base ">1</div>
                            <button
                              class="outline-none flex-shrink-0 w-5 h-5 font-bold rounded-full flex items-center justify-center"
                              style={mainStyle}
                              aria-label="Add"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                class="w-4 h-4 text-white"
                              >
                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                              </svg>
                            </button>
                          </div>
                          <button
                            class="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-7 xl:px-8 text-[15px] border-transparent hover:opacity-75 text-white flex-grow sm:flex-none"
                            style={mainStyle}
                          >
                            <span class="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[-2px]">
                              Add to Cart
                            </span>
                          </button>
                          <button
                            id="addToQuoteButton"
                            class="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-7 xl:px-8 text-[15px] bg-transparent hover:opacity-75 border-cyan-950  flex-grow sm:flex-none"
                          >
                            <span class="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[-2px]">
                              Add to Quote
                            </span>
                          </button>
                        </div>
                      </div>
                      <div class="flex flex-wrap gap-x-6 mt-6">
                        <button class="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold w-auto text-[15px] hover:opacity-75 ">
                          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 duration-1000">
                            <path
                              fill-rule="evenodd"
                              d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[-2px]">
                            Details
                          </span>
                        </button>
                        <button class="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold w-auto text-[15px] hover:opacity-75 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            class="w-6 h-6 duration-1000"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
                              clip-rule="evenodd"
                            ></path>
                            <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z"></path>
                          </svg>
                          <span class="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[-2px]">
                            Product Sheet
                          </span>
                        </button>
                        <button
                          id="addToListButton"
                          class="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold w-auto text-[15px] hover:opacity-75 "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            class="w-6 h-6 duration-1000"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                              clip-rule="evenodd"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[-2px]">
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
