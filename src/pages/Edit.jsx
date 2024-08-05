import { FaCaretRight } from 'react-icons/fa';
import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import InvitePopupField from '../component/InvitePopupField';
import { useDropzone } from 'react-dropzone';

export default function Edit() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const day = days[now.getDay()];

  const [image, setImage] = useState(null);

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
      'image/png': ['.png', '.jpeg'],
    },
  });

  const params = useParams();

  const [InvitePopup, setInvitePopup] = useState(false);

  const handleInviteUser = (event) => {
    setInvitePopup(true);
  };

  const handleCloseInvitePopup = (event) => {
    setInvitePopup(false);
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
                <span className="block text-gray-500 text-xl">
                  {year}. {month}. {date} ({day})
                </span>
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
                          border: '2px dashed #ccc',
                          padding: '20px',
                          cursor: 'pointer',
                        }}
                      >
                        <input {...getInputProps()} />
                        <p>원하는 사진을 선택해주세요!</p>
                      </div>
                    )}
                  </div>
                  <div className="border-t-2 py-5 mt-5">
                    <span className="text-[#495057]">
                      오늘은 성결대학교 6팀 팀원들과 함께 앱 개발을 하였다. 혼자
                      할 때는 어려웠는데 다 같이 으쌰으쌰 하니 금방 끝났다.
                      뿌듯했다.
                    </span>
                  </div>
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
                      <div>
                        인식된 테스트:
                        {/* {refinedText ? <p>{refinedText}</p> : <p>Loading...</p>} */}
                      </div>
                      <span>
                        오늘은 성결대학교 6팀 팀원들과 함께 앱 개발을 하였다.
                        혼자 할 때는 어려웠는데 다 같이{' '}
                        <span className="text-red-700 font-bold">으쌰으쌰</span>{' '}
                        하니 금방 끝났다. 뿌듯했다.
                      </span>
                    </div>
                    <div className="rounded-tl-[150px] rounded-tr-[150px] rounded-bl-[150px] rounded-br-[0px] bg-[#C6E2F1] p-5 mt-[10%] h-auto mx-[15px]">
                      <h1 className="mb-2 font-bold	">수정후</h1>
                      <span>
                        <hr />
                        오늘은 성결대학교 6팀 팀원들과 함께 앱 개발을 하였다.
                        혼자 할 때는 어려웠는데 다 같이{' '}
                        <span className="text-red-700 font-bold">
                          열심히
                        </span>{' '}
                        하니 금방 끝났다. 뿌듯했다.
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center text-center my-[10%]">
                    <button
                      className="bg-[#5BCBAB] font-bold	text-white py-3 px-28 rounded-full"
                      onClick={handleInviteUser}
                    >
                      일기장 저장
                    </button>
                    <InvitePopupField
                      show={InvitePopup}
                      onClose={handleCloseInvitePopup}
                    >
                      <div className="p-4 w-[550px] h-[230px]">
                        <p className="text-2xl font-bold text-[#5BCBAB] mb-8">
                          게시하시겠습니까?
                        </p>
                        <div className="text-lg text-gray-500">
                          <p>게시 후 수정이 가능합니다.</p>
                          <p>
                            게시된 일기장은{' '}
                            <span className="underline">
                              사용자 감정 분석에 사용
                            </span>
                            됩니다.
                          </p>
                        </div>
                        <div className="flex justify-around h-12 mt-8">
                          <button className="bg-[#D9D9D9] font-bold text-xl w-[50%] h-[20%] absolute left-0 bottom-0 rounded-bl-3xl ">
                            취소
                          </button>
                          <button className="bg-[#5BCBAB] font-bold text-xl text-white w-[50%] h-[20%] absolute right-0 bottom-0 rounded-br-3xl">
                            게시
                          </button>
                        </div>
                      </div>
                    </InvitePopupField>
                  </div>
                  <div className="mt-10 text-center">
                    <div className="text-xl">감정 분석</div>
                    {/* <ul>
                      {Object.entries(transcription.emotions).map(
                        ([emotion, value]) => (
                          <li key={emotion} className="text-lg">
                            {emotion}: {value}
                          </li>
                        )
                      )}
                    </ul> */}
                    <div className="text-xl mt-5">상황 분석</div>
                    {/* <ul>
                      {Object.entries(transcription.situation).map(
                        ([situationKey, situationValue]) => (
                          <li key={situationKey} className="text-lg">
                            {situationKey}: {situationValue}
                          </li>
                        )
                      )}
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
