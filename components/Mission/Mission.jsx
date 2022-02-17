import React from "react";
import { FaHandshake, FaRocket, FaRobot , FaPi} from "react-icons/fa";

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
      <div className="grid grid-cols-4 gap-6 justify-items-center mt-12">
        <div>
          <FaHandshake style={{ fontSize: "4em" }} />
        </div>
        <div>
            <FaRocket  style={{ fontSize:"4em"}}/>
        </div>
        <div>
            <FaRobot style={{ fontSize:"4em"}}/>
        </div>
        <div>
            <FaPi style={{ fontSize:"4em"}}/> 
        </div>
      </div>
    </section>
  );
}

export default Mission;
