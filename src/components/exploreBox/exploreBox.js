export default function ExploreBox() {
  return (
    <div className="relative flex flex-col">
      <div className="relative flex flex-col flex-1 px-6 pd:px-14 lg:px-20 pt-20 gap-1 justify-center overflow-x-hidden">
        <div className="relative flex -ml-3 md:-ml-4 lg:-ml-5">
          <div className="relative flex flex-col pl-3 md:pl-4 lg:pl-5 flex-shrink-0 w-11/12 md:w-full lg:w-1/2 overflow-hidden">
            <div className="h-5/6 overflow-hidden bg-primary">
              <video
                autoPlay=""
                playsInline=""
                loop=""
                poster="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2F1047cc630d0ad099f6a357a22cf9958c.webp&w=3840&q=75"
                className="w-full h-full object-cover bottom-0 right-0"
              ></video>
              <div className="absolute inset-0 from-black via-transparent to-transparent opacity-40"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-5/6 p-10 sm:p-12 xl:p-16 flex flex-col justify-end gap-y-3">
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-3">
                  <h1 className="font-bold text-white text-4xl">Eleiko Prestera</h1>
                </div>
                <p className="text-md text-white font-medium">
                  A complete strength solution that evolves with your needs.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto">
                <a className="no-underline outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-semibold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-4.5 xl:px-7 text-[13px] xl:text-[15px] border-white text-white hover:bg-blue-950">
                  <span className="inline-flex gap-x-2 items-center leading-[30px] xl:leading-[38px] mt-[-2px]">
                    Contact Sales
                  </span>
                </a>
                <a className="no-underline outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-semibold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-4.5 xl:px-7 text-[13px] xl:text-[15px] border-white text-white hover:bg-blue-950">
                  <span className="inline-flex gap-x-2 items-center leading-[30px] xl:leading-[38px] mt-[-2px]">
                    Explore Prestera
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col pl-3 md:pl-4 lg:pl-5 flex-shrink-0 w-11/12 md:w-full lg:w-1/2 overflow-hidden">
            <div className="h-5/6 overflow-hidden">
              <img
                src="https://eleiko.com/_next/image?url=https%3A%2F%2Feleiko.fra1.digitaloceanspaces.com%2Fcms-prod%2F1896d8796eb8084f48925223d1f40b97.webp&w=3840&q=75"
                className="w-full h-full object-cover bottom-0 right-0 transition-opacity duration-200 group-hover:opacity-75"
              ></img>
              <div className="absolute inset-0 from-black via-transparent to-transparent opacity-40"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-5/6 p-10 sm:p-12 xl:p-16 flex flex-col justify-end gap-y-3">
              <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                  <h1 className="font-bold text-white text-4xl">Design Your Own Gym</h1>
                </div>
                <p className="text-md text-white font-medium leading-normal max-w-lg">
                  Turn your dream into your dream gym with precision quality and bespoke designs.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto">
                <a className="no-underline outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-semibold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-4.5 xl:px-7 text-[13px] xl:text-[15px] border-white text-white hover:bg-blue-950">
                  <span className="inline-flex gap-x-2 items-center leading-[30px] xl:leading-[38px] mt-[-2px]">
                    Design Consult
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
