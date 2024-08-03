import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config';

export default function VoiceTextDisplay() {
  const [voiceText, setVoiceText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 서버 API로부터 데이터 불러오기
    const fetchVoiceText = async () => {
      try {
        const response = await axios.get(`${API_URL}/diary/top-emotion`);
        setVoiceText(response.data.text);
      } catch (err) {
        setError('데이터를 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchVoiceText();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div>
        <h1>음성 텍스트</h1>
        <p>{voiceText}</p>
      </div>
    </>
  );
}
