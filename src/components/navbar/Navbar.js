"use client";
import { faBars, faCartShopping, faMagnifyingGlass, faTableList, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import EquipmentMenuDropdown from "./equipmentMenuDropdown/equipmentMenu";
import GearMenuDropdown from "./gearMenuDropdown/gearMenu";
import HwwMenuDropdown from "./hwwMenuDropdown/hwwMenu";
import { useRouter } from "next/navigation";
import { Box, Drawer } from "@mui/material";

export default function Navbar() {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [hoveredItems, setHoveredItems] = useState(Array(5).fill(false));
  const [isActive, setIsActive] = useState(false);
  const [isEquipmentRoute, setIsEquipmentRoute] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const ToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const EquipmentSidebarFilter = () => {
    return (
      <>
        <div style={{ color: "white" }}>
          <Box
            sx={{ width: 400, height: "100%" }}
            role="presentation"
            onClick={(e) => ToggleSidebar(false)}
            className="fixed right-0 top-0 bg-white"
          >
            {/* <div className="flex flex-col items-center py-10">
              <div className="flex justify-end">
                <button className="text-md font-bold text-black">X</button>
              </div>
              <div className="px-4 w-10/12">
                <h2 className="font-bold text-black text-base">My List</h2>
              </div>
              <div className="pt-12">
                <h3 className="font-bold text-black text-base">
                  Save your favouritess
                </h3>
              </div>
            </div> */}
            <div className="flex flex-col h-screen p-4">
              <div className="flex justify-end">
                <button className="text-md font-bold text-black">X</button>
              </div>
              <div className="flex flex-col items-left space-y-4 text-black">
                <h1 className="text-xl font-bold pb-7">My List</h1>
                <h2 className="text-xl font-bold pb-4">Save your favorites</h2>
                <p className="text-sm pb-6 font-serif">Bookmark items for shopping or to request a quote.</p>
                <h4 className="text-xl font-bold pb-4">To Request a Quote</h4>
                <img
                  src="https://eleiko.com/_next/image?url=https%3A%2F%2Ffra1.digitaloceanspaces.com%2Feleiko%2Fcms-prod%2Fae1561eeca1b39747c6ed2ee7129dee0.png&w=3840&q=75"
                  alt="Image 1"
                  className="w-full h-50 object-cover"
                />
                <p className="text-sm pb-6 font-serif">
                  A sales rep will get back to you shortly and support you through your project.
                </p>
                <p className="text-sm pb-6 font-serif">Share your list for shopping online or add items to cart.</p>
                <button className="bg-[#002A39] text-white py-2 px-4 rounded">Okay, got it!</button>
              </div>
            </div>
          </Box>
        </div>
      </>
    );
  };

  useEffect(() => {
    if (router.pathname) {
      setIsEquipmentRoute(router.pathname === "/equipment" || router.pathname.startsWith("/equipment/"));
    }
  }, [router.pathname]);

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
      <nav className={`w-full bg-transparent fixed top-0 left-0 right-0 z-10 mt-9`}>
        {" "}
        <div className="mx-3 lg:max-w-full md:items-center md:flex md:px-8">
          <div>
            <div className="mx-9 flex py-4 md:py-4 md:block">
              <Link
                href="/"
                className="text-3xl inline-block text-current font-black m-[-1px] whitespace-nowrap no-underline"
                style={{
                  letterSpacing: "0.03em",
                  fontStretch: "expanded",
                  fontSize: "2rem",
                  lineHeight: "0.7",
                }}
              >
                ELEIKO
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
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
                  className={`relative pt-10 text-base pb-10 px-3 text-center delay-300 transition-all duration-300 ease-in-out ${
                    hoveredItems[0] ? "border-b-3 border--950" : "border-b-3 border-transparent"
                  }`}
                  style={{
                    borderBottom: hoveredItems[0] ? "3px solid blue" : "3px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={() => handleMouseLeave(0)}
                >
                  <Link
                    className={`no-underline font-bold text-current	`}
                    href="/equipment"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Equipment
                  </Link>

                  {hoveredItems[0] && <EquipmentMenuDropdown />}
                </li>
                <li
                  className={`relative pt-10 text-base pb-10 px-3 text-center`}
                  style={{
                    borderBottom: hoveredItems[1] ? "3px solid blue" : "3px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                >
                  <Link className="no-underline font-bold text-current" href="/gear" onClick={() => setNavbar(!navbar)}>
                    Gear
                  </Link>
                  {hoveredItems[1] && <GearMenuDropdown />}
                </li>
                <li
                  className={`pt-10 text-base pb-10 px-3 text-center`}
                  style={{
                    borderBottom: hoveredItems[2] ? "3px solid blue" : "3px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={() => handleMouseLeave(2)}
                >
                  <Link
                    className="no-underline font-bold text-current"
                    href="/education"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Education
                  </Link>
                </li>
                <li
                  className={`pt-10 text-base pb-10 px-3 text-center`}
                  style={{
                    borderBottom: hoveredItems[3] ? "3px solid blue" : "3px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={() => handleMouseLeave(3)}
                >
                  <Link
                    className="no-underline font-bold text-current"
                    href="/stories"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Stories
                  </Link>
                </li>
                <li
                  className={`relative pt-10 text-base pb-10 px-3 text-center`}
                  style={{
                    borderBottom: hoveredItems[4] ? "3px solid blue" : "3px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(4)}
                  onMouseLeave={() => handleMouseLeave(4)}
                >
                  <Link className="no-underline font-bold text-current" href="/work" onClick={() => setNavbar(!navbar)}>
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
              <li className="pb-6 text-base py-1 px-3 text-center">
                <Link href="/design-service">
                  <span
                    className="no-underline font-bold text-current justify-end border-b-4 border-white"
                    style={{
                      transition: hoveredItems[0] ? "border-color 0.2 ease" : "3px solid transparent",
                    }}
                    onClick={() => setNavbar(navbar)}
                  >
                    Design Service
                  </span>
                </Link>
              </li>
              <li className="pb-6 text-base py-1 px-3 text-center">
                <Link href="/search">
                  <span className="font-bold text-current justify-end" onClick={() => setNavbar(navbar)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                </Link>
              </li>
              <li className="pb-6 text-base py-1 px-3 text-center">
                <button onClick={ToggleSidebar}>
                  <span className="font-bold text-current justify-end" onClick={() => setNavbar(navbar)}>
                    <FontAwesomeIcon icon={faTableList} />
                  </span>
                </button>
              </li>
              <Drawer open={isOpen} onClose={() => ToggleSidebar()}>
                <EquipmentSidebarFilter />
              </Drawer>
              <li className="pb-6 text-base py-1 px-3 text-center">
                <Link href="/equipment">
                  <span className="font-bold text-current justify-end" onClick={() => setNavbar(navbar)}>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
