// import axios from "axios";
import React, { useRef } from "react";
import personaldocuments from "../resources/images/personal-documents.svg";
// import { useNavigate } from "react-router-dom";
// import { sendEmail } from "../utils/EmailSend";
import { validateForm } from "../utils/validateData";

function EducationalDetail({
  display,
  handlePrevious,
  formData,
  setFormData,
  handleNext,
  // buttonRef,
  // loading,
}) {
  const buttonRef = useRef();
  // const [loading, setLoading] = useState(false);
  // const naviagate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = new FormData(e.target);
    let formObject = Object.fromEntries(data.entries());
    if (validateForm(formObject)) {
      setFormData({
        ...formData,
        ...formObject,
      });

      // setLoading(true);
      // buttonRef.current.setAttribute("disabled", true);
      // try {
      //   await axios
      //     .post("http://localhost:5000/students/insert", formData)
      //     .then((res) => {
      //       let response = res.data;
      //       if (response.isSuccess) {
      //         sendEmail({
      //           to_name: formData.fname + " " + formData.lname,
      //           to_email: formData.email,
      //         });
      //         alert(response.displayMessage);
      //         setLoading(false);
      //         naviagate("/signupmessage");
      //         // buttonRef.current.removeAttribute("disabled", false);
      //       } else {
      //         alert(response.displayMessage);
      //         setLoading(false);
      //         // buttonRef.current.removeAttribute("disabled", false);
      //       }
      //     });
      // } catch (error) {
      //   console.log(error);
      // }
      handleNext();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full h-full   absolute ${display} lg:flex-row flex-col lg:overflow-hidden overflow-scroll`}
    >
      <div className="w-1/2  justify-center items-center lg:flex hidden">
        <img
          src={personaldocuments}
          className="rounded w-[80%] h-[80%]"
          alt="college side view"
        />
        {/* <img src="" alt="" /> */}
      </div>
      <div className="lg:w-1/2 w-full">
        <div className="w-full h-full lg:block flex flex-col justify-center items-center px-3">
          <div className="pt-4 text-3xl text-blue-600  font-medium lg:w-full w-full">
            Educational Details
          </div>
          <div className="py-1 text-md text-gray-500 lg:w-full w-full">
            Enter your education details
          </div>
          <div className="flex flex-col justify-center items-center gap-1 w-full ">
            <fieldset className="border-2 rounded-xl p-5 lg:grid  grid-cols-2 gap-x-6 gap-y-4  w-full flex flex-col justify-center items-center ">
              <legend className="col-span-2 px-2 lg:text-lg lg:w-auto w-full">
                10<sup>th</sup> Education
              </legend>
              <div className="col-span-2 lg:w-auto w-full">
                <label htmlFor="tenthSchool" className="block">
                  School Name
                </label>
                <input
                  type="text"
                  name="tenthSchool"
                  id="tenthSchool"
                  display-message="Tenth School Name"
                  placeholder="10th School Name"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[97%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>
              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="tenthPassingYear" className="block">
                  Passing Year
                </label>
                <input
                  type="text"
                  name="tenthPassingYear"
                  id="tenthPassingYear"
                  display-message="Tenth Passing Year"
                  placeholder="10th Passing Year"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>
              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="tenthPercentage" className="block">
                  Percentage (%)
                </label>
                <input
                  type="text"
                  name="tenthPercentage"
                  id="tenthPercentage"
                  display-message="Tenth Percentage"
                  placeholder="10th Percentage"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>
            </fieldset>
            <fieldset className="border-2 rounded-xl p-5 lg:grid  grid-cols-2 gap-x-6 gap-y-4  w-full flex flex-col justify-center items-center ">
              <legend className="col-span-2 lg:text-lg px-2 lg:w-auto w-full">
                12<sup>th</sup> Education
              </legend>
              <div className="col-span-2 lg:w-auto w-full">
                <label htmlFor="twelfthSchool" className="block">
                  School Name
                </label>
                <input
                  type="text"
                  id="twelfthSchool"
                  name="twelfthSchool"
                  dipslay-message="Twelfth School Name"
                  placeholder="12th School Name"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[97%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>
              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="twelfthPassingYear" className="block">
                  Passing Year
                </label>
                <input
                  type="text"
                  id="twelfthPassingYear"
                  name="twelfthPassingYear"
                  display-message="Twelfth Passing Year"
                  placeholder="12th Passing Year"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>
              <div className="lg:col-span-1 col-span-2 lg:w-auto w-full">
                <label htmlFor="twelfthPercentage" className="block">
                  Percentage (%)
                </label>
                <input
                  type="text"
                  id="twelfthPercentage"
                  name="twelfthPercentage"
                  display-message="Twelfth Percentage"
                  placeholder="12th Percentage"
                  // onChange={handleChange}
                  className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-gray-200 focus:bg-gray-200"
                />
              </div>
            </fieldset>
            <div className="flex flex-col md:flex-row w-full gap-2 py-2">
              <div className="md:w-1/2 w-full ">
                <button
                  type="button"
                  className="tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              </div>
              <div className="md:w-1/2 w-full ">
                <button
                  ref={buttonRef}
                  type="submit"
                  className="tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default EducationalDetail;
