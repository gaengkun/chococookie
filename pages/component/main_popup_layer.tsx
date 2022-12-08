import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import Image from 'next/image';
import {intro, work, about} from "../constant"

 
function MainPopupLayer(props:any) {

  




  let getContent = intro;
  switch(props.type) {
    case 'intro':
      getContent = intro;
      break;
    case 'work':
      getContent = work;
      break;
    case 'about':
      getContent = about;
      break;
  }

  function isHide(){
    props.isShow('');
  }

  return(
    <div className='w-full h-full fixed flex justify-center items-start z-30 inset-0 box-sizing: border-box; px-6'>
      <div className='relative bg-opacity-80 bg-black max-w-4xl mt-20 rounded'>
      <button onClick={isHide} className='popup_close_btn absolute flex justify-center items-center w-16 h-16 right-0 rounded-full' type='button'></button>
      <div className='p-12 py-24'>
        <h2 className='inline-block text-white text-3xl font-semibold tracking-wide2 pb-3 border-b-2'>{getContent.title}</h2>
        <Image className='w-full h-auto rounded mt-14' src={getContent.imgSrc} alt='이미지' width={500} height={100}/>
        <p className='text-white mt-10'>
          {getContent.subText}
        </p>

        </div>
      </div>
    </div>
    
    )

}
 
export default MainPopupLayer;