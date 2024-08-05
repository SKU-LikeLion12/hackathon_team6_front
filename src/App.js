import { BrowserRouter, Route, Routes, useActionData } from "react-router-dom";
import { useReducer, useRef, createContext } from "react";

import Nav from "./component/Nav";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import ChatBot from "./pages/ChatBot";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import ChatMain from "./pages/ChatMain";
import ChatStart from "./pages/ChatStart";
import ChatEnd from "./pages/ChatEnd";
import DiaryStart from "./pages/DiaryStart";
import EmotionAnal from "./pages/EmotionAnal";
import EQ from "./pages/EQ";
import Producer from "./pages/Producer";
import SignUpCompleted from "./pages/SignUpCompleted";
import VoiceTextDisplay from "./pages/VoiceTextDisplay";
import Warning from "./pages/Warning";

import { AuthProvider } from "./context/AuthContext";
// const mockData = [
//   {
//     id: 1,
//     createdDate: new Date().getTime(),
//     emotionId: 1,
//     content: '1번 일기 내용',
//   },
//   {
//     id: 2,
//     createdDate: new Date().getTime(),
//     emotionId: 2,
//     content: '2번 일기 내용',
//   },
// ];

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
      <AuthProvider>
        <BrowserRouter>
          <DiaryStateContext.Provider value={data}>
            <DiaryDispatchContext.Provider
              value={{ onCreate, onUpdate, onDelete }}
            >
              <Nav />

              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/" element={<Home />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/calendar/diary/:id" element={<Diary />} />
                <Route path="/calendar/edit/:id" element={<Edit />} />
                <Route path="/chatbot" element={<ChatBot />} />
                <Route path="/ChatMain" element={<ChatMain />} />
                <Route path="/ChatStart" element={<ChatStart />} />
                <Route path="/ChatEnd" element={<ChatEnd />} />
                <Route path="/DiaryStart" element={<DiaryStart />} />
                <Route path="/EmotionAnal/:id" element={<EmotionAnal />} />
                <Route path="/EQ" element={<EQ />} />
                <Route path="/Edit" element={<Edit />} />
                <Route path="/producer" element={<Producer />} />
                <Route path="/signupcompleted" element={<SignUpCompleted />} />
                <Route path="VoiceTextDisplay" element={<VoiceTextDisplay />} />
                <Route path="/warning" element={<Warning />} />
              </Routes>
            </DiaryDispatchContext.Provider>
          </DiaryStateContext.Provider>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
// function Content() {
//   const location = useLocation();

//   return <>{location.pathname === "/" ? <HomeNav /> : <Nav />}</>;
// }
export default App;
