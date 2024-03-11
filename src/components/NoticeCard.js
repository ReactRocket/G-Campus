import React from "react";
import newgif from "../resources/gifs/new-gif.gif";

const NoticeCard = () => {
  const notice = [
    {
      title: "S.Y.B.C.A SEM 4 Theory Examination Marks (Out of 50)",

      date: "2021-11-11",
    },

    {
      title: "S.Y.B.C.A SEM 4 Theory Examination Marks (Out of 50)",

      date: "2021-11-11",
    },
    {
      title: "S.Y.B.C.A SEM 4 Theory Examination Marks (Out of 50)",
 
      date: "2021-11-11",
    },
  ];

  return (
    <>
      <div className="h-screen w-screen grid-cols-2 px-10 py-20 flex gap-6">
        {notice.map((val, index) => (
          <div
            key={index}
            className="h-[50%] w-[40%] rounded-lg border shadow-md py-5 px-5 cursor-pointer hover:shadow-xl"
          >
            {/* for Date */}
            <div className="h-[6%] w-full flex justify-center py-10 items-center">
              <input type="date" className="rounded-md p-1" value={val.date} />
            </div>
            {/* Image container */}
            <div className="flex justify-center">
              <img src={newgif} className="h-[4vh] w-auto" alt="Notice" />
            </div>
            {/* Title */}
            <div className="h-[10vh] py-5 px-5  w-full text-3xl">
              {val.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NoticeCard;
