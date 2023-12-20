import React from "react";
import whiteAddButton from "../assets/icon/buttonicon/whiteAddButton.png";
import plus from "../assets/icon/buttonicon/pluswhite.svg";

function WhiteButtonComponents({ showModal, setShowModal }) {
  return (
    <div>
      <button
        className="inline-flex justify-center items-center bg-white w-[50px] h-[50px] rounded-full text-indigo-100 text-4xl hover:opacity-80"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <img className="fill-black font-bold" src={plus} alt="" />
      </button>
    </div>
  );
}

export default WhiteButtonComponents;
