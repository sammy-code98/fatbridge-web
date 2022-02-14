/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Image from "next/image";
const aboutText =
  " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iureitaque nisi sit corrupti facilis ipsum provident molestiaeimpedit tenetur recusandae iste placeat pariatur minima, animiipsam expedita vero, nulla quis!";

export default function Testimony() {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="mt-32 flex flex-row ">
      <div className="mt-8">
        {" "}
        <Image src="/dot.svg" alt="dot" width={200} height={300} />
      </div>
      <div className="flex flex-col justify-items-center mt-24 container">
        <div className="mx-8">
          <div className="text-4xl font-bold tracking-wide leading-8 mb-2">
            Inspiring Stories of those
          </div>
          <div className="text-4xl font-bold tracking-wide leading-8">
            We have already helped.
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mx-8 mt-8">
          <div>
          <div className="w-full h-fit mt-4  rounded-md shadow-sm ">
            <img src="/me.jpeg" alt="dot" className="w-full h-40" />
            <div className="text-sm font-extrabold px-2 mt-2 text-gray-700">
              Emmanuel Ciroma
            </div>
            <div className="text-gray-400 text-sm mx-2">10 years old</div>
            <div className="m-2">
              {readMore ? (
                <div className="text-gray-500 text-sm">
                  {aboutText}
                </div>
              ) : (
                <div className="text-gray-500 text-sm truncate"> {aboutText.substring(0, 400) + " " + " ..."}</div>
              )}
              <div
                onClick={() => setReadMore(!readMore)}
                className="text-purple-600 p-2 rounded-md cursor-pointer focus:outline-none hover:bg-purple-50"
              >
                {readMore ? "Read less" : "Read more"}
              </div>
            </div>
          </div>
          </div>
         
          {/* 2 */}
          <div className="w-full h-fit mt-4  rounded-md shadow-sm ">
            <img src="/me.jpeg" alt="dot" className="w-full h-40" />
            <div className="text-sm font-extrabold px-2 mt-2 text-gray-700">
              Emmanuel Ciroma
            </div>
            <div className="text-gray-400 text-sm mx-2">10 years old</div>
            <div className="m-2">
              {readMore ? (
                <div className="text-gray-500 text-sm">
                  {aboutText}
                </div>
              ) : (
                <div className="text-gray-500 text-sm truncate"> {aboutText.substring(0, 400) + " " + " ..."}</div>
              )}
              <div
                onClick={() => setReadMore(!readMore)}
                className="text-purple-600 p-2 rounded-md cursor-pointer focus:outline-none hover:bg-purple-50"
              >
                {readMore ? "Read less" : "Read more"}
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="w-full h-fit mt-4  rounded-md shadow-sm ">
            <img src="/me.jpeg" alt="dot" className="w-full h-40" />
            <div className="text-sm font-extrabold px-2 mt-2 text-gray-700">
              Emmanuel Ciroma
            </div>
            <div className="text-gray-400 text-sm mx-2">10 years old</div>
            <div className="m-2">
              {readMore ? (
                <div className="text-gray-500 text-sm">
                  {aboutText}
                </div>
              ) : (
                <div className="text-gray-500 text-sm truncate"> {aboutText.substring(0, 400) + " " + " ..."}</div>
              )}
              <div
                onClick={() => setReadMore(!readMore)}
                className="text-purple-600 p-2 rounded-md cursor-pointer focus:outline-none hover:bg-purple-50"
              >
                {readMore ? "Read less" : "Read more"}
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="w-full h-fit mt-4  rounded-md shadow-sm ">
            <img src="/me.jpeg" alt="dot" className="w-full h-40" />
            <div className="text-sm font-extrabold px-2 mt-2 text-gray-700">
              Emmanuel Ciroma
            </div>
            <div className="text-gray-400 text-sm mx-2">10 years old</div>
            <div className="m-2">
              {readMore ? (
                <div className="text-gray-500 text-sm">
                  {aboutText}
                </div>
              ) : (
                <div className="text-gray-500 text-sm truncate"> {aboutText.substring(0, 400) + " " + " ..."}</div>
              )}
              <div
                onClick={() => setReadMore(!readMore)}
                className="text-purple-600 p-2 rounded-md cursor-pointer focus:outline-none hover:bg-purple-50"
              >
                {readMore ? "Read less" : "Read more"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
