import React from "react";
import Table from "./Table";
import model1 from "../assets/m1.png";
import model2 from "../assets/m7.jpg";
import model3 from "../assets/m6.jpg";

import garment1 from "../assets/g10.jpeg";
import garment2 from "../assets/k3.jpeg";
import garment3 from "../assets/k2.jpeg";

import result1 from "../assets/r1s.png";
import result2 from "../assets/r2.png";
import result3 from "../assets/r3.png";

const Example = () => {
  const examples = [
    {
      personImage: model1,
      garmentImage: garment1,
      resultImage: result1,
    },
    {
      personImage: model2,
      garmentImage: garment2,
      resultImage: result2,
    },
    {
      personImage: model3,
      garmentImage: garment3,
      resultImage: result3,
    },
  ];

  return (
    <div className="max-w-5xl w-[80vw] mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-6">
        Dressify examples in pairs of person and garment images
      </h2>
      <Table examples={examples} />
    </div>
  );
};

export default Example;
