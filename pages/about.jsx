import React from "react";
import Image from "next/image";

function about() {
  return (
    <section className="pt-24 container">
      <div className="md:grid md:grid-cols-2 md:gap-6 md:justify-items-center">
        <div className="md:mt-12 md:pl-12">
          <div className="text-4xl text-gray-500 text-center">Get to Know Us</div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Distinctio, recusandae ipsum at numquam, quo explicabo atque sint
            nobis.
          </div>
        </div>
        <div>
          <Image src="/about.svg" width={500} height={300} alt="About" />
        </div>
      </div>
    </section>
  );
}
about.layout = "L2";

export default about;
