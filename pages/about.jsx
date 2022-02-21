import React from "react";
import Image from "next/image";

function about() {
  return (
    <section className="pt-24 container">
      <div className="md:grid md:grid-cols-2 md:gap-6 md:justify-items-center">
        <div className="md:mt-12 md:pl-12">
          <div className="text-4xl text-gray-500 text-center">
            Get to Know Us
          </div>
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
      <div className="text-center text-4xl text-gray-500 mt-2 ">
        We&apos;re Here To Make Life Easier
      </div>
      <div className="md:text-justify md:px-32 mt-4 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        quae excepturi neque repellendus saepe voluptas accusamus aperiam
        provident aliquid, ab ipsam illo voluptates fuga sit libero
        reprehenderit velit molestias iure!
      </div>
      <div className="md:text-justify  md:px-40 text-base mt-8 bg-purple-300 shadow-md p-8 rounded-md">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          aut commodi dolores ipsum. Ut placeat itaque iure quaerat culpa
          explicabo. Dolorum quaerat eius pariatur possimus incidunt porro sint
          ad commodi!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          cupiditate voluptas quidem sed, deserunt non facere, distinctio iure
          sit necessitatibus molestiae hic aliquid aspernatur vel atque commodi
          consectetur ipsum illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rerum
          labore ea. Consequuntur, animi. Excepturi commodi itaque architecto
          veritatis dolorum obcaecati harum ipsa, velit, quod ut ab.
          Consequatur, quas aperiam.
        </p>
      </div>
      <div className="text-center text-4xl text-gray-500 mt-6">Our Vision</div>
      <div className="md:grid md:grid-cols-2 md:gap-8 md:justify-items-center md:px-24 mt-8">
        <div className="w-full rounded-md border-double border-4 border-purple-700 mb-4 p-2">
          <h6 className="text-2xl text-purple-700"><span>✴️</span> Some dummy text:</h6>
          <p className="text-base mx-4"> Consequuntur, animi. Excepturi commodi itaque architecto
          veritatis dolorum obcaecati harum ipsa, velit, quod ut ab.
          Consequatur, quas aperiam.</p>
       
        </div>
        <div className="w-full rounded-md border-double border-4 border-purple-700 mb-4 p-2">
          <h6 className="text-2xl text-purple-700"><span>✴️</span> Some dummy text:</h6>
          <p className="text-base mx-4"> Consequuntur, animi. Excepturi commodi itaque architecto
          veritatis dolorum obcaecati harum ipsa, velit, quod ut ab.
          Consequatur, quas aperiam.</p>
       
        </div>
        <div className="w-full rounded-md border-double border-4 border-purple-700  mb-4 p-2">
          <h6 className="text-2xl text-purple-700"><span>✴️</span> Some dummy text:</h6>
          <p className="text-base mx-4"> Consequuntur, animi. Excepturi commodi itaque architecto
          veritatis dolorum obcaecati harum ipsa, velit, quod ut ab.
          Consequatur, quas aperiam.</p>
       
        </div>
        <div className="w-full rounded-md border-double border-4 border-purple-700 mb-4 p-2">
          <h6 className="text-2xl text-purple-700"><span>✴️</span> Some dummy text:</h6>
          <p className="text-base mx-4"> Consequuntur, animi. Excepturi commodi itaque architecto
          veritatis dolorum obcaecati harum ipsa, velit, quod ut ab.
          Consequatur, quas aperiam.</p>
       
        </div>
       

      </div>
    </section>
  );
}
about.layout = "L2";

export default about;
