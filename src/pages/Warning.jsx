import React from "react";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";

import { LiaHomeSolid } from "react-icons/lia";
import { IoArrowForward } from "react-icons/io5";

export default function SignUpCompleted() {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login");
  };

  const onHome = () => {
    navigate("/");
  };

  return (
    <div className="h-auto">
      <div className="pt-20 h-[1000px] bg-[url('./img/SignUpCompleted_Back.png')] bg-[length:1500px_1200px] bg-no-repeat">
        <div className="flex flex-col items-center mb-60">
          <img src="../../img/warning.png" alt="접근제한페이지" />
          <h3 className="text-[#292525] text-center text-5xl mb-4 font-bold grid place-items-center">
            로그인 후 이용 가능한
          </h3>
          <h3 className="text-[#292525] text-center text-5xl mb-12 font-bold grid place-items-center">
            페이지 입니다.
          </h3>

          <div className=" grid place-items-center">
            <span className="mb-8 text-xl text-center text-[#495057]">
              FeelInsight를 지금 바로 시작해보세요!
            </span>
            <div className="flex justify-center mt-12">
              <button
                onClick={onHome}
                className="border-0 mr-8 rounded-full py-3 px-12 flex flex-row justify-center items-center bg-white shadow-md text-[#5BCBAB] text-lg font-medium"
              >
                홈으로
                <LiaHomeSolid className="ml-2" />
              </button>
              <button
                onClick={onLogin}
                className="border-0 ml-8 rounded-full py-3 px-12 flex flex-row justify-center items-center bg-amber-100 shadow-md text-lg font-medium"
              >
                로그인하러 가기
                <IoArrowForward className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer className="bg-[#F8F9FA]" />
    </div>
  );
}
