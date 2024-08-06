import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const extractVideoId = (url) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|watch\?.*?\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const chat = ({ randomPrograms }) => {
  return (
    <>
      {randomPrograms.map((program, index) => {
        const isVideo =
          program.content.startsWith('http://') ||
          program.content.startsWith('https://');
        const videoId = isVideo ? extractVideoId(program.content) : null;
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
                {isVideo && videoId ? (
                  <div style={{ width: '90%' }} className="mx-auto">
                    <LiteYouTubeEmbed
                      id={videoId}
                      noCookie={true} // default가 false라서 꼭 명시하기
                    />
                  </div>
                ) : (
                  <div className="text-content">{program.content}</div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Chat;
