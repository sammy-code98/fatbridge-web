import React from "react";
import Image from "next/image";
import Link from "next/link";
const gallData = [
  { name: "outing at evangel", img: "/me.jpeg" },
  { name: "outing at evangel", img: "/me.jpeg" },
  { name: "outing at evangel", img: "/me.jpeg" },
];
function Gallery() {
  return (
    <div className="mt-12 md:mt-32 container px-12">
      <div className="text-center text-2xl md:text-3xl text-gray-500">
        Gallery of Our Training Sessions
      </div>
      <div className="text-center text-base text-gray-500">
        Our training sessions are always super interesting and fun and we
        decided to share these moments with you in pictures
      </div>
      <div className="mt-4 md:grid md:grid-cols-3 md:gap-6 md:px-12">
        {gallData.map((gall, index) => (
          <div
            className="shadow-md rounded-tr-3xl rounded-bl-3xl mb-6  md:m-4"
            key={index}
          >
            <Image
              className="flex flex-row mx-auto  rounded-tr-3xl"
              src={gall.img}
              width={350}
              height={250}
              alt="gallery"
            />
            <div className="text-center text-lg text-gray-500">{gall.name}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-row  justify-center mt-4">
        <button
          type="submit"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-300 hover:text-slate-900 duration-300 p-4 text-center py-3 rounded-full bg-slate-900 text-cyan-300 shadow-md focus:outline-none my-1"
        >
          <Link href="/gallery">Want to see more?</Link>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
