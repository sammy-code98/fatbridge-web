import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
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
function contact() {
  return (
    <motion.div animate="animate" initial="initial" exit={{opacity:0}}>
<section className="pt-24 px-24">
      <div className="md:grid md:grid-cols-2 md:gap-6 md:justify-items-center md:px-12 pb-6">
        <motion.div variants={fadeIn} className="order-first xl:order-last mt-6">
          <Image src="/contact.svg" width={500} height={350} alt="contact" />
        </motion.div>
        <motion.div variants={fadeIn}>
          <div className="text-center text-3xl md:text-4xl text-gray-500 mt-4">
            Get In Touch with Us
          </div>
          <div className="text-base text-gray-500 text-center mx-2">
            Reach out to us on social media and our team will be happy to get
            back to you quickly{" "}
          </div>
          <motion.div variants={stagger} className="mt-8 md:mx-32 mx-16">
            <div className="flex m-2">
              <FaFacebookF
                className="cursor-pointer hover:text-sky-500"
                style={{ fontSize: "1.5em" }}
              />
              <span className="mx-2 text-gray-500">Fatbridge facebook </span>
            </div>
            <div className="flex m-2">
              <FaInstagram
                className="cursor-pointer hover:text-rose-700"
                style={{ fontSize: "1.5em" }}
              />
              <span className="mx-2 text-gray-500">Fatbridge Insagram </span>
            </div>
            <div className="flex m-2">
              <FaTwitter
                className="cursor-pointer hover:text-blue-500"
                style={{ fontSize: "1.5em" }}
              />
              <span className="mx-2 text-gray-500">Fatbridge Twitter </span>
            </div>
          </motion.div>
          <div className="text-center text-base text-gray-500 mt-4">
            Or email us your complaint @ <a>complaints@fatbride.com.ng</a>
          </div>
        </motion.div>
      </div>
    </section>
    </motion.div>
    
  );
}

export default contact;
