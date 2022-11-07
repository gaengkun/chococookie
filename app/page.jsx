'use client';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Image from 'next/image';
import 'swiper/swiper.min.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Home() {
  return (
  <div className='wrap flex-auto p-4'>

    <div className='flex justify-between items-center'>
      <div className='flex w-12 h-12 justify-center items-center text-rose-700 bg-white rounded-full'>D</div>
      <button>
        <Image src="/hamburger.svg" width={48} height={48} alt="Picture of the author" />
      </button>
    </div>

    <header className='text-xl pt-6 font-semibold'>
      New <br/>SubJect
    </header>

    <div className='pt-12'>
      <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          pagination={
            {clickable: true}
          }
          className="mySwiper"
        >
          <SwiperSlide className="bg-white ">Slide 1</SwiperSlide>
          <SwiperSlide className="bg-white text-black-700">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-white text-black-700">Slide 3</SwiperSlide>
        </Swiper>
      </div>

  </div>)
}
