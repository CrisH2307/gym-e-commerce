import Header from "@/components/header/Header";
import "../../app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import {
  mainStyle,
  secondaryStyle,
  textStyle,
} from "@/components/headerSection/HeaderSection";
import Footer from "@/components/footer/Footer";
import Popular from "../../components/Popular/Popular";
import background from "../../components/Assets/background.webp";
import IMG1 from "./Component_Edu.webp";
import IMG2 from "./Component_Edu2.webp";
import IMG3 from "./StrengthEssential.webp";
import Twocolumn from "./Twocolumn";
import Apparel from "../gear/Apparel";
import Image from "next/image";

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
                <p className="font-semibold text-xl max-w-none leading-9 text-white">
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
      <Twocolumn />
      <Apparel />
      {/* Apparel Gear */}
      <div className="flex flex-wrap justify-between items-center px-[75px] pt-20">
        <div className="relative flex flex-col">
          <div className="relative w-full flex px-6 md:px-14 lg:px-20 flex-col flex-1 justify-center overflow-x-hidden">
            <div className="flex flex-col gap-y-12 lg:gap-y-14">
              <div className="flex items-center gap-x-8 lg:gap-x-20 flex-wrap lg:flex-nowrap lg:flex-row-reverse">
                <div className="w-full md:w-1/2 p-6 ">
                  <Image src={IMG1} width={2880} height={1922} alt="IMG1" />
                  <div className="mt-6">
                    <Image src={IMG2} width={2880} height={1922} alt="IMG1" />
                  </div>
                </div>
                <div className="w-full lg:mt-0 lg:w-1/2 lg:max-w-full lg:flex-1 flex lg:justify-end mt-6 md:mt-8">
                  <div className="relative w-full flex flex-col">
                    <div className="flex flex-col w-full max-w-xl 2xl:max-w-2xl gap-y-8 lg:gap-y-10 xl:gap-y-12 2xl:gap-y-14">
                      <div className="flex flex-col gap-y-4 md:gap-y-6 xl:gap-y-8">
                        <div className="flex flex-col gap-y-2">
                          <p className="font-medium text-h-sm md:text-h-base text-primary-2">
                            Live and Online Courses
                          </p>
                          <h2
                            style={textStyle}
                            className="font-semibold text-4xl"
                          >
                            Grounded in science. Proven in practice.
                          </h2>
                        </div>
                        <div className="font-medium text-base md:text-lg 2xl:text-xl 2xl:leading-normal prose">
                          <p style={textStyle}>
                            Eleiko Education delivers extended learning
                            opportunities in both live and online formats. Our
                            live courses and workshops combine systems and
                            science with practical application to develop and
                            enhance your technique and coaching skills in
                            Weightlifting, Powerlifting, Functional Training,
                            and Tactical Training.
                          </p>
                          <p>
                            Our online courses enable you to progress through
                            multimedia content at your own pace. Each course
                            provides lectures, practical applications, and
                            instruction videos with a downloadable manual,
                            training programs, helpful articles, and CEUs.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto">
                        <a
                          href="https://education.eleiko.com/sv/education/courses#gs.9fwq70"
                          target="_blank"
                          rel="noreferrer"
                          className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-7 xl:px-8 text-[15px] border-transparent hover:opacity-75 bg-current text-[#002A39]"
                        >
                          <span className="inline-flex gap-x-10 items-center leading-[48px] text-base text-white">
                            Courses in the Nordics
                          </span>
                        </a>
                        <a
                          href="https://eleiko.inspire360.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-7 xl:px-8 text-[15px] bg-transparent hover:opacity-75 border-primary text-primary"
                        >
                          <span className="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[-2px]">
                            Courses in the US
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Accessories Gear */}
      <div className="flex flex-wrap justify-between items-center px-[75px] pt-20 pb-[50px]"></div>
      <div style={mainStyle} className="py-50">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-6">
            <div className="flex flex-wrap justify-between items-center px-[75px] pt-20 col-span-2 h-[60vh]">
              <Image src={IMG3} width={2500} height={1950} alt="IMG1" />
            </div>
          </div>
          <div class="w-1/2 p-4 ">
            <h2 className="pt-[150px] pb-[20px] font-semibold text-3xl text-white">
              Reach your full potential
            </h2>
            <p className="py-[20px] text-xl max-w-70 leading-9 text-white text-wrap">
              Partner with Eleiko to outfit your facility with the right
              equipment and prepare your staff with the knowledge and support to
              effectively deliver strength programs that maximise the potential
              of your strength training area. Contact our team to bring a course
              to your facility or learn about upcoming courses.
            </p>
            <button className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-7 xl:px-8 text-[15px] bg-white hover:opacity-75 border-primary text-primary text-[#002A39]">
              Courses in the US
            </button>
          </div>
        </div>
      </div>

      <Popular />

      <Footer />
    </>
  );
}
