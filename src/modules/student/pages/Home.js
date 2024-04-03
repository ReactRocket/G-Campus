import React, { useState } from "react";
import Profile from "../../../resources/illustrations/student_dashboard/profile.svg";
import getDate from "../../../utils/GetDate";
import DepartmentShortener from "../../../utils/Shortener";
import EditModal from "../components/EditModal";

const Home = () => {
  const [editModalToggle, setEditModalToggle] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const Student = JSON.parse(localStorage.getItem("studentInfo"));


  return (
    <div className="z-0  relative min-h-screen py-16 w-full">
      {editModalToggle ? (
        <EditModal toggle={setEditModalToggle} />
      ) : (
        <div className=" px-8 ">
          <div className="p-8 bg-white border rounded-xl shadow relative">
            <button
              onClick={() => setEditModalToggle(true)}
              className="absolute top-5 right-5"
              title="Edit profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="black"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </button>{" "}
            <div className="grid grid-cols-1  md:grid-cols-1 ">
              {" "}
              <div className="">
                {" "}
                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl    flex items-center justify-center text-indigo-500 scale-100 hover:scale-105 cursor-pointer transition-transform duration-1000">
                  <img
                    src={
                      Student.profile
                        ? require(`../../../images/${Student.profile}`)
                        : Profile
                    }
                    alt={`${Student.fname} \n profile`}
                    className="w-full h-full m-auto rounded-full object-cover  "
                  />
                </div>{" "}
              </div>{" "}
              {/* <div className="space-x-8 py-4 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                {" "}
                Edit Profile
              </button>{" "}
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                {" "}
                Change Password
              </button>{" "}
            </div>{" "} */}
            </div>{" "}
            <div className="mt-5 text-center border-b pb-12">
              {" "}
              <h1 className="text-4xl font-medium text-gray-700 flex justify-center items-center gap-3 mb-3">
                <p className="font-light text-gray-500 first-letter:uppercase">
                  {Student.fname}
                </p>

                <p className="font-light text-gray-500 first-letter:uppercase">
                  {Student.lname}
                </p>
              </h1>{" "}
              <a
                href={`mailto:${Student.email}`}
                className="font-light text-blue-600 py-10">
                {Student.email}
              </a>{" "}
              <p className="mt-8 text-gray-500">
                {DepartmentShortener(Student.deptId)}
                {/* {Student.deptId === 104 &&
                  '"Bachelor of Computer Applications"'}
                {Student.deptId === 103 &&
                  '"Bachelor of Business Administration"'}
                {Student.deptId === 102 &&
                  '"Bachelor of Commerce (English Medium)"'}
                {Student.deptId === 101 &&
                  '"Bachelor of Commerce (Gujarati Medium)"'} */}
              </p>{" "}
              <p className="mt-2 text-gray-900 font-semibold text-xl">
                <b>G-Campus College</b>
              </p>{" "}
            </div>{" "}
            <fieldset className="mt-5 flex justify-around items-center rounded-xl border pb-2 px-3 ">
              <legend className="px-2 uppercase ">ID </legend>{" "}
              <div className="text-center">
                {" "}
                <p className="font-bold text-gray-700 text-xl">
                  {Student.class + DepartmentShortener(Student.deptId) || 0}
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
                  {Student.sid.toString() || 0}
                </p>{" "}
                <p className="text-gray-400">R.No</p>{" "}
              </div>{" "}
            </fieldset>{" "}
            <div className="mt-8 flex flex-col justify-center">
              {showMore && (
                <ul className="min-h-[50vh] w-full overflow-hidden  mb-4 grid grid-cols-1 md:grid-cols-2 gap-5 transition-all duration-1000 ">
                  <fieldset className="h-full w-full border rounded-xl p-5">
                    <legend className="px-2 text-md font-extralight uppercase">
                      Personal Details{" "}
                    </legend>
                    <ul className="w-full h-full ">
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          Class Id:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.class + DepartmentShortener(Student.deptId)}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          Student Id:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.sid}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          Department Id:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {DepartmentShortener(Student.deptId)}
                        </div>
                      </li>

                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          First Name:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.fname}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          Middel Name:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.mname}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          Last Name:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.lname}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          Gender:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.gender}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          Email:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.email}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          Phone:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.phone}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          DOB:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {getDate(Student.dob)}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          Blood Group:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.blood}
                        </div>
                      </li>
                      <hr className="my-3" />
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          Address:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.address}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          City:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.city}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          State:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.state}
                        </div>
                      </li>
                    </ul>
                  </fieldset>
                  <fieldset className="h-full w-full border rounded-xl p-5">
                    <legend className="px-2 text-md font-extralight uppercase">
                      Educational Details{" "}
                    </legend>
                    <ul className="w-full h-full ">
                      <h1 className="font-bold py-3">
                        Secondary School Certificate(10TH)
                      </h1>

                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          School Name:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.tenthSchool}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          Passing Year:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.tenthPassingYear}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          Score:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.tenthPercentage}%
                        </div>
                      </li>

                      <hr className="mt-3" />

                      <h1 className="font-bold py-3">
                        Higher Secondary Certificate(12TH)
                      </h1>

                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          School Name:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.twelfthSchool}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          Passing Year:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.twelfthPassingYear}
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          Score:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {Student.twelfthPercentage}%
                        </div>
                      </li>

                      <hr className="mt-3" />

                      <h1 className="font-bold py-3">
                        {Student.deptId === 104 &&
                          "Bachelor of Computer Applications"}
                        {Student.deptId === 103 &&
                          "Bachelor of Business Administration"}
                        {Student.deptId === 102 &&
                          "Bachelor of Commerce (English Medium)"}
                        {Student.deptId === 101 &&
                          "Bachelor of Commerce (Gujarati Medium)"}{" "}
                        (UG){" "}
                      </h1>

                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          College Name:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {/* {Student.tenthSchool} */}G-Campus
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          Passing Year:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {/* {Student.tenthPassingYear} */}~2027
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-1/3 font-semibold  uppercase">
                          Score:
                        </div>
                        <div className="w-2/3 first-letter:capitalize break-words">
                          {/* {Student.tenthPercentage}% */}-
                        </div>
                      </li>
                    </ul>
                  </fieldset>
                </ul>
              )}
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-indigo-500 py-2 px-4  font-medium ">
                {showMore ? "Hide" : "Show"} Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
