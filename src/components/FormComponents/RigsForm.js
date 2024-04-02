import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";

export default function RigsForm() {
  const [isOpen, setIsOpen] = useState(false);

  const setCollapse = () => {
    setIsOpen(!isOpen);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="flex items-center pt-4 pb-2"
        onClick={(e) => {
          setCollapse();
          stopPropagation(e);
        }}
      >
        <div className="px-4 w-10/12">
          <span className="font-bold">Rigs</span>
        </div>
        <div className="flex items-center px-1">
          <button className="inline-flex items-center justify-center">
            <FontAwesomeIcon
              icon={faAngleUp}
              size="xl"
              style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="px-3" onClick={stopPropagation}>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`radio-${type}`} className="px-2 pb-2">
                <Form.Check
                  className="py-1 font-bold"
                  label="Freestanding rigs"
                  name="group1"
                  type={type}
                  id={`-${type}-1`}
                />
                <Form.Check
                  className="py-1 font-bold"
                  label="Wallmount rigs"
                  name="group1"
                  type={type}
                  id={`-${type}-2`}
                />
              </div>
            ))}
          </Form>
        </div>
      )}
    </>
  );
}
