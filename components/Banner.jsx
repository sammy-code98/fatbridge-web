import Image from "next/image";
import { motion } from "framer-motion";
import Snowfall from 'react-snowfall'

export default function Banner() {
  return (
    <div
      className="grid  grid-cols-1 md:grid-cols-2  md:mx-auto items-center md:px-24"
      style={{
        maxHeight: "1000px",
      }}
    >
      <Snowfall color="#67e8f9"/>
      <motion.div  initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay:1, duration:8, type:"spring", stiffness:120}}
          className="order-last xl:order-first mt-4  md:mt-32">
        <div
         
          className="p-4 text-5xl text-center md:text-left md:text-6xl text-cyan-300 tracking-wide"
        >
          Fatbridge
        </div>
        <div className=" text-center md:text-justify text-3xl text-white">
          S.T.E.M + C Foundation
        </div>
        <div className="text-left mx-2 mt-2 text-gray-500">
          <span className="text-3xl">...</span>
         Promoting the study of Science,Technology,Engineering,Mathematics and Computer S.T.E.M + C 
        </div>
      </motion.div>
      <div className="order-first xl:order-last mt-32">
        <Image
          src="/stem.svg"
          alt="Student Ambassador Image"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
}
