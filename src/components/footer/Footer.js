"use client";
import React from "react";
import { secondaryStyle, textStyle } from "../headerSection/HeaderSection";

export default function Footer() {
  return (
    <>
      <div className="relative w-full flex px-12 md:px-14 lg:px-28 flex-col py-20" style={secondaryStyle}>
        <div className="flex flex-wrap justify-between gap-12 lg:gap-x-14">
          <div className="flex">
            <div className="flex flex-wrap items-start flex-1 gap-12 lg:gap-x-14">
              <div>
                <h3 className=" text-lg lg:text-h-lg xl:text-h-xl font-bold text-white">Company</h3>
                <div role="list" className="mt-4 space-y-4 ">
                  <div className="block font-medium text-base hover:underline text-white">About Us</div>
                  <div className="block font-medium text-base hover:underline text-white">Sustainability</div>
                  <div className="block font-medium text-base hover:underline text-white">News</div>
                  <div className="block font-medium text-base hover:underline text-white">Careers</div>
                  <div className="block font-medium text-base hover:underline text-white">Privacy Policy</div>
                  <div className="block font-medium text-base hover:underline text-white">Clearance</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg lg:text-h-lg xl:text-h-xl font-bold text-white">Information</h3>
                <div className="mt-4 space-y-4">
                  <div className="block font-medium text-base hover:underline text-white">FAQ</div>
                  <div className="block font-medium text-base hover:underline text-white">Size Information</div>
                  <div className="block font-medium text-base hover:underline text-white">Care Information</div>
                  <div className="block font-medium text-base hover:underline text-white">Shipping</div>
                  <div className="block font-medium text-base hover:underline text-white">Terms &amp; Conditions</div>
                  <div className="block font-medium text-base hover:underline text-white">Product Notices</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg lg:text-h-lg xl:text-h-xl font-bold text-white">Support</h3>
                <div className="mt-4 space-y-4">
                  <div className="block font-medium text-base hover:underline text-white">Contact Us</div>
                  <div className="block font-medium text-base hover:underline text-white">Distribution</div>
                  <div className="block font-medium text-base hover:underline text-white">My Account</div>
                  <div className="block font-medium text-base hover:underline text-white">Service &amp; Parts</div>
                  <div className="block font-medium text-base hover:underline text-white">Returns</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-base lg: text-h-lg xl:text-h-xl font-bold text-white">Newsletter</h3>
            <p className="mt-4 text-base font-medium max-w-md text-white">
              Sign up for new product launches and restock information.
            </p>
            <div className="mt-8">
              <button className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-7 xl:px-8 text-[15px] border-transparent hover:opacity-75 bg-white text-primary">
                <span
                  style={textStyle}
                  className="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[-2px]"
                >
                  Subscribe
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t_ pt-8 md:flex md:items-center md:justify-between border-primary-dark">
          <div className="flex flex-wrap items-center justify-between md:order-2 gap-x-10 gap-y-6">
            <div className="flex space-x-4">
              <a className="text-white hover:text-primary-2">
                <span className="sr-only">Facebook</span>
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a className="text-white hover:text-primary-2">
                <span className="sr-only">Instagram</span>
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <button className="outline-none flex items-center -m-2 p-2 font-bold">
              <div className="inline-block w-7 h-7 mr-3 overflow-hidden">
                <img className="w-full h-full" src="https://flagcdn.com/ca.svg" />
              </div>
              <span className="hover:underline text-white">English</span>
            </button>
          </div>
          <p className="mt-8 md:mt-0 md:order-1">
            <span className="font-bold text-xs text-white">© 2024 Eleiko. All Rights Reserved.</span>
          </p>
        </div>
      </div>
    </>
  );
}
