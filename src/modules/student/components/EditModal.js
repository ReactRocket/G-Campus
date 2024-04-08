import React, { useState } from "react";
import DepartmentShortener from "../../../utils/Shortener";
import axios from "axios";
import { studentLoader } from "../pages/Dashboard";
import Loader from "./Loader";

const EditModal = ({ toggle }) => {
  const [Student, setStudent] = useState(
    JSON.parse(localStorage.getItem("studentInfo"))
  );
  const [imgUrl, setImgUrl] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let formData = new FormData(e.target);
      let formObject = Object.fromEntries(formData.entries());
      console.log(formObject);
      await axios
        .post("http://localhost:5000/students/updatedetails", formObject, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data.isSuccess) {
            studentLoader().then((response) => {
              if (response.isSuccess) {
                localStorage.setItem(
                  "studentInfo",
                  JSON.stringify(response.data[0])
                );
              }
              alert("You data is updated successfully!");
              console.log(response.data);
              setIsLoading(true);
              setTimeout(() => {
                toggle(false);
                setIsLoading(false);
              }, 2000);
            });
          } else {
            alert("something went wrong! please try again some time late.");
          }
        });
    } catch (error) {
      console.error(error);
    }
  };
  return IsLoading ? (
    <div className="absolute top-0 left-0 h-full w-full bg-white flex justify-center items-center">
      <Loader/>
    </div>
  ) : (
    <div className="z-10  absolute max-h-screen py-10 w-full top-0 left-0 px-10 overflow-y-scroll">
      <form
        onSubmit={handleSubmit}
        className="h-full w-full  relative border rounded-xl px-10  "
      >
        <button
          onClick={() => toggle(false)}
          className="absolute top-3 right-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <div className="mt-2 flex items-center flex-col justify-center  gap-5">
                  <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full border border-gray-900   flex items-center justify-center text-indigo-500 scale-100 hover:scale-105 cursor-pointer transition-transform duration-1000">
                    <img
                      src={
                        imgUrl === null
                          ? require(`../../../images/${Student.profile}`)
                          : imgUrl
                        // Student.profile
                        //   ? require(`../../../images/${Student.profile}`)
                        //   : Profile
                      }
                      alt={`${Student.fname} \n profile`}
                      className="w-full h-full m-auto rounded-full object-cover  "
                    />
                  </div>{" "}
                  <input
                    onChange={(e) =>
                      setImgUrl(URL.createObjectURL(e.target.files[0]))
                    }
                    type="file"
                    name="profilePic"
                    id="profilePic"
                    accept="image/png, image/gif, image/jpeg"
                    className="hidden"
                  />
                  <button
                    onClick={() =>
                      document.getElementById("profilePic").click()
                    }
                    id="profile"
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </button>
                </div>
                <fieldset className="mt-5 flex justify-around items-center rounded-xl border pb-2 px-3 ">
                  <legend className="px-2 uppercase ">ID </legend>{" "}
                  <div className="text-center">
                    {" "}
                    <p className="font-bold text-gray-700 text-xl">
                      {Student.class || 0}
                    </p>{" "}
                    <p className="text-gray-400">Class</p>{" "}
                  </div>{" "}
                  <div className="text-center">
                    {" "}
                    <p className="font-bold text-gray-700 text-xl">
                      {DepartmentShortener(Student.deptId) || 0}
                    </p>{" "}
                    <p className="text-gray-400">Dept</p>{" "}
                  </div>{" "}
                  <div className="text-center">
                    {" "}
                    <p className="font-bold text-gray-700 text-xl">
                      {Student.sid.toString().slice(4) || 0}
                    </p>{" "}
                    <p className="text-gray-400">R.No</p>{" "}
                  </div>{" "}
                </fieldset>{" "}
              </div>
            </div>
          </div>

          {/* personal information */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              You can change only the following fields.
            </p>

            <div className="lg:grid grid-cols-2 gap-x-6 gap-y-4 lg:mt-2 p-2 w-full flex flex-col justify-center items-center">
              {/* first name */}
              {/* <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
                <label htmlFor="fname" className="block">
                  First Name
                </label>
                <input
                  onChange={(e) =>
                    setStudent({ ...Student, [e.target.name]: e.target.value })
                  }
                  value={Student.fname}
                  type="text"
                  name="fname"
                  id="fname"
                  display-message="First Name"
                  placeholder="First Name"
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-grey-200 focus:bg-gray-200"
                />
              </div> */}
              {/* middle name */}
              {/* <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
                <label htmlFor="mname" className="block">
                  Middle Name
                </label>
                <input
                  onChange={(e) =>
                    setStudent({ ...Student, [e.target.name]: e.target.value })
                  }
                  value={Student.mname}
                  type="text"
                  id="mname"
                  name="mname"
                  display-message="Middle Name"
                  placeholder="Middle Name"
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-grey-200 focus:bg-gray-200"
                />
              </div> */}
              {/* last name */}
              {/* <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
                <label htmlFor="lname" className="block">
                  Last Name
                </label>
                <input
                  onChange={(e) =>
                    setStudent({ ...Student, [e.target.name]: e.target.value })
                  }
                  value={Student.lname}
                  type="text"
                  name="lname"
                  id="lname"
                  display-message="Last Name"
                  placeholder="Last Name"
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-grey-200 focus:bg-gray-200"
                />
              </div> */}
              {/* email address */}
              {/* <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
                <label htmlFor="email" className="block">
                  Email
                </label>
                <input
                  onChange={(e) =>
                    setStudent({ ...Student, [e.target.name]: e.target.value })
                  }
                  value={Student.email}
                  type="text"
                  id="email"
                  name="email"
                  display-message="Email Address"
                  //   onBlur={handleEmail}

                  placeholder="Email Address"
                  className="text-md p-2 rounded-md outline-none lg:w-[97%] w-full border-2 border-grey-200 focus:bg-gray-200"
                />
              </div> */}
              {/* password */}
              <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
                <label htmlFor="Password" className="block">
                  Password
                </label>
                <input
                  onChange={(e) =>
                    setStudent({ ...Student, [e.target.name]: e.target.value })
                  }
                  value={Student.password}
                  type="password"
                  id="Password"
                  name="password"
                  display-message="Password "
                  //   onBlur={handlePassword}

                  placeholder="Password "
                  className="text-md p-2 rounded-md outline-none lg:w-[97%] w-full border-2 border-grey-200 focus:bg-gray-200"
                />
              </div>
              <input type="hidden" name="sid" id="sid" value={Student.sid} />
              {/* gender */}
              {/* <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
                <label htmlFor="gender" className="block">
                  Gender
                </label>
                <select
                  onChange={(e) =>
                    setStudent({ ...Student, [e.target.name]: e.target.value })
                  }
                  name="gender"
                  id="gender"
                  display-message="Gender"
                  value={Student.gender}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full appearance-none border-2 border-grey-200 focus:bg-gray-200">
                  <option value="default">--select gender--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div> */}
              {/* date of birth */}
              {/* <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
                <label htmlFor="dob" className="block">
                  DOB
                </label>
                <input
                  onChange={(e) =>
                    setStudent({ ...Student, [e.target.name]: e.target.value })
                  }
                  value={getDate(Student.dob)}
                  type="date"
                  name="dob"
                  id="dob"
                  display-message="Date Of Birth"
                  className="text-md p-1.5 rounded-md outline-none lg:w-[95%] w-full appearance-none uppercase border-2 border-grey-200 focus:bg-gray-200"
                />
              </div> */}
              {/* blood group */}
              {/* <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
                <label htmlFor="blood" className="block">
                  Blood Group
                </label>
                <select
                  onChange={(e) =>
                    setStudent({ ...Student, [e.target.name]: e.target.value })
                  }
                  value={Student.blood}
                  name="blood"
                  id="blood"
                  display-message="Blood Group"
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full appearance-none border-2 border-grey-200 focus:bg-gray-200">
                  <option value="default">--select blood--</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="O+">O+</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div> */}
              {/* phone number */}
              <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
                <label htmlFor="phone" className="block">
                  Phone
                </label>
                <input
                  onChange={(e) =>
                    setStudent({ ...Student, [e.target.name]: e.target.value })
                  }
                  value={Student.phone}
                  type="number"
                  name="phone"
                  id="phone"
                  display-message="Phone Number"
                  placeholder="Phone Number"
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-grey-200 focus:bg-gray-200"
                />
              </div>
              {/* Address */}
              <div className="lg:col-span-2 text-gray-500 col-span-3 lg:w-auto w-[85%]">
                <label htmlFor="address" className="block">
                  Address
                </label>
                <input
                  onChange={(e) =>
                    setStudent({ ...Student, [e.target.name]: e.target.value })
                  }
                  value={Student.address}
                  type="text"
                  id="address"
                  name="address"
                  display-message="Residential Address"
                  placeholder="Residential Address"
                  className="text-md p-2 rounded-md outline-none lg:w-[97%] w-full border-2 border-grey-200 focus:bg-gray-200"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-6 flex items-center justify-end gap-x-6">
          <button
            onClick={() => toggle(false)}
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
