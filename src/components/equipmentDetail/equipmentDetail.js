import React from "react";
import data_product from "./data";

export default function EquipmentDetail({ id }) {
  // Find the equipment with the matching id
  const selectedEquipment = data_product.find((item) => item.id === parseInt(id));

  return (
    <div>
      {selectedEquipment && (
        <div>
          <h2>{selectedEquipment.name}</h2>
          <p>Description: {selectedEquipment.des}</p>
          <p>New Price: ${selectedEquipment.new_price}</p>
          <p>Old Price: ${selectedEquipment.old_price}</p>
        </div>
      )}
    </div>
  );
}
