import React from "react";

function StudentSkeleton({ IsMenuOpen }) {
  return (
    <div className="h-screen w-full">
      <aside
        className={`fixed z-10 top-0 w-full flex flex-col justify-between h-full border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] ${
          !IsMenuOpen && "ml-[-100%]"
        }`}>
        <div className="h-full w-full">
          <div className="border-b h-[10%] w-full border-t flex items-center justify-center">
            <div className="w-[90%] h-[70%] bg-gray-300 rounded-lg animate-pulse"></div>
          </div>

          <div className="h-[80%] text-center flex justify-center items-center">
            <div className="w-[90%] h-[90%] bg-gray-300 rounded-lg animate-pulse"></div>
          </div>

          <div className="h-[10%] border-t flex items-center justify-center">
            <div className="w-[90%] h-[70%] bg-gray-300 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </aside>
      <div className="ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-screen">
        <div className="sticky z-10 top-0 h-[10%] border-b bg-white flex justify-center items-center">
          <div className="h-[70%] w-[97%] bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
        <div className="h-[90%] w-full flex flex-col justify-evenly items-center">
          {/* <div className="h-[97%] w-[95%] bg-gray-300 rounded-lg animate-pulse"></div> */}
          <div className="h-1/3 w-[97%] flex justify-evenly items-center">
            <div className="h-[50%] w-[35%] bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="h-full w-[19%] bg-gray-300 rounded-full animate-pulse mb-10"></div>
            <div className="h-[50%] w-[13%] bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="h-[50%] w-[13%] bg-gray-300 rounded-lg animate-pulse"></div>
          </div>
          <div className="h-1/3 w-[40%] bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default StudentSkeleton;
