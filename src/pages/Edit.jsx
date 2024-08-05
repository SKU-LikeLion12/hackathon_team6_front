import { FaCaretRight } from "react-icons/fa";
import React, { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InvitePopupField from "../component/InvitePopupField";
import { useDropzone } from "react-dropzone";
import { API_URL } from "../config";

// Helper function to highlight changes in "수정전"
const highlightChangesBefore = (oldText, newText) => {
  const diff = [];
  const oldWords = oldText.split(" ");
  const newWords = newText.split(" ");

  let i = 0;
  let j = 0;

  while (i < oldWords.length || j < newWords.length) {
    if (
      i < oldWords.length &&
      j < newWords.length &&
      oldWords[i] === newWords[j]
    ) {
      diff.push(oldWords[i] + " ");
      i++;
      j++;
    } else {
      if (
        i < oldWords.length &&
        (j >= newWords.length || oldWords[i] !== newWords[j])
      ) {
        // Highlight removed word in oldText
        diff.push(
          <span className="text-red-700 font-bold" key={`old-${i}`}>
            {oldWords[i] + " "}
          </span>
        );
        i++;
      }

      if (
        j < newWords.length &&
        (i >= oldWords.length || oldWords[i] !== newWords[j])
      ) {
        // Skip added word in newText
        j++;
      }
    }
  }

  return diff;
};

// Helper function to highlight changes in "수정후"
const highlightChangesAfter = (oldText, newText) => {
  const diff = [];
  const oldWords = oldText.split(" ");
  const newWords = newText.split(" ");

  let i = 0;
  let j = 0;

  while (i < oldWords.length || j < newWords.length) {
    if (
      i < oldWords.length &&
      j < newWords.length &&
      oldWords[i] === newWords[j]
    ) {
      diff.push(newWords[j] + " ");
      i++;
      j++;
    } else {
      if (
        j < newWords.length &&
        (i >= oldWords.length || oldWords[i] !== newWords[j])
      ) {
        // Highlight added word in newText
        diff.push(
          <span className="text-red-700 font-bold" key={`new-${j}`}>
            {newWords[j] + " "}
          </span>
        );
        j++;
      } else {
        i++;
      }
    }
  }

  return diff;
};

export default function Edit() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");

  const [image, setImage] = useState(null);
  const [content, setContent] = useState(
    "오늘은 성결대학교 6팀 팀원들과 함께 앱 개발을 하였다. 혼자 할 때는 어려웠는데 다 같이 으쌰으쌰 하니 금방 끝났다. 뿌듯했다."
  );
  const [editedContent, setEditedContent] = useState(content);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png", ".jpeg"],
    },
  });

  const params = useParams();
  const navigate = useNavigate();

  const [InvitePopup, setInvitePopup] = useState(false);

  const handleCloseInvitePopup = () => {
    setInvitePopup(false);
  };

  const handleSaveDiary = async () => {
    const token = "your_token_here"; // 실제 토큰으로 교체하세요.

    const diaryData = {
      token: token,
      content: editedContent,
      date: `${params.id}`, // `params.id`가 올바른 날짜 형식인지 확인하세요.
      emotion: {
        emotionId: 0,
        user: {
          userId: 0,
          userName: "string",
          id: "string",
          email: "string",
          password: "string",
          phoneNumber: "string",
          birthDate: "2024-08-05",
          gender: "M",
          createdAt: "2024-08-05T01:53:12.073Z",
          updatedAt: "2024-08-05T01:53:12.073Z",
          job: "string",
        },
        happiness: 0,
        anxiety: 0,
        neutral: 0,
        sadness: 0,
        anger: 0,
        createAt: "2024-08-05T01:53:12.073Z",
        updateAt: "2024-08-05T01:53:12.073Z",
        topEmotion: "string",
      },
    };

    try {
      const response = await fetch(`${API_URL}/${params.diaryId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(diaryData),
      });

      if (response.ok) {
        // 성공적인 업데이트 처리
        alert("일기가 성공적으로 업데이트되었습니다.");
        navigate("/calendar"); // 일기 목록 페이지 또는 다른 페이지로 리다이렉트
      } else {
        // 서버 응답에 대한 상세 정보를 로그에 기록
        const errorData = await response.json();
        console.error("서버 오류:", errorData);
        alert(
          `일기 업데이트에 실패했습니다. 서버 응답: ${
            errorData.message || "알 수 없는 오류"
          }`
        );
      }
    } catch (error) {
      console.error("일기 업데이트 중 오류 발생:", error);
      alert("일기 업데이트 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="flex justify-center items-center bg-[url('./img/edit_back.png')] bg-[length:3000px_1000px] h-[700px] bg-no-repeat ">
      {/* 왼 */}
      <div className="w-[45%]">
        <span className="flex justify-center mb-10 text-xl">
          일기장 미리보기
        </span>
        <div className="flex justify-center">
          <div className="w-[75%] h-auto">
            <div className="rounded-3xl p-5 bg-zinc-300 w-full h-full drop-shadow-md">
              <div className="rounded-2xl p-8 bg-white h-full drop-shadow-md">
                <span className="block text-gray-500 text-xl">{params.id}</span>
                <div className="mt-3">
                  <div className="my-6">
                    {image ? (
                      <div>
                        <img
                          src={image}
                          alt="Uploaded"
                          className="rounded-xl py-2 h-auto"
                        />
                      </div>
                    ) : (
                      <div
                        {...getRootProps()}
                        style={{
                          border: "2px dashed #ccc",
                          padding: "20px",
                          cursor: "pointer",
                        }}
                      >
                        <input {...getInputProps()} />
                        <p>원하는 사진을 선택해주세요!</p>
                      </div>
                    )}
                  </div>
                  <textarea
                    className="w-full h-[150px] p-2 border rounded"
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                  />
                  <button className="mt-2" onClick={() => setImage(null)}>
                    <img
                      src="../img/changeImage.png"
                      className="w-[40px] absolute right-10 bottom-10"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 화살표 */}
      <div className="flex justify-center items-center h-full">
        <FaCaretRight size={35} />
      </div>

      {/* 오 */}
      <div className="w-[45%]">
        <span className="flex justify-center mb-10 text-xl">
          <span className="text-red-700 font-bold">잘못된 내용</span>이 있다면
          수정해주세요!
        </span>
        <div className="flex justify-center ">
          <div className="w-[75%] h-auto">
            <div className="rounded-3xl p-5 bg-sky-100 w-full h-full drop-shadow-md">
              <div className="rounded-2xl p-5 bg-white h-full drop-shadow-md">
                <div>
                  <div className="text-center text-[#495057]">
                    <div className="rounded-tl-[0px] rounded-tr-[150px] rounded-bl-[150px] rounded-br-[150px] bg-[#FFF2B2] p-5 h-auto mt-[7%] mx-[15px]">
                      <h1 className="mb-2 font-bold">수정전</h1>
                      <span>
                        {highlightChangesBefore(content, editedContent)}
                      </span>
                    </div>
                    <div className="rounded-tl-[150px] rounded-tr-[150px] rounded-bl-[150px] rounded-br-[0px] bg-[#C6E2F1] p-5 mt-[10%] h-auto mx-[15px]">
                      <h1 className="mb-2 font-bold">수정후</h1>
                      <span>
                        {highlightChangesAfter(content, editedContent)}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center text-center my-[10%]">
                    <button
                      className="bg-[#5BCBAB] font-bold	text-white py-3 px-28 rounded-full"
                      onClick={handleSaveDiary}
                    >
                      일기장 저장
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InvitePopupField show={InvitePopup} onClose={handleCloseInvitePopup}>
        <div className="p-4 flex flex-col justify-center text-center items-center h-[230px] w-[550px]">
          <p className="text-2xl font-bold text-[#5BCBAB] mb-8">
            게시하시겠습니까?
          </p>
          <div className="text-lg text-gray-500">
            <p>게시 후 수정이 가능합니다.</p>
            <p>
              게시된 일기장은{" "}
              <span className="underline">사용자 감정 분석에 사용</span>
              됩니다.
            </p>
          </div>
          <div className="flex justify-around h-12 mt-8">
            <button
              className="bg-[#D9D9D9] font-bold text-xl w-[50%] h-[20%] absolute left-0 bottom-0 rounded-bl-3xl "
              onClick={handleCloseInvitePopup}
            >
              취소
            </button>
            <button
              className="bg-[#5BCBAB] font-bold text-xl text-white w-[50%] h-[20%] absolute right-0 bottom-0 rounded-br-3xl"
              onClick={handleSaveDiary}
            >
              게시
            </button>
          </div>
        </div>
      </InvitePopupField>
    </div>
  );
}
