'use client';
import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Image from 'next/image';
import 'swiper/swiper.min.css';
import "swiper/css/navigation";
import "swiper/css/pagination";

// import {intro, work, about} from "../pages/constant"
// import {Header} from "../pages/component/Header"
import MainPopupLayer from "../pages/component/main_popup_layer"

 function MainPage() {
  const [contentPopup, setContentPopup] = useState(false);
  const [menuType, setMenuType] = useState("");
  const mainVisual = useRef();

  // content motion
  const [mainCongent, setMainContent] = useState(false);
  const showContentPopup = (type) => {
    setMenuType(type);
  }

  useEffect(()=>{


    console.log(mainVisual)

    setMainContent(true)

  },[mainCongent]
  )

  return (
  <div className="wrap h-full">

      <div className="w-full h-full relative min-w-320">
          <div className="absolute w-full h-full bg-black opacity-30"></div>

          <div ref={mainVisual} className="h-full">
            <div className="h-full space"></div>
            <div className="h-full mounten"></div>
            <div className="h-full space"></div>
            <div className="h-full winter"></div>
          </div>
      </div>

      <div className="flex min-w-320 flex-col items-center justify-center absolute left-0 top-0 w-full h-full text-white p-6">
          <div className=" w-36 h-36 shrink-0 border-solid block rounded-full bg-white">
          </div>
          <div className="main_line_w h-20 bg-white"></div>
          <div className="border-y w-full max-w-2xl">
            <div className={`overflow-hidden ease-out duration-500 ${mainCongent == true ? 'py-20 min-h-min opacity-100' : 'h-0 opacity-0'} sm:py-12 `}>
              <h2 className={`text-center delay-300 ease-in duration-300 text-6xl font-semibold pb-10 tracking-widest ${mainCongent == true ? 'min-h-min opacity-100' : 'h-0 opacity-0'} sm:text-4xl`}>DIMENSION</h2>
              <p className={`text-center delay-300 ease-in duration-300 font-thin tracking-widest leading-8 ${mainCongent == true ? 'min-h-min opacity-100' : 'h-0 opacity-0'} sm:text-sm sm:leading-8`}>
              A FULLY RESPONSIVE SITE TEMPLATE DESIGNED BY HTML5 UP AND RELEASED<br/>
              FOR FREE UNDER THE CREATIVE COMMONS LICENSE.
              </p>
            </div>
          </div>
          <div className="main_line_w h-20 bg-white max-w-xs"></div>
          <div className="main_list_btn border rounded sm:flex-col">
            <button type="button" value={'inteo'} onClick={(e) => {showContentPopup(e.target.value)}}>INTRO</button>
            <button type="button" value={'about'} onClick={(e) => {showContentPopup(e.target.value)}}>ABOUT</button>
            <button type="button" value={'work'} onClick={(e) => {showContentPopup(e.target.value)}}>WORK</button>
            <button type="button" value={'contact'} onClick={(e) => {showContentPopup(e.target.value)}}>CONTACT</button>
          </div>
      </div>

      <MainPopupLayer type={menuType} />
      



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