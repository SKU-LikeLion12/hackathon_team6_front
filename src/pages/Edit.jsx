import { FaCaretRight } from 'react-icons/fa';
import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InvitePopupField from '../component/InvitePopupField';
import { useDropzone } from 'react-dropzone';
import axios from 'axios'; // axios 임포트
import { API_URL } from '../config';
import { AuthContext } from '../context/AuthContext';
import './style.css';

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
        // Highlight added word in newText
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
  const { getAuthToken } = useContext(AuthContext); // AuthContext 사용
  const [diary, setDiary] = useState(null); // 일기 상태
  const [content, setContent] = useState(''); // 일기 내용을 저장하는 상태
  const [editedContent, setEditedContent] = useState(''); // 수정된 일기 내용을 저장하는 상태
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [InvitePopup, setInvitePopup] = useState(false);

  const params = useParams();
  const diaryDate = params.id; // 날짜를 쿼리 파라미터로 사용
  const navigate = useNavigate();

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

  const fetchDiary = async () => {
    try {
      const token = getAuthToken();
      const response = await axios.get(`${API_URL}/diary`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          date: diaryDate,
        },
      });

      if (response.status === 200) {
        setDiary(response.data);
        setContent(response.data.content); // 일기의 기존 내용으로 상태를 설정
        setEditedContent(response.data.content); // 수정된 내용을 초기화
      } else {
        setError('일기를 불러오는데 실패했습니다.');
      }
    } catch (error) {
      console.error('일기 조회 중 오류 발생:', error);
      setError('일기를 불러오는데 실패했습니다.');
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

  const handleCloseInvitePopup = () => {
    setInvitePopup(false);
  };

  return (
    <div className="editbg">
      <div className="flex justify-center items-center ">
        {/* 왼쪽 */}
        <div className="w-[45%] mt-[30px]">
          <span className="flex justify-center mb-6 text-xl">
            일기장 미리보기
          </span>
          <div className="flex justify-center">
            <div className="w-[75%] h-[600px]">
              <div className="rounded-3xl p-5 bg-zinc-300 w-full h-full drop-shadow-md">
                <div className="rounded-2xl px-8 pt-4 pb-8 bg-white h-full drop-shadow-md">
                  <span className="block text-gray-500 text-xl">
                    {diary ? (
                      <div>
                        <p>{diary.date}</p>
                      </div>
                    ) : (
                      <p>No data available</p>
                    )}
                  </span>
                  <div className="mt-3">
                    <div className="my-4">
                      {image ? (
                        <div>
                          <img
                            src={image}
                            alt="Uploaded"
                            className="rounded-xl max-h-[300px] mx-auto"
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

        {/* 오른쪽 */}
        <div className="w-[45%] mt-[30px]">
          <span className="flex justify-center mb-6 text-xl">
            <span className="text-red-700 font-bold">잘못된 내용</span>이 있다면
            수정해주세요!
          </span>
          <div className="flex justify-center">
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
                        className="bg-[#5BCBAB] font-bold text-white py-3 px-28 rounded-full"
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
                className="bg-[#D9D9D9] font-bold text-xl w-[50%] h-[20%] absolute left-0 bottom-0 rounded-bl-3xl"
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
    </div>
  );
}
