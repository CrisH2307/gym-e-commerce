import Header from "@/components/header/Header";
import "../../app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import { mainStyle, secondaryStyle, textStyle } from "@/components/headerSection/HeaderSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/footer/Footer";

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
      <div className="flex flex-wrap justify-between items-center p-20">
        <h1 style={textStyle} className="font-semibold text-4xl">
          Lifting Gear
        </h1>
        <a className="font-medium text-md hover:no-underline hover:delay-300ms inline-flex items-end">
          <button className="inline-block text-blue-950 transition-all duration-300 hover:no-underline underline hover:border-transparent">
            View All
          </button>
        </a>
      </div>
      <div className="flex m-12">
        <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden p-5">
          <div className="flex relative overflow-hidden ">
            <div className="relative overflow-hidden bg-blue-950">
              <img
                src="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2F290aab2da13dc73e299fc998e40f3135.webp&w=3840&q=75"
                className="object-cover transition-opacity duration-200 group-hover:opacity-75"
              ></img>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
            <div className="absolute bottom-0 left-0 right-0 pb-12">
              <h1 className="text-white font-bold text-4xl pl-10 pb-8">Lifting Gear</h1>
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
        <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden p-5 ">
          <div className="flex relative overflow-hidden ">
            <div className="relative overflow-hidden bg-blue-950">
              <img
                src="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2F357b8e36dba4b29e862ebf2df4063a05.webp&w=3840&q=75"
                className="object-cover transition-opacity duration-200 group-hover:opacity-75"
              ></img>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
            <div className="absolute bottom-0 left-0 right-0 pb-12">
              <h1 className="text-white font-bold text-4xl pl-10 pb-8">Wrist Wraps</h1>
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
        <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden p-5">
          <div className="flex relative overflow-hidden ">
            <div className="relative overflow-hidden bg-blue-950">
              <img
                src="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2Fbc440911e829a1cf63ad9c6db8432262.webp&w=3840&q=75"
                className="object-cover transition-opacity duration-200 group-hover:opacity-75"
              ></img>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
            <div className="absolute bottom-0 left-0 right-0 pb-12">
              <h1 className="text-white font-bold text-4xl pl-10 pb-8">Knee Sleeves</h1>
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
        <div className="relative flex flex-col w-full flex-1 justify-center overflow-x-hidden p-5">
          <div className="flex relative overflow-hidden ">
            <div className="relative overflow-hidden bg-blue-950">
              <img
                src="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2Fb830019bcd44050e68ff8c17b6ce2351.webp&w=3840&q=75"
                className="object-cover transition-opacity duration-200 group-hover:opacity-75"
              ></img>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent pointer-event-none"></div>
            <div className="absolute bottom-0 left-0 right-0 pb-12">
              <h1 className="text-white font-bold text-4xl pl-10 pb-8">Lifting Strap</h1>
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
      </div>
      <div style={mainStyle} className="py-20">
        <div className="relative w-full flex px-20 flex-col justify-center items-center">
          <div className="flex flex-1">
            <div className="relative w-full px-20 flex-col max-w-4xl mx-auto">
              <div className="max-w-5xl">
                <p className=" font-semibold text-xl max-w-none leading-9">
                  Discover Eleiko Gear, rooted in 65 years of strength expertise and developed together with the world’s
                  strongest athletes. Whether you're an experienced athlete or at the beginning of your strength and
                  fitness journey, Eleiko gear is meticulously designed and crafted to elevate your training experience
                  and support your best performance outcomes.
                </p>
                <br />
                <p className=" font-semibold text-xl max-w-none leading-9">
                  At Eleiko, we’ve designed gear with the same commitment to quality and durability as we have for our
                  strength equipment. We offer a range of gear from apparel to accessories, each piece is engineered to
                  endure the toughest workouts, ensuring they withstand the test of time. Eleiko Gear is more than just
                  style; it's about elevating your performance.
                </p>
                <br />
                <p className=" font-semibold text-xl max-w-none leading-9">
                  We offer a diverse range of training gear, from comfortable and stylish apparel fit for a day in the
                  training hall or to wear daily to specialized accessories to aid your performance and support your
                  training needs. Eleiko Gear spans the complete range of accessories for powerlifting, weightlifting
                  and functional fitness including lifting belts, knee sleeves, lifting straps, wrist wraps and more.
                  Elevate your strength training with Eleiko Gear.
                </p>
                <br />
                <p className=" font-semibold text-xl max-w-none leading-9">
                  Experience firsthand the difference the right lifting gear can make and explore our product catalog to
                  elevate your training, make a statement, and conquer your fitness goals with Eleiko Gear. Explore our
                  collection to find the perfect gear for your fitness journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
