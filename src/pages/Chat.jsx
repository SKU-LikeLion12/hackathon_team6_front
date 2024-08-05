import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function Chat() {
  const username = localStorage.getItem('username') || '"guest"';
  const displayName = username.length > 2 ? username.slice(1, -1) : username;

  const [emotion, setEmotion] = useState(null);
  const { getAuthToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchEmotion = async () => {
      try {
        const token = getAuthToken();
        if (!token) {
          throw new Error('Authorization token is missing');
        }
        const response = await axios.get(
          `http://team6back.sku-sku.com/emotion/user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log('Response data:', response.data); // 응답 데이터 로그 출력
        setEmotion(response.data);
      } catch (error) {
        console.error('There was an error fetching the emotion data!', error);
      }
    };

    fetchEmotion();
  }, [getAuthToken]);

  return (
    <div>
      <p>Username: {displayName}</p>
      <div>
        <h3>Emotion Data</h3>
        {emotion ? (
          <>
            <p>Happiness: {emotion.happiness}%</p>
            <p>Anxiety: {emotion.anxiety}%</p>
            <p>Neutral: {emotion.neutral}%</p>
            <p>Sadness: {emotion.sadness}%</p>
            <p>Anger: {emotion.anger}%</p>
            <p>Top Emotion: {emotion.topEmotion}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
