import React, { useState, useEffect } from 'react';
import { getEmotionSituation } from '../api/situationApi';
import axios from 'axios';

export default function VoiceTextDisplay() {
  const [emotionData, setEmotionData] = useState(null);
  const situation = 0; // 상황 ID를 필요에 맞게 설정하세요

  useEffect(() => {
    const fetchEmotionData = async () => {
      try {
        const data = await getEmotionSituation(situation);
        setEmotionData(data);
      } catch (error) {
        // console.error('Failed to fetch emotion data:', error);
      }
    };

    fetchEmotionData();
  }, [situation]);

  if (!emotionData) {
    return <div>Loading...</div>;
  }
  // const [voiceText, setVoiceText] = useState('');
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   // 서버 API로부터 데이터 불러오기
  //   const fetchVoiceText = async () => {
  //     try {
  //       const response = await axios.get(`${API_URL}/api/chat`);
  //       setVoiceText(response.data.text);
  //     } catch (err) {
  //       setError('데이터를 불러오는 중 오류가 발생했습니다.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchVoiceText();
  // }, []);

  // if (loading) return <p>로딩 중...</p>;

  return (
    <>
      {/* <div>
        <h1>음성 텍스트</h1>
        <p>{voiceText}</p>
      </div> */}
      <div>
        <h1>박지우의 감정 상태</h1>
        <p>행복할 때: {emotionData.happinessAt}</p>
        <p>불안할 때: {emotionData.anxietyAt}</p>
        <p>슬플 때: {emotionData.sadnessAt}</p>
        <p>화날 때: {emotionData.angerAt}</p>
      </div>
    </>
  );
}
