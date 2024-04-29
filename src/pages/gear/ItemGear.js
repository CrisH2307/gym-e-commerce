import React from "react";
import "./ItemGear.css";
import Image from "next/image";
import Link from "next/link";
import { textStyle } from "@/components/headerSection/HeaderSection";

export default function ItemGear(props) {
  return (
    <>
      <Link href={`/gear/${props.id}`}>
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
              {"$"}
              {props.item_price ? props.item_price.toFixed(2) : "0.00"}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
