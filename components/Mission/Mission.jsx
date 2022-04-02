import React from "react";
import {
  FaHandshake,
  FaRobot,
  FaSeedling,
  FaUserGraduate,
} from "react-icons/fa";
import { motion } from "framer-motion";
function Mission() {
  return (
    <section className="mt-12 md:mt-32" id="mission">
      <div className="text-center text-2xl md:text-3xl text-white">
        Our Mission
      </div>
      <div className="text-center  text-base text-gray-500  mt-2">
        At Fatbridge, we are aimed at promoting the study of{" "}
        <span className="text-cyan-300">
          Science, Technology,
          Engineering,
          Mathematics and Computer S.T.E.M + C
        </span>{" "}
        in Basic and Post Basic Education at Grassroot level and Empower the
        learners to build their careers around S.T.E.M
      </div>
      <div className="md:grid md:grid-cols-4 md:gap-8 md:justify-items-center mt-12 md:px-24 p-4">
        <div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
          >
            <FaHandshake
              style={{ fontSize: "3em" }}
              className="my-4 text-cyan-300 mx-auto"
            />
          </motion.div>

          <div className="text-base text-center  text-gray-500 mt-2 ">
            Student Partnership
          </div>
          <p className="text-sm text-gray-400">
            We encourage students to actively partner among themselves to foster
            a better learning experience. At Fatbridge we use the best student
            partnership framework aimed at including students in the teaching,
            learning and research areas of STEM
          </p>
        </div>
        <div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
          >
            <FaUserGraduate
              style={{ fontSize: "3em" }}
              className="my-4 text-cyan-300 mx-auto"
            />
          </motion.div>

          <div className="text-base text-center text-gray-500 mt-2 ">
            Promote Excellence
          </div>
          <p className="text-sm text-gray-400">
            At Fatbridge Foundation, we encourage students of all backgrounds,
            particularly those from underrepresented groups,in pursuit of
            education and careers in STEM fields
          </p>
        </div>
        <div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
          >
            <FaRobot
              style={{ fontSize: "3em" }}
              className="my-4 text-cyan-300 mx-auto"
            />
          </motion.div>

          <div className="text-base text-center text-gray-500  mt-2">
            Technological Awareness
          </div>
          <p className="text-sm text-gray-400">
            Technology keeps evolving, hence the need to be up to date with the
            latest tech trends. At Fatbridge Foundation, we ensure that our
            students are not left out of the moving train.
          </p>
        </div>
        <div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
          >
            <FaSeedling
              style={{ fontSize: "3em" }}
              className="my-4 text-cyan-300  mx-auto"
            />
          </motion.div>

          <div className="text-base text-center text-gray-500 mt-2">
            Developmental Growth
          </div>
          <p className="text-sm text-gray-400">
            We are very much concerned about the developmental growth of our
            students
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
