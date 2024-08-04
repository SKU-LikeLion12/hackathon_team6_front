import React, { useState, useCallback } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import InvitePopupField from '../component/InvitePopupField';
import './style.css';
import { useDropzone } from 'react-dropzone';

export default function EmotionAnal() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const day = days[now.getDay()];

  const [InvitePopup, setInvitePopup] = useState(false);

  const handleInviteUser = (event) => {
    setInvitePopup(true);
  };

  const handleCloseInvitePopup = (event) => {
    setInvitePopup(false);
  };

  const [image, setImage] = useState(null);

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
      'image/png': ['.png', '.jpeg'],
    },
  });

  const params = useParams();
  // const { year, month, day } = useParams();

  return (
    <>
      <div className="min-h-[900px]">
        <div className="diarybg text-[#495057]">
          <div className="flex flex-row">
            <div className="w-[45%]">
              <NavLink to="/Calendar">
                <div className="text-[20px] font-medium ml-[15%] mt-[60px] mb-[20px] mr-0 hover:underline">
                  ← 캘린더로 돌아가기
                </div>
              </NavLink>
              <div className="flex justify-center ">
                <div className="w-[80%] h-auto ml-[30px] mt-[4%]">
                  <div className="rounded-3xl p-5 bg-sky-100 w-full h-full drop-shadow-md">
                    <div className="rounded-2xl p-5 bg-white h-full drop-shadow-md">
                      <div className="p-4 h-auto">
                        <div className="text-[20px] font-semibold">
                          {params.id} {year}. {month}. {date} ({day})
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
                      style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8) ' }}
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
                          '2px 2px 6px rgba(0, 0, 0, 0.25), -2px 2px 6px rgba(0, 0, 0, 0.25), 2px -2px 6px rgba(0, 0, 0, 0.25), -2px -2px 6px rgba(0, 0, 0, 0.25)',
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
                          '2px 2px 6px rgba(0, 0, 0, 0.25), -2px 2px 6px rgba(0, 0, 0, 0.25), 2px -2px 6px rgba(0, 0, 0, 0.25), -2px -2px 6px rgba(0, 0, 0, 0.25)',
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
                          '2px 2px 6px rgba(0, 0, 0, 0.25), -2px 2px 6px rgba(0, 0, 0, 0.25), 2px -2px 6px rgba(0, 0, 0, 0.25), -2px -2px 6px rgba(0, 0, 0, 0.25)',
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
                          '2px 2px 6px rgba(0, 0, 0, 0.25), -2px 2px 6px rgba(0, 0, 0, 0.25), 2px -2px 6px rgba(0, 0, 0, 0.25), -2px -2px 6px rgba(0, 0, 0, 0.25)',
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
                  <NavLink to="">
                    <button
                      className="bg-[#5BCBAB] h-[52px] w-[188px] font-semibold text-xl text-white py-2 px-8 rounded-full shadow-lg hover:shadow-[0_20px_30px_rgba(56,217,169,0.4)] flex items-center justify-around"
                      onClick={handleInviteUser}
                    >
                      일기 저장
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
                          삭제 후 복원이{' '}
                          <span className="underline">불가능합니다.</span>
                        </span>
                      </div>
                      <div className="flex justify-around h-12 mt-8">
                        <button className="bg-[#D9D9D9] font-bold text-xl w-[50%] h-[20%] absolute left-0 bottom-0 rounded-bl-3xl ">
                          취소
                        </button>
                        <button className="bg-[#D64A38] font-bold text-xl text-white w-[50%] h-[20%] absolute right-0 bottom-0 rounded-br-3xl">
                          게시
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
