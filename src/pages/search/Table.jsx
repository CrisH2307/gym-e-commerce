import React from "react";
import Link from "next/link";
import "./search.css";

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Product</th>
          <th>Prices</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>
              <Link href={`/equipment/${item.id}`}>{item.name}</Link>
            </td>
            <td>${item.new_price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
