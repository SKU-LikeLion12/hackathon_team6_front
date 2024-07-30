import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './style.css';

export default function ThirdEQ() {
  const data = [
    { name: '행복', value: 144 },
    { name: '불안', value: 72 },
    { name: '중립', value: 72 },
    { name: '슬픔', value: 36 },
    { name: '분노', value: 72 },
  ];
  const COLORS = ['#FFF2B2', '#F1E5FF', '#5BCBAB', '#A9D6E5', '#FFA07A'];
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            borderRadius: '10px',
            backgroundColor: '#fff',
            padding: '10px',
            border: '1px solid #ccc',
          }}
        >
          <p>{`${payload[0].name} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="min-h-[1500px]">
      <div className="eqbg flex flex-col">
        <div className="text-center font-thin text-[#495057] text-[30px] z-1 relative">
          <div className="pt-16">
            <span>나의 감정을 직면</span>
            <span className="highlight-container">
              <img
                src="../img/hilight.png"
                className="highlight2 absolute w-[180px] h-[70px] top-[-17px] left-[-155px]"
              />
              <span>하는 것만으로도 </span>
            </span>
            <span className="relative z-10">
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
            <div className="relative">
              <img
                src="../img/emotionBox.png"
                className="w-[80%] h-[1180px] mx-auto mt-[10px]"
              ></img>
            </div>

            <div className="relative top-[-1140px] left-[10px] text-center flex flex-col justify-center items-center mx-auto text-[#495057]">
              <div className="font-normal text-[24px] mb-[25px] underline underline-offset-4">
                김금쪽님의 감정 보고서
              </div>
              <div className="분석박스 flex flex-col justify-center items-center relative">
                <div className="rounded-lg h-[200px] w-[300px] bg-[#D1E7EF] relative" />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                  <PieChart width={175} height={175}>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={85}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </div>
              </div>
              <div className="mt-[15px]">
                김금쪽님의 주요 감정은 '행복'이에요!
              </div>
              <div className="w-[75%] flex justify-center items-center ">
                <img src="../img/line.png" className="w-[70%] my-[15px]" />
              </div>
              <div>
                <div>• 여기</div>
                <div>• 넣을거</div>
                <div>• 생각</div>
              </div>
              <div className="w-[75%] flex justify-center items-center ">
                <img
                  src="../img/line.png"
                  className="w-[70%] my-[15px] h-[1px]"
                />
              </div>
              <div>
                <div className="relative rounded-lg mt-[30px] h-[130px] w-[350px] bg-[#FFF2B2] p-[15px]">
                  <img
                    src="../img/happy.png"
                    className="absolute z-10 top-[-13px] w-[26px] h-[26px]"
                  />
                  <div>김금쪽님이 행복할 때는 이런 경우였어요.</div>
                  <div className="내용">
                    <div>• 여기</div>
                    <div>• 넣을거</div>
                    <div>• 생각</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative rounded-lg mt-[30px] h-[130px] w-[350px] bg-[#F1E5FF] p-[15px]">
                  <img
                    src="../img/anxiety.png"
                    className="absolute z-10 top-[-13px] w-[26px] h-[26px]"
                  />
                  <div>김금쪽님이 불안할 때는 이런 경우였어요.</div>
                  <div className="내용">
                    <div>• 여기</div>
                    <div>• 넣을거</div>
                    <div>• 생각</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative rounded-lg mt-[30px] h-[130px] w-[350px] bg-[#A9D6E5] p-[15px]">
                  <img
                    src="../img/sad.png"
                    className="absolute z-10 top-[-13px] w-[26px] h-[26px]"
                  />
                  <div>김금쪽님이 슬플 때는 이런 경우였어요.</div>
                  <div className="내용">
                    <div>• 여기</div>
                    <div>• 넣을거</div>
                    <div>• 생각</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative rounded-lg my-[30px] h-[130px] w-[350px] bg-[#FFA07A] p-[15px]">
                  <img
                    src="../img/mad.png"
                    className="absolute z-10 top-[-13px] w-[26px] h-[26px]"
                  />
                  <div>김금쪽님이 분노할 때는 이런 경우였어요.</div>
                  <div className="내용">
                    <div>• 여기</div>
                    <div>• 넣을거</div>
                    <div>• 생각</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[55%] flex flex-col">
            <div className="font-bold text-center text-[#262626] text-[26px] mt-[5px] mr-[12%]">
              김금쪽님을 위한 추천 활동
            </div>
            <div className="flex flex-col justify-center items-center mr-[10%] relative">
              <div className="relative w-[70%] mt-[10px]">
                <img src="../img/box.png" className="w-full h-[90%]" />
                <div className="absolute top-[-15px] left-[-2px] w-full h-full flex flex-col justify-center items-center text-center text-black p-4 z-10">
                  <div className="w-[90%] p-4 text-[#495057]">
                    <strong className="text-[22px] text-[#262626]">
                      규칙적인 운동
                    </strong>
                    <br />
                    <br />
                    운동은 신체 건강 뿐만 아니라 정신 건강에도 좋습니다. 운동을
                    통해 엔도르핀을 분비시켜 기분을 좋게 만들 수 있습니다.
                  </div>
                </div>
              </div>

              <div className="relative w-[70%]">
                <img src="../img/box.png" className="w-full h-[90%]" />
                <div className="absolute top-[-15px] left-[-2px] w-full h-full flex flex-col justify-center items-center text-center text-black p-4 z-10">
                  <div className="w-[90%] p-4 text-[#495057]">
                    <strong className="text-[22px] text-[#262626]">
                      균형 잡힌 식단
                    </strong>
                    <br />
                    <br />
                    영양가 있는 음식을 섭취하면 기분이 좋아질 수 있습니다. 특히
                    오메가-3 지방산, 비타민 D, 항산화제가 풍부한 음식이 감정
                    안정에 도움을 줍니다.
                  </div>
                </div>
              </div>

              <div className="relative w-[70%]">
                <img src="../img/box.png" className="w-full h-[90%]" />
                <div className="absolute top-[-15px] left-[-2px] w-full h-full flex flex-col justify-center items-center text-center text-black p-4 z-10">
                  <div className="w-[90%] p-4 text-[#495057]">
                    <strong className="text-[22px] text-[#262626]">
                      사회적 연결 유지
                    </strong>
                    <br />
                    <br />
                    친구나 가족과의 긍정적인 교류는 감정지수를 높이는 데 도움이
                    됩니다. 자주 연락하고 만나서 시간을 보내는 것이 좋습니다.
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
