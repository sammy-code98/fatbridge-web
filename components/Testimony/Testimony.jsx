/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState , useEffect} from "react";
import Image from "next/image";
const aboutText =
  " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iureitaque nisi sit corrupti facilis ipsum provident molestiaeimpedit tenetur recusandae iste placeat pariatur minima, animiipsam expedita vero, nulla quis!";

export default function Testimony() {
  const [readOne, setReadOne] = useState(false);
  const [readTwo, setReadTwo] = useState(false);
  const [readThree, setReadThree] = useState(false);
  const [readFour, setReadFour] = useState(false);



  return (
    <div className="mt-12 md:mt-32 flex flex-row ">
      <div className="mt-8 hidden md:block">
        {" "}
        <Image src="/dot.svg" alt="dot" width={200} height={300} />
      </div>
      <div className="md:flex md:flex-col md:justify-items-center mt-24 container">
        <div className="mx-8">
          <div className=" hidden md:block md:text-4xl  text-2xl font-bold tracking-wide leading-8 mb-2 text-gray-500">
            Inspiring Stories of our
          </div>
          <div className=" hidden md:block  md:text-4xl  text-2xl font-bold tracking-wide leading-8 text-purple-700">
            Amazing Students.
          </div>
          {/* mobile text */}
          <span className="md:hidden  block text-purple-700 text-2xl">Inspiring Stories of our Amazing Students</span>
        </div>
        <div className="md:grid md:grid-cols-4 md:gap-4 md:mx-8 mt-8">
          <div>
          <div className="w-full h-fit mt-4  rounded-md shadow-sm ">
            <img src="/me.jpeg" alt="dot" className="w-full h-40" />
            <div className="text-sm font-extrabold px-2 mt-2 text-gray-700">
              Emmanuel Ciroma
            </div>
            <div className="text-gray-400 text-sm mx-2">10 years old</div>
            <div className="m-2">
              {readOne ? (
                <div className="text-gray-500 text-sm">
                  {aboutText}
                </div>
              ) : (
                <div className="text-gray-500 text-sm truncate"> {aboutText.substring(0, 400) + " " + " ..."}</div>
              )}
              <div
                onClick={() => setReadOne(!readOne)}
                className="text-purple-600 p-2 rounded-md cursor-pointer focus:outline-none hover:bg-purple-50"
              >
                {readOne ? "Read less" : "Read more"}
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
              {readTwo ? (
                <div className="text-gray-500 text-sm">
                  {aboutText}
                </div>
              ) : (
                <div className="text-gray-500 text-sm truncate"> {aboutText.substring(0, 400) + " " + " ..."}</div>
              )}
              <div
                onClick={() => setReadTwo(!readTwo)}
                className="text-purple-600 p-2 rounded-md cursor-pointer focus:outline-none hover:bg-purple-50"
              >
                {readTwo ? "Read less" : "Read more"}
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
              {readThree ? (
                <div className="text-gray-500 text-sm">
                  {aboutText}
                </div>
              ) : (
                <div className="text-gray-500 text-sm truncate"> {aboutText.substring(0, 400) + " " + " ..."}</div>
              )}
              <div
                onClick={() => setReadThree(!readThree)}
                className="text-purple-600 p-2 rounded-md cursor-pointer focus:outline-none hover:bg-purple-50"
              >
                {readThree ? "Read less" : "Read more"}
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
              {readFour ? (
                <div className="text-gray-500 text-sm">
                  {aboutText}
                </div>
              ) : (
                <div className="text-gray-500 text-sm truncate"> {aboutText.substring(0, 400) + " " + " ..."}</div>
              )}
              <div
                onClick={() => setReadFour(!readFour)}
                className="text-purple-600 p-2 rounded-md cursor-pointer focus:outline-none hover:bg-purple-50"
              >
                {readFour ? "Read less" : "Read more"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
