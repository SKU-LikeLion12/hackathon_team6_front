import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import axios from 'axios';
import './style.css';
// import Edit from '../pages/Edit';

export default function ChatStart() {
  const [logValue, setLogValue] = useState('');

  // const logToScreen = (formData) => {
  //   console.log(formData);
  //   setLogValue(formData);
  // };

  // useEffect(() => {
  //   logToScreen('http://team6ai.sku-sku.com/transcribe/', formData).then(
  //     (response) => {
  //       console.log('음성 인식 결과:', response.data);
  //     }
  //   );
  // }, []);

  const [recording, setRecording] = useState(false);
  const [transcription, setTranscription] = useState({
    refined_text: '',
    emotions: {},
    situation: {},
  });
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleStartRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.start();
      setRecording(true);

      mediaRecorderRef.current.addEventListener('dataavailable', (event) => {
        audioChunksRef.current.push(event.data);
      });
    });
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current.stop();

    mediaRecorderRef.current.addEventListener('stop', async () => {
      const audioBlob = new Blob(audioChunksRef.current, {
        type: 'audio/webm',
      });
      const audioBytes = await audioBlob.arrayBuffer(); // 파일을 바이트 배열로 변환
      const authToken = localStorage.getItem('authToken');

      const token = authToken; // 실제 JWT 토큰 값을 사용
      console.log(audioBytes);
      axios
        .post('http://team6back.sku-sku/upload-audio', audioBytes, {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/octet-stream', // 바이트 스트림 전송을 위한 MIME 타입
          },
        })
        .then((response) => {
          console.log('Server response:', response.data);
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });

      audioChunksRef.current = [];
      setRecording(false);
    });
  };

  return (
    <>
      <div className="chatbg">
        <div className="flex flex-col items-center ">
          <div className="mt-[90px] font-extralight text-[#495057] text-[45px]">
            이야기를 시작해 볼까요 ?
          </div>
          <div className="relative mt-[90px] flex flex-col items-center justify-center">
            <img
              src="../img/ball_2.png"
              className="h-60 w-60 animate-bounce"
              alt=""
            />
            <div className="shadow-circle"></div>
          </div>
          <div>
            <div className="flex flex-row">
              <NavLink to="">
                <button
                  className="flex items-center mr-[35px] justify-around mt-[100px] bg-white h-[52px] w-[188px] text-xl font-semibold text-[#5BCBAB] py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)] border-2 border-[#5BCBAB] cursor-pointer"
                  onClick={handleStartRecording}
                  disabled={recording}
                >
                  <FaMicrophone />
                  대화하기
                </button>
              </NavLink>
              {/* <NavLink to="/DiaryStart"> */}
              <button
                className="flex items-center mr-[35px] justify-around mt-[100px] bg-[#5BCBAB] h-[52px] w-[188px] text-xl font-semibold text-white py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)] border-2 border-[#5BCBAB] cursor-pointer"
                onClick={handleStopRecording}
                disabled={!recording}
              >
                <img src="../img/end.png" className="w-[25px]" alt="" />
                종료하기
              </button>
              {/* </NavLink> */}
              <NavLink to="/DiaryStart">
                <button className="flex items-center justify-around mt-[100px] bg-[#5BCBAB] h-[52px] w-[25px] text-xl font-semibold text-white py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)] cursor-pointer">
                  {/* <img src="../img/end.png" className="w-[25px]" alt="" /> */}
                </button>
              </NavLink>
            </div>
            {/* <div>{transcription}</div> */}
            {/* <Edit transcription={transcription} /> */}
            {/* <div>
              <span className="font-bold">콘솔 값 화면 출력: </span>
              <span>dd{logValue}</span>
            </div> */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
