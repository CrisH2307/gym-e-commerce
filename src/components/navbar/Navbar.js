"use client";
import { faBars, faCartShopping, faMagnifyingGlass, faTableList, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [hoveredItems, setHoveredItems] = useState(Array(5).fill(false));
  const [isDisplayed, setDisplay] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredItems((prev) => prev.map((_, i) => (i === index ? true : false)));
    setDisplay(true);
  };

  const handleMouseLeave = () => {
    setHoveredItems(Array(5).fill(false));
    setDisplay(false);
  };

  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="px-0 mx-5 lg:max-w-full md:items-center md:flex md:px-8">
          <div>
            <div className="flex py-4 md:py-4 md:block">
              <img className="w-28 pb-3 h-auto" src="logo.png"></img>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}>
                  {navbar ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-6 mt-2 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}>
              {/* Left-side link */}
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li
                  className={`pt-10 text-sm pb-10 px-3 text-center`}
                  style={{
                    borderBottom: hoveredItems[0] ? "3px solid white" : "3px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={() => handleMouseLeave(0)}>
                  <Link
                    className="no-underline font-bold text-white "
                    href="/equipment"
                    onClick={() => setNavbar(!navbar)}>
                    Equipment
                  </Link>
                </li>
                <li
                  className={`pt-10 text-sm pb-10 px-3 text-center`}
                  style={{
                    borderBottom: hoveredItems[1] ? "3px solid white" : "3px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}>
                  <Link className="no-underline font-bold text-white" href="/gear" onClick={() => setNavbar(!navbar)}>
                    Gear
                  </Link>
                </li>
                <li
                  className={`pt-10 text-sm pb-10 px-3 text-center`}
                  style={{
                    borderBottom: hoveredItems[2] ? "3px solid white" : "3px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={() => handleMouseLeave(2)}>
                  <Link
                    className="no-underline font-bold text-white"
                    href="/education"
                    onClick={() => setNavbar(!navbar)}>
                    Education
                  </Link>
                </li>
                <li
                  className={`pt-10 text-sm pb-10 px-3 text-center`}
                  style={{
                    borderBottom: hoveredItems[3] ? "3px solid white" : "3px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={() => handleMouseLeave(3)}>
                  <Link
                    className="no-underline font-bold text-white"
                    href="/stories"
                    onClick={() => setNavbar(!navbar)}>
                    Stories
                  </Link>
                </li>
                <li
                  className={`pt-10 text-sm pb-10 px-3 text-center`}
                  style={{
                    borderBottom: hoveredItems[4] ? "3px solid white" : "3px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(4)}
                  onMouseLeave={() => handleMouseLeave(4)}>
                  <Link className="no-underline font-bold text-white" href="/work" onClick={() => setNavbar(!navbar)}>
                    How we work
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side bar */}
          <div
            className={`flex-1 justify-self-center pb-6 mt-2 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}>
            <ul className="h-screen md:h-auto items-end justify-end md:flex">
              <li className="pb-6 text-sm py-1 px-3 text-center">
                <Link
                  className="no-underline font-bold text-white justify-end border-b-4 border-white-300"
                  style={{ transition: hoveredItems[0] ? "border-color 0.4 ease" : "3px solid white" }}
                  href="/equipment"
                  onClick={() => setNavbar(navbar)}>
                  Design Service
                </Link>
              </li>
              <li className="pb-6 text-sm py-1 px-3 text-center">
                <Link className="font-bold text-white justify-end" href="/equipment" onClick={() => setNavbar(navbar)}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
              </li>
              <li className="pb-6 text-sm py-1 px-3 text-center">
                <Link className="font-bold text-white justify-end" href="/equipment" onClick={() => setNavbar(navbar)}>
                  <FontAwesomeIcon icon={faTableList} />
                </Link>
              </li>
              <li className="pb-6 text-sm py-1 px-3 text-center">
                <Link className="font-bold text-white justify-end" href="/equipment" onClick={() => setNavbar(navbar)}>
                  <FontAwesomeIcon icon={faCartShopping} />{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="flex flex-col bg-black" style={{ height: "65vh" }}>
        <div className=" flex text-left">
          <div className="w-1/2">
            <div className=" grid lg:grid-cols-2  gap-y-3 p-20 text-xl">
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
                id="newArrivals">
                {"-> New Arrivals"}
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">Barbells</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">Weight Plates</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">Lifting Sets</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">Platform</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">Barbell Collars</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">Weight Benches</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">Dumbbells</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">Racks & Rigs</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">Kettlebells</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">Storage</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">Outdoor</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">Gym Flooring</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">Training Tools</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">Competition Accessories</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">Strength Machines</a>
              </div>
              <div className=" flex items-center" href="/barbells">
                <a className="border-white border-b-2 text-white font-bold no-underline">Gear</a>
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
                id="specialOffers">
                {"-> Special Offers"}
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="https://imgs.search.brave.com/2aGyvAoIC5fR7OhMrxZiaxPMpyO5r4qxKmk2LImtQ7c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzUxLzQ5Lzkx/LzM2MF9GXzY1MTQ5/OTEyOF8wMnV6cHlR/Y0JJMXlwakY5ek5h/VnhnV3ZmNkpqNERJ/VS5qcGc"
              className=" w-full"></img>
          </div>
        </div>
      </section>
    </div>
  );
}
