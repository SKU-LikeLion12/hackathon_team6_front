import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config';

export default function Message() {
  const username = localStorage.getItem('username') || '"guest"';
  const displayName = username.length > 2 ? username.slice(1, -1) : username;

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const initialData = {
    refined_text: '이제 저녁이라 햄버거 먹는 중 입니다.',
    emotions: {
      anger: 1,
      anxiety: 0,
      happiness: 1,
      neutral: 98,
      sadness: 0,
    },
    situation: {
      분노: '',
      불안: '',
      슬픔: '',
      행복: '',
    },
    message: 'Chat entry processed successfully',
  };

  const [data, setData] = useState(initialData);

  return (
    <div>
      <h1>{displayName}</h1>
      {data && (
        <>
          <p>
            <strong>Text:</strong> {data.refined_text}
          </p>
          {/* <p>
            <strong>Message:</strong> {data.message}
          </p> */}
          <h2>Emotions</h2>
          <ul>
            <li>
              <strong>분노:</strong> {data.emotions.anger}
            </li>
            <li>
              <strong>불안:</strong> {data.emotions.anxiety}
            </li>
            <li>
              <strong>행복:</strong> {data.emotions.happiness}
            </li>
            {/* <li>
              <strong>Neutral:</strong> {data.emotions.neutral}
            </li> */}
            <li>
              <strong>슬픔:</strong> {data.emotions.sadness}
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
