import React,{useState} from "react";

import Downloads from "./components/student_corner/Downloads";
import ENotice from "./components/student_corner/ENotice";
import Fees from "./components/student_corner/Fees";
import InternalMarks from "./components/student_corner/InternalMarks";
import MHA from "./components/student_corner/MHA";
import MsgToPrincipal from "./components/student_corner/MsgToPrincipal";


const StudentCornerArray = [
  "E-Notice Board",
  "Fees Structure",
  "Message to Principal",
  "Internal Marks",
  "Downloads",
  "Mental Health Awareness",
];

const StudentCorner = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  return (
    <div className="h-screen w-screen overflow-hidden flex">
      <aside className="w-1/4 bg-white h-full  left-0 ">
        <ul className="p-5 flex flex-col gap-2">
         {
          StudentCornerArray.map((item, index) => {
            return <button onClick={()=> setActiveSlide(index)} className={`tracking-wide transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none h-10 w-full border-b-2 text-lg  cursor-pointer flex justify-start items-center p-5  rounded-md ${activeSlide === index ? "bg-blue-600 text-white font-semibold hover:text-white " :"text-gray-500  hover:font-semibold hover:text-blue-600"}`} key={index}><span>{item}</span></button>;
          })
         }
        </ul>
      </aside>
      <main className="w-3/4 h-full bg-gray-200   right-0 overflow-y-scroll ">
            {
              activeSlide === 0 && <ENotice />
            }
            {
              activeSlide === 1 && <Fees />
            }
            {
              activeSlide === 2 && <MsgToPrincipal />
            }
            {
              activeSlide === 3 && <InternalMarks />
            }
            {
              activeSlide === 4 && <Downloads />
            }
            {
              activeSlide === 5 && <MHA />
            }
      
      
      </main>
    </div>
  );
};

export default StudentCorner;
