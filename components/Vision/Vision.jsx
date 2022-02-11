import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGooglePlusG,
} from "react-icons/fa";

function Vision() {
  return (
    <div className="md:grid  md:grid-cols-4 md:gap-6 md:justify-items-center p-4 md:px-24  mt-24 sm:grid sm:grid-cols-2 sm:gap-8">
      <div className="bg-purple-200 w-full rounded-md shadow-md mt-24">
        <div className="flex mx-auto -translate-y-12 rounded-full text-center shadow-2xl h-20 w-20 text-gray-700  bg-white">
        <FaFacebook
          className="cursor-pointer  text-gray-500 "
          style={{ fontSize: "1.5em" }}
        />        </div>
        <div className="text-gray-500 text-left text-base  mx-3">
          lorem dorem
        </div>
        <div className="text-black text-4xl tracking-wide font-bold m-4">
          Learn Ict skills{" "}
        </div>
      </div>
      {/* 2nd */}
      <div className="bg-amber-200 w-full rounded-md shadow-md mt-24">
        <div className="flex mx-auto -translate-y-12 rounded-full text-center shadow-2xl h-20 w-20 text-gray-700  bg-white">
          {/* {vision.icon} */}
        </div>
        <div className="text-gray-500 text-left text-base  mx-3">
          lorem dorem
        </div>
        <div className="text-black text-4xl tracking-wide font-bold m-4">
          Learn Ict skills{" "}
        </div>
      </div>
      {/* 3rd */}
      <div className="bg-green-200 w-full rounded-md shadow-md mt-24">
        <div className="flex mx-auto -translate-y-12 rounded-full text-center shadow-2xl h-20 w-20 text-gray-700  bg-white">
          {/* {vision.icon} */}
        </div>
        <div className="text-gray-500 text-left text-base  mx-3">
          lorem dorem
        </div>
        <div className="text-black text-4xl tracking-wide font-bold m-4">
          Learn Ict skills{" "}
        </div>
      </div>
      {/* 4th */}
      <div className="bg-yellow-200 w-full rounded-md shadow-md mt-24">
        <div className="flex mx-auto -translate-y-12 rounded-full text-center shadow-2xl h-20 w-20 text-gray-700  bg-white">
          {/* {vision.icon} */}
        </div>
        <div className="text-gray-500 text-left text-base  mx-3">
          lorem dorem
        </div>
        <div className="text-black text-4xl tracking-wide font-bold m-4">
          Learn Ict skills{" "}
        </div>
      </div>
    </div>
  );
}

export default Vision;
