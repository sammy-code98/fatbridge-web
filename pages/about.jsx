import React from "react";
import Image from "next/image";
import Team from "../components/Team/Team.jsx";
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
function about() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <section className="pt-24 container">
        <div className="md:grid md:grid-cols-2 md:gap-6 md:justify-items-center">
          <motion.div variants={fadeIn} className="md:mt-24 md:pl-12">
            <motion.div
              variants={stagger}
              className="text-4xl text-white text-center"
            >
              Get to Know Us
            </motion.div>
            <div className="text-center text-gray-500 mt-2">
              <p>
                We are Fatbridge Science Technology Engineering and Mathematics
                Foundation duly registered with the Corporate Affairs Commission
                Abuja.
              </p>

              <p className="mt-4">
                A Non Govermental Organization aimed at encouraging Digital
                Education, Cyber Security, and Robotics (Artificial
                Intelligence)
              </p>
              <p className="mt-4">
                Our Head Office is at Noble Place Attorney 62/64 Campbell street
                Kajola building , Lekki , Lagos with several liason offices in
                Abia, Abuja and Rivers State.
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Image src="/about.svg" width={500} height={300} alt="About" />
          </motion.div>
        </div>
        <div className="text-center text-4xl text-white md:mt-24 mt-12">
          At Fatbrige Our Vision is Crystal Clear
        </div>
        <div className="md:text-justify md:px-32 mt-4 text-center text-gray-500">
          We are aimed at giving Technological Trainings and Health care
          services as to promote the study of Science, Technology, Engineering,
          Mathematics and Computer S.T.E.M + C amongst learners in Africa and to
          empower all who build their careers around S.T.E.M with special
          preference to Women and Girls.
        </div>
        <div>
          {" "}
          <div className="text-center text-4xl text-white md:mt-24 mt-12">The Team</div>
          <Team />
        </div>
      </section>
    </motion.div>
  );
}

export default about;
