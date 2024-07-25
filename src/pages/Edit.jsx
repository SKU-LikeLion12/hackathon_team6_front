import { FaCaretRight } from "react-icons/fa";
import React from "react";
import { useParams } from "react-router-dom";

export default function Edit() {
  const params = useParams();
  return (
    <div className="flex justify-around items-center mx-12 my-8 ">
      {/* 왼 */}
      <div className="w-[45%]">
        <span className="flex justify-center mb-4 text-xl">
          일기장 미리보기
        </span>
        <div className="flex justify-center">
          <div className="w-[85%] h-[550px]">
            <div className="rounded-3xl p-5 bg-zinc-300 w-full h-full">
              <div className="rounded-2xl p-8 bg-white h-full">
                <span className="block text-gray-500 text-xl">{params.id}</span>
                <div className="mt-3">
                  <div className="flex justify-center">
                    <img
                      className="rounded-xl py-2 h-auto"
                      src="/img/image55.png"
                      alt=""
                    />
                  </div>
                  <div className="border-t-2 py-5 mt-5">
                    <span className="text-gray-500">
                      오늘은 성결대학교 6팀 팀원들과 함께 앱 개발을 하였다. 혼자
                      할 때는 어려웠는데 다 같이 으쌰으쌰 하니 금방 끝났다.
                      뿌듯했다.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 화살표 */}
      <div className="flex justify-center items-center h-full">
        <FaCaretRight size={35} />
      </div>

      {/* 오 */}
      <div className="w-[45%]">
        <span className="flex justify-center mb-4	text-xl">
          <span className="text-red-700 font-bold">잘못된 내용</span>이 있다면
          수정해주세요!
        </span>
        <div className="flex justify-center ">
          <div className="w-[85%]  h-[550px]">
            <div className="rounded-3xl p-5 bg-sky-100 w-full h-full ">
              <div className="rounded-2xl p-5 bg-white h-full">
                <div>
                  <div>
                    <div className="rounded-xl bg-gray-200 p-4 h-auto">
                      <h1 className="mb-2 font-bold	">수정전</h1>
                      <span>
                        오늘은 성결대학교 6팀 팀원들과 함께 앱 개발을 하였다.
                        혼자 할 때는 어려웠는데 다 같이{" "}
                        <spna className="text-red-700 font-bold">으쌰으쌰</spna>
                        하니 금방 끝났다. 뿌듯했다.
                      </span>
                    </div>
                    <div className="rounded-xl bg-sky-100 p-4 mt-4 h-auto">
                      <h1 className="mb-2 font-bold	">수정후</h1>
                      <span>
                        오늘은 성결대학교 6팀 팀원들과 함께 앱 개발을 하였다.
                        혼자 할 때는 어려웠는데 다 같이{" "}
                        <spna className="text-red-700 font-bold">열심히</spna>{" "}
                        하니 금방 끝났다. 뿌듯했다.
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center text-center mt-24">
                    <button className="bg-[#5BCBAB] font-bold	text-white py-3 px-28 rounded-full">
                      일기장 저장
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
