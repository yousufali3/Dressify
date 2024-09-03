import React from "react";
import TableRow from "./TableRow";

const Table = ({ examples }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="border border-gray-300">
            <th className="py-4 px-6 text-center font-medium border border-gray-300">
              Person image
            </th>
            <th className="py-4 px-6 text-center font-medium border border-gray-300">
              Garment image
            </th>
            <th className="py-4 px-6 text-center font-medium border border-gray-300">
              Result
            </th>
          </tr>
        </thead>
        <tbody>
          {examples.map((example, index) => (
            <TableRow
              key={index}
              personImage={example.personImage}
              garmentImage={example.garmentImage}
              resultImage={example.resultImage}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
