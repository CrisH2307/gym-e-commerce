import { useAtom, useSetAtom } from "jotai";
import { shoppingCartAtom } from "../../../store";
import { Button, Modal } from "react-bootstrap";
import Image from "next/image";
import { faCircleMinus, faCirclePlus, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { mainStyle, secondaryStyle, textStyle } from "../headerSection/HeaderSection";

export default function CartContent({ show, setShow }) {
  const [items] = useAtom(shoppingCartAtom);
  const [quantities, setQuantities] = useState({});

  const setShoppingCart = useSetAtom(shoppingCartAtom);

  const removeProduct = (itemId) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[itemId];
      return updatedQuantities;
    });

    // Remove the item from the global state
    setShoppingCart((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const increaseNumProduct = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const decreaseNumProduct = (itemId) => {
    if (quantities[itemId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <div className="flex p-2">
        <div className="flex w-5/6">
          <Modal.Header closeButton>
            <h6 className="text-xl font-bold">Cart</h6>
          </Modal.Header>
        </div>
        <div className="flex items-center pl-10">
          <button onClick={handleClose} className="inline-flex items-center justify-center">
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </button>
        </div>
      </div>
      <Modal.Body>
        {items.map((item, index) => (
          <div key={item.id} className="flex mb-4 pl-2">
            <Image src={item.image.src} alt={item.name} width={80} height={100} className="w-[7.5rem]" />
            <div className="px-4 flex-1 py-3">
              <div className="flex flex-col flex-1 gap-7 ml-2">
                <div>
                  <p style={textStyle} className="font-bold text-xl ">
                    {item.name}
                  </p>
                </div>
                <div>
                  {item.des && <h6 className="opacity-40 text-black font-bold text-base mb-2.5">{item.des}</h6>}{" "}
                </div>
              </div>
              <div className="flex items-end justify-between ml-2">
                <div className="flex items-center">
                  <div className="flex justify-center items-center">
                    <button
                      onClick={() => decreaseNumProduct(item.id)}
                      className="outline-none flex-shrink-0 w-5 h-5 font-bold rounded-full flex items-center justify-center"
                    >
                      <FontAwesomeIcon icon={faCircleMinus} className="size-full" />
                    </button>
                    <div className="select-none text-center w-8 font-bold text-xl">{quantities[item.id] || 1}</div>
                    <button
                      onClick={() => increaseNumProduct(item.id)}
                      className="outline-none flex-shrink-0 w-5 h-5 font-bold rounded-full flex items-center justify-center"
                    >
                      <FontAwesomeIcon icon={faCirclePlus} className="size-full" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <div>
                    <p className="text-lg">${(item.new_price * (quantities[item.id] || 1)).toFixed(2)}</p>
                  </div>
                  <button onClick={() => removeProduct(item.id)}>
                    <FontAwesomeIcon icon={faTrashCan} size="lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer style={secondaryStyle}>
        <div className="flex flex-col h-full w-full overflow-y-hidden">
          <div className="px-4 pt-3 pb-6">
            <div className="flex items-baseline justify-between">
              <p className="font-bold text-lg text-white">Total</p>
              <p className="text-base font-medium">
                <span className="font-bold text-lg text-white">
                  ${items.reduce((total, item) => total + item.new_price * (quantities[item.id] || 1), 0).toFixed(2)}
                </span>
              </p>
            </div>
            <p className="text-base text-white">Shipping and taxes calculated at checkout</p>
          </div>
          <div className="flex flex-wrap gap-4 items-center w-full px-3">
            <button
              id="addToQuoteButton"
              className="outline-none inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-7 xl:px-8 text-[15px] bg-transparent hover:opacity-75 border-white  flex-grow sm:flex-none"
            >
              <span className="inline-flex text-white gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[2px]">
                Continue Shopping
              </span>
            </button>
            <button className="outline-none bg-white inline-flex justify-center items-center gap-x-2 cursor-pointer transition duration-200 font-bold relative rounded-full border-solid border-4 text-center whitespace-nowrap align-middle px-7 xl:px-8 text-[15px] border-transparent hover:opacity-75 text-white flex-grow sm:flex-none">
              <span
                style={textStyle}
                className="inline-flex gap-x-2 items-center leading-[38px] xl:leading-[48px] mt-[2px]"
              >
                Checkout
              </span>
            </button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
