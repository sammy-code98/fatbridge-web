/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { teamData } from "./teamData";

export default function Team() {
  return (
    <div className="md:container md:px-12 mt-12 pb-24">
      <Splide
        options={{
          rewind: true,
          speed: 400,
          rewindSpeed: 1000,
          width: "100%",
          height: "15rem",
          start: 3,
          perPage: 3,
          perMove: 1,
          pagination: false,
          drag: true,
          trimSpace: "move",
          gap: "20px",
          breakpoints: {
            640: {
              height: "10rem",
              perPage: 2,
            },
          },
        }}
      >
        {teamData.map((team, index) => (
          <SplideSlide className="splide__slide" key={index}>
            <div className="splide__slide__container">
              <img
                src={team.img}
                alt="Image 1"
                className="rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="text-center pt-2 text-cyan-300 font-extrabold  bg-slate-900 opacity-70 rounded-tr-3xl rounded-tl-3xl">
              <h5>{team.name}</h5>
              <span>{team.role}</span>
            </div>
          </SplideSlide>
        ))}

      </Splide>
    </div>
  );
}
