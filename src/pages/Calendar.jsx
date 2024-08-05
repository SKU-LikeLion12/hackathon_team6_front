import React, { useState, useEffect, useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

export default function Attendance() {
  const username = localStorage.getItem('username') || '"guest"';
  const displayName = username.length > 2 ? username.slice(1, -1) : username;

  const { getAuthToken } = useContext(AuthContext); // AuthContext에서 getAuthToken 가져오기
  const [emotion, setEmotion] = useState(null);

  const data = emotion
    ? [
        { name: '행복', value: emotion.happiness },
        { name: '불안', value: emotion.anxiety },
        { name: '중립', value: emotion.neutral },
        { name: '슬픔', value: emotion.sadness },
        { name: '분노', value: emotion.anger },
      ]
    : [
        { name: '행복', value: 0 },
        { name: '불안', value: 0 },
        { name: '중립', value: 0 },
        { name: '슬픔', value: 0 },
        { name: '분노', value: 0 },
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
          <p>{`${payload[0].name} : ${payload[0].value}%`}</p>
        </div>
      );
    }

    return null;
  };

  //감정 웅앵,,
  useEffect(() => {
    const fetchEmotion = async () => {
      try {
        const token = getAuthToken();
        if (!token) {
          throw new Error('Authorization token is missing');
        }
        const response = await axios.get(`${API_URL}/emotion/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Response data:', response.data); // 응답 데이터 로그 출력
        setEmotion(response.data);
      } catch (error) {
        console.error('There was an error fetching the emotion data!', error);
      }
    };

    fetchEmotion();
  }, [getAuthToken]);

  const nav = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  const handlePreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // const handleDayClick = (date) => {
  //   const formattedDate = `${date.getFullYear()}-${
  //     date.getMonth() + 1
  //   }-${date.getDate()}`;
  //   // nav(`/calendar/edit/${formattedDate}`);
  //   nav(`/EmotionAnal/formattedDate`);
  // };

  // const handleDayClick = (date) => {
  //   const formattedDate = `${date.getFullYear()}-${
  //     date.getMonth() + 1
  //   }-${date.getDate()}`;
  //   // nav(`/calendar/edit/${formattedDate}`);
  //   nav(`/EmotionAnal/formattedDate`);
  // };

  const handleDayClick = (date) => {
    const formattedDate = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    nav(`/EmotionAnal/${formattedDate}`);
  };

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptySlots = Array.from({ length: firstDayOfMonth }, (_, i) => null);

    const allDays = [...emptySlots, ...dates];

    return allDays.map((date, index) => {
      const currentDay = date ? new Date(year, month, date).getDay() : null;
      const isToday = date === currentDate.getDate();
      const isWeekend = currentDay === 0 || currentDay === 6; // 일요일(0) 또는 토요일(6)

      return (
        <div
          key={index}
          className="flex items-center justify-center h-10 cursor-pointer"
          onClick={() => date && handleDayClick(new Date(year, month, date))}
        >
          {date ? (
            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isToday
                  ? 'text-sky-500 font-bold'
                  : isWeekend
                  ? 'text-sky-500'
                  : 'text-black'
              }`}
            >
              {date}
            </span>
          ) : (
            <span className="inline-block w-8 h-8"></span>
          )}
        </div>
      );
    });
  };

  return (
    <div className="flex justify-around p-12 bg-[url('./img/cal_back.png')] bg-[length:3000px_100px] bg-no-repeat">
      {/* 캘린더 (왼) */}
      <div className="w-[45%] mt-2">
        <div className="p-6 bg-white rounded-lg shadow-md bg-transparent">
          {/* 캘린더 헤더 */}
          <div className="flex items-center justify-between mb-4">
            <button onClick={handlePreviousMonth} className="text-gray-500">
              &lt;
            </button>
            <span className="text-lg font-bold">
              {currentDate.getFullYear()}년 {months[currentDate.getMonth()]}
            </span>
            <button onClick={handleNextMonth} className="text-gray-500">
              &gt;
            </button>
          </div>
          {/* Cells */}
          <div className="grid grid-cols-7 gap-2">
            {daysOfWeek.map((day, index) => (
              <div
                key={day}
                className={`flex items-center justify-center h-36 font-bold my-[10px] ${
                  index % 7 === 0 || index % 7 === 6
                    ? 'text-sky-500'
                    : 'text-gray-500'
                }`}
              >
                {day}
              </div>
            ))}
            {renderDays()}
          </div>
        </div>
      </div>

      {/* 감정 분석 (오) */}
      <div className="w-[47%] static items-center mt-0">
        <div className="rounded-3xl p-5 bg-sky-100 w-full shadow-md">
          <div className="rounded-2xl p-10 bg-[white] shadow-md">
            <div className="block text-center underline underline-offset-4 decoration-1.3">
              <span className="block text-[24px]">김금쪽님의 월별</span>
              <span className="block text-[24px]">감정 보고서</span>
            </div>
            <div className="mt-5">
              <div className="rounded-xl bg-gray-100 w-[75%] mx-auto py-6 my-[30px] h-auto flex justify-center items-center">
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
              <div className="text-center text-[16px]">
                <div className="my-5">
                  <span className="text-black">
                    8월의 {displayName}님의 대표 감정은 '
                    {emotion ? (
                      <span>
                        {emotion.topEmotion === 'happiness' && '행복'}
                        {emotion.topEmotion === 'sadness' && '슬픔'}
                        {emotion.topEmotion === 'anxiety' && '불안'}
                        {emotion.topEmotion === 'neutral' && '중립'}
                        {emotion.topEmotion === 'anger' && '분노'}
                      </span>
                    ) : (
                      <span>Loading...</span>
                    )}
                    '이 {emotion ? `${emotion[emotion.topEmotion]}%` : '0%'}
                    이에요 !{' '}
                  </span>
                </div>
                <div className="border-y-2 py-5">
                  <span className="text-[#5BCBAB]">
                    자신의 감정을 알아보고, 직면하는 것만으로도 감정지수(EQ)를
                    높일 수 있다고 하네요. FeelInsight는 당신을 응원합니다.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
