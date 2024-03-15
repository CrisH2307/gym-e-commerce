import Image from "next/image";
import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EquipmentDetailbyID({ equipment }) {
  return (
    <div>
      <Header />
      <Navbar />
      <h1>Hello</h1>
      <h2>{equipment.name}</h2>
    </div>
  );
}
