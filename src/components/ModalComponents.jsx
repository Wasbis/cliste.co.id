import React, { Children, useEffect, useState } from "react";

const listKerjaan = [
  { id: 1, title: "satu", desc: "xAC" },
  { id: 2, title: " DUa", desc: "asdasds" },
  { id: 3, title: "Tiga", desc: "xAC" },
  { id: 4, title: "Empat", desc: "asdasds" },
  { id: 5, title: "Lima", desc: "xAC" },
  { id: 6, title: "Enam", desc: "asdasds" },
];

export default function Modal({
  showModal,
  setShowModal,
  children,
  selectedModal,
}) {
  const [data, setData] = useState({ id: 0, title: "", desc: "" });

  useEffect(() => {
    let findData = listKerjaan.find((data) => data.id === selectedModal);
    console.log(findData);
    if (findData == undefined) {
      setData({ id: 0, title: "", desc: "" });
    } else {
      setData(findData);
    }
  }, [showModal]);

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
              <div className="flex justify-center  w-[80vw] h-[80vh] z-20 bg-white p-6 rounded-3xl">
                <div className="content">
                  <h1 className="text-red">{data.title}</h1>
                  <p>{data.desc}</p>
                </div>
                <button
                  className="top-5 right-5 mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                  onClick={() => setShowModal(false)}
                >
                  Close Modal
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
