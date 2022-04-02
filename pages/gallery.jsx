import React from "react";
import Image from "next/image";

const gallData = [
  { name: "outing at evangel", img: "/me.jpeg" },
  { name: "outing at evangel", img: "/me.jpeg" },
  { name: "outing at evangel", img: "/me.jpeg" },
  { name: "outing at evangel", img: "/me.jpeg" },
  { name: "outing at evangel", img: "/me.jpeg" },
  { name: "outing at evangel", img: "/me.jpeg" },
  { name: "outing at evangel", img: "/me.jpeg" },
  { name: "outing at evangel", img: "/me.jpeg" },
];

function gallery() {
  return (
    <section className="pt-24 container pb-24">
      <div className="text-center text-2xl md:text-3xl px-6 text-white    ">
        See the Amazing feet we have achived with out program
      </div>
      <div className="text-center text-gray-500 text-base mx-8 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestiae
        commodi eius illo voluptate aperiam fugit excepturi corporis aliquid
        aut? Natus, quos perspiciatis! Numquam esse dolorum tempore autem. Ut,
        corrupti!
      </div>
      <div className="md:grid md:grid-cols-4 md:gap-6 md:justify-items-center md:mt-8 md:px-12 mt-4">
        {gallData.map((gall, index) => (
          <div
            className="shadow-md rounded-tr-3xl rounded-bl-3xl m-6  md:m-4"
            key={index}
          >
            <Image
              loading="lazy"
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
    </section>
  );
}

export default gallery;
