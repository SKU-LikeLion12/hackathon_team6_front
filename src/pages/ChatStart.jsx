import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa";
import axios from "axios";
import "./style.css";
import { FaRegCircleStop } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";

// import Edit from '../pages/Edit';

export default function ChatStart() {
  const [logValue, setLogValue] = useState("");
  const [recording, setRecording] = useState(false);
  const [transcription, setTranscription] = useState({
    refined_text: "",
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
      formData.append("file", audioBlob, "recording.webm");
      const authToken = localStorage.getItem("authToken");

      axios.post("http://team6ai.sku-sku.com/upload-audio/", formData, {
        headers: {
          Authorization: `${authToken}`,
          "Content-Type": "multipart/form-data",
        },
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
            {recording
              ? "녹음을 종료하고 일기를 확인하세요!"
              : "이야기를 시작해 볼까요 ?"}
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
              {recording ? (
                <>
                  <button
                    className="flex items-center mr-[35px] justify-around mt-[100px] bg-white h-[52px] w-[188px] text-xl text-[#5BCBAB] py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)] border-2 border-[#5BCBAB] cursor-pointer"
                    onClick={handleStopRecording}
                  >
                    <FaRegCircleStop size={24} />
                    종료하기
                  </button>

                  <NavLink to="/EmotionAnal/:id">
                    <button
                      className="flex items-center justify-around mt-[100px] bg-[#5BCBAB] h-[52px] w-[210px] text-xl font-semibold text-white py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)] cursor-pointer"
                      disabled={recording}
                    >
                      일기 확인하기
                      <img
                        src="../img/diaryIcon.png"
                        className="w-[17px] ml-1"
                        alt=""
                      />
                    </button>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="">
                    <button
                      className="flex items-center mr-[35px] justify-around mt-[100px] bg-white h-[52px] w-[188px] text-xl text-[#5BCBAB] py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)] border-2 border-[#5BCBAB] cursor-pointer"
                      onClick={handleStartRecording}
                    >
                      <FaMicrophone />
                      대화하기
                    </button>
                  </NavLink>

                  <NavLink to="">
                    <button
                      className="flex items-center justify-evenly mt-[100px] bg-[#5BCBAB] h-[52px] w-[170px] text-xl font-semibold text-white py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)] cursor-pointer"
                      disabled={recording}
                    >
                      홈으로
                      <IoHome />
                    </button>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
