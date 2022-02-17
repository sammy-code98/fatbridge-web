import React from "react";
import {
  FaHandshake,
  FaRocket,
  FaRobot,
  FaSquareRootAlt,
} from "react-icons/fa";

function Mission() {
  return (
    <section className="mt-12 md:mt-32">
      <div className="text-center text-2xl md:text-3xl text-purple-700">
        Our Mission
      </div>
      <div className="text-center text-base text-gray-500 px-4 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        consequuntur natus cupiditate ex quia. Hic nam asperiores cumque
        voluptatum laboriosam assumenda impedit amet, blanditiis totam
        voluptates, excepturi neque beatae reiciendis!
      </div>
      <div className="grid grid-cols-4 gap-8 justify-items-center mt-12 px-24">
        <div>
          <FaHandshake style={{ fontSize: "3em" }} />
          <div className="text-base text-gray-700 mt-2 ">Lorem</div>
          <p className="text-sm text-gray-500">
            These utilities are really just a shortcut for adding margin to
            all-but-the-first-item in a group, and aren’t designed to handle
            complex cases like grids, layouts that wrap, or situations where the
          </p>
        </div>
        <div>
          <FaRocket style={{ fontSize: "3em" }} />
          <div className="text-base text-gray-700 mt-2 ">Lorem</div>
          <p className="text-sm text-gray-500">
            These utilities are really just a shortcut for adding margin to
            all-but-the-first-item in a group, and aren’t designed to handle
            complex cases like grids, layouts that wrap, or situations where the
          </p>
        </div>
        <div>
          <FaRobot style={{ fontSize: "3em" }} />
          <div className="text-base text-gray-700  mt-2">Lorem</div>
          <p className="text-sm text-gray-500">
            These utilities are really just a shortcut for adding margin to
            all-but-the-first-item in a group, and aren’t designed to handle
            complex cases like grids, layouts that wrap, or situations where the
          </p>
        </div>
        <div>
          <FaSquareRootAlt style={{ fontSize: "3em" }} />
          <div className="text-base text-gray-700 mt-2">Lorem</div>
          <p className="text-sm text-gray-500">
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
