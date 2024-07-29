import React from 'react';
import './style.css';

export default function EqMain() {
  return (
    <div className="min-h-[1750px]">
      <div className="eqbg flex flex-col">
        <div className="text-center font-thin text-[#495057] text-[30px] z-1 relative ">
          <div className="pt-16">
            <span>나의 감정을 직면</span>
            <span className="highlight-container">
              <img
                src="../img/hilight.png"
                className="highlight2 absolute w-[180px] h-[70px] top-[-17px] left-[-155px]"
              />
              <span>하는 것만으로도 </span>
            </span>
            <span className="relative z-10 ">
              감정지수 (EQ) 를 높일 수 있습니다.
              <img
                src="../img/hilight.png"
                className="highlight2 z-0 absolute w-[215px] h-[70px] top-[-17px] left-[-25px]"
              />
            </span>
            <br />
          </div>
          <div className="mt-[5px] pb-12 text-center">
            FeelInsight 는 항상 당신을 응원합니다.
          </div>
        </div>

        <div className="flex flex-row text-[#495057]">
          <div className="w-[50%] relative">
            <img
              src="../img/emotionBox.png"
              className="w-[80%] mx-auto  mt-[30px] "
            ></img>

            <div className="scrollTest mt-[12%] text-center mt-[10%] absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-[60%] mx-auto text-[#495057]">
              <div className="mx-[30px] mt-[80%]">
                <div className="text-[#495057] text-[28px] font-light text-center my-[30px] custom-underline">
                  김금쪽님의 감정 보고서
                </div>
                <div className="bb">
                  <div>
                    <img
                      src="../img/eq1.png"
                      className="mb-[30px] w-[100%] circleBox"
                    />
                  </div>
                  <div className="circle my-auto mx-auto">감정 그래프</div>
                </div>

                <div className="font-medium my-[25px]">
                  김금쪽님의 주요 감정은 '행복'이에요!
                </div>
                <div className="h-[1px] bg-[#495057]"></div>
                <div className="my-[30px]">
                  <li>여기</li>
                  <li>넣을 거 생각</li>
                  <li>해봐야 할 듯</li>
                </div>
                <div className="h-[1px] bg-[#495057]"></div>

                <br />
                <div>
                  <div className="rounded-lg mt-[15px] h-[20%] w-[100%] bg-[#FFF2B2] p-[25px] my-[30px]">
                    <div>이모지</div>
                    <div>김금쪽님이 행복할 때는 이런 경우였어요.</div>
                    <div>
                      <li>여기</li>
                      <li>넣을 거 생각</li>
                      <li>해봐야 할 듯</li>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="rounded-lg mt-[15px] h-[20%] w-[100%] bg-[#F1E5FF] p-[15px] my-[30px]">
                    <div>이모지</div>
                    <div>김금쪽님이 불안할 때는 이런 경우였어요.</div>
                    <div>
                      <li>여기</li>
                      <li>넣을 거 생각</li>
                      <li>해봐야 할 듯</li>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="rounded-lg  mt-[15px] h-[20%] w-[100%] bg-[#A9D6E5] p-[15px] my-[30px]">
                    <div>이모지</div>
                    <div>김금쪽님이 슬플 때는 이런 경우였어요.</div>
                    <div>
                      <li>여기</li>
                      <li>넣을 거 생각</li>
                      <li>해봐야 할 듯</li>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="rounded-lg mt-[15px] h-[20%] w-[100%] bg-[#FFA07A] p-[15px] my-[30px]">
                    <div>이모지</div>
                    <div>김금쪽님이 분노할 때는 이런 경우였어요.</div>
                    <div>
                      <li>여기</li>
                      <li>넣을 거 생각</li>
                      <li>해봐야 할 듯</li>
                    </div>
                  </div>
                </div>

                <div>
                  <br />
                  <br />
                  내용 <br /> 내용 <br /> 내용 <br /> 내용 <br /> 내용 <br />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[50%] flex flex-col">
            <div className="font-semibold text-center text-[26px] mt-[15px] mr-[12%]">
              김금쪽님을 위한 추천 활동
            </div>
            <div className="flex flex-col justify-center items-center mr-[10%]">
              <img src="../img/box.png" className="w-[70%] mt-[40px]" />
              <img src="../img/box.png" className="w-[70%] mt-[40px]" />
              <img src="../img/box.png" className="w-[70%] mt-[40px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
