import 'public/css/globals.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function intro() {
   return (
      <div className="login-bg w-full h-full flex items-center justify-center">
         <style jsx>{`
            .login-bg {
               background: url('./images/mountain.jpg') no-repeat center;
               background-size: cover;
            }
         `}</style>
         <div className="m-4 backdrop-blur-sm p-10 border-solid border-1 border rounded-xl border-opacity-5 border-white/30">
            <h2 className="flex justify-center text-4xl text-white">Login</h2>

            <input
               type="text"
               className="bg-inherit mt-6 h-10 border-b border-white/30 w-full text-white placeholder-white placeholder:light"
               placeholder="Email"
            />
            <input
               type="text"
               className="bg-inherit mt-6 h-10 border-b border-white/30 w-full text-white placeholder-white placeholder:light"
               placeholder="Password"
            />

            <div className="flex justify-center">
               <button>Instagram</button>
               <button>Facebook</button>
               <button>naver</button>
               <button>kakao</button>
            </div>
            {/* <FontAwesomeIcon icon={faSearch} className="search" /> */}
            <button className="w-full p-3 mt-4 bg-blue-500 text-white rounded-lg">Sing in</button>

            <div className="w-full h-14 flex-center text-white">
               <i className="flex-1 h-px bg-white/50"></i>
               <span className="flex-1 flex-center">or you can</span>
               <i className="flex-1 h-px bg-white/50"></i>
            </div>

            <button className="w-full p-3 bg-blue-500 text-white rounded-lg">CREATE AN ACCOUNT</button>
         </div>
      </div>
   );
}
