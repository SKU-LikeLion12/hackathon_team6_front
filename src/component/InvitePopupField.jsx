import React from "react";

const InvitePopupField = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="border-slate-900 bg-white w-[700px] h-[300px] pt-6 rounded-3xl border shadow-lg relative z-50">
        <button
          className="absolute right-5 top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default InvitePopupField;
