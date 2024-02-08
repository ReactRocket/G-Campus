import React from "react";
import personaldocuments from "../resources/images/personal-documents.svg";

function EducationalDetail({
  display,
  handlePrevious,
  formData,
  setFormData,
  buttonRef,
  loading,
}) {
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
      <div className="w-1/2  justify-center items-center lg:flex hidden">
        <img
          src={personaldocuments}
          className="rounded w-[80%] h-[80%]"
          alt="college side view"
        />
        <img src="" alt="" />
      </div>
      <div className="lg:w-1/2 w-full">
        <div className="w-full h-full lg:block flex flex-col justify-center items-center">
          <div className="mt-4 text-2xl font-medium lg:w-full w-[85%]">
            Educational Details
          </div>
          <div className="text-md lg:w-full w-[85%]">
            Enter your education details
          </div>
          <div className="lg:grid grid-cols-2 gap-x-6 gap-y-4 lg:mt-2 mt w-full flex flex-col justify-center items-center">
            <div className="col-span-2 lg:text-lg lg:w-auto w-[85%]">
              10<sup>th</sup> Education :
            </div>
            <div className="col-span-2 lg:w-auto w-[85%]">
              <label htmlFor="tenthSchool" className="block">
                School Name
              </label>
              <input
                type="text"
                name="tenthSchool"
                id="tenthSchool"
                display-message="Tenth School Name"
                placeholder="10th School Name"
                onChange={handleChange}
                className="text-md p-2 rounded-md outline-none lg:w-[97%] w-full border-2 border-gray-200 focus:bg-gray-200"
              />
            </div>
            <div className="lg:col-span-1 col-span-2 lg:w-auto w-[85%]">
              <label htmlFor="tenthPassingYear" className="block">
                Passing Year
              </label>
              <input
                type="text"
                name="tenthPassingYear"
                id="tenthPassingYear"
                display-message="Tenth Passing Year"
                placeholder="10th Passing Year"
                onChange={handleChange}
                className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
              />
            </div>
            <div className="lg:col-span-1 col-span-2 lg:w-auto w-[85%]">
              <label htmlFor="tenthPercentage" className="block">
                Percentage (%)
              </label>
              <input
                type="text"
                name="tenthPercentage"
                id="tenthPercentage"
                display-message="Tenth Percentage"
                placeholder="10th Percentage"
                onChange={handleChange}
                className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
              />
            </div>
            <div className="col-span-2 lg:text-lg lg:w-auto w-[85%]">
              12<sup>th</sup> Education :
            </div>
            <div className="col-span-2 lg:w-auto w-[85%]">
              <label htmlFor="twelfthSchool" className="block">
                School Name
              </label>
              <input
                type="text"
                id="twelfthSchool"
                name="twelfthSchool"
                dipslay-message="Twelfth School Name"
                placeholder="12th School Name"
                onChange={handleChange}
                className="text-md p-2 rounded-md outline-none lg:w-[97%] w-full border-2 border-gray-200 focus:bg-gray-200"
              />
            </div>
            <div className="lg:col-span-1 col-span-2 lg:w-auto w-[85%]">
              <label htmlFor="twelfthPassingYear" className="block">
                Passing Year
              </label>
              <input
                type="text"
                id="twelfthPassingYear"
                name="twelfthPassingYear"
                display-message="Twelfth Passing Year"
                placeholder="12th Passing Year"
                onChange={handleChange}
                className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
              />
            </div>
            <div className="lg:col-span-1 col-span-2 lg:w-auto w-[85%]">
              <label htmlFor="twelfthPercentage" className="block">
                Percentage (%)
              </label>
              <input
                type="text"
                id="twelfthPercentage"
                name="twelfthPercentage"
                display-message="Twelfth Percentage"
                placeholder="12th Percentage"
                onChange={handleChange}
                className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
              />
            </div>
            <div className="lg:col-span-1 col-span-2 lg:mt-4 lg:w-auto w-[85%]">
              <button
                type="button"
                className="bg-blue-400 outline-none lg:w-[95%] w-full p-1.5 text-lg rounded"
                onClick={handlePrevious}>
                Previous
              </button>
            </div>
            <div className="lg:col-span-1 col-span-2 lg:mt-4 lg:w-auto w-[85%]">
              <button
                ref={buttonRef}
                type="submit"
                className="bg-blue-400 flex justify-center items-center outline-none lg:w-[95%] w-full p-1.5 text-lg rounded">
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
        </div>
      </div>
    </div>
  );
}

export default EducationalDetail;
