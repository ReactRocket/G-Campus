import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../pages/Loader";
import getDate from "../../../utils/GetDate";
import DepartmentShortener from "../../../utils/Shortener";
import Profile from "../../../resources/images/profileDetail.svg";

export default function Verification() {
  const [isLoading, setIsLoading] = useState(true);
  const [Students, setStudents] = useState([]);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      loader()
        .then((response) => {
          setIsLoading(false);
          setStudents(response);
        })
        .catch((err) => {
          navigate("/admin/error");
          setIsLoading(false);
        });
    }, 2000);
  }, [navigate]);

  return isLoading ? (
    <Loader />
  ) : (
    <main className="h-auto w-[95%] m-auto my-4 flex flex-col gap-5">
      {Students?.data.map((student) => {
        return (
          <section
            class="group flex flex-col gap-2 shadow-lg  rounded-xl px-5 py-3 border-2 text-black font-semibold"
            tabindex="2"
          >
            <div class="flex cursor-pointer items-center text-xl justify-between rounded-md ">
              <span>{student.fname + " " + student.lname}</span>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                className="h-3 w-6 transition-all duration-500 group-focus:-rotate-180 text-black bg-black filter invert"
                alt="plus svg icon"
              />
            </div>

            <div class="invisible h-60 max-h-0 items-center gap-40 opacity-0 transition-all flex  group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
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
                  {student.address + "," + student.city + ", " + student.state}
                </span>
                <br />
                <span>Phone :- {student.phone}</span>
                <br />
                <span>Email :- {student.email}</span>
                <br />
                <span>Department :- {DepartmentShortener(student.deptId)}</span>
              </div>

              {/* <div className="w-[18%] h-full  flex justify-end p-4">
                <div className="h-48 w-full border  bg-white rounded-md">
                  <img className="cursor-pointer" src={Profile} />
                   
                </div>
              </div> */}
              <div className="w-[18%] h-full flex flex-col justify-between p-4">
                <div className="h-48 w-full border bg-white rounded-md">
                  <img
                    className="cursor-pointer h-full w-full object-cover"
                    src={Profile}
                    alt="Profile"
                  />
                </div>

                <div className="flex justify-between w-52 py-2 mt-5 ">
                  <button className="rounded-md bg-blue-500 hover:shadow-md text-white px-4    hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                    Verify
                  </button>
                  <button className="rounded-md bg-red-500 hover:shadow-md text-white px-4 mr-4 py-2 hover:bg-red-600 focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-50">
                    Cancle
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      })}
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
