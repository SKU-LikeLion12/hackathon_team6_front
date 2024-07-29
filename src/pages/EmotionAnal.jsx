import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

export default function EmotionAnal() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const day = days[now.getDay()];

  return (
    <>
      <div className="min-h-[900px]">
        <div className="diarybg text-[#495057]">
          <div className="flex flex-row">
            <div className="w-[55%]">
              <NavLink to="/Calendar">
                <div className="text-[20px] font-medium ml-[12%] mt-[60px] mb-[20px] mr-0 hover:underline">
                  ← 캘린더로 돌아가기
                </div>
              </NavLink>
              <div className="">
                <div className="relative">
                  <img src="../img/diaryBox.png" className="w-[80%] mx-auto" />
                </div>
                <div>
                  <div className="text-[20px] font-medium absolute top-[340px] left-[10%] ">
                    {year}. {month}. {date} ({day})
                    <div>이부분호여니언니가함</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%] ">
              <div className="mt-[20%] mr-[10%] ml-[10%]">
                <div>
                  <div className="flex flex-row justify-between">
                    <img src="../img/happy.png" className="w-[45px]" />
                    <div
                      className="mr-[10%] text-[22px] font-black text-[#FFF1B2]"
                      style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8) ' }}
                    >
                      행복 40%
                    </div>
                  </div>
                  <div className="relative h-[20px] rounded-full mt-[15px] mb-[60px]">
                    <div className="absolute border-[0.2px] border-[#495057] w-[90%] h-[20px] bg-[#F8F9FA] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                    <div className="absolute border-[0.2px] border-[#495057] bg-[#FFF2B2] border w-[36%] h-[20px] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-row justify-between">
                    <img src="../img/anxiety.png" className="w-[45px]" />
                    <div
                      className="mr-[10%] text-[22px] font-black text-[#F1E4FF]"
                      style={{
                        textShadow:
                          '2px 2px 6px rgba(0, 0, 0, 0.25), -2px 2px 6px rgba(0, 0, 0, 0.25), 2px -2px 6px rgba(0, 0, 0, 0.25), -2px -2px 6px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      불안 25%
                    </div>
                  </div>
                  <div className="relative h-[20px] rounded-full mt-[15px] mb-[60px]">
                    <div className="absolute border-[0.2px] border-[#495057] w-[90%] h-[20px] bg-[#F8F9FA] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                    <div className="absolute border-[0.2px] border-[#495057] bg-[#F1E4FF] border w-[22.5%] h-[20px] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-row justify-between">
                    <img src="../img/hmm.png" className="w-[45px]" />
                    <div
                      className="mr-[10%] text-[22px] font-black text-[#5ACBAB]"
                      style={{
                        textShadow:
                          '2px 2px 6px rgba(0, 0, 0, 0.25), -2px 2px 6px rgba(0, 0, 0, 0.25), 2px -2px 6px rgba(0, 0, 0, 0.25), -2px -2px 6px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      중립 7%
                    </div>
                  </div>
                  <div className="relative h-[20px] rounded-full mt-[15px] mb-[60px]">
                    <div className="absolute border-[0.2px] border-[#495057] w-[90%] h-[20px] bg-[#F8F9FA] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                    <div className="absolute border-[0.2px] border-[#495057] bg-[#5ACBAB] border w-[6.3%] h-[20px] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-row justify-between">
                    <img src="../img/sad.png" className="w-[45px]" />
                    <div
                      className="mr-[10%] text-[22px] font-black text-[#A9D6E5]"
                      style={{
                        textShadow:
                          '2px 2px 6px rgba(0, 0, 0, 0.25), -2px 2px 6px rgba(0, 0, 0, 0.25), 2px -2px 6px rgba(0, 0, 0, 0.25), -2px -2px 6px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      슬픔 3%
                    </div>
                  </div>
                  <div className="relative h-[20px] rounded-full mt-[15px] mb-[60px]">
                    <div className="absolute border-[0.2px] border-[#495057] w-[90%] h-[20px] bg-[#F8F9FA] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                    <div className="absolute border-[0.2px] border-[#495057] bg-[#A9D6E5] border w-[2.7%] h-[20px] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-row justify-between">
                    <img src="../img/mad.png" className="w-[45px]" />
                    <div
                      className="mr-[10%] text-[22px] font-black text-[#FF9F7A]"
                      style={{
                        textShadow:
                          '2px 2px 6px rgba(0, 0, 0, 0.25), -2px 2px 6px rgba(0, 0, 0, 0.25), 2px -2px 6px rgba(0, 0, 0, 0.25), -2px -2px 6px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      분노 25%
                    </div>
                  </div>
                  <div className="relative h-[20px] rounded-full mt-[15px] mb-[60px]">
                    <div className="absolute border-[0.2px] border-[#495057] w-[90%] h-[20px] bg-[#F8F9FA] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                    <div className="absolute border-[0.2px] border-[#495057] bg-[#FF9F7A] border w-[22.5%] h-[20px] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                  </div>
                </div>

                <div className="flex justify-between mr-[10%] mb-12">
                  <NavLink to="">
                    <button className="bg-[#5BCBAB] h-[52px] w-[188px] font-semibold text-xl text-white py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)] flex items-center justify-around">
                      일기 저장
                      <img src="../img/diaryIcon.png" className="w-[17px]" />
                    </button>
                  </NavLink>
                  <NavLink to="">
                    <button className="bg-[rgba(180,54,58,0.85)] h-[52px] w-[188px] font-semibold text-xl text-white py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(180,54,58,0.4)] flex items-center justify-around">
                      일기 삭제
                      <img src="../img/bin.png" className="w-[17px]" />
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
