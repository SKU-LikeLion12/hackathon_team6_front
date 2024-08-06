import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import { AuthContext } from '../context/AuthContext';

export default function ApiEx() {
  const { getAuthToken } = useContext(AuthContext);
  const username = localStorage.getItem('username') || '"guest"';
  const displayName = username.length > 2 ? username.slice(1, -1) : username;

  const [situation, setSituation] = useState(null);

  useEffect(() => {
    const fetchAt = async () => {
      try {
        const token = getAuthToken();
        if (!token) {
          throw new Error('Authorization token is missing');
        }
        const response = await axios.get(`${API_URL}/situation`, {
          headers: {
            token: token,
          },
        });
        // console.log('Response data:', response.data); // 응답 데이터 로그 출력
        setSituation(response.data);
      } catch (error) {
        console.error('There was an error fetching the emotion data!', error);
        if (error.response) {
        }
      }
    };
    fetchAt();
  }, [getAuthToken]);

  return (
    <>
      <p>Username: {displayName}</p>
      <hr />
      <div>
        행복할때:{' '}
        {situation ? (
          <span>{situation.happinessAt}</span>
        ) : (
          <span>Loading...</span>
        )}
      </div>
      <div>
        불안할때:{' '}
        {situation ? (
          <span>{situation.anxietyAt}</span>
        ) : (
          <span>Loading...</span>
        )}
      </div>
      <div>
        화날때:{' '}
        {situation ? (
          <span>{situation.sadnessAt}</span>
        ) : (
          <span>Loading...</span>
        )}
      </div>
      <div>
        슬플때:{' '}
        {situation ? <span>{situation.angerAt}</span> : <span>Loading...</span>}
      </div>
    </>
  );
}
