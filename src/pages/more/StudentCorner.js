import React, { useState } from "react";

import Downloads from "./components/student_corner/Downloads";
import ENotice from "./components/student_corner/ENotice";
import Fees from "./components/student_corner/Fees";
import InternalMarks from "./components/student_corner/InternalMarks";
import MHA from "./components/student_corner/MHA";
import MsgToPrincipal from "./components/student_corner/MsgToPrincipal";

const StudentCornerArray = [
  "E-Notice Board",
  "Fees Structure",
  // "Message to Principal",
  // "Internal Marks",
  // "Downloads",
  "Mental Health Awareness",
];

const StudentCorner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sideMenuToggle, setSideMenuToggle] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden flex">
      <aside
        className={` w-1/4 bg-white h-full  left-0 lg:block ${
          sideMenuToggle ? "block" : "hidden"
        }  `}>
        <ul className="p-5 flex flex-col gap-2">
          {StudentCornerArray.map((item, index) => {
            return (
              <button
                onClick={() => setActiveSlide(index)}
                className={` whitespace-nowrap text-ellipsis overflow-hidden tracking-wide transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none h-10 w-full border-b-2 text-lg  cursor-pointer flex justify-start items-center p-5  rounded-md ${
                  activeSlide === index
                    ? "bg-blue-600 text-white font-semibold hover:text-white "
                    : "text-gray-500  hover:font-semibold hover:text-blue-600"
                }`}
                key={index}>
                <span className="hidden lg:block">{item}</span>
                <span className="flex justify-center items-center w-full lg:hidden">
                  {index === 0 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-chat-left-dots"
                      viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                      <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-credit-card-fill" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1"/>
                  </svg>
                  )}
                  {index === 2 && (
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-hospital" viewBox="0 0 16 16">
                   <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"/>
                   <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z"/>
                 </svg>
                  )}
                </span>
              </button>
            );
          })}
        </ul>
      </aside>
      <main className="relative lg:w-3/4 w-full h-full bg-gray-200   right-0 overflow-y-scroll ">
        <button
          onClick={() => setSideMenuToggle(!sideMenuToggle)}
          className={`transition-transform duration-300 absolute top-3 ${
            sideMenuToggle ? "rotate-180" : ""
          } lg:hidden `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-chevron-compact-right"
            viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"
            />
          </svg>
        </button>
        {activeSlide === 0 && <ENotice />}
        {activeSlide === 1 && <Fees />}
        {/* {
              activeSlide === 2 && <MsgToPrincipal />
            }
            {
              activeSlide === 3 && <InternalMarks />
            }
            {
              activeSlide === 4 && <Downloads />
            } */}
        {activeSlide === 2 && <MHA />}
      </main>
    </div>
  );
};

export default StudentCorner;
