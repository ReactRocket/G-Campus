import React, { useState, useRef } from "react";
import profileDetail from "../resources/images/profileDetail.svg";
import { sendEmail } from "../utils/EmailSend";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import User from "../resources/images/user.png";
import { validateForm } from "../utils/validateData";

function ProfileDetail({ display, handlePrevious, formData, setFormData }) {
  const [imageUrl, setImageUrl] = useState(null);
  const buttonRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const naviagate = useNavigate();

  const handleChange = (e) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    let formObject = Object.fromEntries(data.entries());
    if (validateForm(formObject)) {
      setFormData({
        ...formData,
        ...formObject,
      });
      setLoading(true);
      //   buttonRef.current.setAttribute("disabled", true);
      try {
        await axios
          .post("http://localhost:5000/students/insert", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            let response = res.data;
            if (response.isSuccess) {
              sendEmail({
                to_name: formData.fname + " " + formData.lname,
                to_email: formData.email,
              });
              alert(response.displayMessage);
              setLoading(false);
              naviagate("/signupmessage");
              // buttonRef.current.removeAttribute("disabled", false);
            } else {
              alert(response.displayMessage);
              setLoading(false);
              // buttonRef.current.removeAttribute("disabled", false);
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full h-full absolute ${display} lg:flex-row flex-col lg:overflow-hidden overflow-scroll`}>
      <section className="w-1/2  justify-center items-center lg:flex hidden">
        <img
          src={profileDetail}
          className="rounded w-[80%] h-[95%]"
          alt="profile illustation"
        />
      </section>
      <section className="lg:w-1/2 w-full ">
        <div className="w-full h-full flex flex-col justify-start items-center">
          <div className="mt-4 text-3xl text-blue-600 font-medium lg:w-full w-[85%]">
            Profile Picture
          </div>
          <div className="text-md py-1 text-gray-500 lg:w-full w-[85%]">
            upload a profile picture which used for you
          </div>
          <div className="flex lg:w-full w-[85%] items-center justify-center bg-grey-lighter mt-5">
            <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg tracking-wide uppercase cursor-pointer hover:bg-blue">
              <img
                src={imageUrl === null ? User : imageUrl}
                alt=""
                className="lg:w-[30%] md:w-[50%] w-3/4 lg:h-full"
              />
              <span className="mt-5 text-xl leading-normal px-4 py-2">
                Select a file
              </span>
              <input
                onChange={handleChange}
                type="file"
                name="profilePic"
                id="profilePic"
                accept="image/png, image/gif, image/jpeg"
                placeholder="choose"
                className="hidden"
              />
              <p className="opacity-60 text-sm">click to upload picture</p>
            </label>
          </div>
          <div className="lg:w-full w-[85%] flex gap-5 flex-col justify-around items-center mt-4">
            <button
              type="button"
              onClick={handlePrevious}
              className="tracking-wide font-semibold bg-blue-500 text-gray-100 w-[70%] py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              Previous
            </button>
            <button
              ref={buttonRef}
              type="submit"
              className="tracking-wide font-semibold bg-blue-500 text-gray-100 w-[70%] py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              <div
                className={`w-8 h-8  rounded-full border-4 border-r-slate-300 border-slate-50 ${
                  loading === true ? "animate-spin block" : "hidden"
                }`}></div>
              <p className={`${loading === true ? "hidden" : "block"}`}>
                Submit
              </p>
            </button>
          </div>
        </div>
      </section>
    </form>
  );
}

export default ProfileDetail;
