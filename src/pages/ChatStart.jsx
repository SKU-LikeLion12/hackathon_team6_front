import { React, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import axios from 'axios';
import './style.css';

export default function ChatStart() {
  const [recording, setRecording] = useState(false);
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
    mediaRecorderRef.current.addEventListener('stop', () => {
      const audioBlob = new Blob(audioChunksRef.current, {
        type: 'audio/webm',
      });
      const formData = new FormData();
      formData.append('file', audioBlob);

      axios
        .post('https://team6ai.sku-sku.com/transcribe/', formData)
        .then((response) => {
          console.log('음성 인식 결과:', response.data);
        })
        .catch((error) => {
          console.error('오류가 발생했습니다:', error);
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
            <img src="../img/ball_2.png" className="h-60 w-60 animate-bounce" />
            <div className="shadow-circle"></div>
          </div>
          <div>
            <div className="flex flex-row">
              <NavLink to="">
                <button
                  className="flex items-center mr-[35px] justify-around mt-[100px] bg-white h-[52px] w-[188px] text-xl text-[#5BCBAB] py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)] border-2 border-[#5BCBAB]"
                  onClick={handleStartRecording}
                  disabled={recording}
                >
                  <FaMicrophone />
                  대화하기
                </button>
              </NavLink>
              <NavLink to="">
                <button
                  className="flex items-center justify-around mt-[100px] bg-[#5BCBAB] h-[52px] w-[188px] text-xl font-semibold text-white py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)]"
                  onClick={handleStopRecording}
                  disabled={!recording}
                >
                  <img src="../img/end.png" className="w-[25px]" />
                  종료하기
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
