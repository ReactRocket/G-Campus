import React from "react";
import ImageGallery from "../../components/ImageGallery";

import MemberTableView from "../../components/MemberTableView";




const CellArrayData = [
  {
    title: "BBA",
    subTitle: "ANTI RAGGING SQUAD",
  },
  {
    title: "BCOM",
    subTitle: "ANTI RAGGING SQUAD",
  },
  {
    title: "BCA",
    subTitle: "ANTI RAGGING SQUAD",
  },
];

const committeeMemberArray = [
  {
    name: "DR. AYUSH P. DESAI",
    designation: "PRINCIPAL",
    batch: "BOTH",
    connect: "MEHULDESAWI@GCAMPUS.AC.IN",
  },
  {
    name: "DR. SANJU M. KAYASTH",
    designation: "VICE-PRINCIPAL",
    batch: "BATCH-1",
    connect: "MANISHWWKAYASTH@GCAMPUS.AC.IN",
  },
  {
    name: "DR. KISHORE R. GHADIYALI ",
    designation: "BCA-CO-ORDINATOR",
    batch: "BATCH-2",
    connect: "TEJASGHWADIYALI@GCAMPUS.AC.IN",
  },
  {
    name: "DR. MANOJ M. MEHTA",
    designation: "CO-ORDINATOR",
    batch: "BATCH-1",
    connect: "https://www.linkedin.com/in/mehulL-p-desai-92720b191/",
  },
  {
    name: "DR. KOMAL A.NAIK ",
    designation: "CO-ORDINATOR",
    batch: "BATCH-2",
    connect: "https://www.linkedin.com/in/mehulL-p-desai-92720b191/",
  },
  {
    name: "MR. DINESH M. SHAH",
    designation: "MEMBER",
    batch: "BATCH-1",
    connect: "https://www.linkedin.com/in/mehulL-p-desai-92720b191/",
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
            />
          );
        })}
      </div>
    </section>
  );
};

export default Club;
