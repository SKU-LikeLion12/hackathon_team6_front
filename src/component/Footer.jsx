import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center text-center">
        <div className="container flex-col w-[100%] flex border-t py-8">
          <div className="email text-sm font-medium mb-2">
            dlghdus9949@sungkyul.ac.kr
          </div>
          <div className="copyright text-sm font-medium mb-2">
            SKU-sku.com &copy; 2024
          </div>
          <div className="contact text-sm font-medium mb-2">문의하기</div>

          <div className="span text-xs text-slate-500">
            LikeLion Theater는 성결대 멋쟁이사자처럼 이호연의 제작물입니다{" "}
            <br />
            서비스 및 동아리 관련 문의는 위 저널들을 통해 해주시길 바랍니다.
          </div>
        </div>
      </div>
    </>
  );
}
