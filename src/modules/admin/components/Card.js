import React from "react";
import User from "../../../images/user.png";

const Card = ({ faculty }) => {
  const { fullname, gender, qualification, experience, profile } = faculty;
  return (
    <>
      <div className="group cursor-pointer relative rounded-3xl  space-y-6 overflow-hidden">
        <img
          className="mx-auto h-[26rem] w-full object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
          src={
            profile !== undefined || profile !== null ? (
              require(`../../../images/${profile}`)
            ) : (
              <User />
            )
          }
          alt="faculty profile pic "
        
          loading="lazy"
          width="640"
          height="805"
        />
        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
            {fullname} <span className="text-sm">{gender}</span>
            </h4>
            <span className="block text-sm text-gray-500">{qualification}</span>
          </div>
          <p className="mt-8 text-lg text-gray-300 dark:text-gray-600">
          This is  {fullname} . {experience}+ years of experience
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
{/* <div className="h-[400px] w-full border border-gray-300 shadow-lg p-3 rounded-lg flex flex-col gap-3 bg-gray-100">
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
    <div className="font-[lato] font-semibold truncate ">{qualification}</div>
    <div className="font-semibold font-[lato] truncate">
      {experience}+ years of experience
    </div>
  </div>
</div>; */}
