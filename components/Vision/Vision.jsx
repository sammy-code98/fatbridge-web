import React from "react";
import {
  FaGraduationCap,
  FaFlask,
  FaCalculator,
  FaBrain,
} from "react-icons/fa";

function Vision() {
  return (
    <div className="md:grid  md:grid-cols-4 md:gap-6 md:justify-items-center p-4 md:px-24  mt-24 sm:grid sm:grid-cols-2 sm:gap-8">
      <div className="bg-purple-200 w-full rounded-md shadow-md mt-24">
        <div className="flex mx-auto -translate-y-12 rounded-full  shadow-2xl h-20 w-20 text-gray-700  bg-white">
          <FaGraduationCap
            className="flex mx-auto mt-4  text-gray-500 "
            style={{ fontSize: "2em" }}
          />{" "}
        </div>
        <div className="text-gray-500 text-left text-base  mx-3">
          Making children&apos;s
        </div>
        <div className="text-gray-600 text-3xl tracking-wide font-bold m-4">
          Education Fun{" "}
        </div>
      </div>
      {/* 2nd */}
      <div className="bg-amber-200 w-full rounded-md shadow-md mt-24">
        <div className="flex mx-auto -translate-y-12 rounded-full text-center shadow-2xl h-20 w-20 text-gray-700  bg-white">
          <FaBrain
            className="flex mx-auto mt-4  text-gray-500 "
            style={{ fontSize: "2em" }}
          />
        </div>
        <div className="text-gray-500 text-left text-base  mx-3">
          Develop
        </div>
        <div className="text-gray-600 text-3xl tracking-wide font-bold m-4">
          Problem Solving Skills{" "}
        </div>
      </div>
      {/* 3rd */}
      <div className="bg-green-200 w-full rounded-md shadow-md mt-24">
        <div className="flex mx-auto -translate-y-12 rounded-full text-center shadow-2xl h-20 w-20 text-gray-700  bg-white">
          <FaFlask
            className="flex mx-auto mt-4  text-gray-500 "
            style={{ fontSize: "2em" }}
          />
        </div>
        <div className="text-gray-500 text-left text-base  mx-3">
          Acquire basic
        </div>
        <div className="text-gray-600 text-3xl tracking-wide font-bold m-4">
          Knowledge of Science{" "}
        </div>
      </div>
      {/* 4th */}
      <div className="bg-yellow-200 w-full rounded-md shadow-md mt-24">
        <div className="flex mx-auto -translate-y-12 rounded-full text-center shadow-2xl h-20 w-20 text-gray-700  bg-white">
          <FaCalculator
            className="flex mx-auto mt-4  text-gray-500 "
            style={{ fontSize: "2em" }}
          />
        </div>
        <div className="text-gray-500 text-left text-base  mx-3">
          Acquire & Enhance
        </div>
        <div className="text-gray-600 text-3xl tracking-wide font-bold m-4">
          Maths and Ict skills{" "}
        </div>
      </div>
    </div>
  );
}

export default Vision;
