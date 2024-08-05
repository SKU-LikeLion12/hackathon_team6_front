import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function Edit() {
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
      const authToken = localStorage.getItem('authToken'); //토큰

      axios
        .post('http://team6ai.sku-sku.com/transcribe/', formData, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          console.log('음성 인식 결과:', response.data);
          // console.log('토큰:', `${authToken}`);
        })
        .catch((error) => {
          console.error('오류가 발생했습니다:', error);
        });

      audioChunksRef.current = [];
      setRecording(false);
    });
  };

  return (
    <div>
      <button onClick={handleStartRecording} disabled={recording}>
        대화 시작하기
      </button>
      <button onClick={handleStopRecording} disabled={!recording}>
        녹음 중지
      </button>
    </div>
  );
}
