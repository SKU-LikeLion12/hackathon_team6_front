import { FaCaretRight } from 'react-icons/fa';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import InvitePopupField from '../component/InvitePopupField';

export default function Edit() {
  const params = useParams();

  const [InvitePopup, setInvitePopup] = useState(false);

  const handleInviteUser = (event) => {
    setInvitePopup(true);
  };

  const handleCloseInvitePopup = (event) => {
    setInvitePopup(false);
  };

  return (
    <div className="flex justify-center items-center bg-[url('./img/edit_back.png')] bg-[length:3000px_1000px] h-[700px] bg-no-repeat ">
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
                        혼자 할 때는 어려웠는데 다 같이
                        <spna className="text-red-700 font-bold">으쌰으쌰</spna>
                        하니 금방 끝났다. 뿌듯했다.
                      </span>
                    </div>
                    <div className="rounded-xl bg-sky-100 p-4 mt-4 h-auto">
                      <h1 className="mb-2 font-bold	">수정후</h1>
                      <span>
                        오늘은 성결대학교 6팀 팀원들과 함께 앱 개발을 하였다.
                        혼자 할 때는 어려웠는데 다 같이{' '}
                        <spna className="text-red-700 font-bold">열심히</spna>{' '}
                        하니 금방 끝났다. 뿌듯했다.
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center text-center mt-24">
                    <button
                      className="bg-[#5BCBAB] font-bold	text-white py-3 px-28 rounded-full"
                      onClick={handleInviteUser}
                    >
                      일기장 저장
                    </button>
                    <InvitePopupField
                      show={InvitePopup}
                      onClose={handleCloseInvitePopup}
                    >
                      <div className="p-4 w-[550px] h-[230px]">
                        <p className="text-2xl font-bold text-[#5BCBAB] mb-8">
                          게시하시겠습니까?
                        </p>
                        <div className="text-lg text-gray-500">
                          <p>게시 후 수정이 가능합니다.</p>
                          <p>
                            게시된 일기장은{' '}
                            <span className="underline">
                              사용자 감정 분석에 사용
                            </span>
                            됩니다.
                          </p>
                        </div>
                        <div className="flex justify-around h-12 mt-8">
                          <button className="bg-[#D9D9D9] font-bold text-xl w-[50%] h-[20%] absolute left-0 bottom-0 rounded-bl-3xl ">
                            취소
                          </button>
                          <button className="bg-[#5BCBAB] font-bold text-xl text-white w-[50%] h-[20%] absolute right-0 bottom-0 rounded-br-3xl">
                            게시
                          </button>
                        </div>
                      </div>
                    </InvitePopupField>
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
