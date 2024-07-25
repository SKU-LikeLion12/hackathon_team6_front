import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

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
        <div className="container flex justify-between w-[100%] h-24 pb-3 items-center border-b">
          <Link to="/">
            <div className="left flex ml-2 mt-5">
              <img
                src="/img/FeelInsight.png"
                alt="멋사로고"
                className="logo w-52"
              />
              <div className="title font-semibold flex items-center text-2xl ml-2"></div>
            </div>
          </Link>
          <div className="right flex mr-2 mt-5">
            {isLoggedIn ? (
              <>
                <div className="icon flex flex-col items-center justify-center ml-5">
                  <NavLink
                    to="/chatbot"
                    className={({ isActive }) =>
                      `flex flex-col items-center ${
                        isActive ? "text-teal-500" : "text-black"
                      }`
                    }
                  >
                    <span className="text-xs">챗봇과 상담하기</span>
                  </NavLink>
                </div>

                <div className="icon flex flex-col items-center justify-center ml-5">
                  <NavLink
                    to="/eq"
                    className={({ isActive }) =>
                      `flex flex-col items-center ${
                        isActive ? "text-teal-500" : "text-black"
                      }`
                    }
                  >
                    <span className="text-xs">EQ 높이기</span>
                  </NavLink>
                </div>

                <div className="icon flex flex-col items-center justify-center ml-5">
                  <NavLink
                    to="/calendar"
                    className={({ isActive }) =>
                      `flex flex-col items-center ${
                        isActive ? "text-teal-500" : "text-black"
                      }`
                    }
                  >
                    <span className="text-xs">캘린더</span>
                  </NavLink>
                </div>
                <div className="icon flex flex-col items-center justify-center ml-5">
                  <NavLink
                    to="/mypage"
                    className={({ isActive }) =>
                      `flex flex-col items-center ${
                        isActive ? "text-teal-500" : "text-black"
                      }`
                    }
                  >
                    <span className="text-xs">MyPage</span>
                  </NavLink>
                </div>
                <div className="icon flex flex-col items-center justify-center ml-5">
                  <button
                    onClick={handleLogout}
                    className="text-black flex flex-col items-center"
                  >
                    <span className="text-xs">Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="icon flex flex-col items-center justify-center ml-5">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `flex flex-col items-center ${
                        isActive ? "text-teal-500" : "text-black"
                      }`
                    }
                  >
                    <span className="text-xs">LogIn</span>
                  </NavLink>
                </div>
                <div className="icon flex flex-col items-center justify-center ml-5">
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      `flex flex-col items-center ${
                        isActive ? "text-teal-500" : "text-black"
                      }`
                    }
                  >
                    <span className="text-xs">SignUp</span>
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
