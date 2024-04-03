import axios from "axios";
import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getDate from "../../../utils/GetDate";
import DepartmentShortener from "../../../utils/Shortener";
import Loader from "../pages/Loader";

export default function Verification() {
  const [isLoading, setIsLoading] = useState(true);
  const [Students, setStudents] = useState([]);
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleSection = () => {
  //   setIsOpen(!isOpen);
  // };

  const VerifyStudent = async (e) => {
    try {
      let targetElement = e.target;
      let targetSection = targetElement.closest("section");
      let key = targetSection.id;
      let student = Students[key];
      let studentData = {
        sid: student.sid,
        deptId: student.deptId,
        email: student.email,
      };
      await axios
        .post("http://localhost:5000/students/verifystudent", studentData)
        .then(async (res) => {
          if (res.data.isSuccess) {
            await emailjs.send(
              "service_ddpm0yn",
              "template_mm3lk8d",
              {
                to_email: studentData.email,
                message: res.data?.data,
              },
              "RFTXW8UXJ6O8uxDia"
            );
            alert(student.fname + " " + student.lname + " is verified now!");
            navigate("/admin/student");
          }
        });
    } catch (error) {
      console.error(error);
      navigate("/admin/error");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      loader()
        .then((response) => {
          setIsLoading(false);
          setStudents(response?.data);
        })
        .catch((err) => {
          navigate("/admin/error");
          setIsLoading(false);
        });
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return isLoading ? (
    <Loader />
  ) : (
    <main className="h-auto w-[95%] m-auto my-4 flex flex-col gap-5">
      {Students.length === 0 ? (
        <div>
          <h1 className="text-2xl font-semibold capitalize">
            Under verification student
          </h1>
          <h6>No student are under verification</h6>
        </div>
      ) : (
        Students?.map((student, i) => {
          return (
            <section
              key={i}
              id={i}
              className="group hover:bg-slate-50 flex flex-col gap-2 shadow-lg  rounded-xl px-5 py-3 border-2 text-black font-semibold"
              tabIndex="2"
            >
              <div className="flex cursor-pointer items-center text-xl justify-between rounded-md ">
                <span>{student.fname + " " + student.lname}</span>

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                  className="h-3 w-6 transition-all duration-500 group-focus:-rotate-180 text-black bg-black filter invert"
                  alt="plus svg icon"
                />
              </div>

              <div className="invisible h-60 max-h-0 items-center gap-40 opacity-0 transition-all flex  group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                <div className="w-[65%] min-h-full px-5 p-2 rounded-md ">
                  <span>DOB :- {getDate(student.dob)}</span>
                  <br />
                  <span>Email :- {student.email}</span>
                  <br />
                  <span>Gender :- {student.gender}</span>
                  <br />
                  <span>Blood :- {student.blood}</span>
                  <br />

                  <span>
                    Address :-{" "}
                    {student.address +
                      "," +
                      student.city +
                      ", " +
                      student.state}
                  </span>
                  <br />
                  <span>Phone :- {student.phone}</span>
                  <br />
                  <span>Email :- {student.email}</span>
                  <br />
                  <span>
                    Department :- {DepartmentShortener(student.deptId)}
                  </span>
                </div>

                <div className="w-[18%] h-full flex flex-col justify-between p-4">
                  <div className="h-40 w-full border bg-white rounded-md">
                    <img
                      className="cursor-pointer h-full w-full object-cover"
                      src={require(`../../../images/${student.profile}`)}
                      alt="Profile"
                    />
                  </div>

                  <div className="flex justify-center px-24 gap-5 w-1/2 py-4 ">
                    <p
                      onClick={VerifyStudent}
                      className="rounded-md flex justify-center items-center cursor-pointer bg-blue-500 hover:shadow-md text-white px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                      Verify
                    </p>
                    <button className="rounded-md bg-red-500 hover:shadow-md text-white px-4 mr-4 py-2 hover:bg-red-600 focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-50">
                      Cancle
                    </button>
                  </div>
                </div>
              
              </div>
            </section>
          );
        })
      )}
    </main>
  );
}

async function loader() {
  try {
    return axios
      .get("http://localhost:5000/students/unverifiedstudent")
      .then((res) => {
        if (res.data) {
          return res.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    throw error;
  }
}
