import React, { useEffect, useState } from "react";
import BasicDetail from "../components/BasicDetail";
import PersonalDetail from "../components/PersonalDetail";
import EducationalDetail from "../components/EducationalDetail";
import ProfileDetail from "../components/ProfileDetail";
// import { validateForm } from "../utils/validateData";

function Register() {
  const [pages, setPages] = useState(1);
  const [isPageDirty, setIsPageDirty] = useState(false);
  const [formData, setFormData] = useState({});

  // const changeFormData = () => {
  //   pages === 1
  //     ? setFormData({
  //         ...formData,
  //         fname: "",
  //         mname: "",
  //         lname: "",
  //         email: "",
  //         gender: "",
  //         dob: "",
  //         blood: "",
  //         phone: "",
  //         address: "",
  //         country: "",
  //         state: "",
  //         city: "",
  //       })
  //     : setFormData({
  //         ...formData,
  //         tenthSchool: "",
  //         tenthPassingYear: "",
  //         tenthPercent: "",
  //         twelfthSchool: "",
  //         twelfthPassingYear: "",
  //         twelfthPercent: "",
  //       });
  // };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isPageDirty) {
        const message =
          "You have unsaved changes, Are you sure you want to leave?";
        event.returnValue = message; // Standard for most browsers
        return message; // For some older browsers
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isPageDirty]);

  const handleNext = () => {
    // if (!validateForm(formData)) return;
    // if (pages === 1) changeFormData();
    setIsPageDirty(true);
    setPages(pages + 1);
    // console.log(formData);
  };

  const handlePrevious = () => {
    // if (pages === 2) {
    //   setFormData({ deptId: formData.deptId });
    // }
    setPages(pages - 1);
    // console.log(formData);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(formData);

  //   let result = validateForm(formData);
  //   console.log(result);
  //   if (result) {

  //   }
  // };

  return (
    <div className="h-full w-full">
      <div className="lg:h-[600px] sm:min-h-[70vh]  h-screen mb-5">
        <BasicDetail
          display={pages === 1 ? "flex" : "hidden"}
          handleNext={handleNext}
          formData={formData}
          setFormData={setFormData}
        />
        <PersonalDetail
          display={pages === 2 ? "flex" : "hidden"}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          formData={formData}
          setFormData={setFormData}
        />
        <EducationalDetail
          display={pages === 3 ? "flex" : "hidden"}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          formData={formData}
          setFormData={setFormData}
          // refrence={buttonRef}
          // loading={loading}
        />
        <ProfileDetail
          display={pages === 4 ? "flex" : "hidden"}
          handlePrevious={handlePrevious}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
}

export default Register;
