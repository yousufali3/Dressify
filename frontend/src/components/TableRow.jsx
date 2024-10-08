import React from "react";

const TableRow = ({ personImage, garmentImage, resultImage }) => {
  return (
    <tr className="hover:bg-gray-100 transition-all duration-150 hover:scale-103">
      <td className="p-4 border text-center">
        <img
          src={personImage}
          alt="Person"
          className="w-24 h-24 object-cover rounded-md transition-all duration-150 inline-block"
        />
      </td>
      <td className="p-4 border text-center">
        <img
          src={garmentImage}
          alt="Garment"
          className="w-24 h-24 object-cover rounded-md transition-all duration-150 inline-block"
        />
      </td>
      <td className="p-4 border text-center">
        <img
          src={resultImage}
          alt="Result"
          className="w-24 h-24 object-cover rounded-md transition-all duration-150 inline-block"
        />
      </td>
    </tr>
  );
};

export default TableRow;
