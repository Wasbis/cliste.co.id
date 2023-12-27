import React from "react";
import whiteAddButton from "../assets/icon/buttonicon/whiteAddButton.png";
import plus from "../assets/icon/buttonicon/pluswhite.svg";

function WhiteButtonComponents({
  showModal,
  setShowModal,
  setSelectedModal,
  index,
}) {
  const onClickHandle = () => {
    setSelectedModal(index);
    setShowModal(true);
  };
  return (
    <div>
      <button
        className="inline-flex justify-center items-center bg-white w-[50px] h-[50px] max-md:w-[40px] max-md:h-[40px] rounded-full text-indigo-100 text-4xl hover:opacity-80"
        type="button"
        onClick={() => onClickHandle()}
      >
        <img className=" font-bold" src={plus} alt="" />
      </button>
    </div>
  );
}

export default WhiteButtonComponents;
