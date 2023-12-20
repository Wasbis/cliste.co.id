import React, { Children } from "react";

function CardComponentslgimg(props) {
  return (
    <div className="drop-shadow-xl  border-gray-200  text-white w-[1080px]  max-md:w-[354px] h-[511px] max-md:rounded-xl max-sm:max-w-xs  ">
      <div className={props.class}>{props.children}</div>
      {/* </div> */}
    </div>
  );
}

export default CardComponentslgimg;
