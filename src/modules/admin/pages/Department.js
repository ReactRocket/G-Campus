import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function Department() {
  const [isLoading, setIsLoading] = useState(true);
  const [Departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      loadData()
        .then((response) => {
          setIsLoading(false);
          setDepartments(response.data);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          navigate("/admin/error");
        });
    }, 2500);
  }, [navigate]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="h-auto w-[95%] m-auto my-4">
      <nav className="flex">
        <h1 className="lg:w-[93%] md:w-[85%] w-3/4 text-2xl font-semibold font-sans">
          Departments
        </h1>
      </nav>
      <main className="mt-5 grid gap-y-3">
        {Departments.length > 0
          ? Departments.map((department) => {
              return (
                <section
                  key={department.deptId}
                  className="border bg-white rounded-lg shadow hover:bg-blue-100 cursor-pointer scale-90 hover:scale-95 transition-all duration-1000 py-3  grid gap-y-1">
                  <div className="w-[95%] mx-auto capitalize">
                    {department.medium} medium
                  </div>
                  <div className="w-[95%] mx-auto font-semibold lg:text-2xl text-xl">
                    {department.deptName}
                  </div>
                  <div className="w-[95%] mx-auto capitalize lg:text-xl font-normal">
                    {department.headOfDept}{" "}
                    <span className="text-sm font-normal">
                      (head of the department)
                    </span>{" "}
                  </div>
                  <div className="w-[95%] mx-auto lg:text-base text-xs font-normal">
                    {department.StudentCount === null
                      ? 0
                      : department.StudentCount}{" "}
                    Execellent students are currently studing in this department
                  </div>
                </section>
              );
            })
          : `No Departmens`}
      </main>
    </div>
  );
}

function loadData() {
  try {
    return axios
      .get("http://localhost:5000/departments/getdepartments")
      .then((res) => res.data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default Department;
