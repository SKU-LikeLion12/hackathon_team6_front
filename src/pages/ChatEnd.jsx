import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import './style.css';

export default function ChatEnd() {
  return (
    <>
      <div className="chatbg">
        <div className="flex flex-col items-center">
          <div className="mt-[90px] font-extralight text-[#495057] text-[45px]">
            더 들려줄 이야기 있을까요 ?
          </div>
          <div className="animate-bounce mt-[90px]">
            <img src="../img/ball.png" className="h-48 w-48" />
          </div>
          <div className="flex flex-row">
            <NavLink to="/">
              <button className="flex items-center mr-[35px] justify-around mt-[100px] bg-white h-[52px] w-[188px] text-xl text-[#5BCBAB] py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)] border-2 border-[#5BCBAB]">
                <FaPlay />
                계속하기
              </button>
            </NavLink>
            <NavLink to="/">
              <button className="flex items-center justify-around mt-[100px] bg-[#5BCBAB] h-[52px] w-[188px] text-xl font-semibold text-white py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)]">
                <img src="../img/end.png" className="w-[25px]" />
                종료하기
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
