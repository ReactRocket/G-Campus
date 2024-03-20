import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../pages/Loader";

export default function Verification() {
  const [isLoading, setIsLoading] = useState(true);
  const [Students, setStudents] = useState([]);
  const navigate = useNavigate();

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
    <main className="h-auto w-[95%] m-auto my-4">
      {Students?.data.map((student) => {
        return (
          <section
            class="group flex flex-col gap-2 rounded-xl px-5 py-3 bg-[#110904] text-white"
            tabindex="2">
            {/* <div>hello</div> */}
            <div class="flex cursor-pointer items-center justify-between rounded-md">
              <span>{student.fname + " "+student.lname}</span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                class="h-3 w-6 transition-all duration-500 group-focus:-rotate-180 text-black "
                alt="plus svg icon"
              />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-chevron-compact-down transition-all duration-500 group-focus:-rotate-180"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
                />
              </svg> */}
            </div>
            <div class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              hello
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
