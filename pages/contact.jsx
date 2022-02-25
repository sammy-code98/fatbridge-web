import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function contact() {
  return (
    <section className="pt-24">
      <div className="md:grid md:grid-cols-2 md:gap-6 md:justify-items-center md:px-12">
        <div className="order-first xl:order-last mt-6">
          <Image src="/contact.svg" width={500} height={300} alt="contact" />
        </div>
        <div>
          <div className="text-center text-3xl md:text-4xl text-gray-500 mt-4">
            Get In Touch with Us
          </div>
          <div className="text-base text-gray-500 text-center mx-2">
            Reach out to us on social media and our team will be happy to get
            back to you quickly{" "}
          </div>
          <div className="mt-8 md:mx-32 mx-16">
            <div className="flex m-2">
              <FaFacebookF
                className="cursor-pointer hover:text-sky-500"
                style={{ fontSize: "1.5em" }}
              />
              <span className="mx-2 text-gray-500">Fatbridge facebook </span>
            </div>
            <div className="flex m-2">
              <FaInstagram
                className="cursor-pointer hover:text-rose-700"
                style={{ fontSize: "1.5em" }}
              />
              <span className="mx-2 text-gray-500">Fatbridge Insagram </span>
            </div>
            <div className="flex m-2">
              <FaTwitter
                className="cursor-pointer hover:text-blue-500"
                style={{ fontSize: "1.5em" }}
              />
              <span className="mx-2 text-gray-500">Fatbridge Twitter </span>
            </div>
          </div>
          <div className="text-center text-base text-gray-500 mt-4">
            Or email us your complaint @ <a>complaints@fatbride.com.ng</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default contact;
