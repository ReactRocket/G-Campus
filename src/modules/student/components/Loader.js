import React from "react";

const Loader = () => {
  return (
    <div className="transition-all  duration-500 ease-in-out delay-500 overflow-hidden z-50 h-full w-full  bg-transparent bg-opacity-50 flex justify-center items-center">
      <span className="z-50 aspect-square w-[70px]  rounded-full animate-spin border-gray-300 border-4  border-t-blue-500"></span>
    </div>
  );
};

export default Loader;
