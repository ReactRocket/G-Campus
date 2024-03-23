import React, { useState } from "react";
import Profile from "../../../resources/images/profileDetail.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../../../utils/validateData";

const AddFacultyModal = ({ toggle }) => {
  const [imageUrl, setImageUrl] = useState(null);
  // const [addFaculty, setAddFaculty] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
    if (validateForm(formObject)) {
      try {
        axios
          .post("http://localhost:5000/faculties/insert", formObject, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            let response = res.data;
            if (response.isSuccess) {
              alert("Faculty Added succusfully");
              toggle(false);
            }
          })
          .catch((err) => {
            navigate("/admin/error");
          });
      } catch (error) {
        navigate("/admin/error");
      }
    }
  };

  const handleChange = (e) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="h-full w-full flex justify-center items-center overflow-y-scroll pt-20 md:pt-0">
      <div className="w-full  px-5 md:px-10 h-full flex justify-center items-center mt-36 md:mt-0">
        <form onSubmit={handleSubmit} className=" w-3/4 mx-auto">
          <div className="flex justify-start items-center">
            {/* <div className="my-2 flex items-center w-full flex-col justify-center  gap-5">
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
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Add Profile
              </button>
            </div> */}
            <div className="flex h-56 w-full items-center justify-center bg-grey-lighter">
              <label className="w-56 h-44 flex flex-col items-center bg-white text-blue rounded-lg tracking-wide uppercase cursor-pointer hover:bg-blue">
                <img
                  src={imageUrl === null ? Profile : imageUrl}
                  alt=""
                  className="w-40 h-40 rounded-full border "
                />
                {/* <span className="mt-5 text-xl leading-normal px-4 py-2">
                  Select a file
                </span> */}
                <input
                  onChange={handleChange}
                  type="file"
                  name="profilePic"
                  id="profilePic"
                  display-message="Profile Picture"
                  accept="image/png, image/gif, image/jpeg"
                  placeholder="choose"
                  className="hidden"
                />
                <p className="opacity-60 text-sm">click to upload picture</p>
              </label>
            </div>
          </div>
          <div className="md:flex md:-mx-3">
            <div className="md:w-1/2 px-3 mb-5">
              <label htmlFor="fname" className="text-xs font-semibold px-1">
                First name
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  display-message="first name"
                  className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                  placeholder="John"
                />
              </div>
            </div>
            <div className="md:w-1/2 px-3 mb-5">
              <label htmlFor="lname" className="text-xs font-semibold px-1">
                Last name
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  display-message="last name"
                  className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                  placeholder="Smith"
                />
              </div>
            </div>
          </div>
          <div className="md:flex md:-mx-3">
            <div className="md:w-1/2 px-3 mb-5">
              <label htmlFor="email" className="text-xs font-semibold px-1">
                Email
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  display-message="email address"
                  autoComplete="username"
                  className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                  placeholder="johnsmith@example.com"
                />
              </div>
            </div>
            <div className="md:w-1/2 px-3 mb-5">
              <label htmlFor="gender" className="text-xs font-semibold px-1">
                Gender
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-Gender-outline text-gray-400 text-lg"></i>
                </div>
                <select
                  name="gender"
                  id="gender"
                  display-message="gender"
                  className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                  placeholder="johnsmith@example.com">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="md:flex md:-mx-3">
            <div className="md:w-1/2 px-3 mb-5">
              <label
                htmlFor="experience"
                className="text-xs font-semibold px-1">
                Experience (In Years Only)
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="number"
                  name="experience"
                  id="experience"
                  display-message="faculty experience"
                  className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                  placeholder="5"
                />
              </div>
            </div>
            <div className="md:w-1/2 px-3 mb-5">
              <label htmlFor="" className="text-xs font-semibold px-1">
                Qualification
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  name="qualification"
                  id="qualification"
                  display-message="faculty qualification"
                  className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                  placeholder="MCA,PHD"
                />
              </div>
            </div>
          </div>
          <div className="md:flex md:-mx-3">
            <div className="w-full px-3 mb-5">
              <label htmlFor="password" className="text-xs font-semibold px-1">
                Password
              </label>
              <div className="flex w-full">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  id="password"
                  display-message="password"
                  className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                  placeholder="************"
                />
              </div>
            </div>
          </div>
          <div className=" flex md:flex-row flex-col justify-center items-center w-full gap-5 mb-5">
            <button
              type="submit"
              className=" w-full   bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold">
              Save
            </button>
            <button
              onClick={() => toggle(false)}
              className="  w-full   bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3  font-semibold">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFacultyModal;
