import React, { useState } from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/globals.css";
import Footer from "../footer/Footer";
import { mainStyle, secondaryStyle, textStyle } from "../headerSection/HeaderSection";
import Image from "next/image";
import { Rating } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { faCircleMinus, faCirclePlus, faList, faSheetPlastic, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EquipmentDetailbyID({ equipment }) {
  const [numProducts, setNumProducts] = useState(1);

  const increaseNumProduct = (e) => {
    setNumProducts(numProducts + 1);
  };

  const decreaseNumProduct = (e) => {
    if (numProducts > 1) {
      setNumProducts(numProducts - 1);
    }
  };

  return (
    <div>
      <Header />
      <div style={secondaryStyle}>
        <Navbar />
      </div>
      <div className="my-24 relative">
        <div className="relative flex flex-col">
          <div className="w-full mb-4 absolute top-0 left-0 z-10">
            <div className="relative w-full flex px-20 flex-col">
              <div className="flex justify-end whitespace-nowrap">
                <div className="flex gap-x-2 items-end">
                  <a className="h-[48px] lg:h-auto -my-4 lg:my-0 flex items-center font-bold text-md hover:underline last:truncate ">
                    Equipment
                  </a>
                  <a>{">"}</a>
                  <a className="h-[48px] lg:h-auto -my-4 lg:my-0 flex items-center font-bold text-md hover:underline last:truncate ">
                    Special Offer
                  </a>
                  <a>{">"}</a>
                  <a className="h-[48px] lg:h-auto -my-4 lg:my-0 flex items-center font-bold text-md hover:underline last:truncate ">
                    Used
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full flex px-48 pt-20 flex-col flex-1 justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:flex lg:gap-x-8 xl:gap-x-20">
              <div className="relative flex-shrink-0">
                <div className="sticky top-0">
                  <div className="flex-1 max-w-3xl w-[1076px]">
                    <div className="">
                      <Image src={equipment.image} className="w-full"></Image>
                      <div className="my-4 px-6">
                        <div className="font-medium text-lg" style={textStyle}>
                          Product visuals are renderings and do not reflect the used condition.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Equipment Name */}
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

                    {/* Item Description */}
                    <div className="my-16" style={textStyle}>
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
                            {/* Decrease Button */}
                            <button
                              onClick={decreaseNumProduct}
                              className="outline-none flex-shrink-0 w-5 h-5 font-bold rounded-full flex items-center justify-center"
                            >
                              <FontAwesomeIcon icon={faCircleMinus} className="size-full" />
                            </button>
                            <div className="select-none text-center w-8 font-bold text-base ">{numProducts}</div>
                            {/* Increase Button */}
                            <button
                              onClick={increaseNumProduct}
                              className="outline-none flex-shrink-0 w-5 h-5 font-bold rounded-full flex items-center justify-center"
                            >
                              <FontAwesomeIcon icon={faCirclePlus} className="size-full" />
                            </button>
                          </div>
                          <button
                            className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-7 xl:px-8 text-[15px] border-transparent hover:opacity-75 text-white flex-grow sm:flex-none"
                            style={mainStyle}
                          >
                            <span className="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[2px]">
                              Add to Cart
                            </span>
                          </button>
                          <button
                            id="addToQuoteButton"
                            className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-7 xl:px-8 text-[15px] bg-transparent hover:opacity-75 border-cyan-950  flex-grow sm:flex-none"
                          >
                            <span className="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[2px]">
                              Add to Quote
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Detail List */}
                      <div className="flex flex-wrap gap-x-6 mt-6">
                        <button
                          onClick={(e) => window.scrollTo({ top: 1400, behavior: "smooth" })}
                          className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold text-[15px] hover:opacity-75 "
                        >
                          <FontAwesomeIcon icon={faList} />
                          <span className="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[-2px]">
                            Details
                          </span>
                        </button>
                        <button
                          onClick={(e) => window.scrollTo({ top: 2100, behavior: "smooth" })}
                          className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold text-[15px] hover:opacity-75 "
                        >
                          <FontAwesomeIcon icon={faSheetPlastic} />
                          <span className="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[-2px]">
                            Product Sheet
                          </span>
                        </button>
                        <button
                          id="addToListButton"
                          className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold text-[15px] hover:opacity-75 "
                        >
                          <FontAwesomeIcon icon={faSquarePlus} />
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

      {/* Feature Button */}
      <div style={mainStyle} className="py-20">
        <div className="relative w-full flex px-20 flex-col justify-center items-center">
          <div className="relative w-full px-10 flex-col flex-1 justify-center">
            <div className="grid grid-cols-12 gap-x-5">
              <div className="col-span-3">
                <h2 className="font-bold text-h-xl text-white">Feature</h2>
              </div>
              <div className="gap-y-8 grid grid-cols-1 gap-x-8 mt-8 col-span-8">
                <div className="">
                  <div className="flex flex-col gap-y-3 sm:gap-y-4 pr-5">
                    <div className="flex flex-col gap-y-2">
                      <h2 className="flex font-bold text-white">Designed For</h2>
                      <p className="font-medium text-xl text-white">
                        Strength training and functional fitness in mixed use environments
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col gap-y-3 sm:gap-y-4 pr-5">
                    <div className="flex flex-col gap-y-2 ">
                      <h2 className="flex font-bold text-white">Smaller Increases</h2>
                      <p className="font-medium text-xl text-white">
                        Plates range from 1,25 – 5 kg for small increment adjustments
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col gap-y-3 sm:gap-y-4 pr-5">
                    <div className="flex flex-col gap-y-2 ">
                      <h2 className="flex font-bold text-white">Minimalistic Design</h2>
                      <p className="font-medium text-xl text-white">
                        Black matte rubber with white weight markings for easy identification
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col gap-y-3 sm:gap-y-4 pr-5">
                    <div className="flex flex-col gap-y-2 ">
                      <h2 className="flex font-bold text-white">Lasting Performance</h2>
                      <p className="font-medium text-xl text-white">Solid steel core coated in durable rubber</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col gap-y-3 sm:gap-y-4 pr-5">
                    <div className="flex flex-col gap-y-2 ">
                      <h2 className="flex font-bold text-white">Nestable and Compact</h2>
                      <p className="font-medium text-xl text-white">
                        Snug and secure fit that takes less that space on the sleeve and provides stability when plates
                        are loaded
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Button */}
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

      {/* Warranty */}
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
