import axios from "axios";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup/";
import { Chart } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import Loader from "./Loader";
import { useNavigate, Link } from "react-router-dom";

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
            console.log(response.data.students);
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
        backgroundColor: ["#59D5E0", "#98ABEE", "#1D24CA"],
        borderColor: "#fff",
        data: chartData,
      },
    ],
  };

  return isLoading ? (
    <Loader />
  ) : (
    <main className="h-auto w-[95%] m-auto my-4">
      {/* navbar */}
      <nav className="">
        <h1 className="lg:w-[92%] md:w-4/5 w-3/4 font-[lato] text-2xl font-semibold ">
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
          <h1 className="lg:text-lg md:text-lg font-[lato] text-sm font-semibold">
            Under-verification
          </h1>
        </div>
      </section>

      {/* verification route section */}
      <section className="border mt-4 flex justify-between items-center p-2 bg-sky-200 rounded-md shadow-lg">
        <h1 className="capitalize lg:text-base text-xs">
          <span className="font-bold">
            {Students?.studentcount?.unverified ?? 0}{" "}
          </span>
          <span className="font-semibold font-[lato]">
            students are under verification! click to verify
          </span>
        </h1>
        <button className="bg-sky-700 lg:w-[6%] md:w-[10%] w-[12%] font-[lato] py-1 lg:text-lg text-xs lg:rounded-md rounded text-white">
          Verify
        </button>
      </section>

      <section className="h-[500px] w-full mt-10 border shadow-lg rounded-lg">
        <div className="border-b text-2xl px-5 py-2 font-semibold h-[10%]">
          Student List
        </div>
        <ol className="w-[96%] h-[90%] m-auto overflow-x-auto">
          <li className="flex justify-between items-center text-lg px-4 py-2 border-b">
            <div className="w-1/12 text-startfont-semibold  font-[lato]">#</div>
            <div className="w-1/6 text-start font-semibold font-[lato]">Name</div>
            <div className="w-1/6 text-start font-semibold font-[lato]">Department</div>
            <div className="w-1/6 text-start font-semibold font-[lato]">Class</div>
            <div className="w-1/6 text-start font-semibold font-[lato]">Class</div>
            <div className="w-1/5 text-start font-semibold font-[lato]">Email</div>
          </li>
          {Students?.students.map((student) => {
            return (
              <li className="px-4 py-2 m-auto flex justify-between items-center border-b">
                <div className="w-1/12 text-start font-[lato] truncate">
                  <img
                    src={require(`../../../images/${student.profile}`)}
                    alt="student profile"
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div className="capitalize font-[lato]  w-1/6 text-start truncate">
                  {student?.name}
                </div>
                <div className="capitalize font-[lato]  w-1/6 text-start truncate">
                  {student?.deptName}
                </div>
                <div className="capitalize font-[lato]  w-1/6 text-start truncate">
                  {student?.classId}
                </div>
                <div className="capitalize font-[lato]  w-1/6 text-start truncate">
                  {student?.classId}
                </div>
                <div className=" font-[lato] w-1/5 text-start truncate">
                  {student?.email}
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-4 flex flex-col  justify-center items-center bg-gray-100 rounded-xl shadow-2xl">
        <h1 className="capitalize font-medium font-[lato] lg:text-2xl text-xs w-full px-4 mt-2">
          Department wise students
        </h1>
        <div className="w-full mt-4 lg:h-96 h-full flex lg:flex-row flex-col justify-center items-center">
          <div className="lg:w-[75%] w-[90%] lg:h-full h-80 flex justify-center items-center p-5">
            <Pie data={data} />
          </div>
          <div className="lg:w-[25%] w-[90%] lg:h-full md:h-24 h-20 flex lg:flex-col  justify-evenly items-center">
            <Link
              className="lg:w-4/5 w-1/6 lg:h-1/5 h-4/5 hover:scale-105 hover:bg-blue-400  hover:shadow-md transition-all duration-1000 bg-blue-200 rounded-lg flex justify-center items-center"
              to="">
              <div className="lg:w-[75%] w-[90%]">
                <h1 className="font-semibold text-start font-[lato] lg:text-base text-sm">
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
                className="bi bi-chevron-right hover:bg-indigo-600 transition duration-1000 h-8 w-8 p-2 rounded-full lg:block hidden"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </Link>
            <Link
              className="lg:w-4/5 w-1/5 lg:h-1/5 h-4/5 hover:scale-105 hover:bg-blue-400  hover:shadow-md transition-all duration-1000 bg-blue-200 rounded-lg flex justify-center items-center"
              to="">
              <div className="lg:w-[75%] w-[90%]">
                <h1 className="font-semibold text-start font-[lato] lg:text-base text-sm">
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
                className="bi bi-chevron-right hover:bg-indigo-600 transition duration-1000 h-8 w-8 p-2 rounded-full lg:block hidden"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </Link>
            <Link
              className="lg:w-4/5 w-1/5 lg:h-1/5 h-4/5 hover:scale-105 hover:bg-blue-400  hover:shadow-md transition-all duration-1000 bg-blue-200 rounded-lg flex justify-center items-center"
              to="">
              <div className="lg:w-[75%] w-[90%]">
                <h1 className="font-semibold text-start font-[lato] lg:text-base text-sm">
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
                className="bi bi-chevron-right hover:bg-indigo-600 transition duration-1000 h-8 w-8 p-2 rounded-full lg:block hidden"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </Link>
            <Link
              className="lg:w-4/5 w-1/5 lg:h-1/5 h-4/5 hover:scale-105 hover:bg-blue-400  hover:shadow-md transition-all duration-1000 bg-blue-200 rounded-lg flex justify-center items-center"
              to="">
              <div className="lg:w-[75%] w-[90%]">
                <h1 className="font-semibold text-start font-[lato] lg:text-base text-sm">
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
                className="bi bi-chevron-right hover:bg-indigo-600 transition duration-1000 h-8 w-8 p-2 rounded-full lg:block hidden"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* implement from here */}
      {/* <section className="w-full border mt-5">
        
      </section> */}
    </main>
  );
};

export default Student;

function studentLoader() {
  return axios
    .get("http://localhost:5000/students/studentinfo")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
