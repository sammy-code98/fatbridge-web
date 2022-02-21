import React from "react";
import Image from "next/image";

function contact() {
  return (
    <section className="pt-24">
      <div className="flex flex-row justify-center">
        <Image src="/contact.svg" width={500} height={300} alt="contact" />
      </div>
      <div>
        <div className="text-center text-3xl md:text-4xl text-gray-500 mt-4">
          Get In Touch with Us
        </div>
        <div className="border-double border-4 border-purple-700  mx-auto mt-4 w-1/2 p-8 rounded-lg">
          <div className="grid grid-cols-3 gap-8 justify-items-center">
            <div>helo</div>
            <div>hee</div>
            <div>jeje</div>
          </div>
        </div>
      </div>
    </section>
  );
}
contact.layout = "L2";

export default contact;
