import React from "react";
import Table from "./Table";
import model1 from "../assets/model1.png";
import model2 from "../assets/model2.png";
import model3 from "../assets/model3.png";

import garment1 from "../assets/garment1.png";
import garment2 from "../assets/garment2.png";
import garment3 from "../assets/garment3.png";

import result1 from "../assets/result1.png";
import result2 from "../assets/result2.png";
import result3 from "../assets/result3.png";

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
        Virtual try-on examples in pairs of person and garment images
      </h2>
      <Table examples={examples} />
    </div>
  );
};

export default Example;
