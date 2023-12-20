import React, { Children } from "react";

function CardComponentsmd(props) {
  return (
    <div className="drop-shadow-xl text-white  w-[1080px] max-md:w-[354px] h-[511px] max-md:rounded-xl max-sm:max-w-xs ">
      <div className={props.class}>{props.children}</div>
    </div>
  );
}

export default CardComponentsmd;
