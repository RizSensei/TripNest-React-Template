import React from "react";

const Modal_Layout = ({ children, position }) => {
  switch (position) {
    case "centre":
      return (
        <div className="inset-0 h-screen w-screen fixed bg-black bg-opacity-50 z-20">
          <div className="flex flex-col h-full w-full items-center justify-center">
            <div className="relative p-5 h-[calc(100%-5rem)] 2xl:h-[calc(100%-10rem)] bg-white w-[calc(100%-5rem)] md:w-[calc(100%-12rem)] lg:w-[calc(100%-24rem)] 2xl:w-[calc(100%-32rem)] rounded-xl overflow-y-scroll shadow-xl shadow-black">
              {children}
            </div>
          </div>
        </div>
      );
    case "right":
      return (
        <div className="inset-0 h-screen w-screen fixed bg-black bg-opacity-50 z-20">
          <div className="flex justify-end h-full w-full ">
            <div className="relative w-[calc(100%-6rem)] md:w-[calc(100%-12rem)] lg:w-[calc(100%-30rem)] xl:w-[calc(100%-45rem)] 2xl:w-[calc(100%-60rem)] bg-white overflow-y-scroll">
                {children}
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Modal_Layout;
