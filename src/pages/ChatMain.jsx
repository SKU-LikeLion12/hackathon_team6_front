import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function ChatMain() {
  const username = localStorage.getItem("username") || '"guest"';
  const displayName = username.length > 2 ? username.slice(1, -1) : username;

  return (
    <>
      <div className="chatbg">
        <div className="flex flex-col items-center">
          <div className="mt-[90px] font-extralight text-center text-[#495057] text-[45px]">
            안녕하세요, {displayName}님<br />
            오늘의 감정을 들려주세요!
          </div>
          <div className="relative mt-[90px] flex flex-col items-center justify-center">
            <img
              src="../img/ball_2.png"
              className="h-60 w-60 animate-bounce"
              alt=""
            />
            <div className="shadow-circle"></div>
          </div>
          <div>
            <NavLink to="/ChatStart">
              <button className="mt-[100px] bg-white h-[52px] w-[188px] font-semibold text-xl text-[#5BCBAB] py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)] border-2 border-[#5BCBAB] cursor-pointer">
                시작하기
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
