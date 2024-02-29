import React, { useEffect } from "react";
import "../resources/css/loader.css";

const Loader = ({ loading }) => {
  useEffect(() => {
    document.querySelector("body").style.overflow = "hidden";

    const handleBodyOverflow = () => {
      document.querySelector("body").style.overflowY = "scroll";
      document.querySelector("body").style.overflowX = "hidden";
      document.querySelector("body").style.scrollBehavior = "smooth";
    };

    return () => {
      handleBodyOverflow();
    };
  }, [loading]);
  return (
    <div className="transition-all duration-500 ease-in-out delay-500 overflow-hidden z-50 h-screen w-screen fixed top-0 left-0 bg-opacity-50 flex justify-center items-center">
      <span className="z-50 aspect-square w-[70px]  rounded-full animate-spin border-transparent border-[7px]  border-t-blue-500"></span>
    </div>
  );
};

export default Loader;
