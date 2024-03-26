import React from "react";
import CollegeImage from "../resources/images/college-image.svg";
import { Link } from "react-router-dom";
import { validateForm } from "../utils/validateData";

function BasicDetail({ display, handleNext, formData, setFormData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    let formObject = Object.fromEntries(data.entries());
    if (validateForm(formObject)) {
      setFormData({
        ...formObject,
      });
      handleNext();
    }
    // console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full h-full absolute ${display} lg:flex-row flex-col lg:overflow-hidden overflow-scroll`}
    >
      <div className="lg:w-1/2 w-full justify-center items-center flex">
        <img
          src={CollegeImage}
          className="rounded w-[80%] h-[70%]"
          alt="college side view"
        />
      </div>
      <div className="lg:w-1/2 w-full flex justify-center items-center flex-col">
        <div className="lg:w-[75%] w-[90%] lg:mt-0 mt-4">
          <h1 className="lg:text-2xl font-semibold text-xl mb-4 text-blue-600">
            Welcome to G-Campus Registration
          </h1>
          <h1 className="text-gray-500 lg:text-lg text-base mb-2 lg:block hidden">
            We are thrilled to welcome you to Our College. The journey towards
            your higher education starts here, and we are excited to be a part
            of this important chapter in your life.
          </h1>
          <h1 className="text-gray-500 lg:text-lg text-base">
            Please complete the registration form below to ensure a seamless
            enrollment process.
          </h1>
        </div>
        <div className="lg:w-[75%] lg:py-4 lg:m-0 mt-3 w-[90%] lg:block flex justify-center items-center flex-col">
          <div className="lg:mt-4 mb-3 w-full">
            <select
              name="deptId"
              id="deptId"
              // onChange={handleChange}
              display-message="Department"
              className="text-md bg-gray-200 text-gray-500 font-semibold rounded p-3 cursor-pointer outline-none w-full appearance-none"
            >
              <option value="default">-- Select a department --</option>
              <option value="101">
                Admission for Bachelor in Commerce - Gujarati Medium
              </option>
              <option value="102">
                Admission for Bachelor in Commerce - English Medium
              </option>
              <option value="101">
                Admission for Bachelor in Bussiness Administration
              </option>
              <option value="101">
                Admission for Bachelor in Computer Application
              </option>
            </select>
          </div>
          <div className="lg:w-auto w-full">
            <button
              type="submit"
              // onClick={handleSubmit}
              className="tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              Next
            </button>
          </div>
          <div>
            <div
              className="mt-2 text-gray-500"
            >
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 underline underline-offset-2 font-medium"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default BasicDetail;
