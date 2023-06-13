'use client';
import React, { useEffect, useState, useRef } from 'react';
import MainPopupLayer from '../pages/component/main_popup_layer';

function MainPage() {
   const BOX_LIST = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
   const [menuType, setMenuType] = useState('');
   const [visualCount, setVisualCount] = useState(0);
   const [mainContent, setMainContent] = useState(false);
   const [isOpen, setOpen] = useState(false);
   const boxListRef = useRef({});

   const userMenu = useRef();

   function useInterval(callback, delay) {
      const savedCallback = useRef();

      // Remember the latest callback.
      useEffect(() => {
         savedCallback.current = callback;
      }, [callback]);

      // Set up the interval.
      useEffect(() => {
         function tick() {
            savedCallback.current();
         }
         if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
         }
      }, [delay]);
   }

   // content motion
   const showContentPopup = type => {
      setMenuType(type);
   };

   const [isDropMenuOpen, setDropMenuOpen] = useState(false);

   const toggleDropMenu = (e: React.MouseEvent<HTMLLIElement>) => {
      e.stopPropagation(); // 이벤트 캡쳐링 방지
      setDropMenuOpen(prevState => !prevState);
   };

   useEffect(() => {
      setVisualCount(1);
      setMainContent(true);
   }, [mainContent]);

   useInterval(() => {
      if (visualCount >= 4) {
         setVisualCount(1);
      } else {
         setVisualCount(visualCount + 1);
      }
   }, 8000);

   return (
      <div className="wrap h-full">
         <div className="w-full h-full relative min-w-320">
            <div
               className={`absolute w-full h-full mask duration-[1000ms] z-20 ${
                  mainContent == true ? 'opacity-20' : 'opacity-100'
               }`}></div>
            {BOX_LIST.map(item => {
               const visualClass = ['mask', 'space', 'mounten', 'space', 'winter'];
               return (
                  <div
                     key={item.id}
                     className={`absolute w-full h-full ${visualClass[item.id]} ${
                        visualCount === item.id
                           ? 'active z-10 opacity-100 ease-in duration-[1200ms]'
                           : ' ease-out duration-1000 opacity-0 z-0'
                     }`}
                     ref={ref => (boxListRef.current[item.id] = ref)}></div>
               );
            })}
         </div>

         <div className="flex min-w-320 flex-col items-center justify-center absolute z-30 left-0 top-0 w-full h-full text-white p-6">
            <div className=" w-36 h-36 shrink-0 border-solid block rounded-full bg-white"></div>
            <div className="main_line_w h-20 bg-white"></div>
            <div className="border-y w-full max-w-2xl">
               <div
                  className={`overflow-hidden ease-out duration-500 ${
                     mainContent == true ? 'py-20 min-h-min opacity-100' : 'h-0 opacity-0'
                  } sm:py-12 `}>
                  <h2
                     className={`text-center delay-300 ease-in duration-300 text-6xl font-semibold pb-10 tracking-widest ${
                        mainContent == true ? 'min-h-min opacity-100' : 'h-0 opacity-0'
                     } sm:text-4xl`}>
                     DIMENSION
                  </h2>
                  <p
                     className={`text-center delay-300 ease-in duration-300 font-thin tracking-widest leading-8 ${
                        mainContent == true ? 'min-h-min opacity-100' : 'h-0 opacity-0'
                     } sm:text-sm sm:leading-8`}>
                     A FULLY RESPONSIVE SITE TEMPLATE DESIGNED BY HTML5 UP AND RELEASED
                     <br />
                     FOR FREE UNDER THE CREATIVE COMMONS LICENSE.
                  </p>
               </div>
            </div>
            <div className="main_line_w h-20 bg-white max-w-xs"></div>
            <div className="main_list_btn border rounded sm:flex-col">
               <button
                  type="button"
                  value={'inteo'}
                  onClick={e => {
                     showContentPopup(e.target.value);
                  }}>
                  INTRO
               </button>
               <button
                  type="button"
                  value={'about'}
                  onClick={e => {
                     showContentPopup(e.target.value);
                  }}>
                  ABOUT
               </button>
               <button
                  type="button"
                  value={'work'}
                  onClick={e => {
                     showContentPopup(e.target.value);
                  }}>
                  WORK
               </button>
               <button
                  type="button"
                  value={'contact'}
                  onClick={e => {
                     showContentPopup(e.target.value);
                  }}>
                  CONTACT
               </button>
            </div>
         </div>

         {menuType != '' ? (
            <div ref={userMenu}>
               <MainPopupLayer type={menuType} isShow={setMenuType} />
            </div>
         ) : (
            ''
         )}

         {/* {menuType != '' ?<MainPopupLayer type={menuType} isShow={setMenuType} />:'' } */}

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
   );
}
export default MainPage;
