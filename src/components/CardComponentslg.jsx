import React, { Children } from "react";

function CardComponentslg(props) {
  return (
    <div className=" flex justify-center mx-48 my-5 w-[1068px] h-[529px] ">
      <div className=" rounded-[50px] drop-shadow-xl flex m-3 items-center text-start justify-center flex-col  h-[529px] w-[1068px] bg-[#003478] border border-gray-200  text-white dark:bg-[#003478] dark:border-gray-200">
        <div className={props.class}>{props.children}</div>
      </div>
    </div>
  );
}

export default CardComponentslg;
