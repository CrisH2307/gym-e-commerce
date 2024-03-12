import { mainStyle, textStyle } from "../headerSection/HeaderSection";

export default function CardSide() {
  return (
    <div>
      <div className="flex flex-row ml-8 my-16 lg:ml-20">
        <div className="w-full flex flex-row flex-1 justify-center overflow-x-hidden">
          <div className="overflow-hidden">
            <img
              src="https://eleiko.com/_next/image?url=https%3A%2F%2Ffra1.digitaloceanspaces.com%2Feleiko%2Fcms-prod%2Fc50a0e52ca1c58d21c0b256bdb7e8daf.png&w=3840&q=75"
              className="h-full w-11/12 inset-0"
            ></img>
          </div>
        </div>
        <div className="flex lg:flex-1 justify-start mt-6 md:mt-8 lg:mt-24 w-full">
          <div className="w-full flex flex-col">
            <div className="flex flex-col w-full max-w-xl 2xl:max-w-2xl gap-y-8 lg:gap-y-10 xl:gap-y-12 2xl:gap-y-14">
              <div style={textStyle} className="flex flex-col gap-y-8">
                <h1 style={textStyle} className="font-bold text-4xl">
                  The Choice of Champions
                </h1>
                <p style={textStyle} className="text-xl font-medium leading-normal">
                  Eleiko is uniquely certified by IWF, IPF and WPPO. We deliver products that help athletes push the
                  boundaries of human potential through our focus on precision, quality, and safety.
                </p>
              </div>
              <div className="flex flex-wrap items-center mt-[-10px]">
                <a
                  style={mainStyle}
                  className="no-underline  cursor-pointer transition duration-200 font-semibold rounded-full text-center xl:px-9 text-[13px] xl:text-[15px] hover:bg-opacity-85 text-white bg-blue-950"
                >
                  <span className="inline-flex items-center leading-[50px] xl:leading-[55px]">
                    Competition Solutions
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row ml-8 my-28 lg:ml-20">
        <div className="w-full flex flex-row flex-1 justify-center overflow-x-hidden">
          <div className="w-full lg:mt-12 lg:w-1/2 lg:max-w-full lg:flex-1 flex lg:justify-end mt-6 md:mt-8">
            <div className="w-full flex flex-col">
              <div className="flex flex-col w-full lg:max-w-full 2xl:max-w-2xl gap-y-8 lg:gap-y-10 xl:gap-y-12 2xl:gap-y-14">
                <div className="flex flex-col gap-y-8">
                  <h1 style={textStyle} className="font-bold text-4xl">
                    A Stronger World
                  </h1>
                  <p style={textStyle} className="text-xl font-medium leading-normal">
                    We aim to have a positive impact by reducing our environmental footprint and helping build stronger
                    people and communities.
                  </p>
                </div>
                <div className="flex flex-wrap items-center mt-[-10px]">
                  <a
                    style={mainStyle}
                    className="no-underline  cursor-pointer transition duration-200 font-semibold rounded-full text-center xl:px-9 text-[13px] xl:text-[15px] hover:bg-opacity-85 text-white bg-blue-950"
                  >
                    <span className="inline-flex items-center leading-[50px] xl:leading-[55px]">Learn More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-1 lg:w-1/2 lg:mr-20">
          <div className="overflow-hidden w-full">
            <img
              src="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2F68990e33fcf49b38c4edc1d444d2c0de.jpg&w=3840&q=75"
              className="h-full inset-0"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
