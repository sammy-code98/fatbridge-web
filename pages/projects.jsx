import React from "react";
import Image from "next/image";
import { FaCalendarDay, FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";
let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
const fadeIn = {
  initial: {
    y: 200,
    opacity: 0,
    transition: { duration: 0.2, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
export default function projects() {
  return (
    <motion.section
      animate="animate"
      initial="initial"
      exit={{ opacity: 0 }}
      className="pt-24 pb-12"
    >
      <div className="flex flex-col  items-center justify-center container md:px-40">
        <motion.div variants={fadeIn}>
          <div className="w-full p-2 mb-10 rounded-md outline outline-offset-2 outline-2 outline-cyan-300 outline-dotted">
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <div className="p-4">
                <Image
                  loading="lazy"
                  src="/me.jpeg"
                  alt="projects"
                  width={400}
                  height={200}
                />
              </div>
              <div className="mt-6 md:mt-12 px-8">
                <div className="text-left text-2xl text-cyan-300">
                  Women empowerment{" "}
                </div>
                <div className="flex">
                  <div className="flex my-1">
                    <FaCalendarDay
                      className="cursor-pointer text-cyan-300"
                      style={{ fontSize: "1.5em" }}
                    />
                    <span className="mx-2 text-gray-500">20-22-22 </span>
                  </div>
                  <div className="flex my-1">
                    <FaLocationArrow
                      className="cursor-pointer text-cyan-300"
                      style={{ fontSize: "1.5em" }}
                    />
                    <span className="mx-2 text-gray-500">20-22-22 </span>
                  </div>
                </div>

                <div className="text-base text-gray-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam sed voluptas ipsa quos porro nulla. Quae voluptas et
                  exercitationem sed! Laudantium labore nulla totam corporis
                  odio atque architecto exercitationem omnis!
                </div>
              </div>
            </div>
          </div>
          {/* 2dnd */}
          <div className="w-full p-2 mb-10 rounded-md outline outline-offset-2 outline-2 outline-cyan-300 outline-dotted">
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <div className="p-4">
                <Image src="/me.jpeg" alt="projects" width={400} height={200} />
              </div>
              <div className="mt-6 md:mt-12 px-8">
                <div className="text-left text-2xl text-cyan-300">
                  Women empowerment{" "}
                </div>
                <div className="flex">
                  <div className="flex my-1">
                    <FaCalendarDay
                      className="cursor-pointer text-cyan-300"
                      style={{ fontSize: "1.5em" }}
                    />
                    <span className="mx-2 text-gray-500">20-22-22 </span>
                  </div>
                  <div className="flex my-1">
                    <FaLocationArrow
                      className="cursor-pointer text-cyan-300"
                      style={{ fontSize: "1.5em" }}
                    />
                    <span className="mx-2 text-gray-500">20-22-22 </span>
                  </div>
                </div>

                <div className="text-base text-gray-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam sed voluptas ipsa quos porro nulla. Quae voluptas et
                  exercitationem sed! Laudantium labore nulla totam corporis
                  odio atque architecto exercitationem omnis!
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
