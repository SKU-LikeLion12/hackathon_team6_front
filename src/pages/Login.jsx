import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const navigate = useNavigate();

  const User = {
    id: "test1234",
    pw: "test1234@@",
  };

  const confirmMessage = () => {
    if (id === User.id && pw === User.pw) {
      alert("로그인에 성공했습니다.");
      navigate("/");
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  };

  // const navigate = useNavigate();

  const handleId = (e) => {
    setId(e.target.value);
    const regex = /^(?=.*[A-Za-z])(?=.*?[0-9]).{6,}$/;

    if (regex.test(e.target.value)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  const handlePw = (a) => {
    setPw(a.target.value);
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{7,}$/;

    if (regex.test(a.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  useEffect(() => {
    if (idValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, pwValid]);

  // const goToMain = () => {
  //   navigate("/Home");
  // };

  return (
    <>
      <div className="flex justify-center">
        <div className="container mt-7 w-[70%] p-2 mb-8">
          <span className="text-2xl font-semibold">
            아이디와 비밀번호를
            <br />
            입력해주세요
          </span>
          <div className="inputbox mt-7">
            <div className="idbox flex flex-col">
              <span className="id text-base ml-1">ID</span>
              <input
                type="text"
                value={id}
                onChange={handleId}
                className="idinput border mt-1 p-3 rounded-lg	"
                placeholder="test1234"
              />
              {!idValid && id.length > 0 && (
                <div className="text-xs text-red-500 mt-2 ml-2">
                  영문, 숫자 포함 6자 이상 입력해주세요
                </div>
              )}
            </div>
            <div className="pwbox flex flex-col mt-5">
              <span className="pw text-base ml-1">PW</span>
              <input
                type="password"
                value={pw}
                onChange={handlePw}
                className="pwinput border mt-1 p-3 rounded-lg	"
                placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              />
              {!pwValid && pw.length > 0 && (
                <div className="text-xs text-red-500 mt-2 ml-2">
                  영문, 숫자, 특수문자 포함 8자 이상 입력해주세요
                </div>
              )}
            </div>
          </div>
          <button
            onClick={confirmMessage}
            disabled={notAllow}
            className="
            submit border mt-10 w-[100%] h-14 rounded-full bg-teal-500	text-white 
            disabled:bg-[#dadada] disabled:text-white
            "
          >
            로그인
          </button>
          <div className="flex justify-center mt-4">
            <span className="mr-2">계정이 없으신가요?</span>
            <Link
              to="/SignUp"
              className="flex flex-row justify-center items-center text-teal-500"
            >
              계정 만들러 가기
              <FaArrowRightLong className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
