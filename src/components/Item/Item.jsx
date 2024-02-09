import React from "react";
import "./Item.css";
import Image from "next/image";
const Item = (props) => {
  return (
    <div className="item">
      <a
        href="https://eleiko.com/en-ca/equipment/benches/workoutbenches/3062962-03-eleiko-adjustable-bench-black-pur"
        target="_blank"
      >
        <Image src={props.image} alt="" />
      </a>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">${props.new_price} CAD</div>
        <div className="item-prices-old">${props.old_price} CAD</div>
      </div>
    </div>
  );
};

export default Item;
