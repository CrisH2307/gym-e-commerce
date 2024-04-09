import React from "react";
import "./Item.css";
import Image from "next/image";
import { textStyle } from "../headerSection/HeaderSection";
import Link from "next/link";

export default function Item(props) {
  return (
    <>
      <Link className="no-underline" href={`/equipment/${props.id}`}>
        <div className="item relative flex flex-col w-full flex-1 justify-center overflow-x-hidden pr-7 md:mx-14 lg:mx-20 mb-8 md:mb-12 lg:mb-20">
          <div className="flex relative overflow-hidden">
            <div className="relative overflow-hidden">
              <Image src={props.image} alt="" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between align-top">
              <p style={textStyle}>{props.name}</p>
            </div>
            {props.des && <h6 className="opacity-40 text-black font-bold text-sm mb-2.5">{props.des}</h6>}
          </div>
          <div className="item-prices flex flex-wrap mt-1 gap-x-2">
            <div className="item-prices-new">
              {props.single_price && `Price from `}
              {"$"}
              {props.new_price}
            </div>
            <div className="item-prices-old">${props.old_price}</div>
          </div>
        </div>
      </Link>
    </>
  );
}
