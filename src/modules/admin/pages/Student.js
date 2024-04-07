import axios from "axios";
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Chart } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import CountUp from "react-countup/";
import { Link, useNavigate } from "react-router-dom";
import DepartmentShortener from "../../../utils/Shortener";
import Loader from "./Loader";

const Student = () => {
  const [Students, setStudents] = useState([]);
  const [chartData, setChartData] = useState([4, 1, 1]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      studentLoader()
        .then((response) => {
          if (response.isSuccess) {
            // console.log(response.data.students);
            setStudents(response.data);
            setChartData([
              response.data.departmentwise.BCOM,
              response.data.departmentwise.BBA,
              response.data.departmentwise.BCA,
            ]);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          navigate("/admin/error");
        });
    }, 2500);
  }, [navigate]);

  const data = {
    labels: ["BCOM", "BBA", "BCA"],
    datasets: [
      {
        label: "Students",
        backgroundColor: ["#5FBDFF", "#B7C9F2", "#A076F9"],
        borderColor: "#fff",
        data: chartData,
      },
    ],
  };

  const handleClick = () => {
    navigate("verify");
  };

  return isLoading ? (
    <Loader />
  ) : (
    <main className="h-auto w-[95%] m-auto my-4">
      {/* navbar */}
      <nav className="">
        <h1 className="lg:w-[92%] md:w-4/5 w-3/4 text-2xl font-semibold ">
          Students
        </h1>
      </nav>

      {/* student count */}
      <section className="lg:h-40 h-24 flex">
        <div className="w-1/2 flex justify-center items-center flex-col">
          <CountUp
            end={Students?.studentcount?.verified ?? 0}
            duration={2}
            className="lg:text-9xl text-5xl"
          />
          <h1 className="lg:text-lg md:text-lg text-sm font-semibold">
            Active Student
          </h1>
        </div>
        <div className="w-1/2 flex justify-center items-center flex-col">
          <CountUp
            end={Students?.studentcount?.unverified ?? 0}
            duration={2}
            className="lg:text-9xl text-5xl"
          />
          <h1 className="lg:text-lg md:text-lg text-sm font-semibold">
            Under-verification
          </h1>
        </div>
      </section>

      {/* verification route section */}
      <section className="border mt-4 flex justify-between  items-center p-2 pl-4 bg-gray-200 rounded-md shadow-lg">
        <h1 className="capitalize lg:text-base text-xs">
          <span className="font-bold">
            {Students?.studentcount?.unverified ?? 0}{" "}
          </span>
          <span className="font-semibold">
            students are under verification!{" "}
          </span>
          {Students?.studentcount?.unverified > 0 && (
            <span className="font-semibold">click to verify</span>
          )}
        </h1>
        {Students?.studentcount?.unverified > 0 && (
          <button
            className="bg-blue-700 lg:w-[6%] md:w-[10%] w-[12%] py-1 lg:text-lg text-xs lg:rounded-md rounded text-white"
            // {Students?.studentcount?.unverified <= 0 && "disabled"}
            onClick={handleClick}>
            Verify
          </button>
        )}
      </section>

      {/* student details section  */}
      <section className="h-[500px] w-full mt-10 border shadow-lg rounded-lg">
        <div className="border-b text-2xl px-5 py-2 font-semibold h-[10%]">
          Active Student List
        </div>
        <ol className="w-[96%] h-[90%] m-auto overflow-x-auto">
          <li className="flex justify-between items-center text-lg px-4 py-2 border-b">
            <div className="w-1/12 text-center font-semibold ">Photo</div>
            <div className="w-1/6 text-center font-semibold ">Name</div>
            <div className="w-1/6 text-center font-semibold ">Gender</div>
            <div className="w-1/6 text-center font-semibold ">Class</div>
            <div className="w-1/5 text-center font-semibold ">Email</div>
            <div className="w-1/6 text-center font-semibold ">Phone</div>
          </li>

          {Students?.students.map((student) => {
            return (
              <li
                className="px-4 py-2 m-auto flex justify-center gap-4  border-b cursor-pointer hover:bg-blue-50 "
                key={student?.sid}>
                <div className="w-1/12 flex justify-center ">
                  <img
                    src={require(`../../../images/${student.profile}`)}
                    alt="student profile"
                    className="h-12 w-10 object-cover rounded-3xl cursor-pointer"
                  />
                </div>
                <div className="capitalize w-1/6 text-center truncate">
                  {student?.name}
                </div>
                <div className="capitalize w-1/6 text-center truncate">
                  {student?.gender}
                </div>
                <div className="capitalize w-1/6 text-center truncate">
                  {student?.class + DepartmentShortener(student?.deptName)}
                </div>
                <div className="capitalize  w-1/5 text-center truncate">
                  {student?.email}
                </div>
                <div className="capitalize  w-1/6 text-center truncate ">
                  {student?.phone}
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* department wise students graph */}
      <section className="mt-4 flex flex-col  justify-center items-center bg-gray-100 rounded-xl shadow-2xl">
        <h1 className="capitalize font-medium lg:text-2xl text-xs w-full px-4 mt-2">
          Department wise students
        </h1>
        <div className="w-full mt-4 lg:h-96 h-full flex lg:flex-row flex-col justify-center items-center">
          <div className="lg:w-[75%] w-[90%] lg:h-full h-80 flex justify-center items-center p-5">
            <Pie data={data} />
          </div>
          <div className="lg:w-[25%] w-[90%]  lg:h-full md:h-24 h-20 flex lg:flex-col   justify-evenly items-center">
            <Link
              className="lg:w-4/5 w-1/6 lg:h-1/5 h-4/5 hover:scale-105 hover:bg-blue-400  hover:shadow-md transition-all duration-1000 bg-blue-200 rounded-lg flex justify-center items-center"
              to="">
              <div className="lg:w-[75%] w-[90%]">
                <h1 className="font-semibold text-start lg:text-base text-sm">
                  Total Students
                </h1>
                <CountUp
                  end={Students?.departmentwise?.TOTAL ?? 0}
                  duration={2}
                  className="lg:text-3xl text-base text-bold"
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-right hover:bg-blue-50 transition duration-1000 h-8 w-8 p-2 rounded-full lg:block hidden"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </Link>
            <Link
              className="lg:w-4/5 w-1/5 lg:h-1/5 h-4/5 hover:scale-105 hover:bg-blue-400  hover:shadow-md transition-all duration-1000 bg-blue-200 rounded-lg flex justify-center items-center"
              to="">
              <div className="lg:w-[75%] w-[90%]">
                <h1 className="font-semibold text-start lg:text-base text-sm">
                  BCOM Students
                </h1>
                <CountUp
                  end={Students?.departmentwise?.BCOM ?? 0}
                  duration={2}
                  className="lg:text-3xl text-base text-bold"
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-right hover:bg-indigo-50 transition duration-1000 h-8 w-8 p-2 rounded-full lg:block hidden"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </Link>
            <Link
              className="lg:w-4/5 w-1/5 lg:h-1/5 h-4/5 hover:scale-105 hover:bg-blue-400  hover:shadow-md transition-all duration-1000 bg-blue-200 rounded-lg flex justify-center items-center"
              to="">
              <div className="lg:w-[75%] w-[90%]">
                <h1 className="font-semibold text-start lg:text-base text-sm">
                  BBA Students
                </h1>
                <CountUp
                  end={Students?.departmentwise?.BBA ?? 0}
                  duration={2}
                  className="lg:text-3xl text-base text-bold"
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-right hover:bg-white transition duration-1000 h-8 w-8 p-2 rounded-full lg:block hidden"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </Link>
            <Link
              className="lg:w-4/5 w-1/5 lg:h-1/5 h-4/5 hover:scale-105 hover:bg-blue-400  hover:shadow-md transition-all duration-1000 bg-blue-200 rounded-lg flex justify-center items-center"
              to="">
              <div className="lg:w-[75%] w-[90%]">
                <h1 className="font-semibold text-start lg:text-base text-sm">
                  BCA Students
                </h1>
                <CountUp
                  end={Students?.departmentwise?.BCA ?? 0}
                  duration={2}
                  className="lg:text-3xl text-base text-bold"
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-right hover:bg-white transition duration-1000 h-8 w-8 p-2 rounded-full lg:block hidden"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

async function studentLoader() {
  try {
    const response = await axios.get(
      "http://localhost:5000/students/studentinfo"
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export default Student;
