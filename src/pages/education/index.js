import Header from "@/components/header/Header";
import "../../app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import {
  mainStyle,
  secondaryStyle,
  textStyle,
} from "@/components/headerSection/HeaderSection";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import background from "../../components/Assets/background.webp";

export default function Education() {
  return (
    <>
      <Header />
      <Navbar />
      <div
        style={{
          ...secondaryStyle,
        }}
        className="relative flex flex-col h-[calc(60vh, 55px)] bg-cover bg-center"
      >
        <div className="relative pb-14 pt-52">
          <div className="relative flex w-full px-20 flex-col">
            <div className="flex flex-col flex-wrap items-start justify-between gap-x-10 gap-y-8">
              <div className="flex flex-col gap-y-3">
                <h1 className="font-bold text-6xl text-white">
                  Eleiko Education
                </h1>
              </div>

              <div className="flex flex-wrap justify-between w-full gap-4">
                <button
                  style={textStyle}
                  className="outline-none inline-flex justify-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle min-w-[160px] w-full sm:w-auto px-8 text-[15px] border-transparent hover:opacity-75 bg-white"
                >
                  <span className="inline-flex gap-x-10 items-center leading-[48px] text-base">
                    Workshops in the US
                  </span>
                </button>

                <button
                  style={textStyle}
                  className="outline-none inline-flex justify-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle min-w-[160px] w-full sm:w-auto px-8 text-[15px] border-white hover:opacity-75 bg-transparent"
                >
                  <span className="inline-flex gap-x-10 items-center leading-[48px] text-base text-white">
                    Courses in the US
                  </span>
                </button>

                <button
                  style={textStyle}
                  className="outline-none inline-flex justify-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle min-w-[160px] w-full sm:w-auto px-8 text-[15px] border-white hover:opacity-75 bg-transparent"
                >
                  <span className="inline-flex gap-x-10 items-center leading-[48px] text-base text-white">
                    Courses in the Nordics
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={mainStyle} className="py-20">
        <div className="relative w-full flex px-20 flex-col justify-center items-center">
          <div className="flex flex-1">
            <div className="relative w-full px-20 flex-col max-w-5xl mx-auto">
              <div className="max-w-5xl">
                <p className="font-semibold text-xl max-w-none leading-9">
                  Whether a coach, trainer, operator, or lifter, you deserve
                  maximum results. And we are commited to helping you achieve
                  them. We help you overcome challenges and enhance
                  opportunities with resources and courses built to inform and
                  transform your strength your strength training journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lifting Gear */}
      <div className="flex flex-wrap justify-between items-center px-[75px] pt-20">
        <h1 style={textStyle} className="font-semibold text-4xl">
          Education Resources
        </h1>
        <a className="font-medium text-md hover:no-underline hover:delay-300ms inline-flex items-end">
          <button className="inline-block text-xl text-blue-950 transition-all duration-300 hover:no-underline underline hover:border-transparent">
            Support for your coaching or strength training journey.
          </button>
        </a>
      </div>
      {/* <p className="font-semibold">
        We provide resources to meet your learning style and needs. From papers
        and articles for the reader, training programs for the doer to strength
        talks, coaching tips and an exercise video library for the viewer —
        explore our comprehensive collection of materials to support your
        coaching and strength training journey.
      </p> */}

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

      {/* Accessories Gear */}
      <div className="flex flex-wrap justify-between items-center px-[75px] pt-20">
        <h1 style={textStyle} className="font-semibold text-4xl">
          Accessories
        </h1>
      </div>

      {/* About Gear */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
}
