import React, { useState } from "react";
import Modal from "../components/Modal";

const Notice = ({ title, img, time, msg }) => {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      {isModal && (
        <>
          <Modal isModal={isModal} setIsModal={setIsModal} />
        </>
      )}
      <div className="h-full w-full">
        <div className="h-[10%] flex justify-between items-center">
          <h1 className=" text-3xl mx-5 font-bold  text-center ">Notice</h1>
          <button
            onClick={handleModal}
            className="bg-blue-600 rounded-xl px-5 p-2 mx-5 bold text-white  flex justify-center items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>

            <span>New</span>
          </button>
        </div>
        <div className="h-[90% ] w-full  grid place-items-center px-10">
          <div className="w-full p-10 bg-gray-100 dark:bg-gray-800 rounded-xl mx-auto border  shadow-sm">
            <div className="inline-flex items-center justify-between w-full">
              <h3 className="font-bold text-xl sm:text-2xl text-gray-800 dark:text-white">
                {/* title ? title : "Notification" */}
                {title || "Notification"}
              </h3>
            </div>
            <p className="mt-8 font-medium text-gray-500 text-sm sm:text-base dark:text-white">
              Today
            </p>
            <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow hover:bg-blue-100   w-full">
              <div className=" inline-flex items-center justify-between w-full">
                <div className="inline-flex items-center">
                  <img
                    src={
                      img ||
                      "https://cdn-icons-png.flaticon.com/128/763/763812.png"
                    }
                    alt="Training Icon"
                    className="w-6 h-6 mr-3"
                  />
                  <h3 className="font-bold text-base text-gray-800">
                    Training
                  </h3>
                </div>
                <p className="text-xs text-gray-500">{time || "No Time"}</p>
              </div>
              <p className="mt-1 text-sm">{msg || "Your msg.."}</p>
            </div>
            <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full hover:bg-blue-100 ">
              <div className=" inline-flex items-center justify-between w-full">
                <div className="inline-flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/893/893257.png"
                    alt="Messages Icon"
                    className="w-6 h-6 mr-3"
                  />
                  <h3 className="font-bold text-base text-gray-800">
                    Messages
                  </h3>
                </div>
                <p className="text-xs text-gray-500">1 hour </p>
              </div>
              <p className="mt-1 text-sm">You have a new message</p>
            </div>
            <p className="mt-8 font-medium text-gray-500 dark:text-white text-sm sm:text-base">
              Yesterday
            </p>
            <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full hover:bg-blue-100">
              <div className=" inline-flex items-center justify-between w-full">
                <div className="inline-flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6863/6863272.png"
                    alt="Form Icon"
                    className="w-6 h-6 mr-3"
                  />
                  <h3 className="font-bold text-base text-gray-800">Forms</h3>
                </div>
                <p className="text-xs text-gray-500">12:47</p>
              </div>
              <p className="mt-1 text-sm">
                Remember about filling out the COVID-19 from before the next
                appointment tomorrow
              </p>
            </div>
            <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full hover:bg-blue-100">
              <div className=" inline-flex items-center justify-between w-full">
                <div className="inline-flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/763/763812.png"
                    alt="Training Icon"
                    className="w-6 h-6 mr-3"
                  />
                  <h3 className="font-bold text-base text-gray-800">
                    Training
                  </h3>
                </div>
                <p className="text-xs text-gray-500">12:43</p>
              </div>
              <p className="mt-1 text-sm">
                We're glad you've decided to use our training system! Let's now
                set a complete of things
              </p>
            </div>
            <button className="w-full mt-4 border py-3 hover:text-white font-bold text-center gap-4 hover:bg-red-500  rounded-xl">
              Clear all notifications
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notice;
