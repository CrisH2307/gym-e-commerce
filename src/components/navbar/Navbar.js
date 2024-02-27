"use client";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faTableList,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import EquipmentMenuDropdown from "./equipmentMenuDropdown/equipmentMenu";
import GearMenuDropdown from "./gearMenuDropdown/gearMenu";
import HwwMenuDropdown from "./hwwMenuDropdown/hwwMenu";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [hoveredItems, setHoveredItems] = useState(Array(5).fill(false));
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredItems((prev) => prev.map((_, i) => (i === index ? true : false)));
    setIsActive(!isActive);
  };

  const handleMouseLeave = () => {
    setHoveredItems(Array(5).fill(false));
    setIsActive(isActive);
  };

  return (
    <div>
      <nav className="w-full bg-transparent fixed top-0 left-0 right-0 z-10">
        <div className="mx-3 lg:max-w-full md:items-center md:flex md:px-8">
          <div>
            <div className="mx-9 flex py-4 md:py-4 md:block">
              <span
                className="text-3xl text-white font-black m-[-1px] whitespace-nowrap"
                style={{ clip: "rect(0,0,0,0)" }}
              >
                ELEIKO
              </span>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FontAwesomeIcon icon={faX} />
                  ) : (
                    <FontAwesomeIcon icon={faBars} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-6 mt-2 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              {/* Left-side link */}
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li
                  className={`relative pt-10 text-sm pb-10 px-3 text-center delay-300 transition-all duration-300 ease-in-out ${
                    hoveredItems[0]
                      ? "border-b-3 border-blue-950"
                      : "border-b-3 border-transparent"
                  }`}
                  style={{
                    borderBottom: hoveredItems[0]
                      ? "3px solid blue"
                      : "3px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={() => handleMouseLeave(0)}
                >
                  <Link
                    className="no-underline font-bold text-white "
                    href="/equipment"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Equipment
                  </Link>
                  {hoveredItems[0] && <EquipmentMenuDropdown />}
                </li>
                <li
                  className={`relative pt-10 text-sm pb-10 px-3 text-center`}
                  style={{
                    borderBottom: hoveredItems[1]
                      ? "3px solid blue"
                      : "3px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                >
                  <Link
                    className="no-underline font-bold text-white"
                    href="/gear"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Gear
                  </Link>
                  {hoveredItems[1] && <GearMenuDropdown />}
                </li>
                <li
                  className={`pt-10 text-sm pb-10 px-3 text-center`}
                  style={{
                    borderBottom: hoveredItems[2]
                      ? "3px solid blue"
                      : "3px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={() => handleMouseLeave(2)}
                >
                  <Link
                    className="no-underline font-bold text-white"
                    href="/education"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Education
                  </Link>
                </li>
                <li
                  className={`pt-10 text-sm pb-10 px-3 text-center`}
                  style={{
                    borderBottom: hoveredItems[3]
                      ? "3px solid blue"
                      : "3px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={() => handleMouseLeave(3)}
                >
                  <Link
                    className="no-underline font-bold text-white"
                    href="/stories"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Stories
                  </Link>
                </li>
                <li
                  className={`relative pt-10 text-sm pb-10 px-3 text-center`}
                  style={{
                    borderBottom: hoveredItems[4]
                      ? "3px solid blue"
                      : "3px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(4)}
                  onMouseLeave={() => handleMouseLeave(4)}
                >
                  <Link
                    className="no-underline font-bold text-white"
                    href="/work"
                    onClick={() => setNavbar(!navbar)}
                  >
                    How we work
                  </Link>
                  {hoveredItems[4] && <HwwMenuDropdown />}
                </li>
              </ul>
            </div>
          </div>

          {/* Right side bar */}
          <div
            className={`flex-1 justify-self-center pb-6 mt-2 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-end justify-end md:flex">
              <li className="pb-6 text-sm py-1 px-3 text-center">
                <Link
                  className="no-underline font-bold text-white justify-end border-b-4 border-white"
                  style={{
                    transition: hoveredItems[0]
                      ? "border-color 0.4 ease"
                      : "3px solid blue",
                  }}
                  href="/equipment"
                  onClick={() => setNavbar(navbar)}
                >
                  Design Service
                </Link>
              </li>
              <li className="pb-6 text-sm py-1 px-3 text-center">
                <Link
                  className="font-bold text-white justify-end"
                  href="/equipment"
                  onClick={() => setNavbar(navbar)}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
              </li>
              <li className="pb-6 text-sm py-1 px-3 text-center">
                <Link
                  className="font-bold text-white justify-end"
                  href="/equipment"
                  onClick={() => setNavbar(navbar)}
                >
                  <FontAwesomeIcon icon={faTableList} />
                </Link>
              </li>
              <li className="pb-6 text-sm py-1 px-3 text-center">
                <Link
                  className="font-bold text-white justify-end"
                  href="/equipment"
                  onClick={() => setNavbar(navbar)}
                >
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
