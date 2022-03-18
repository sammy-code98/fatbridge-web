import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const gallData = [
  { name: "outing at evangel", img: "/me.jpeg" },
  { name: "outing at evangel", img: "/me.jpeg" },
  { name: "outing at evangel", img: "/me.jpeg" },
];
function Gallery() {
  return (
    <div className="mt-12 md:mt-32 container px-12">
      <div className="text-center text-2xl md:text-3xl text-white">
        Gallery of Our Training Sessions
      </div>
      <div className="text-center text-base text-gray-500">
        Our training sessions are always super interesting and fun and we
        decided to share these moments with you in pictures
      </div>
      <div className="mt-4 md:grid md:grid-cols-3 md:gap-6 md:px-12">
        {gallData.map((gall, index) => (
          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow:"0px 0px 8px #67e8f9",
              boxShadow: "0px 0px 8px rgb(225, 225,225)",
            }}
            className="shadow-md rounded-tr-3xl rounded-bl-3xl mb-8  md:m-4 outline outline-offset-0  outline-2 outline-cyan-300 outline-dotted px-2 py-4"
            key={index}
          >
            <Image
              className="flex flex-row mx-auto  rounded-tr-3xl"
              src={gall.img}
              width={350}
              height={250}
              alt="gallery"
            />
            <div className="text-center text-lg mt-2 text-gray-500">
              {gall.name}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row  justify-center mt-6">
        <button
          type="submit"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 p-4 text-center py-3 rounded-full bg-cyan-300 text-slate-900 shadow-md focus:outline-none my-1"
        >
          <Link href="/gallery">Want to see more?</Link>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
