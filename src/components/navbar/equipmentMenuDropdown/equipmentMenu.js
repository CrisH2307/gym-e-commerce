import { mainStyle } from "../../headerSection/HeaderSection";

export default function EquipmentMenuDropdown() {
  return (
    <div className="absolute delay-300 top-full mt-2 left-0 w-full transition-all duration-300">
      <section
        className="flex flex-col mb-10"
        style={{
          ...mainStyle,
          height: "100vh",
          width: "120vw",
          left: "50%",
          transform: "translateX(-12.4%)",
          transition: "transform 0.3s ease-in-out 1s",
        }}
      >
        <div className=" flex text-left">
          <div className="w-1/2">
            <div className=" grid lg:grid-cols-2  gap-y-3 pl-20 pt-12 text-xl">
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">View All</a>
              </div>
              <div
                className="text-blue-500 font-bold"
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
                href="/barbells"
                onMouseEnter={() => {
                  document.getElementById("newArrivals").style.transform = "translateX(5px)";
                }}
                onMouseLeave={() => {
                  document.getElementById("newArrivals").style.transform = "translateX(0px)";
                }}
                id="newArrivals"
              >
                {"-> New Arrivals"}
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl ">Barbells</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">Weight Plates</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">Lifting Sets</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">Platform</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">Barbell Collars</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">Weight Benches</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">Dumbbells</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">Racks & Rigs</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">Kettlebells</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">Storage</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">Outdoor</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">Gym Flooring</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">Training Tools</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">
                  Competition Accessories
                </a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">Strength Machines</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline text-xl">Gear</a>
              </div>
              <div
                className="text-blue-500 font-bold"
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
                href="/barbells"
                onMouseEnter={() => {
                  document.getElementById("specialOffers").style.transform = "translateX(5px)";
                }}
                onMouseLeave={() => {
                  document.getElementById("specialOffers").style.transform = "translateX(0px)";
                }}
                id="specialOffers"
              >
                {"-> Special Offers"}
              </div>
            </div>
            <div className="flex pt-20">
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
