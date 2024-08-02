import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function ChatMain() {
  return (
    <>
      <div className="chatbg">
        <div className="flex flex-col items-center">
          <div className="mt-[90px] font-extralight text-[#495057] text-[45px]">
            안녕하세요, 오늘의 감정을 들려주세요 !
          </div>
          <div className="relative mt-[90px] flex flex-col items-center justify-center">
            <img src="../img/ball_2.png" className="h-60 w-60 animate-bounce" />
            <div className="shadow-circle"></div>
          </div>
          <div>
            <NavLink to="/ChatStart">
              <button className="mt-[100px] bg-white h-[52px] w-[188px] font-semibold text-xl text-[#5BCBAB] py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)] border-2 border-[#5BCBAB]">
                시작하기
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
