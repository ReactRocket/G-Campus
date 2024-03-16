import React from "react";
import User from "../../../images/user.png";

const Card = ({ faculty }) => {
  const { fullname, gender, qualification, experience, profile } = faculty;
  return (
    <div className="h-80 lg:w-[70%] w-[80%] mx-auto border border-blue-500  bg-slate-100 rounded-lg shadow hover:bg-blue-300 cursor-pointer scale-100 hover:scale-105 transition-all duration-1000 flex py-4 gap-2 justify-start items-center flex-col">
      <div className="rounded-full h-[65%] bg-white">
        <img
       
          src={
            profile !== undefined || profile !== null ? (
              require(`../../../images/${profile}`)
            ) : (
              <User />
            )
          }
          alt="faculty profile pic"
          className="w-full h-full rounded"
        />
      </div>
     

      <div className="h-[12%] lg:w-4/5 w-[95%] truncate font-[lato]  text-2xl font-semibold">
        {fullname} <span className="text-sm">{gender}</span>
      </div>
      <div className="h-[9%] lg:w-4/5 w-[95%] font-[lato] font-semibold truncate ">
        {qualification}
      </div>
      <div className="h-[8%] lg:w-4/5 w-[95%] font-semibold font-[lato] truncate">
        {experience}+ years of experience
      </div>
    </div>
  );
};

export default Card;
