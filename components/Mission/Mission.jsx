import React from "react";
import {
  FaHandshake,
  FaRocket,
  FaRobot,
  FaSeedling,
  FaUserGraduate,
  FaSquareRootAlt,
} from "react-icons/fa";

function Mission() {
  return (
    <section className="mt-12 md:mt-32" id="mission">
      <div className="text-center text-2xl md:text-3xl text-gray-500">
        Our Mission
      </div>
      <div className="text-center text-base text-gray-500 md:px-8 mt-2">
        At Fatbridge, we are poised to assist the unrepresented gifted and talented students
        to explore the use of technology/Artificial intelligence in the studying
        of sciences, technology, engineering,mathematics and Arts
      </div>
      <div className="md:grid md:grid-cols-4 md:gap-8 md:justify-items-center mt-12 md:px-24 p-4">
        <div>
          <FaHandshake
            style={{ fontSize: "3em" }}
            className="my-4 text-purple-700"
          />
          <div className="text-base  text-gray-500 mt-2 ">Student Partnership</div>
          <p className="text-sm text-gray-400">
            These utilities are really just a shortcut for adding margin to
            all-but-the-first-item in a group, and aren’t designed to handle
            complex cases like grids, layouts that wrap, or situations where the
          </p>
        </div>
        <div>
          <FaUserGraduate
            style={{ fontSize: "3em" }}
            className="my-4 text-purple-700"
          />
          <div className="text-base text-gray-500 mt-2 ">Promote Excellence</div>
          <p className="text-sm text-gray-400">
            These utilities are really just a shortcut for adding margin to
            all-but-the-first-item in a group, and aren’t designed to handle
            complex cases like grids, layouts that wrap, or situations where the
          </p>
        </div>
        <div>
          <FaRobot
            style={{ fontSize: "3em" }}
            className="my-4 text-purple-700"
          />
          <div className="text-base text-gray-500  mt-2">Technological Awareness</div>
          <p className="text-sm text-gray-400">
            These utilities are really just a shortcut for adding margin to
            all-but-the-first-item in a group, and aren’t designed to handle
            complex cases like grids, layouts that wrap, or situations where the
          </p>
        </div>
        <div>
          <FaSeedling
            style={{ fontSize: "3em" }}
            className="my-4 text-purple-700"
          />
          <div className="text-base text-gray-500 mt-2">Developmental Growth</div>
          <p className="text-sm text-gray-400">
            These utilities are really just a shortcut for adding margin to
            all-but-the-first-item in a group, and aren’t designed to handle
            complex cases like grids, layouts that wrap, or situations where the
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
