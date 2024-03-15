import Image from "next/image";
import React from "react";

export default function EquipmentDetailbyID({ equipment }) {
  if (!equipment) {
    return <div>No equipment found.</div>;
  }
  return (
    <div>
      <h1>Hello</h1>
      <h2>{equipment.name}</h2>
    </div>
  );
}
