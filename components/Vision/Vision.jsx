import React from "react";
import visions from "./visdata";

function Vision() {
  return (
    <div className="md:grid  md:grid-cols-4 md:gap-4 md:justify-items-center  p-3  mt-24">
      {visions.map((vision, index) => (
        <div className="bg-purple-300 w-full rounded shadow-md mt-24" key={index}>
          <div className="flex mx-auto -translate-y-12 rounded-full shadow-2xl h-20 w-20  bg-white"></div>
          <div className="text-gray-500 text-left text-base mt-4 mx-3">
            {vision.subtitle}
          </div>
          <div className="text-black text-3xl tracking-wide font-bold m-2">
            {vision.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Vision;
