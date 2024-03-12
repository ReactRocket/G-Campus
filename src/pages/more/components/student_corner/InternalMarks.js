import React, { useState } from "react";
import CourseBreadcrum from "./CourseBreadcrum";

const InternalMarks = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className=" h-full w-full">
      <CourseBreadcrum
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <div className="w-full h-[90%] overflow-y-scroll"></div>
    </div>
  );
};

export default InternalMarks;
