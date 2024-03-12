import React from "react";
import ImageGridView from "../../components/ImageGridView";

import MemberTableView from "../../components/MemberTableView";

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

const title = "THE STEP PROGRAM";
const subTitle = "NJ GROUP (UDHNA)";
const description =
  "NJ Group Udhna is offering a program named STEP (which could stand for various things like Student Training and Employment Program, Skills Training and Enhancement Program, etc.).";

const stepImageData = [
  {
    title: title,
    subTitle: subTitle,
    description: description,
  },
  {
    title: title,
    subTitle: subTitle,
    description: description,
  },
  {
    title: title,
    subTitle: subTitle,
    description: description,
  },
  {
    title: title,
    subTitle: subTitle,
    description: description,
  },
  {
    title: title,
    subTitle: subTitle,
    description: description,
  },
];

const Step = () => {
  return (
    <>
      <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
        {/* <!-- Table --> */}
        <MemberTableView data={committeeMemberArray} DESIGNATION BATCH />
      </section>
      <ImageGridView
        title={"GLIMPSES OF ACTIVITIES"}
        description={
          "Glimpses of activities include outdoor pursuits like hiking, camping, and sports, as well as indoor hobbies such as reading, cooking, and crafting. Social engagements, work-related tasks, educational pursuits, volunteer efforts, creative endeavors, and fitness activities also contribute to people's lifestyles and interests."
        }
        data={stepImageData}
      />
    </>
  );
};

export default Step;
