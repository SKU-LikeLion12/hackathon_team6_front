import React from 'react';

import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className="flex justify-center text-center">
        <div className="container flex flex-col items-center w-[150%] py-8">
          <img src="/img/FeelInsight.png" className="w-[150px] mb-4" alt="" />
          <div className="span text-sm text-slate-500 mb-16">
            FeelInsight는 성결대 멋쟁이사자처럼 6팀의 제작물입니다.
            <br />
            <div className="mt-2 flex flex-row justify-center">
              <span className="mr-2">
                <FiMail size={20} />
              </span>
              <span className="text-slate-500 text-sm font-medium mr-2">
                문의하기
              </span>
              <span className="text-sm font-medium">
                sku.likelion.6@gmail.com
              </span>
            </div>
          </div>
          <div className="copyright text-sm font-medium mb-6">
            <span className="text-slate-500">
              &copy; 성결대 멋쟁이사자처럼 6팀 2024
            </span>
            <Link to="/producer">
              <button className="ml-2 border rounded-full bg-black text-white px-5 py-2">
                제작자
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
