// import React, { useState, useEffect } from 'react';
// import { getTopEmotions } from '../api/situationApi';

// export default function ApiEx() {
//   //일자별 최상위 감정
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

//   return (
//     <>
//       {/* <div>
//         <h1>음성 텍스트</h1>
//         <p>{voiceText}</p>
//       </div> */}
//       {/* <div>
//         <h1>박지우의 감정 상태</h1>
//         <p>행복할 때: {emotionData.happinessAt}</p>
//         <p>불안할 때: {emotionData.anxietyAt}</p>
//         <p>슬플 때: {emotionData.sadnessAt}</p>
//         <p>화날 때: {emotionData.angerAt}</p>
//       </div> */}
//       <div>
//         <h1>박지우의 최상위 감정 상태</h1>
//         {Object.keys(topEmotions).map((date) => (
//           <div key={date}>
//             <h2>{date}</h2>
//             <p>{topEmotions[date]}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const App = () => {
  return (
    <div>
      <LiteYouTubeEmbed
        id="L2vS_050c-M" //예시
        title="hey"
        noCookie={true} //default가 false라서 꼭 명시하기
      />
    </div>
  );
};

export default App;
