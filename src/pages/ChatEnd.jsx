import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import axios from "axios";
import "./style.css";

export default function ChatEnd() {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleStartRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.start();
      setRecording(true);

      mediaRecorderRef.current.addEventListener("dataavailable", (event) => {
        audioChunksRef.current.push(event.data);
      });
    });
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current.stop();

    mediaRecorderRef.current.addEventListener("stop", () => {
      const audioBlob = new Blob(audioChunksRef.current, {
        type: "audio/webm",
      });

      const formData = new FormData();
      formData.append("file", audioBlob, "recording.webm"); // 파일 이름 추가
      const authToken = localStorage.getItem("authToken");

      axios.post("http://team6ai.sku-sku.com/upload-audio/", formData, {
        headers: {
          Authorization: `${authToken}`, // 토큰을 적절히 설정
          "Content-Type": "multipart/form-data", // 파일 업로드를 위한 콘텐츠 타입
        },
      });

      audioChunksRef.current = [];
      setRecording(false);
    });
  };

  return (
    <>
      <div className="chatbg">
        <div className="flex flex-col items-center">
          <div className="mt-[90px] font-extralight text-[#495057] text-[45px]">
            더 들려줄 이야기 있을까요 ?
          </div>
          <div className="relative mt-[90px] flex flex-col items-center justify-center">
            <img
              src="../img/ball_2.png"
              className="h-60 w-60 animate-bounce"
              alt=""
            />
            <div className="shadow-circle"></div>
          </div>
          <div className="flex flex-row">
            <NavLink to="">
              <button
                className="flex items-center mr-[35px] justify-around mt-[100px] bg-white h-[52px] w-[188px] text-xl text-[#5BCBAB] py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)] border-2 border-[#5BCBAB] cursor-pointer"
                onClick={handleStartRecording}
                disabled={recording}
              >
                <FaPlay />
                계속하기
              </button>
            </NavLink>
            <NavLink to="/diaryStart">
              <button
                className="flex items-center justify-around mt-[100px] bg-[#5BCBAB] h-[52px] w-[188px] text-xl font-semibold text-white py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)] cursor-pointer"
                onClick={handleStopRecording}
                disabled={!recording}
              >
                <img src="../img/end.png" className="w-[25px]" alt="" />
                종료하기
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
