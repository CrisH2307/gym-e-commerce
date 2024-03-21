import Header from "@/components/header/Header";
import "../../app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import { secondaryStyle, textStyle } from "@/components/headerSection/HeaderSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/footer/Footer";
import LiftingGear from "./LiftingGear";
import AboutGear from "./About";
import Apparel from "./Apparel";
import Accessories from "./Accessories";

export default function Gear() {
  return (
    <>
      <Header />
      <Navbar />
      <div style={secondaryStyle} className="relative flex flex-col h-[calc(49vh, 48px)]">
        <div className="relative pb-14 pt-52">
          <div className="relative flex w-full px-20 flex-col">
            <div className="flex flex-col flex-wrap items-start justify-between gap-x-10 gap-y-8">
              <div className="flex flex-col gap-y-3">
                <h1 className="font-bold text-6xl">Gear</h1>
              </div>
              <div className="flex flex-wrap justify-between w-full gap-4">
                <button
                  style={textStyle}
                  className="outline-none inline-flex justify-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle min-w-[160px] w-full sm:w-auto px-8 text-[15px] border-transparent hover:opacity-75 bg-white"
                >
                  <FontAwesomeIcon className="size-6 pt-3" icon={faArrowUpWideShort} />
                  <span className="inline-flex gap-x-10 items-center leading-[48px] text-base">Filter</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lifting Gear */}
      <div className="flex flex-wrap justify-between items-center px-[75px] pt-20">
        <h1 style={textStyle} className="font-semibold text-4xl">
          Lifting Gear
        </h1>
        <a className="font-medium text-md hover:no-underline hover:delay-300ms inline-flex items-end">
          <button className="inline-block text-xl text-blue-950 transition-all duration-300 hover:no-underline underline hover:border-transparent">
            View All
          </button>
        </a>
      </div>
      <LiftingGear />

      {/* Apparel Gear */}
      <div className="flex flex-wrap justify-between items-center px-[75px] pt-20">
        <h1 style={textStyle} className="font-semibold text-4xl">
          Apparel
        </h1>
        <a className="font-medium text-md hover:no-underline hover:delay-300ms inline-flex items-end">
          <button className="inline-block text-xl text-blue-950 transition-all duration-300 hover:no-underline underline hover:border-transparent">
            View All
          </button>
        </a>
      </div>
      <Apparel />

      {/* Accessories Gear */}
      <div className="flex flex-wrap justify-between items-center px-[75px] pt-20">
        <h1 style={textStyle} className="font-semibold text-4xl">
          Accessories
        </h1>
      </div>
      <Accessories />

      {/* About Gear */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <AboutGear />

      <Footer />
    </>
  );
}
