import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="container flex justify-evenly w-[100%] h-28 items-center">
          <Link to="/">
            <div className="left flex ml-2">
              <img src="./img/mainLogo.png" className="w-48" />
            </div>
          </Link>

          <div className="flex mr-24 ml-24">
            <NavLink
              to="/ChatMain"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? 'text-teal-500' : 'text-black'
                }`
              }
            >
              <span className="text-base font-medium tracking-[.005em] px-[20px]">
                챗봇 상담하기
              </span>
            </NavLink>
            <NavLink
              to="/EQ"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? 'text-teal-500' : 'text-black'
                }`
              }
            >
              <span className="text-base font-medium tracking-[.005em] px-[20px]">
                EQ 높이기
              </span>
            </NavLink>
            <NavLink
              to="/Calendar"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? 'text-teal-500' : 'text-black'
                }`
              }
            >
              <span className="text-base font-medium tracking-[.005em] px-[20px]">
                캘린더
              </span>
            </NavLink>
          </div>

          <NavLink to="/">
            <div className="flex text-sm font-semibold lgBtn">Logout</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
