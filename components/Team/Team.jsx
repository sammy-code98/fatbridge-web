/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';


export default function Team() {
  return (
    <div className="container px-12 mt-12 pb-24">
        <Splide options={{ 
            rewind: true,
            speed: 400,
            rewindSpeed:1000,
            width:'100%',
            height:'15rem',
            start:3,
            perPage:3,
            perMove:1,
            pagination:false,
            drag: true,
            trimSpace: 'move',
            gap:"10px"

        }}>
  <SplideSlide>
    <img src="/me.jpeg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="/new.png" alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img src="/new.png" alt="Image 2"/>
  </SplideSlide><SplideSlide>
    <img src="/new.png" alt="Image 2"/>
  </SplideSlide><SplideSlide>
    <img src="/new.png" alt="Image 2"/>
  </SplideSlide><SplideSlide>
    <img src="/new.png" alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img src="/new.png" alt="Image 2"/>
  </SplideSlide><SplideSlide>
    <img src="/new.png" alt="Image 2"/>
  </SplideSlide>
</Splide>
    </div>
  )
}
