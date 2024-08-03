import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export default function DiaryStart() {
  return (
    <>
      <div className="chatbg">
        <div className="flex flex-col items-center ">
          <div className="mt-[90px] font-extralight text-[#495057] text-[45px]">
            일기를 확인하러 가볼까요 ?
          </div>
          <div className="animate-bounce mt-[90px]">
            <img src="../img/ball.png" className="h-48 w-48" />
          </div>
          <div>
            {/* 일기 확인하기 누르면 calendar/edit 이부분?.. 으로 들어가져야돼  지금 캘린더 날짜 클릭하면 나오는 부분 */}
            <NavLink to="/">
              <button className="flex items-center justify-between mt-[100px] bg-[#5BCBAB] h-[52px] w-[200px] text-xl font-semibold text-white py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)]">
                일기 확인하기
                <img src="../img/diaryIcon.png" className="w-[17px]" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
