import React from "react";
import ImageGallery from "../../components/ImageGallery";

import MemberTableView from "../../components/MemberTableView";

// bba images
import BBA1 from "../../resources/images/cell/ANTI RAGGING SQUAD/bba/BBA1.jpeg";
import BBA2 from "../../resources/images/cell/ANTI RAGGING SQUAD/bba/BBA2.jpeg";
import BBA3 from "../../resources/images/cell/ANTI RAGGING SQUAD/bba/BBA3.jpeg";
import BBA4 from "../../resources/images/cell/ANTI RAGGING SQUAD/bba/BBA4.jpeg";
import BBA5 from "../../resources/images/cell/ANTI RAGGING SQUAD/bba/BBA5.jpeg";
import BBA6 from "../../resources/images/cell/ANTI RAGGING SQUAD/bba/BBA6.jpeg";

// bcom images
import BCOM1 from "../../resources/images/cell/ANTI RAGGING SQUAD/bcom/BCOM1.jpeg";
import BCOM2 from "../../resources/images/cell/ANTI RAGGING SQUAD/bcom/BCOM2.jpeg";
import BCOM3 from "../../resources/images/cell/ANTI RAGGING SQUAD/bcom/BCOM3.jpeg";
import BCOM4 from "../../resources/images/cell/ANTI RAGGING SQUAD/bcom/BCOM4.jpeg";
import BCOM5 from "../../resources/images/cell/ANTI RAGGING SQUAD/bcom/BCOM5.jpeg";
import BCOM6 from "../../resources/images/cell/ANTI RAGGING SQUAD/bcom/BCOM6.jpeg";

// bca images
import BCA1 from "../../resources/images/cell/ANTI RAGGING SQUAD/bca/BCA1.jpeg";
import BCA2 from "../../resources/images/cell/ANTI RAGGING SQUAD/bca/BCA2.jpeg";
import BCA3 from "../../resources/images/cell/ANTI RAGGING SQUAD/bca/BCA3.jpeg";
import BCA4 from "../../resources/images/cell/ANTI RAGGING SQUAD/bca/BCA4.jpeg";
import BCA5 from "../../resources/images/cell/ANTI RAGGING SQUAD/bca/BCA5.jpeg";
import BCA6 from "../../resources/images/cell/ANTI RAGGING SQUAD/bca/BCA6.jpeg";



const CellArrayData = [
  {
    title: "BBA",
    subTitle: "ANTI RAGGING SQUAD",
    images: [BBA1, BBA2, BBA3, BBA4, BBA5, BBA6]
  },
  {
    title: "BCOM",
    subTitle: "ANTI RAGGING SQUAD",
    images: [BCOM1, BCOM2, BCOM3, BCOM4, BCOM5, BCOM6]
  },
  {
    title: "BCA",
    subTitle: "ANTI RAGGING SQUAD",
    images: [BCA1, BCA2, BCA3, BCA4, BCA5, BCA6]
  },
];

const committeeMemberArray = [
  {
    name: "DR. MEHUL P. DESAI",
    designation: "PRINCIPAL",
    batch: "BOTH",
    connect: "MEHULDESAI@UDHNACOLLEGE.AC.IN",
  },
  {
    name: "DR. MANISH M. KAYASTH",
    designation: "VICE-PRINCIPAL",
    batch: "BATCH-1",
    connect: "MANISHKAYASTH@UDHNACOLLEGE.AC.IN",
  },
  {
    name: "DR. TEJAS R. GHADIYALI ",
    designation: "BCA-CO-ORDINATOR",
    batch: "BATCH-2",
    connect: "TEJASGHADIYALI@UDHNACOLLEGE.AC.IN",
  },
  {
    name: "DR. DARSHAN M. MEHTA",
    designation: "CO-ORDINATOR",
    batch: "BATCH-1",
    connect: "https://www.linkedin.com/in/mehul-p-desai-92720b191/",
  },
  {
    name: "DR. VISHAL A.NAIK ",
    designation: "CO-ORDINATOR",
    batch: "BATCH-2",
    connect: "https://www.linkedin.com/in/mehul-p-desai-92720b191/",
  },
  {
    name: "MR. RONAK M. SHAH",
    designation: "MEMBER",
    batch: "BATCH-1",
    connect: "https://www.linkedin.com/in/mehul-p-desai-92720b191/",
  },
];

const Club = () => {
  return (
    <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
      <h1 className="text-5xl font-semibold text-center my-10">
        ANTI RAGGING CELL
      </h1>

    <MemberTableView  data={committeeMemberArray} DESIGNATION BATCH/>
      <div className="flex justify-center items-center flex-col gap-10 ">
        {CellArrayData.map((item, key) => {
          return (
            <ImageGallery
              key={key}
              title={item.title}
              subTitle={item.subTitle}
              images={item.images}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Club;
