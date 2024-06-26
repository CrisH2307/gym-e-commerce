import Header from "../../components/header/Header";
import { mainStyle, secondaryStyle, textStyle } from "../../components/headerSection/HeaderSection";
import Navbar from "../../components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpWideShort, faXmark } from "@fortawesome/free-solid-svg-icons";
import data_product from "../../components/Assets/data";
import Item from "@/components/Item/Item";
import Footer from "@/components/footer/Footer";
import React, { useState } from "react";
import { Box, Drawer } from "@mui/material";
import SortForm from "../../components/FormComponents/SortForm";
import RigsForm from "@/components/FormComponents/RigsForm";

export default function Equipments() {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const EquipmentSidebarFilter = () => {
    return (
      <>
        <div style={{ ...mainStyle, color: "white" }}>
          <Box sx={{ width: 350, height: "100%" }} role="presentation" onClick={(e) => ToggleSidebar(false)}>
            <div style={secondaryStyle} className="flex items-center py-10 text-white">
              <div className="px-4 w-10/12">
                <h2 className="font-bold">90 Items</h2>
              </div>
              <div className="flex items-center px-2">
                <button onClick={ToggleSidebar} className="inline-flex items-center justify-center text-white">
                  <FontAwesomeIcon icon={faXmark} size="xl" />
                </button>
              </div>
            </div>

            <SortForm />
            <hr />
            <RigsForm />
          </Box>
        </div>
      </>
    );
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div style={secondaryStyle} className="relative flex flex-col md:h-[calc(20vh-48px)] lg:h-[calc(35vh-48px)]">
        <div className="relative pb-14 pt-52">
          <div className="relative w-full flex px-20 flex-col">
            <div className="flex flex-col flexå-wrap items-start justify-between gap-x-10 gap-y-8">
              <div className="flex flex-col gap-y-3 md:gap-y-5">
                <h1 className="font-bold text-white lg:text-6xl">Equipment</h1>
              </div>
              <div className="flex flex-wrap justify-between w-full gap-4">
                <button
                  className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle min-w-[160px] w-full sm:w-auto px-8 text-[15px] border-transparent hover:opacity-75 bg-white"
                  onClick={ToggleSidebar}
                >
                  <FontAwesomeIcon style={textStyle} className="size-6" icon={faArrowUpWideShort} />
                  <span style={textStyle} className="inline-flex gap-x-10 items-center leading-[48px] text-base">
                    Filter
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer open={isOpen} onClose={() => ToggleSidebar()}>
        <EquipmentSidebarFilter />
      </Drawer>

      <div className="flex flex-col w-full px-6 mt-24">
        <div className="grid items-start" style={{ gridTemplateColumns: "repeat(auto-fill, 430px)" }}>
          {data_product.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              des={item.des}
              single_price={item.single_price}
              className="p-5 text-blue-950 rounded-md shadow-md"
            />
          ))}
        </div>
      </div>
      <div style={mainStyle} className="py-20">
        <div className="relative w-full flex px-20 flex-col justify-center items-center">
          <div className="flex flex-1">
            <div className="relative w-full px-20 flex-col max-w-5xl mx-auto">
              <div className="max-w-5xl">
                <p className="font-semibold text-xl max-w-none leading-9">
                  Eleiko designs and manufactures precision-crafted strength products for the worlds leading
                  competitions, commercial facilities and home gyms. We offer a wide range of barbells, weightlifting
                  and powerlifting plates, bumper plates, dumbbells, kettlebells, racks, rigs, and platforms–fitness
                  equipment characterised by our signature quality and performance. Shop our lifting equipment to outfit
                  free weight and strength training areas or full-scale fitness training facilities. We deliver strength
                  solutions for professional and collegiate sports, commercial health clubs and fitness facilities, and
                  premium home gyms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
