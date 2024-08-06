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

    mediaRecorderRef.current.addEventListener('stop', async () => {
      const audioBlob = new Blob(audioChunksRef.current, {
        type: 'audio/webm',
      });
      const audioBytes = await audioBlob.arrayBuffer();
      const authToken = localStorage.getItem('authToken');

      const token = authToken;

      axios
        .post('http://team6back.sku-sku/upload-audio', audioBytes, {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/octet-stream',
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

  // const handleStopRecording = () => {
  //   mediaRecorderRef.current.stop();

  //   mediaRecorderRef.current.addEventListener('stop', async () => {
  //     const audioBlob = new Blob(audioChunksRef.current, {
  //       type: 'audio/webm',
  //     });
  //     const audioBytes = await audioBlob.arrayBuffer(); // 파일을 바이트 배열로 변환
  //     const authToken = localStorage.getItem('authToken');
  //     const token = authToken; // 실제 JWT 토큰 값을 사용

  //     const formData = new FormData();
  //     const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // 날짜와 시간을 파일 이름에 포함
  //     formData.append('file', audioBlob, `audiofile-${timestamp}.webm`); // 'file'은 서버에서 기대하는 필드 이름으로 변경하세요.
  //     axios
  //       .post('http://team6back.sku-sku/upload-audio', formData, {
  //         headers: {
  //           Authorization: `${token}`,
  //           'Content-Type': 'multipart/form-data', // multipart/form-data 형식으로 전송
  //         },
  //       })
  //       .then((response) => {
  //         console.log('Server response:', response.data);
  //       })
  //       .catch((error) => {
  //         console.error('Error uploading file:', error);
  //       });

  //     audioChunksRef.current = [];
  //     setRecording(false);
  //   });
  // };

  return (
    <div>
      <button onClick={handleStartRecording} disabled={recording}>
        대화 시작하기
      </button>
      <button onClick={handleStopRecording}>녹음 중지</button>
    </div>
  );
}
