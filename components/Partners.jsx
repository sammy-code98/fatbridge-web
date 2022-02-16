import React from "react";
import Ticker from "react-ticker";
import Image from "next/image";

function Partners() {
  return (
    <div className="mt-12 md:mt-32 p-4 ">
      <div className="text-purple-700 text-center text-2xl md:text-3xl ">
        Our Partners and Sponsors
      </div>
      <div className="text-center text-gray-400">
        Trusted by <span className="text-purple-700 font-bold">100+ </span>
        Schools and Sponsored by{" "}
        <span className="text-purple-700 font-bold">500+</span> Amazing
        Individuals and Organizations
      </div>
      <div className="mt-4  container">
        <Ticker>
          {({ index }) => (
            <>
              <div className="mx-6">
                <Image
                  src="/google.svg"
                  alt="Google"
                  width={100}
                  height={100}
                />
              </div>
            </>
          )}
        </Ticker>
      </div>
    </div>
  );
}

export default Partners;