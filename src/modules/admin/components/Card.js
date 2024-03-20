import React from "react";
import User from "../../../images/user.png";

const Card = ({ faculty }) => {
  const { fullname, gender, qualification, experience, profile } = faculty;
  return (
    <div className="h-[400px] w-full border border-gray-300 shadow-lg p-3 rounded-lg flex flex-col gap-3 bg-gray-100">
      <div className="h-3/4 w-full overflow-hidden">
        <img
          src={
            profile !== undefined || profile !== null ? (
              require(`../../../images/${profile}`)
            ) : (
              <User />
            )
          }
          alt="faculty profile pic "
          className="w-full h-full rounded-lg aspect-auto object-cover scale-100 hover:scale-105 transition-transform duration-700 cursor-pointer"
        />
      </div>

      <div className="h-1/4 w-full flex flex-col ">
        <div className="truncate font-[lato]  text-2xl font-semibold">
          {fullname} <span className="text-sm">{gender}</span>
        </div>
        <div className="font-[lato] font-semibold truncate ">
          {qualification}
        </div>
        <div className="font-semibold font-[lato] truncate">
          {experience}+ years of experience
        </div>
      </div>
    </div>
  );
};

export default Card;
