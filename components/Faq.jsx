import React from "react";
import { FaEyes } from "react-icons/fa";

function Faq() {
  return (
    <>
      <section className="md:grid md:grid-cols-2 md:gap-6 mt-24 md:mt-32 md:justify-items-center md:px-12">
        <div className="mt-12">
          <p className="text-center text-2xl md:text-4xl p-2 text-gray-500">
            You have questions?
          </p>
          <p className="text-center text-2xl md:text-4xl p-2 text-gray-500">
            We have answers
          </p>
        </div>
        <div className="mt-4">
          <div className="collapse w-full bg-purple-500 rounded-box shadow-sm mb-4 collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-lg text-white font-medium">
              Lorem ipsum d
            </div>
            <div className="collapse-content text-white">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas quo assumenda consequatur minima dolores quasi soluta
                adipisci explicabo reprehenderit, delectus at blanditiis sunt
                doloribus dolore! Rerum assumenda placeat est rem.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="collapse w-full bg-purple-500 rounded-box shadow-sm mb-4 collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-lg text-white font-medium">
              Lorem ipsum d
            </div>
            <div className="collapse-content text-white">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas quo assumenda consequatur minima dolores quasi soluta
                adipisci explicabo reprehenderit, delectus at blanditiis sunt
                doloribus dolore! Rerum assumenda placeat est rem.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="collapse w-full bg-purple-500 rounded-box shadow-sm mb-4 collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-lg text-white font-medium">
              Lorem ipsum d
            </div>
            <div className="collapse-content text-white">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas quo assumenda consequatur minima dolores quasi soluta
                adipisci explicabo reprehenderit, delectus at blanditiis sunt
                doloribus dolore! Rerum assumenda placeat est rem.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="collapse w-full bg-purple-500 rounded-box shadow-sm mb-4 collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-lg text-white font-medium">
              Lorem ipsum d
            </div>
            <div className="collapse-content text-white">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas quo assumenda consequatur minima dolores quasi soluta
                adipisci explicabo reprehenderit, delectus at blanditiis sunt
                doloribus dolore! Rerum assumenda placeat est rem.
              </p>
            </div>
          </div>
          {/* 5 */}
          <div className="collapse w-full bg-purple-500 rounded-box shadow-sm mb-4 collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-lg text-white font-medium">
              Lorem ipsum d
            </div>
            <div className="collapse-content text-white">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas quo assumenda consequatur minima dolores quasi soluta
                adipisci explicabo reprehenderit, delectus at blanditiis sunt
                doloribus dolore! Rerum assumenda placeat est rem.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-12">
        <div className="text-center text-2xl md:text-4xl text-gray-500">
          Still Need Help? <span>👀</span>
        </div>
        <div className="text-center text-lg text-gray-400">
          Our team is happy to answer your questions. Contact us and we&apos;ll
          be in touch as soon as possible.
        </div>
        <div className="flex flex-row  justify-center mt-4">
          <button
            type="submit"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 duration-300 p-4 text-center py-3 rounded-full bg-purple-700 text-white shadow-md focus:outline-none my-1"
            >
            Contact Support
          </button>
        </div>
      </div>
    </>
  );
}

export default Faq;
