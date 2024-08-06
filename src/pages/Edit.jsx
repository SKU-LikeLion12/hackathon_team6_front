import { FaCaretRight } from 'react-icons/fa';
import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InvitePopupField from '../component/InvitePopupField';
import { useDropzone } from 'react-dropzone';
import axios from 'axios'; // axios 임포트
import { API_URL } from '../config';
import { AuthContext } from '../context/AuthContext';

// Helper function to highlight changes in "수정전"
const highlightChangesBefore = (oldText, newText) => {
  const diff = [];
  const oldWords = oldText.split(' ');
  const newWords = newText.split(' ');

  let i = 0;
  let j = 0;

  while (i < oldWords.length || j < newWords.length) {
    if (
      i < oldWords.length &&
      j < newWords.length &&
      oldWords[i] === newWords[j]
    ) {
      diff.push(oldWords[i] + ' ');
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
            {oldWords[i] + ' '}
          </span>
        );
        i++;
      }

      if (
        j < newWords.length &&
        (i >= oldWords.length || oldWords[i] !== newWords[j])
      ) {
        j++;
      }
    }
  }
  return diff;
};

// 수정 후
const highlightChangesAfter = (oldText, newText) => {
  const diff = [];
  const oldWords = oldText.split(' ');
  const newWords = newText.split(' ');

  let i = 0;
  let j = 0;

  while (i < oldWords.length || j < newWords.length) {
    if (
      i < oldWords.length &&
      j < newWords.length &&
      oldWords[i] === newWords[j]
    ) {
      diff.push(oldWords[i] + ' ');
      i++;
      j++;
    } else {
      if (
        i < oldWords.length &&
        (j >= newWords.length || oldWords[i] !== newWords[j])
      ) {
        // Skip removed word in oldText
        i++;
      }

      if (
        j < newWords.length &&
        (i >= oldWords.length || oldWords[i] !== newWords[j])
      ) {
        // Highlight added word in newText
        diff.push(
          <span className="text-red-700 font-bold" key={`new-${j}`}>
            {newWords[j] + ' '}
          </span>
        );
        j++;
      }
    }
  }

  return diff;
};

export default function Edit() {
  const chatId = 1;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');

  const { getAuthToken } = useContext(AuthContext); // AuthContext 사용
  const [image, setImage] = useState(null);
  const [content, setContent] = useState(''); // 초기값을 빈 문자열로 설정
  const [editedContent, setEditedContent] = useState('');

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
  const navigate = useNavigate();

<<<<<<< Updated upstream
  const [InvitePopup, setInvitePopup] = useState(false);
=======
      if (response.status === 200) {
        setDiary(response.data);
        setContent(response.data.content); // 일기의 기존 내용으로 상태를 설정
        setEditedContent(response.data.content); // 수정된 내용을 초기화
      } else {
        setError(
          '저장된 일기가 없습니다. 챗봇을 이용하여 일기를 작성해 주세요!'
        );
      }
    } catch (error) {
      console.error('일기 조회 중 오류 발생:', error);
      setError('저장된 일기가 없습니다. 챗봇을 이용하여 일기를 작성해 주세요!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiary();
  }, [diaryDate]);

  useEffect(() => {
    if (diary) {
      setContent(diary.content); // 일기 내용이 변경될 때 content 상태 업데이트
      setEditedContent(diary.content); // 일기 내용이 변경될 때 editedContent 상태 업데이트
    }
  }, [diary]);

  const handleSaveDiary = async () => {
    try {
      const token = getAuthToken();
      console.log('Token: ', token);
      console.log('Edited Content: ', editedContent);

      const response = await axios.put(
        `${API_URL}/diary/update`,
        {
          content: editedContent,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          params: {
            date: diaryDate,
          },
        }
      );

      console.log('Response:', response); // 응답 로그 추가

      if (response.status === 200) {
        console.log('일기 수정 완료');
        navigate('/calendar');
      } else {
        console.error('일기 수정 실패:', response.data);
      }
    } catch (error) {
      console.error('일기 수정 중 오류 발생:', error);
    }
  };
>>>>>>> Stashed changes

  const handleCloseInvitePopup = () => {
    setInvitePopup(false);
  };

  const handleSaveDiary = async () => {
    const token = getAuthToken(); // AuthContext에서 토큰 가져오기

    const diaryData = {
      id: `${params.id}`,
      token: token,
      content: editedContent,
      date: `${params.id}`,
      emotion: {
        emotionId: 0,
        user: {
          userId: 0,
          userName: 'string',
          id: 'string',
          email: 'string',
          password: 'string',
          phoneNumber: 'string',
          birthDate: '2024-08-05',
          gender: 'M',
          createdAt: '2024-08-05T01:53:12.073Z',
          updatedAt: '2024-08-05T01:53:12.073Z',
          job: 'string',
        },
        happiness: 0,
        anxiety: 0,
        neutral: 0,
        sadness: 0,
        anger: 0,
        createAt: '2024-08-05T01:53:12.073Z',
        updateAt: '2024-08-05T01:53:12.073Z',
        topEmotion: 'string',
      },
    };

    try {
      const response = await axios.put(`${API_URL}/${params.id}`, diaryData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`, // 가져온 토큰 사용
        },
      });

      if (response.status === 200) {
        // 성공적인 업데이트 처리
        alert('일기가 성공적으로 업데이트되었습니다.');
        navigate('/calendar'); // 일기 목록 페이지 또는 다른 페이지로 리다이렉트
      } else {
        // 서버 응답에 대한 상세 정보를 로그에 기록
        console.error('서버 오류:', response.data);
        alert(
          `일기 업데이트에 실패했습니다. 서버 응답: ${
            response.data.message || '알 수 없는 오류'
          }`
        );
      }
    } catch (error) {
      console.error('일기 업데이트 중 오류 발생:', error);
      alert('일기 업데이트 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${API_URL}/chat/${chatId}`);
        setData(response.data);
        setContent(response.data.message || ''); // 데이터가 로드된 후 상태 초기화
        setEditedContent(response.data.message || ''); // 데이터가 로드된 후 상태 초기화
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [chatId]);

  return (
    <div className="flex justify-center items-center bg-[url('./img/edit_back.png')] bg-[length:3000px_1000px] h-[700px] bg-no-repeat ">
      {/* 왼 */}
      <div className="w-[45%]">
        <span className="flex justify-center mb-6 text-xl">
          일기장 미리보기
        </span>
        <div className="flex justify-center">
          <div className="w-[75%] h-[600px]">
            <div className="rounded-3xl p-5 bg-zinc-300 w-full h-full drop-shadow-md">
              <div className="rounded-2xl px-8 pt-4 pb-8 bg-white h-full drop-shadow-md">
                <span className="block text-gray-500 text-xl">
                  {data ? (
                    <div>
                      <p>{data.startTime.substring(0, 10)}</p>
                    </div>
                  ) : (
                    <p>No data available</p>
                  )}
                  {/* //녹음된 날짜 불러옴 */}
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
        <span className="flex justify-center mb-6 text-xl">
          <span className="text-red-700 font-bold">잘못된 내용</span>이 있다면
          수정해주세요!
        </span>
        <div className="flex justify-center ">
          <div className="w-[75%] h-[600px]">
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
                      onClick={() => setInvitePopup(true)}
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
              게시된 일기장은{' '}
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
