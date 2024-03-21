import gear_data_product from "../../components/Assets/gearData";
import ItemGear from "./ItemGear";

export default function Accessories() {
  return (
    <div className="flex flex-col w-full mt-10">
      <div className="grid items-start" style={{ gridTemplateColumns: "repeat(auto-fill, 430px)" }}>
        {gear_data_product.map((item, i) => (
          <ItemGear
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            item_price={item.item_price}
            des={item.des}
            className="px-10 text-blue-950 rounded-md shadow-md"
          />
        ))}
      </div>
    </div>
  );
}
