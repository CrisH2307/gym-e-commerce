"use client";
import { faBars, faCartShopping, faMagnifyingGlass, faTableList, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [hoveredItems, setHoveredItems] = useState(Array(5).fill(false));

  const handleMouseEnter = (index) => {
    setHoveredItems((prev) => prev.map((_, i) => (i === index ? true : false)));
  };

  const handleMouseLeave = () => {
    setHoveredItems(Array(5).fill(false));
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
    </div>
  );
}
