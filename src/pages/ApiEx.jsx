import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
// import { getTopEmotions } from '../api/situationApi';

export default function ApiEx() {
  const username = localStorage.getItem('username') || '"guest"';
  const displayName = username.length > 2 ? username.slice(1, -1) : username;
  const chatId = 6; // 원하는 chatId를 여기에 정의합니다.

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${API_URL}/chat/${chatId}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [chatId]);

  // if (loading) return <div>Loading...</div>;
  // if (error) {
  //   return (
  //     <div>
  //       <p>Error: {error.message}</p>
  //       {error.response && <p>Details: {error.response.data.message}</p>}
  //     </div>
  //   );
  // }

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // ** 유저 정보 불러오기
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await axios.get(
  //         'http://team6back.sku-sku.com/user/joy002208',
  //         {
  //           // const response = await axios.get(`${API_URL}/user/{id}`, {
  //           params: {
  //             id: userId,
  //           },
  //           // headers: {
  //           //   Authorization: 'token', // 헤더 설정
  //           // },
  //         }
  //       );
  //       setData(response.data);
  //     } catch (error) {
  //       console.error(error);
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   getData();
  // }, [userId]);

  // if (loading) return <div>Loading...</div>;
  // if (error) {
  //   return (
  //     <div>
  //       <p>Error: {error.message}</p>
  //       {error.response && <p>Details: {error.response.data.message}</p>}
  //     </div>
  //   );
  // }

  //**감정 조회
  // const [emotionData, setEmotionData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const [id, setId] = useState('');
  // const [happiness, setHappiness] = useState('');
  // const [anxiety, setAnxiety] = useState('');
  // const [neutral, setNeutral] = useState('');
  // const [sadness, setSadness] = useState('');
  // const [anger, setAnger] = useState('');

  // useEffect(() => {
  //   const fetchEmotionData = async () => {
  //     try {
  //       const response = await axios.get(`{API_URL}/emotion/{emotionId}`);
  //       setEmotionData(response.data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err);
  //       setLoading(false);
  //     }
  //   };

  //   fetchEmotionData();
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  //   //**일자별 최상위 감정
  //   const [topEmotions, setTopEmotions] = useState(null);
  //   const [error, setError] = useState(null);
  //   const situation = 0; // 상황 ID를 필요에 맞게 설정하세요

  //   useEffect(() => {
  //     const fetchTopEmotions = async () => {
  //       try {
  //         const data = await getTopEmotions(situation);
  //         setTopEmotions(data);
  //       } catch (error) {
  //         console.error('Failed to fetch top emotions:', error);
  //       }
  //     };

  //     fetchTopEmotions();
  //   }, [situation]);

  //   if (error) {
  //     return <div>{error}</div>;
  //   }

  //   if (!topEmotions) {
  //     return <div>Loading...</div>;
  //   }

  //   // ** 상황별 감정 불러오기
  //   // const [emotionData, setEmotionData] = useState(null);
  //   // const situation = 0; // 상황 ID를 필요에 맞게 설정하세요

  //   // useEffect(() => {
  //   //   const fetchEmotionData = async () => {
  //   //     try {
  //   //       const data = await getEmotionSituation(situation);
  //   //       setEmotionData(data);
  //   //     } catch (error) {
  //   //       // console.error('Failed to fetch emotion data:', error);
  //   //     }
  //   //   };

  //   //   fetchEmotionData();
  //   // }, [situation]);

  //   // if (!emotionData) {
  //   //   return <div>Loading...</div>;
  //   // }

  //   // ** 챗 불러오기...
  //   // const [voiceText, setVoiceText] = useState('');
  //   // const [loading, setLoading] = useState(true);
  //   // const [error, setError] = useState(null);

  //   // useEffect(() => {
  //   //   // 서버 API로부터 데이터 불러오기
  //   //   const fetchVoiceText = async () => {
  //   //     try {
  //   //       const response = await axios.get(`${API_URL}/api/chat`);
  //   //       setVoiceText(response.data.text);
  //   //     } catch (err) {
  //   //       setError('데이터를 불러오는 중 오류가 발생했습니다.');
  //   //     } finally {
  //   //       setLoading(false);
  //   //     }
  //   //   };

  //   //   fetchVoiceText();
  //   // }, []);

  //   // if (loading) return <p>로딩 중...</p>;

  return (
    <>
      {/* <h1>Emotion Details</h1> */}
      <p>Username: {displayName}</p>
      {data ? (
        <div>
          <p>Chat ID: {data.chatId}</p>
          <p>Start Time: {data.startTime}</p>
          <p>End Time: {data.endTime}</p>
          <p>Message: {data.message}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
      {/* <h1>User Details</h1>
      {data ? (
        <div>
          <p>User Name: {data.username}</p>
          <p>Email: {data.email}</p>
          <p>Phone Number: {data.phone_number}</p>
          <p>Birth Date: {data.birth_date}</p>
          <p>Gender: {data.gender}</p>
          <p>Job: {data.job}</p>
          <p>ID: {data.id}</p>
        </div>
      ) : (
        <div>No data found</div>
      )} */}
      {/* {emotionData && (
        <div>
          <p>Happiness: {emotionData.happiness}</p>
          <p>Anxiety: {emotionData.anxiety}</p>
          <p>Neutral: {emotionData.neutral}</p>
          <p>Sadness: {emotionData.sadness}</p>
          <p>Anger: {emotionData.anger}</p>
        </div>
      )} */}
      {/* <div>
//         <h1>음성 텍스트</h1>
//         <p>{voiceText}</p>
//       </div> */}
      {/* <div>
//         <h1>박지우의 감정 상태</h1>
//         <p>행복할 때: {emotionData.happinessAt}</p>
//         <p>불안할 때: {emotionData.anxietyAt}</p>
//         <p>슬플 때: {emotionData.sadnessAt}</p>
//         <p>화날 때: {emotionData.angerAt}</p>
//       </div> */}
      {/* //       <div>
//         <h1>박지우의 최상위 감정 상태</h1>
//         {Object.keys(topEmotions).map((date) => (
//           <div key={date}>
//             <h2>{date}</h2>
//             <p>{topEmotions[date]}</p>
//           </div>
//         ))}
//       </div> */}
    </>
  );
}
