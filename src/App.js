// import "./App.css";
import { BrowserRouter, Route, Routes, useActionData } from "react-router-dom";
import { useReducer, useRef, createContext } from "react";

import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import ChatBot from "./pages/ChatBot";
import EQ from "./pages/EQ";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import Producer from "./pages/Producer";
import SignUpCompleted from "./pages/SignUpCompleted";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter(
        (item) => String(item.id) !== String(useActionData.id)
      );
    default:
      return state;
  }
}

// onCreate, onUpdate, onDelete 함수들을 App.js의 Routes 컴포넌트 안에 있는 모든 컴포넌트들에서 쓸 수 있게 함
const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      date: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        {/* <button onClick={() => onCreate(new Date().getTime(), 1, "hello")}>
          일기 추가
        </button>
        <button
          onClick={() => onUpdate(1, new Date().getTime(), 3, "수정된 일기")}
        >
          일기 수정
        </button>
        <button onClick={() => onDelete(1)}>일기 삭제</button> */}
        <DiaryStateContext.Provider value={data}>
          <DiaryDispatchContext.Provider
            value={{ onCreate, onUpdate, onDelete }}
          >
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/calendar/diary/:id" element={<Diary />} />
              <Route path="/calendar/edit/:id" element={<Edit />} />
              <Route path="/chatbot" element={<ChatBot />} />
              <Route path="/eq" element={<EQ />} />
              <Route path="/producer" element={<Producer />} />
              <Route path="/signupcompleted" element={<SignUpCompleted />} />
            </Routes>
          </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
