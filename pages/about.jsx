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
    <motion.div
     initial="initial" animate="animate" exit={{opacity:0}}
    >
      <section className="pt-24 container">
        <div className="md:grid md:grid-cols-2 md:gap-6 md:justify-items-center">
          <motion.div variants={fadeIn} className="md:mt-24 md:pl-12">
            <motion.div variants={stagger} className="text-4xl text-white text-center">
              Get to Know Us
            </motion.div>
            <div className="text-center text-gray-500 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Distinctio, recusandae ipsum at numquam, quo explicabo atque sint
              nobis.
            </div>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Image src="/about.svg" width={500} height={300} alt="About" />
          </motion.div>
        </div>
        <div className="text-center text-4xl text-white mt-12">
          We&apos;re Here To Make Life Easier
        </div>
        <div className="md:text-justify md:px-32 mt-4 text-center text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quae excepturi neque repellendus saepe voluptas accusamus aperiam
          provident aliquid, ab ipsam illo voluptates fuga sit libero
          reprehenderit velit molestias iure!
        </div>
        <div className="md:text-justify  md:px-40 text-base mt-8 p-8 rounded-md">
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            aut commodi dolores ipsum. Ut placeat itaque iure quaerat culpa
            explicabo. Dolorum quaerat eius pariatur possimus incidunt porro
            sint ad commodi!
          </p>
          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            cupiditate voluptas quidem sed, deserunt non facere, distinctio iure
            sit necessitatibus molestiae hic aliquid aspernatur vel atque
            commodi consectetur ipsum illo.
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rerum
            labore ea. Consequuntur, animi. Excepturi commodi itaque architecto
            veritatis dolorum obcaecati harum ipsa, velit, quod ut ab.
            Consequatur, quas aperiam.
          </p>
        </div>
        <div className="text-center text-4xl text-white mt-12">
          Our Vision
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8 md:justify-items-center md:px-24 mt-8 pb-8">
          <div className="w-full rounded-md outline outline-offset-2 outline-2 outline-cyan-300 outline-dotted mb-8 p-2">
            <h6 className="text-2xl text-cyan-300">
              <span>✴️</span> Some dummy text:
            </h6>
            <p className="text-base mx-4 text-gray-500">
              {" "}
              Consequuntur, animi. Excepturi commodi itaque architecto veritatis
              dolorum obcaecati harum ipsa, velit, quod ut ab. Consequatur, quas
              aperiam.
            </p>
          </div>
          <div className="w-full rounded-md outline outline-offset-2 outline-2 outline-cyan-300 outline-dotted mb-8 p-2">
            <h6 className="text-2xl text-cyan-300">
              <span>✴️</span> Some dummy text:
            </h6>
            <p className="text-base mx-4 text-gray-500">
              {" "}
              Consequuntur, animi. Excepturi commodi itaque architecto veritatis
              dolorum obcaecati harum ipsa, velit, quod ut ab. Consequatur, quas
              aperiam.
            </p>
          </div>
          <div className="w-full rounded-md outline outline-offset-2 outline-2 outline-cyan-300 outline-dotted mb-8 p-2">
            <h6 className="text-2xl text-cyan-300">
              <span>✴️</span> Some dummy text:
            </h6>
            <p className="text-base mx-4 text-gray-500">
              {" "}
              Consequuntur, animi. Excepturi commodi itaque architecto veritatis
              dolorum obcaecati harum ipsa, velit, quod ut ab. Consequatur, quas
              aperiam.
            </p>
          </div>
          <div className="w-full rounded-md outline outline-offset-2 outline-2 outline-cyan-300 outline-dotted mb-8 p-2">
            <h6 className="text-2xl text-cyan-300">
              <span>✴️</span> Some dummy text:
            </h6>
            <p className="text-base mx-4 text-gray-500">
              {" "}
              Consequuntur, animi. Excepturi commodi itaque architecto veritatis
              dolorum obcaecati harum ipsa, velit, quod ut ab. Consequatur, quas
              aperiam.
            </p>
          </div>
        </div>
        <div>
          {" "}
          <div className="text-center text-4xl text-white mt-12">
            The Team
          </div>
          <Team />
        </div>
      </section>
    </motion.div>
  );
}

export default about;
