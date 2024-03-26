import { mainStyle } from "../../headerSection/HeaderSection";
export default function GearMenuDropdown() {
  return (
    <div className="absolute top-full mt-2 left-0 w-full transition-all duration-300">
      <section
        className="flex flex-col bg-blue-950 mb-10"
        style={{
          ...mainStyle,
          height: "100vh",
          width: "145vw",
          left: "50%",
          transform: "translateX(-13.85%)",
        }}
      >
        <div className=" flex text-left">
          <div className="w-1/2">
            <div className=" grid lg:grid-cols-1  gap-y-3 pl-20 pt-12 text-xl">
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">View All</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl ">Lifting Gear</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">Apparel</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">Accessories</a>
              </div>
            </div>
            <div className="flex pt-80 mt-2.5">
              <img
                src="https://www.oceaniaweightlifting.com/portals/0/logos/iwf-white.png"
                className="size-12 ml-16"
              ></img>

              <img
                src="https://upload.wikimedia.org/wikipedia/en/7/76/International_Powerlifting_Federation_logo.png"
                className="size-16 h-full pt-2"
              ></img>

              <img
                src="https://sbdbelgium.be/wp-content/uploads/2020/07/sbd-apparel-belgium-logo-new-300-3.png"
                className="size-16 h-full pl-4 pt-3"
              ></img>
            </div>
          </div>

          <div className="w-1/2">
            <img
              src="https://imgs.search.brave.com/2aGyvAoIC5fR7OhMrxZiaxPMpyO5r4qxKmk2LImtQ7c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzUxLzQ5Lzkx/LzM2MF9GXzY1MTQ5/OTEyOF8wMnV6cHlR/Y0JJMXlwakY5ek5h/VnhnV3ZmNkpqNERJ/VS5qcGc"
              className=" w-full"
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
}
