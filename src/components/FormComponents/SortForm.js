import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";

export default function SortForm() {
  const [isOpen, setisOpen] = useState(false);

  const setCollapse = () => {
    setisOpen(!isOpen);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="flex items-center py-4"
        onClick={(e) => {
          setCollapse();
          stopPropagation(e);
        }}
      >
        <div className="px-4 w-10/12">
          <span className="font-bold">Sort</span>
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
            {["radio"].map((type) => (
              <div key={`radio-${type}`} className="p-2">
                <Form.Check
                  className="py-1 text-right font-bold"
                  label="Popular Products"
                  name="group1"
                  type={type}
                  id={`-${type}-1`}
                />
                <Form.Check
                  className="py-1 text-right font-bold"
                  label="Name A-Z"
                  name="group1"
                  type={type}
                  id={`-${type}-2`}
                />
                <Form.Check
                  className="py-1 text-right font-bold"
                  label="Name Z-A"
                  name="group1"
                  type={type}
                  id={`-${type}-1`}
                />
                <Form.Check
                  className="py-1 text-right font-bold"
                  label="Price Low to High"
                  name="group1"
                  type={type}
                  id={`-${type}-2`}
                />
                <Form.Check
                  className="py-1 text-right font-bold"
                  label="Price High to Low"
                  name="group1"
                  type={type}
                  id={`-${type}-1`}
                />
              </div>
            ))}
          </Form>
        </div>
      )}
    </>
  );
}
