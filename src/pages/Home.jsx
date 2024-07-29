
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

import Footer from "../component/Footer";


export default function Home() {
  return (
    <div className="h-auto">
      <div className="pt-60 bg-[url('./img/home.png')] bg-[length:1700px_800px] bg-no-repeat">
        <div className="flex flex-col items-center mb-60">
          <h3 className="text-[#495057] text-6xl mb-16 font-bold grid place-items-center">
            오늘 나의 감정은 어땠을까?
          </h3>

          <div className=" grid place-items-center">
            <span className="mb-8 text-2xl text-center text-[#495057]">
              당신은 당신의 감정을 제대로 마주하고 있나요?
              <br /> 감정을 파악하고 직면하는 것만으로도 감정지수가 높아집니다.
            </span>

            <NavLink to="ChatMain">
              <button className="border-0 rounded-full py-3 px-8 flex flex-row justify-center items-center bg-amber-100 hover:shadow-md">
                챗봇과 상담하기
                <FaArrowRightLong className="ml-2" />
              </button>
            </NavLink>


          </div>
        </div>

        <div className="h-[480px] bg-[url('./img/home2.png')] bg-[length:2000px_300px] bg-no-repeat mb-36">
          <div className="pt-32 flex justify-center items-center">
            <div className="flex flex-row justify-center mr-16 shadow-2xl rounded-b-3xl rounded-tr-3xl bg-white w-[500px] h-[300px]">
              <div className="flex flex-col items-center justify-center pl-4">
                <span className="text-xl font-semibold	">
                  내 감정을 모르겠어
                </span>
                <span className="text-xl font-semibold	">너무 답답해..</span>
              </div>
              <img src="../img/person1.png" className="pl-8 py-9" alt="" />
            </div>
            <div className="flex flex-row justify-center ml-16 shadow-2xl rounded-b-3xl rounded-tl-3xl bg-[#FFEB33] w-[500px] h-[300px]">
              <div className="flex flex-col items-center justify-center pl-4">
                <div className="flex flex-row">
                  <img
                    src="../../img/FeelInsight_.png"
                    alt="FeelInsight"
                    className="w-36 mr-2"
                  />
                  <span className="text-xl font-semibold	"> 써볼래?</span>
                </div>
                <span className="text-xl font-semibold	">
                  챗봇이 대화를 통해
                </span>
                <span className="text-xl font-semibold	">감정을 분석해줘</span>
              </div>
              <img src="../img/person2.png" className="pl-8 py-9" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
