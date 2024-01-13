import React from "react";
import CollegeImage from "../resources/images/college-image.svg";
import { Link } from "react-router-dom";

function BasicDetail({ display, handleNext, formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  return (
    <div
      className={`w-full h-full absolute ${display} lg:flex-row flex-col lg:overflow-hidden overflow-scroll`}>
      <div className="w-1/2 justify-center items-center lg:flex hidden">
        <img
          src={CollegeImage}
          className="rounded w-[80%] h-[95%]"
          alt="college side view"
        />
      </div>
      <div className="lg:w-1/2 w-full flex justify-center items-center flex-col">
        <div className="lg:w-[60%] lg:h-[50%] lg:px-4 lg:py-4">
          <div className="mt-4 text-2xl font-medium w-full">Department</div>
          <div className="text-md w-full">Please select department</div>
          <div className="lg:mt-4 mb-3">
            {/* <label htmlFor="deptId" className="block">
              Department
            </label> */}
            <select
              name="deptId"
              id="deptId"
              onChange={handleChange}
              display-message="Department"
              className="text-md p-2 bg-gray-200 rounded outline-none lg:w-full w-[90%] appearance-none">
              <option value="101">-- Select a department --</option>
              <option value="101">
                Admission for Bachelor in Commerce - Gujarati Medium
              </option>
              <option value="102">
                Admission for Bachelor in Commerce - English Medium
              </option>
              <option value="101">
                Admission for Bachelor in Business Administration
              </option>
              <option value="101">
                Admission for Bachelor in Computer Application
              </option>
            </select>
          </div>
          <div>
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-200 outline-none lg:w-full w-[90%] p-1.5 text-lg rounded">
              Next
            </button>
          </div>
          <div>
            <div className="mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-900 font-medium">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicDetail;
