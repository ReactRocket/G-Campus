import React from "react";
import "../resources/css/loader.css";

const Loader = () => {
  return (
    <div className="transition-all duration-500 ease-in-out delay-500 overflow-hidden z-50 h-screen w-screen fixed top-0 left-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <span class="z-50 aspect-square w-[70px]  rounded-full animate-spin border-gray-300 border-4  border-t-blue-500"></span>
    </div>
  );
};

export default Loader;
