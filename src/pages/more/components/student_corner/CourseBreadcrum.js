import React from "react";

const courseArray = ["BCA", "BBA", "BCOM"];
const CourseBreadcrum = ({ activeButton, setActiveButton }) => {
  return (
    <div className="w-full py-10 h-[10%] bg-gray-100 flex justify-center items-center gap-5 shadow-sm rounded-b-xl">
      {courseArray?.map((button, index) => {
        return (
          <button
            onClick={() => setActiveButton(index)}
            type="button"
            className={`shadow-md tracking-wide font-semibold  w-1/6 py-3 rounded-e-full rounded-s-full  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none ${
              activeButton === index
                ? "bg-blue-600 text-white "
                : "bg-white text-gray-500 hover:bg-blue-400 hover:text-white "
            }`}
            key={index}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default CourseBreadcrum;
