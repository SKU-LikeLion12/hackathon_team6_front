import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="h-auto grid place-items-center bg-[url('./img/home.png')] bg-[length:1200px_884px] bg-no-repeat">
        <h3 className="text-5xl mb-8 font-thin">오늘 나의 감정은 어땠을까?</h3>
        <div className="border-0 rounded-3xl my-4 w-[50%] grid place-items-center bg-slate-100 shadow-lg">
          <div className="border-0 rounded-t-3xl h-8 w-[100%] bg-[#5BCBAB]"></div>
          <div className="p-20 grid place-items-center">
            <span className="mb-8 text-3xl font-medium">
              오늘의 감정을 기록해보세요
            </span>
            <NavLink to="ChatMain">
              <button className="border-0 rounded-full py-3 px-8 flex flex-row justify-center items-center bg-amber-100 hover:shadow-md">
                챗봇과 상담하기
                <FaArrowRightLong className="ml-2" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
