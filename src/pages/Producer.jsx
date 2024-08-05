import React from 'react';
import Footer from '../component/Footer';

const teamMembers = [
  {
    name: '이승은',
    role: 'PM/Design',
    email: '1emdtmddms44@gmail.com',
    avatar: '/img/se.png',
  },
  {
    name: '이호연',
    role: 'Frontend',
    email: 'lhy020313@gmail.com',
    avatar: '/img/hoyeon.png',
  },
  {
    name: '안하서',
    role: 'Frontend',
    email: 'sojun109822@gmail.com',
    avatar: '/img/haseo.png',
  },
  {
    name: '박지우',
    role: 'Backend',
    email: 'joy002208@gmail.com',
    avatar: '/img/jiu.png',
  },
  {
    name: '권오현',
    role: 'Backend',
    email: 'bada4446@gmail.com',
    avatar: '/img/ohyeon.png',
  },
];

const Team = () => {
  return (
    <div className="pt-36 bg-[url('./img/home.png')] bg-[length:2000px_500px] bg-contain bg-no-repeat">
      <div className="flex flex-col items-center mb-24">
        <h3 className="text-[#495057] text-6xl mb-16 font-bold grid place-items-center drop-shadow-md">
          The Team
        </h3>

        <div className="grid place-items-center">
          <span className="mb-8 text-2xl text-center text-[#495057]">
            성결대학교 멋쟁이사자처럼 6팀을 소개합니다.
            <br /> 금쪽같은 6팀
          </span>
        </div>
      </div>

      <div className="container mx-auto mb-20">
        {/* 첫 번째 행 */}
        <div className="flex justify-center space-x-20">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-xl shadow-2xl w-[25%] h-[400px]"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-36 h-36 my-4 bg-teal-50 rounded-full"
              />
              <h2 className="text-center text-xl font-bold mt-2">
                {member.name}
              </h2>
              <p className="text-center text-[#5BCBAB] mt-2">{member.role}</p>
              <p className="text-center mt-4 text-gray-500">
                성결대학교 12기 아기사자
              </p>
              <p className="text-center text-xs text-white my-5 bg-[#60E1CB] rounded-full py-3 px-6">
                {member.email}
              </p>
            </div>
          ))}
        </div>
        {/* 두 번째 행 */}
        <div className="flex justify-center space-x-20 mt-16">
          {teamMembers.slice(3).map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded shadow-2xl w-[25%] h-[400px]"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-36 h-36 mb-4 bg-teal-50	rounded-full"
              />
              <h2 className="text-center text-xl font-bold mt-2">
                {member.name}
              </h2>
              <p className="text-center text-[#5BCBAB] mt-2">{member.role}</p>
              <p className="text-center mt-4 text-gray-500">
                성결대학교 12기 아기사자
              </p>
              <p className="text-center text-xs text-white my-5 bg-[#60E1CB] rounded-full py-3 px-6">
                {member.email}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
