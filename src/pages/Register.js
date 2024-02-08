import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BasicDetail from "../components/BasicDetail";
import PersonalDetail from "../components/PersonalDetail";
import EducationalDetail from "../components/EducationalDetail";
import { validateForm } from "../utils/validateData";
import axios from "axios";
import { sendEmail } from "../utils/EmailSend";

function Register() {
  const naviagate = useNavigate();
  const buttonRef = useRef();
  const [loading, setLoading] = useState(false);
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
    pages === 1
      ? setFormData({
          ...formData,
          fname: "",
          mname: "",
          lname: "",
          email: "",
          gender: "",
          dob: "",
          blood: "",
          phone: "",
          address: "",
          country: "",
          state: "",
          city: "",
        })
      : setFormData({
          ...formData,
          tenthSchool: "",
          tenthPassingYear: "",
          tenthPercent: "",
          twelfthSchool: "",
          twelfthPassingYear: "",
          twelfthPercent: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    let result = validateForm(formData);
    console.log(result);
    if (result) {
      setLoading(true);
      // buttonRef.current.setAttribute("disabled", true);
      try {
        await axios
          .post("http://localhost:5000/students/insert", formData)
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
    <div className="h-full w-full">
      <form className="lg:h-[600px] h-screen relative" onSubmit={handleSubmit}>
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
          refrence={buttonRef}
          loading={loading}
        />
      </form>
    </div>
  );
}

export default Register;
