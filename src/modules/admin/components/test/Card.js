import React from "react";

const Card = () => {
  const details = [
    {
      img: "",
      name: "",
      qualification: "",
      exprience: "",
    },
  ];
  return (
    <>
      <div className="h-full w-full bg-slate-300  p-10 flex justify-center items-center ">
        <div className="h-[60%] w-[25%] bg-red-400 border-2 p-5 rounded-md flex gap-5 justify-center items-center flex-col border-black ">
          <div className="h-[60%] w-[90%] bg-white p-2"></div>
          <div className="h-[10%] w-full bg-white"></div>
          <div className="h-[10%] w-full bg-white"></div>
          <div className="h-[10%] w-full bg-white"></div>
        </div>
      </div>
    </>
  );
};

export default Card;
