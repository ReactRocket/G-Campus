import React from "react";

const Modal = ({ setIsModal, isModal }) => {
  return (
    <>
      <div
        onClick={() => setIsModal(!isModal)}
        className="cursor-pointer  h-screen w-screen m-0 p-0 fixed top-0  bg-gray-900 bg-opacity-30 justify-center items-center flex "
      ></div>

      <div className=" justify-center items-center flex">
        <div
        //   className={`shadow-lg transform ${
        //     isModal ? "translate-y-10" : "-translate-y-full"
        //   }   transition-all duration-300 delay-1000 h-96 w-96 rounded-lg  fixed top-0 left-0 px-10  md:left md:p-0 lg:left-[40%] mt-1 pt-10 `}
        className={`shadow-lg transform ${isModal ? "translate-y-0" : "-translate-y-full"}
  transition-all duration-300 h-96 w-96 rounded-lg fixed top-0 left-0 px-10 md:left md:p-0 lg:left-[40%] mt-1 pt-10 `}
        >
          <form className="bg-gray-100 shadow-md top-0 rounded px-8 pt-6 pb-8 mb-4 ">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Tittle
              </label>
              <input
                name="title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="title"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Link
              </label>
              <input
                name="link"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                id="link"
                type="link"
                placeholder="link"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                name="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="Type here..."
              />
            </div>

            <div className="flex items-center justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Save
              </button>
              {/* <button
                    onClick={handleModal}
                    className="bg-blue-300 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Cancel
                  </button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
