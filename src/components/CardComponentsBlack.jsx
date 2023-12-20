import React, { Children } from "react";

function CardComponentsBlack(props) {
  return (
    <div
      className="rounded-[50px] drop-shadow-xl flex justify-center items-center  w-[529px] h-[529px] max-md:h-[511px] max-md:w-[320px] max-md:rounded-[30px] border-gray-200  text-white bg-black
       "
    >
      {/* <div
        className={`${className}  rounded-[50px] drop-shadow-xl flex justify-center items-center  w-[529px] h-[529px] max-md:h-[100px] border-gray-200  text-white bg-[#F5F5F7]`}
      > */}
      <div className={props.class}>{props.children}</div>
      {/* </div> */}
    </div>
  );
}

export default CardComponentsBlack;
