import React, { useEffect } from "react";
import "../resources/css/loader.css";

const Loader = () => {
  return (
    <div className=" overflow-hidden z-10 h-screen w-screen fixed top-0 left-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <span class=" aspect-square w-[70px]  rounded-full animate-spin border-gray-300 border-4  border-t-blue-500"></span>
    </div>
  );
};

export default Loader;
