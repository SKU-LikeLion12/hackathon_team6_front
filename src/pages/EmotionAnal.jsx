import React, { useState, useCallback, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import InvitePopupField from "../component/InvitePopupField";
import "./style.css";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const API_URL = "http://team6back.sku-sku.com"; // API URL

export default function EmotionAnal() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const day = days[now.getDay()];

  const { getAuthToken } = useContext(AuthContext); // AuthContext에서 getAuthToken 가져오기
  const [InvitePopup, setInvitePopup] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false); // 삭제 요청 상태
  const [error, setError] = useState(null); // 오류 상태
  const [image, setImage] = useState(null);

  const params = useParams();

  const handleInviteUser = (event) => {
    setInvitePopup(true);
  };

  const handleCloseInvitePopup = (event) => {
    setInvitePopup(false);
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png", ".jpeg"],
    },
  });

  const deleteDiary = async () => {
    setIsDeleting(true); // 삭제 요청 시작
    try {
      const token = localStorage.getItem("authToken"); // AuthContext를 통해 가져온 토큰 사용
      const response = await axios.delete(`${API_URL}/diary/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Authorization 헤더에 'Bearer' 접두사 추가
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // 삭제 성공
        alert("일기가 삭제되었습니다.");
        // 페이지 리다이렉트 또는 상태 업데이트
      } else {
        // 기타 오류
        alert("일기 삭제 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("삭제 요청 중 오류 발생:", error);
      alert("삭제 요청 중 오류가 발생했습니다.");
    } finally {
      setIsDeleting(false); // 요청 완료 후 상태 초기화
      setInvitePopup(false); // 팝업 닫기
    }
  };

  return (
    <>
      <div className="min-h-[900px]">
        <div className="diarybg text-[#495057]">
          <div className="flex flex-row">
            <div className="w-[50%]">
              <NavLink to="/Calendar">
                <div className="text-[20px] font-medium ml-[15%] mt-[60px] mb-[20px] mr-0 hover:underline">
                  ← 캘린더로 돌아가기
                </div>
              </NavLink>
              <div className="flex justify-center h-[750px]">
                <div className="w-[80%] h-auto ml-[30px] mt-[4%]">
                  <div className="rounded-3xl p-5 bg-sky-100 w-full h-full drop-shadow-md">
                    <div className="rounded-2xl p-5 bg-white h-full drop-shadow-md">
                      <div className="p-4 h-auto">
                        <div className="text-[20px] font-semibold">
                          {params.id}
                        </div>
                        <div>
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
                        </div>
                        <div className="border-t-2 py-5 mt-5">
                          <span className="text-[#495057]">
                            오늘은 성결대학교 6팀 팀원들과 함께 앱 개발을
                            하였다. 혼자 할 때는 어려웠는데 다 같이 으쌰으쌰
                            하니 금방 끝났다. 뿌듯했다.
                          </span>
                        </div>
                        <button
                          className="mt-2 "
                          onClick={() => setImage(null)}
                        >
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

              <div className="relative"></div>
            </div>

            <div className="w-[50%] ">
              <div className="mt-[15%] mr-[10%] ml-[10%]">
                <div>
                  <div className="flex flex-row justify-between">
                    <img src="../img/happy.png" className="w-[45px]" alt="" />
                    <div
                      className="mr-[10%] text-[22px] font-black text-[#FFF1B2]"
                      style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8) " }}
                    >
                      행복 40%
                    </div>
                  </div>
                  <div className="relative h-[20px] rounded-full mt-[15px] mb-[60px]">
                    <div className="absolute border-[0.2px] border-[#495057] w-[90%] h-[20px] bg-[#F8F9FA] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                    <div className="absolute border-[0.2px] border-[#495057] bg-[#FFF2B2] border w-[36%] h-[20px] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-row justify-between">
                    <img src="../img/anxiety.png" className="w-[45px]" alt="" />
                    <div
                      className="mr-[10%] text-[22px] font-black text-[#F1E4FF]"
                      style={{
                        textShadow:
                          "2px 2px 6px rgba(0, 0, 0, 0.25), -2px 2px 6px rgba(0, 0, 0, 0.25), 2px -2px 6px rgba(0, 0, 0, 0.25), -2px -2px 6px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      불안 25%
                    </div>
                  </div>
                  <div className="relative h-[20px] rounded-full mt-[15px] mb-[60px]">
                    <div className="absolute border-[0.2px] border-[#495057] w-[90%] h-[20px] bg-[#F8F9FA] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                    <div className="absolute border-[0.2px] border-[#495057] bg-[#F1E4FF] border w-[22.5%] h-[20px] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-row justify-between">
                    <img src="../img/hmm.png" className="w-[45px]" alt="" />
                    <div
                      className="mr-[10%] text-[22px] font-black text-[#5ACBAB]"
                      style={{
                        textShadow:
                          "2px 2px 6px rgba(0, 0, 0, 0.25), -2px 2px 6px rgba(0, 0, 0, 0.25), 2px -2px 6px rgba(0, 0, 0, 0.25), -2px -2px 6px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      중립 7%
                    </div>
                  </div>
                  <div className="relative h-[20px] rounded-full mt-[15px] mb-[60px]">
                    <div className="absolute border-[0.2px] border-[#495057] w-[90%] h-[20px] bg-[#F8F9FA] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                    <div className="absolute border-[0.2px] border-[#495057] bg-[#5ACBAB] border w-[6.3%] h-[20px] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-row justify-between">
                    <img src="../img/sad.png" className="w-[45px]" alt="" />
                    <div
                      className="mr-[10%] text-[22px] font-black text-[#A9D6E5]"
                      style={{
                        textShadow:
                          "2px 2px 6px rgba(0, 0, 0, 0.25), -2px 2px 6px rgba(0, 0, 0, 0.25), 2px -2px 6px rgba(0, 0, 0, 0.25), -2px -2px 6px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      슬픔 3%
                    </div>
                  </div>
                  <div className="relative h-[20px] rounded-full mt-[15px] mb-[60px]">
                    <div className="absolute border-[0.2px] border-[#495057] w-[90%] h-[20px] bg-[#F8F9FA] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                    <div className="absolute border-[0.2px] border-[#495057] bg-[#A9D6E5] border w-[2.7%] h-[20px] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-row justify-between">
                    <img src="../img/mad.png" className="w-[45px]" alt="" />
                    <div
                      className="mr-[10%] text-[22px] font-black text-[#FF9F7A]"
                      style={{
                        textShadow:
                          "2px 2px 6px rgba(0, 0, 0, 0.25), -2px 2px 6px rgba(0, 0, 0, 0.25), 2px -2px 6px rgba(0, 0, 0, 0.25), -2px -2px 6px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      분노 25%
                    </div>
                  </div>
                  <div className="relative h-[20px] rounded-full mt-[15px] mb-[60px]">
                    <div className="absolute border-[0.2px] border-[#495057] w-[90%] h-[20px] bg-[#F8F9FA] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                    <div className="absolute border-[0.2px] border-[#495057] bg-[#FF9F7A] border w-[22.5%] h-[20px] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
                  </div>
                </div>

                <div className="flex justify-between mr-[10%] mb-12">
                  <NavLink to={`/calendar/edit/${params.id}`}>
                    <button
                      className="bg-[#5BCBAB] h-[52px] w-[188px] font-semibold text-xl text-white py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)] flex items-center justify-around"
                      onClick={handleInviteUser}
                    >
                      일기 수정
                      <img
                        src="../img/diaryIcon.png"
                        className="w-[17px]"
                        alt=""
                      />
                    </button>
                  </NavLink>

                  <button
                    onClick={handleInviteUser}
                    className="bg-[rgba(180,54,58,0.85)] h-[52px] w-[188px] font-semibold text-xl text-white py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(180,54,58,0.4)] flex items-center justify-around"
                  >
                    일기 삭제
                    <img src="../img/bin.png" className="w-[17px]" alt="" />
                  </button>

                  <InvitePopupField
                    show={InvitePopup}
                    onClose={handleCloseInvitePopup}
                  >
                    <div className="p-4 flex flex-col justify-center items-center h-[230px] w-[550px]">
                      <p className="text-2xl font-bold text-[#D64A38] mb-10">
                        삭제하시겠습니까?
                      </p>
                      <div className="text-lg text-gray-500">
                        <span>
                          삭제 후 복원이{" "}
                          <span className="underline">불가능합니다.</span>
                        </span>
                      </div>
                      <div className="flex justify-around h-12 mt-8">
                        <button
                          onClick={handleCloseInvitePopup}
                          className="bg-[#D9D9D9] font-bold text-xl w-[50%] h-[20%] absolute left-0 bottom-0 rounded-bl-3xl "
                        >
                          취소
                        </button>
                        <button
                          onClick={deleteDiary}
                          className="bg-[#D64A38] font-bold text-xl text-white w-[50%] h-[20%] absolute right-0 bottom-0 rounded-br-3xl"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  </InvitePopupField>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React, { useState, useEffect, useCallback, useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const API_URL = 'http://team6back.sku-sku.com'; // API URL

// export default function EmotionAnal() {
//   const { date } = useParams(); // URL 파라미터에서 날짜를 가져옵니다.
//   const { getAuthToken } = useContext(AuthContext); // AuthContext에서 인증 토큰을 가져옵니다.

//   const [diary, setDiary] = useState(null); // 일기 데이터를 저장할 상태 변수
//   const [error, setError] = useState(null); // 오류 메시지를 저장할 상태 변수
//   const [image, setImage] = useState(null); // 업로드된 이미지를 저장할 상태 변수

//   // 일기 데이터를 가져오는 함수
//   useEffect(() => {
//     const fetchDiary = async () => {
//       try {
//         const token = getAuthToken(); // 인증 토큰을 가져옵니다.
//         const response = await axios.get(`${API_URL}/diary`, {
//           headers: {
//             Authorization: `Bearer ${token}`, // 요청 헤더에 인증 토큰을 추가합니다.
//             'Content-Type': 'application/json',
//           },
//           params: {
//             date, // 쿼리 파라미터로 날짜를 전달합니다.
//           },
//         });
//         setDiary(response.data); // 응답 데이터로 상태를 업데이트합니다.
//       } catch (err) {
//         setError('일기를 가져오는 데 실패했습니다.'); // 오류가 발생하면 상태를 업데이트합니다.
//         console.error('일기 조회 오류:', err); // 콘솔에 오류를 출력합니다.
//       }
//     };

//     fetchDiary(); // 컴포넌트가 마운트될 때 일기 데이터를 가져옵니다.
//   }, [date, getAuthToken]); // date와 getAuthToken이 변경될 때마다 데이터를 다시 가져옵니다.

//   // 이미지 업로드 핸들러
//   const handleImageUpload = useCallback((acceptedFiles) => {
//     if (acceptedFiles.length > 0) {
//       const file = acceptedFiles[0];
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result); // 이미지 파일을 읽어서 상태를 업데이트합니다.
//       };
//       reader.readAsDataURL(file); // 파일을 Data URL로 읽어옵니다.
//     }
//   }, []);

//   // 오류가 발생한 경우
//   if (error) {
//     return <div>{error}</div>;
//   }

//   // 일기 데이터가 아직 로딩 중인 경우
//   if (!diary) {
//     return <div>일기를 불러오는 중입니다...</div>;
//   }

//   return (
//     <div className="min-h-[900px]">
//       <div className="diarybg text-[#495057]">
//         <div className="flex flex-row">
//           {/* 일기 내용을 보여줄 왼쪽 영역 */}
//           <div className="w-[50%]">
//             <div className="flex justify-center h-[750px]">
//               <div className="w-[80%] h-auto ml-[30px] mt-[4%]">
//                 <div className="rounded-3xl p-5 bg-sky-100 w-full h-full drop-shadow-md">
//                   <div className="rounded-2xl p-5 bg-white h-full drop-shadow-md">
//                     <div className="p-4 h-auto">
//                       <div className="text-[20px] font-semibold">
//                         {diary.date} {/* 일기 날짜 */}
//                       </div>
//                       <div className="my-6">
//                         {image ? (
//                           <div>
//                             <img
//                               src={image}
//                               alt="Uploaded"
//                               className="rounded-xl py-2 h-auto"
//                             />
//                           </div>
//                         ) : (
//                           <div
//                             style={{
//                               border: '2px dashed #ccc',
//                               padding: '20px',
//                               cursor: 'pointer',
//                             }}
//                           >
//                             <p>원하는 사진을 선택해주세요!</p>
//                           </div>
//                         )}
//                       </div>
//                       <div className="border-t-2 py-5 mt-5">
//                         <span className="text-[#495057]">
//                           {diary.content} {/* 일기 내용 */}
//                         </span>
//                       </div>
//                       {/* 여기에 사진 업로드를 위한 dropzone을 추가할 수 있습니다 */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 감정 분석 결과를 보여줄 오른쪽 영역 */}
//           <div className="w-[50%]">
//             <div className="mt-[15%] mr-[10%] ml-[10%]">
//               <div>
//                 {/* 행복 감정 표시 */}
//                 <div className="flex flex-row justify-between">
//                   <img src="../img/happy.png" className="w-[45px]" alt="" />
//                   <div className="mr-[10%] text-[22px] font-black text-[#FFF1B2]">
//                     행복 {diary.emotion.happiness}% {/* 감정 분석 결과 */}
//                   </div>
//                 </div>
//                 <div className="relative h-[20px] rounded-full mt-[15px] mb-[60px]">
//                   <div className="absolute border-[0.2px] border-[#495057] w-[90%] h-[20px] bg-[#F8F9FA] rounded-full mt-[15px] mb-[60px] shadow-md"></div>
//                   <div
//                     className="absolute border-[0.2px] border-[#495057] bg-[#FFF2B2] border"
//                     style={{ width: `${diary.emotion.happiness}%` }}
//                   ></div>
//                 </div>

//                 {/* 추가적인 감정 분석 결과를 여기에 표시할 수 있습니다 */}
//                 {/* 예: 불안, 중립, 슬픔, 분노 등 */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
