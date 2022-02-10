import React from "react";
import visions from "./visdata";

function Vision() {
  return (
    <div className="md:grid  md:grid-cols-4 md:gap-6 md:justify-items-center p-4 md:px-24  mt-24 sm:grid sm:grid-cols-2 sm:gap-8">
      {visions.map((vision, index) => (
        <div
          className="bg-purple-200 w-full rounded-md shadow-md mt-24"
          key={index}
        >
          <div className="flex mx-auto -translate-y-12 rounded-full text-center shadow-2xl h-20 w-20 text-gray-700  bg-white">
            {/* {vision.icon} */}
          </div>
          <div className="text-gray-500 text-left text-base  mx-3">
            {vision.subtitle}
          </div>
          <div className="text-black text-4xl tracking-wide font-bold m-4">
            {vision.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Vision;
