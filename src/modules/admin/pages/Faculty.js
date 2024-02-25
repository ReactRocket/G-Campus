import React, { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import axios from "axios";

const Faculty = () => {
  const [Faculties, setFaculties] = useState(useLoaderData());
  console.log(Faculties);

  return (
    <div className="h-auto w-[95%] m-auto my-4">
      <nav className="flex">
        <h1 className="lg:w-[93%] md:w-[85%] w-3/4 text-2xl font-semibold font-sans">
          Faculty
        </h1>
        <button className="lg:w-[7%] md:w-[15%] w-1/4 bg-blue-300 rounded-md font-medium flex justify-evenly items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-circle"
            viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
          <span>New</span>
        </button>
      </nav>
      <section className="h-full mt-5 grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {Faculties.length > 0
          ? Faculties.map((faculty) => {
              return(
                  <div className="bg-gray-200">
                    {/* faculty card should be implement */}
                    {faculty.fname}
                  </div>
              );
            })
          : `No Faculties`}
      </section>
    </div>
  );
};

export async function facultyLoader() {
  try {
    return await axios
      .get("http://localhost:5000/faculties/allfaculties")
      .then((res) => res.data)
      .then((response) => {
        if (!response.isSuccess) {
          const navigate = useNavigate();
          navigate("/network");
          return [];
        } else {
          return response.data;
        }
      });
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default Faculty;
