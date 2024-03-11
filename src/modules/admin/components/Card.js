import React from "react";

const Card = ({ faculty }) => {
  const { fullname, gender, qualification, experience, profile } = faculty;
  return (
    <div className="h-80 lg:w-[70%] w-[80%] mx-auto bg-slate-300 rounded-md flex py-4 gap-2 justify-start items-center flex-col">
      <div className="rounded-full h-[65%] bg-white">
        <img
          src={require(`../../../../images/${profile}`)}
          alt="faculty profile pic"
          className="w-full h-full rounded"
        />
      </div>
      <div className="h-[12%] lg:w-4/5 w-[95%] truncate text-2xl font-semibold">
        {fullname} <span className="text-sm">{gender}</span>
      </div>
      <div className="h-[9%] lg:w-4/5 w-[95%] truncate font-medium">
        {qualification}
      </div>
      <div className="h-[8%] lg:w-4/5 w-[95%] truncate">
        {experience}+ years of experience
      </div>
    </div>
  );
};

export default Card;
