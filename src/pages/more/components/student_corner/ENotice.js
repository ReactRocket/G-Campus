import React from "react";
import NoticeCard from "../../../../components/NoticeCard";
const noticeArray = [
  {
    title: "S.Y.B.C.A SEM 4 Theory Examination Marks (Out of 50)",

    date: "March 11 2024",
    url:"http://www.sybca.edu.in/"
  },

  {
    title: "S.Y.B.B.A SEM 4 Theory Examination Marks (Out of 30)",

    date: "March 9 2024",
    url:"http://www.sybca.edu.in/"
  },
  {
    title: "S.Y.B.C.A SEM 4 Theory Examination Marks (Out of 50)",

    date: "March 9 2024",
    url:"http://www.sybca.edu.in/"
  },
  {
    title: "S.Y.B.COM SEM 4 Theory Examination Marks (Out of 50)",

    date: "March 8 2024",
    url:"http://www.sybca.edu.in/"
  },
  {
    title: "S.Y.B.B.A SEM 4 Theory Examination Marks (Out of 30)",

    date: "March 9 2024",
    url:"http://www.sybca.edu.in/"
  },
  {
    title: "S.Y.B.C.A SEM 4 Theory Examination Marks (Out of 50)",

    date: "March 9 2024",
    url:"http://www.sybca.edu.in/"
  },
  {
    title: "S.Y.B.COM SEM 4 Theory Examination Marks (Out of 50)",

    date: "March 8 2024",
    url:"http://www.sybca.edu.in/"
  },
];
const ENotice = () => {
  return (
    <div className=" min-h-full w-full p-10 ">
      <ul className=" grid grid-cols-2 gap-10">
        {noticeArray?.map((notice, index) => {
          return (
            <li>
              <NoticeCard data={notice}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ENotice;
