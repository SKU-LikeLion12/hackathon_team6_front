import React, { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Nav() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    console.log("정상 로그아웃 되었습니다.");
  };

  const handleNavigation = (e, path) => {
    if (!isLoggedIn) {
      e.preventDefault();
      navigate("/warning"); // 로그인 필요 경고 페이지로 이동
    } else {
      navigate(path);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="container flex justify-evenly w-[100%] h-28 items-center">
          <Link to="/">
            <div className="left flex ml-2">
              <img
                src="../../img/mainLogo.png"
                className="w-48"
                alt="main logo"
              />
            </div>
          </Link>

          <div className="flex mr-24 ml-24">
            <NavLink
              to="/ChatMain"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? "text-teal-500" : "text-black"
                }`
              }
              onClick={(e) => {
                handleNavigation(e, "/ChatMain");
              }}
            >
              <span className="text-base font-medium tracking-[.005em] px-[20px]">
                챗봇 상담하기
              </span>
            </NavLink>
            <NavLink
              to="/EQ"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? "text-teal-500" : "text-black"
                }`
              }
              onClick={(e) => handleNavigation(e, "/EQ")}
            >
              <span className="text-base font-medium tracking-[.005em] px-[20px]">
                EQ 높이기
              </span>
            </NavLink>
            <NavLink
              to="/Calendar"
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? "text-teal-500" : "text-black"
                }`
              }
              onClick={(e) => handleNavigation(e, "/Calendar")}
            >
              <span className="text-base font-medium tracking-[.005em] px-[20px]">
                캘린더
              </span>
            </NavLink>
          </div>

          {isLoggedIn ? (
            <>
              <button
                onClick={handleLogout}
                className="flex text-sm font-semibold LoBtn mr-[20px]"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex">
              <NavLink to="/Login">
                <div className="flex text-sm font-semibold LoBtn mr-[20px]">
                  Login
                </div>
              </NavLink>
              <NavLink to="/SignUp">
                <div className="flex text-sm font-semibold JnBtn">Join</div>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
