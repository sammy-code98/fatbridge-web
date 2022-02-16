import React from "react";
import Ticker from "react-ticker";

function Partners() {
  return (
    <div className="mt-12 md:mt-32">
      <div className="text-purple-700 text-center text-2xl md:text-3xl ">Our Partners and Sponsors</div>
      <div className="bg-purple-200 mt-4">
      <Ticker>
        {({ index }) => (
          <>
            <div>
                <span>jeie</span>
                <span>adam</span>
                
            </div>
          </>
        )}
      </Ticker>
      </div>
      
    </div>
  );
}

export default Partners;
