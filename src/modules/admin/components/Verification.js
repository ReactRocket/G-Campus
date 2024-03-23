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
            class="group flex flex-col gap-2 rounded-xl px-5 py-3 bg-indigo-300 text-black font-semibold"
            tabindex="2"
          >
            <div class="flex cursor-pointer items-center text-xl justify-between rounded-md ">
              <span>{student.fname + " " + student.lname}</span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                class="h-3 w-6 transition-all duration-500 group-focus:-rotate-180 text-black "
                alt="plus svg icon"
              />
            </div>

            <div class="invisible h-60 max-h-0 items-center gap-40 opacity-0 transition-all flex  group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              <div className="w-[65%] min-h-full     px-5 p-2 rounded-md ">
                <span> DOB :- {getDate(student.dob)}</span>
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
                <span> Phone :- {student.phone}</span> <br />
                <span> Email :- {student.email} </span>
                <br />
                <span>
                  {" "}
                  Department :- {DepartmentShortener(student.deptId)}{" "}
                </span>
                <br />
                <label>Class:</label>
                <select
                  className="border rounded-md cursor-pointer"
                  // onClick={(event) => event.stopPropagation()}
                >
                  <option value="">--Select a Class--</option>
                  <option value="Bcom">Bcom</option>
                  <option>Bcom</option>
                  <option>Bcom</option>
                </select>
              </div>
              <div className="w-[18%] h-full  flex justify-end p-4">
                <div className="h-52 w-full border bg-white rounded-md">
                  <img className="" src={Profile} />
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
