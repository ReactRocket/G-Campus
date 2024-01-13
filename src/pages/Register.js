import React, { useEffect, useState } from "react";
import BasicDetail from "../components/BasicDetail";
import PersonalDetail from "../components/PersonalDetail";
import EducationalDetail from "../components/EducationalDetail";
import { validateForm } from "../utils/validateData";

function Register() {
  const [pages, setPages] = useState(1);
  const [isPageDirty, setIsPageDirty] = useState(false);
  const [formData, setFormData] = useState({
    // tenthSchool: "",
    // tenthPassingYear: "",
    // tenthPercent: "",
    // twelfthSchool: "",
    // twelfthPassingYear: "",
    // twelfthPercent: "",
    // classId: "",
    deptId: "",
  });

  const changeFormData = () => {
    setFormData({
      ...formData,
      fname: "",
      mname: "",
      lname: "",
      dob: "",
      gender: "",
      blood: "",
      address: "",
      city: "",
      state: "",
      country: "",
      phone: "",
      email: "",
    });
  };

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
    if (!validateForm(formData)) return;
    if (pages === 1) changeFormData();
    setIsPageDirty(true);
    setPages(pages + 1);
    console.log(formData);
  };

  const handlePrevious = () => {
    if (pages === 2) {
      setFormData({ deptId: formData.deptId });
    }
    setPages(pages - 1);
    console.log(formData);
  };

  return (
    <div className="h-full w-full">
      <form className="lg:h-[600px] h-screen relative">
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
        />
      </form>
    </div>
  );
}

export default Register;
