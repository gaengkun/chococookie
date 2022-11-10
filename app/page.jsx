'use client';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Image from 'next/image';
import 'swiper/swiper.min.css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import {intro, work, about} from "../pages/constant"

 function MainPage() {

  const [popState, setpopStte] = useState('');

  useEffect( ()=>{
    console.log('123')
  },[]

  )

  return (
  <div className="wrap h-full">

    <div className="main_visual h-full relative">
        <div className="absolute w-full h-full bg-black opacity-30"></div>
        <div className="h-full space"></div>
        <div className="h-full mounten"></div>
        <div className="h-full space"></div>
        <div className="h-full winter"></div>
    </div>

    <div className="flex flex-col items-center justify-center absolute left-0 top-0 w-full h-full text-white">
        <div className=" w-36 h-36  border-solid block rounded-full bg-white">
        </div>
        <div className="main_line_w h-20 bg-white"></div>
        <div className="border-y py-20">
        <h2 className="text-center text-6xl font-semibold pb-10 tracking-widest">DIMENSION</h2>

        <p className="text-center font-thin tracking-widest leading-8">
        A FULLY RESPONSIVE SITE TEMPLATE DESIGNED BY HTML5 UP AND RELEASED<br/>
        FOR FREE UNDER THE CREATIVE COMMONS LICENSE.
        </p>
        </div>
        <div className="main_line_w h-20 bg-white"></div>
        <div className="main_list_btn border rounded">
          <button href="/intro">INTRO</button>
          <button href="#">ABOUT</button>
          <button href="#">WORK</button>
          <button href="#">CONTACT</button>
        </div>

    </div>


    {/* <div className="pt-12">
      <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          cssMode={true}
          pagination={true}
          allowTouchMove={true}
          simulateTouch={true}
          // pagination={
          //   {clickable: true}
          // }
          className="mySwiper"
        >
          <SwiperSlide className="bg-white text-zinc-800">Slide 1</SwiperSlide>
          <SwiperSlide className="bg-white text-zinc-800">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-white text-zinc-800">Slide 3</SwiperSlide>
        </Swiper>
      </div> */}
  </div>
  )
}

export default MainPage;