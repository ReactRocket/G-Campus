import React from "react";

const Card = ({ faculty }) => {
  const { fullname, gender, qualification, experience } = faculty;
  return (
    <div className="h-80 lg:w-[70%] w-[80%] mx-auto bg-slate-300 rounded-md flex py-4 gap-2 justify-start items-center flex-col">
      <div className="rounded-full h-[71%] bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-person-circle w-full h-full text-slate-300 m-0 p-0"
          viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
      </div>
      <div className="h-[12%] lg:w-4/5 w-[95%] truncate text-2xl font-semibold">
        {fullname} <span className="text-sm">{gender}</span>
      </div>
      <div className="h-[9%] lg:w-4/5 w-[95%] truncate font-medium">{qualification}</div>
      <div className="h-[8%] lg:w-4/5 w-[95%] truncate">{experience}+ years of experience</div>
    </div>
  );
};

export default Card;
