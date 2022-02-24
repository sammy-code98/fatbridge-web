import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div>
      <nav className="flex  items-center flex-wrap bg-gray-50 p-2 md:px-24 w-full fixed z-10">
        <Link href="/">
          <a className="inline-flex  items-center p-2 mr-4">
            <span className="text-xl text-purple-700 font-black  tracking-wide">
              Fatbridge
            </span>
          </a>
        </Link>
        {/* hamburger button */}
        <button
          className="inline-flex p-3 hover:bg-purple-700 rounded lg:hidden text-purple-500 ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center    flex flex-col lg:h-auto">
            <Link href="/about">
              <a className="lg:inline-flex lg:w-auto w-full px-6 py-2 cursor-pointer rounded text-center text-purple-700 font-bold items-center justify-center hover:bg-purple-700 hover:text-white">
                About
              </a>
            </Link>

            <Link href="/contact">
              <a className="lg:inline-flex lg:w-auto w-full px-6 py-2 cursor-pointer rounded text-center text-purple-700 font-bold items-center justify-center hover:bg-purple-700 hover:text-white">
                Contact
              </a>
            </Link>
            <Link href="/gallery">
              <a className="lg:inline-flex lg:w-auto w-full px-6 py-2 cursor-pointer rounded text-center text-purple-700 font-bold items-center justify-center hover:bg-purple-700 hover:text-white">
                Gallery
              </a>
            </Link>
            <Link href="">
              <a className="lg:inline-flex lg:w-auto w-full px-6 py-2 cursor-pointer rounded text-center text-purple-700 font-bold items-center justify-center hover:bg-purple-700 hover:text-white">
                Projects
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
