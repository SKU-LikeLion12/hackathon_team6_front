import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import { AuthContext } from '../context/AuthContext';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function ApiEx() {
  const username = localStorage.getItem('username') || '"guest"';
  const displayName = username.length > 2 ? username.slice(1, -1) : username;
  const { getAuthToken } = useContext(AuthContext);
  const [randomPrograms, setRandomPrograms] = useState([]);

  function extractVideoId(url) {
    const regExp =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : null;
  }

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const token = getAuthToken();
        // console.log('Token: ', token);
        // console.log('Content: ', response.data);
        if (!token) {
          throw new Error('Authorization token is missing');
        }
        const response = await axios.get(`${API_URL}/post`, {
          headers: {
            token: token,

            // Authorization: `Bearer ${token}`,
            // 'Content-Type': 'application/json',
          },
        });
        //     console.log('Response data:', response.data); // 응답 데이터 로그 출력
        //     setRandomPrograms(response.data);
        //   } catch (error) {
        //     console.error('There was an error fetching the emotion data!', error);
        //   }
        // };
        console.log('Response data:', response.data); // 응답 데이터 로그 출력
        setRandomPrograms(response.data);
      } catch (error) {
        console.error('There was an error fetching the emotion data!', error);
        if (error.response) {
          // console.error('Error response data:', error.response.data);
          // console.error('Error response status:', error.response.status);
          // console.error('Error response headers:', error.response.headers);
        }
      }
    };
    fetchProgram();
  }, [getAuthToken]);

  return (
    <>
      <p>Username: {displayName}</p>
      <hr />
      <div className="flex flex-col justify-center items-center mr-[10%] relative">
        {randomPrograms.map((program, index) => {
          const videoId = extractVideoId(program.content);
          return (
            <div className="relative w-[70%] mt-[-10px]" key={index}>
              <img src="../img/box.png" className="w-[100%] h-[100%]" alt="" />
              <div className="absolute top-[-15px] left-[-2px] w-full h-full flex flex-col justify-center items-center text-center text-black z-10">
                <div className="w-[90%] p-4 text-[#495057]">
                  <strong className="text-[18px] text-[#262626] mt-4">
                    {program.title}
                  </strong>
                  <br />
                  <br />
                  <div style={{ width: '90%' }} className="mx-auto">
                    {videoId ? (
                      <LiteYouTubeEmbed
                        id={videoId}
                        noCookie={true} // default가 false라서 꼭 명시하기
                      />
                    ) : (
                      <p>{program.content}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
