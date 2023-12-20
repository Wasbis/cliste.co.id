import React from "react";
import whiteAddButton from "../assets/icon/buttonicon/whiteAddButton.png";
import BlackAddButton from "../assets/icon/buttonicon/blackAddButton.png";
import plus from "../assets/icon/buttonicon/plus.svg";

function BlackButtonComponents({
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
        className="inline-flex justify-center items-center bg-black w-[50px] h-[50px] rounded-full text-indigo-100 text-4xl hover:opacity-80"
        type="button"
        onClick={() => onClickHandle()}
      >
        <img src={plus} alt="" />
      </button>
    </div>
  );
}

export default BlackButtonComponents;
