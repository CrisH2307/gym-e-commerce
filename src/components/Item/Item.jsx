import React from "react";
import "./Item.css";
import Image from "next/image";
export default function Item(props) {
  return (
    <>
      <div className="item relative flex flex-col w-full flex-1 justify-center overflow-x-hidden pr-7 mx-6 md:mx-14 lg:mx-20 mb-8 md:mb-12 lg:mb-20">
        <div className="flex relative overflow-hidden">
          <div className="relative overflow-hidden">
            <a
              href="https://eleiko.com/en-ca/equipment/benches/workoutbenches/3062962-03-eleiko-adjustable-bench-black-pur"
              target="_blank"
            >
              <Image src={props.image} alt="" className="object-contain h-full w-full" />
            </a>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between align-top">
            <p>{props.name}</p>
          </div>
        </div>
        <div className="item-prices flex flex-wrap mt-1 gap-x-3">
          <div className="item-prices-new">Price from ${props.new_price} CAD</div>
          <div className="item-prices-old">${props.old_price} CAD</div>
        </div>
      </div>
    </>
  );
}
