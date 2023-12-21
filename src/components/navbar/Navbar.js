"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="px-0 mx-5 lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <img className="w-20 h-auto" src="logo.png"></img>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <Image src="close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
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
                <li className="pb-6 text-sm py-1 px-3 text-center">
                  <Link
                    className="no-underline font-bold text-white"
                    href="/equipment"
                    onClick={() => setNavbar(!navbar)}>
                    Equipment
                  </Link>
                </li>
                <li className="pb-6 text-sm py-1 px-3 text-center">
                  <Link className="no-underline font-bold text-white" href="/gear" onClick={() => setNavbar(!navbar)}>
                    Gear
                  </Link>
                </li>
                <li className="pb-6 text-sm py-1 px-3 text-center">
                  <Link
                    className="no-underline font-bold text-white"
                    href="/education"
                    onClick={() => setNavbar(!navbar)}>
                    Education
                  </Link>
                </li>
                <li className="pb-6 text-sm py-1 px-3 text-center">
                  <Link
                    className="no-underline font-bold text-white"
                    href="/stories"
                    onClick={() => setNavbar(!navbar)}>
                    Stories
                  </Link>
                </li>
                <li className="pb-6 text-sm py-1 px-3 text-center">
                  <Link className="no-underline font-bold text-white" href="/work" onClick={() => setNavbar(!navbar)}>
                    How we work
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
