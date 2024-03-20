import React from "react";
import Profile from "../../../resources/images/profileDetail.svg";

const AddFacultyModal = ({ toggle }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-full w-full flex justify-center items-center overflow-y-scroll pt-20 md:pt-0">
      <div class="w-full  px-5 md:px-10 h-full flex justify-center items-center mt-36 md:mt-0">
        <form onSubmit={handleSubmit} className=" w-3/4 mx-auto">
          <div class="flex justify-start items-center ">
            <div className="my-2 flex items-center w-full flex-col justify-center  gap-5">
              <div className="w-40 aspect-square bg-blue-100 mx-auto rounded-full border border-gray-900   flex items-center justify-center text-blue-500 scale-100 hover:scale-105 cursor-pointer transition-transform duration-1000">
                <img
                  src={Profile}
                  alt="profile"
                  className="w-full h-full m-auto rounded-full object-cover  "
                />
              </div>{" "}
              <input type="file" hidden name="profile" id="profile" />
              <button
                onClick={() => document.getElementById("profile").click()}
                id="profile"
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Add Profile
              </button>
            </div>
          </div>
          <div class="md:flex md:-mx-3">
            <div class="md:w-1/2 px-3 mb-5">
              <label for="" class="text-xs font-semibold px-1">
                First name
              </label>
              <div class="flex">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  class="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                  placeholder="John"
                />
              </div>
            </div>
            <div class="md:w-1/2 px-3 mb-5">
              <label for="" class="text-xs font-semibold px-1">
                Last name
              </label>
              <div class="flex">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  class="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                  placeholder="Smith"
                />
              </div>
            </div>
          </div>
          <div class="md:flex md:-mx-3">
            <div class="md:w-1/2 px-3 mb-5">
              <label for="" class="text-xs font-semibold px-1">
                Email
              </label>
              <div class="flex">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="email"
                  class="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                  placeholder="johnsmith@example.com"
                />
              </div>
            </div>
            <div class="md:w-1/2 px-3 mb-5">
              <label for="" class="text-xs font-semibold px-1">
                Gender
              </label>
              <div class="flex">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-Gender-outline text-gray-400 text-lg"></i>
                </div>
                <select
                  name="gender"
                  class="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                  placeholder="johnsmith@example.com"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
          <div class="md:flex md:-mx-3">
            <div class="md:w-1/2 px-3 mb-5">
              <label for="" class="text-xs font-semibold px-1">
                Experience (In Years Only)
              </label>
              <div class="flex">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="number"
                  name="experience"
                  class="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                  placeholder="5"
                />
              </div>
            </div>
            <div class="md:w-1/2 px-3 mb-5">
              <label for="" class="text-xs font-semibold px-1">
                Password
              </label>
              <div class="flex">
                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="password"
                  class="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                  placeholder="************"
                />
              </div>
            </div>
          </div>
          <div class=" flex md:flex-row flex-col justify-center items-center w-full gap-5 mb-5">
            <button
              type="submit"
              class=" w-full   bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold"
            >
              Save
            </button>
            <button
              onClick={() => toggle(false)}
              class="  w-full   bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3  font-semibold"
            >
              Cancle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFacultyModal;
