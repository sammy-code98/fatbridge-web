import React from "react";
import visions from "./visdata";

function Vision() {
  return (
    <div className="grid  grid-cols-4 gap-4 justify-items-center  p-3  mt-24">
      {visions.map((vision, index) => (
        <div className="bg-purple-300 w-full rounded shadow-md" key={index}>
            <div className="flex rounded-full shadow-md h-12 w-12  bg-white"></div>
            <div className="text-gray-500 text-left text-base mt-4 mx-3">{vision.subtitle}</div>
          <div className="text-black text-3xl tracking-wide font-bold m-2">{vision.title}</div>
        </div>
      ))}
      
    </div>
  );
}

export default Vision;
