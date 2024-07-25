import { useParams } from "react-router-dom";

export default function Diary() {
  const params = useParams();
  return (
    <div className="flex justify-around items-center p-12 bg-[url('./img/cal_back.png')] bg-[length:3000px_100px] bg-no-repeat">
      <div className="w-[45%]">
        <h1 className="flex justify-center mb-4 font-bold	">일기장 미리보기</h1>
        <div className="flex justify-center">
          <div className="w-[85%] h-[550px]">
            <div className="rounded-3xl p-5 bg-zinc-300 w-full h-full">
              <div className="rounded-2xl p-8 bg-white h-full">
                <span className="block text-gray-500 text-xl">{params.id}</span>
                <div className="mt-3">
                  <div className="flex justify-center">
                    <img
                      className="rounded-xl py-2 h-auto"
                      src="/img/image55.png"
                      alt=""
                    />
                  </div>
                  <div className="border-t-2 py-5 mt-5">
                    <span className="text-gray-500">
                      오늘은 성결대학교 6팀 팀원들과 함께 앱 개발을 하였다. 혼자
                      할 때는 어려웠는데 다 같이 으쌰으쌰 하니 금방 끝났다.
                      뿌듯했다.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[45%]"></div>
    </div>
  );
}
