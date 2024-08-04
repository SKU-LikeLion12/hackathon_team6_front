import React, { useState, useRef } from 'react';

const App = () => {
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

      fetch('http://127.0.0.1:8000/transcribe/', {
        method: 'POST',
        body: formData,
      })
        // .then((response) => response.json())
        // .then((data) => {
        //   console.log('STT result:', data);
        // });
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log('STT result:', data);
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
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
};

export default App;
