import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import './style.css';

export default function ChatStart() {
  return (
    <>
      <div className="chatbg">
        <div className="flex flex-col items-center ">
          <div className="mt-[90px] font-extralight text-[#495057] text-[45px]">
            이야기를 시작해 볼까요 ?
          </div>
          <div className="animate-bounce mt-[90px]">
            <img src="../img/ball.png" className="h-48 w-48" />
          </div>
          <div>
            <NavLink to="/chatEnd">
              <button className="flex items-center justify-around mt-[100px] bg-[#5BCBAB] h-[52px] w-[188px] font-semibold text-xl text-white py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)]">
                대화하기
                <FaMicrophone />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
