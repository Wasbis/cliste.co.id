import React, { Children, useEffect, useState } from "react";

export default function Modal({
  showModal,
  setShowModal,
  children,
  selectedModal,
  listKerjaan,
}) {
  const [data, setData] = useState({ id: 0, title: "", desc: "" });

  useEffect(() => {
    let findData = listKerjaan.find((data) => data.id === selectedModal);
    console.log(findData);
    if (showModal && findData) {
      setData(findData);
      document.body.style.overflow = "hidden"; // Disable scrolling on the body
    } else {
      setData({ id: 0, title: "", desc: "" });
      document.body.style.overflow = "auto"; // Enable scrolling on the body
    }

    return () => {
      document.body.style.overflow = "auto"; // Enable scrolling on component unmount
    };
  }, [showModal, selectedModal, listKerjaan]);

  // useEffect(() => {
  //   let findData = listKerjaan.find((data) => data.id === selectedModal);
  //   console.log(findData);
  //   if (findData == undefined) {
  //     setData({ id: 0, title: "", desc: "" });
  //   } else {
  //     setData(findData);
  //   }
  // }, [showModal]);

  return (
    <div>
      {showModal ? (
        <>
          <div className="backdrop-blur-sm h-screen w-screen fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen p-4">
              <div
                className="fixed inset-0 transition-opacity"
                onClick={() => setShowModal(false)}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <div className="w-[80vw] h-[80vh] z-20 bg-white p-6 rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 scale-95 hover:scale-100 duration-500 ">
                <div className="flex justify-end">
                  <button
                    className=" text-2xl w-8 h-8 bg-gray-600 text-white rounded-full hover:bg-gray-700 "
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </div>
                <div className="flex justify-start items-center px-12">
                  <h1 className="text-4xl font-bold ">{data.title}</h1>
                </div>
                <p>{data.desc}</p>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
