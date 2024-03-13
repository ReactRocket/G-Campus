import axios from "axios";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup/";
import { Chart } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import Loader from "./Loader";

const Student = () => {
  const data = {
    labels: ["BCOM", "BBA", "BCA"],
    datasets: [
      {
        label: "Students",
        backgroundColor: ["#22d3ee", "#38bdf8", "#60a5fa"],
        borderColor: "#0c4a6e",
        data: [20, 30, 45],
      },
    ],
  };

  const [isLoading, setIsLoading] = useState(true);
  const [Students, setStudents] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      studentLoader()
        .then((response) => {
          if (response.isSuccess) {
            setStudents(response.data);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2500);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <main className="h-auto w-[95%] m-auto my-4">
      {/* navbar */}
      <nav className="">
        <h1 className="lg:w-[92%] md:w-4/5 w-3/4 text-2xl font-semibold font-sans">
          Students
        </h1>
      </nav>

      {/* student count */}
      <section className="lg:h-40 h-24 flex">
        <div className="w-1/2 flex justify-center items-center flex-col">
          <CountUp
            end={
              Students.studentcount[0].verified === undefined
                ? 0
                : Students.studentcount[0].verified
            }
            duration={7}
            className="lg:text-9xl text-5xl"
          />
          <h1 className="lg:text-lg md:text-lg text-sm font-semibold">
            Active Student
          </h1>
        </div>
        <div className="w-1/2 flex justify-center items-center flex-col">
          <CountUp
            end={
              Students.studentcount[0].unverified === undefined
                ? 0
                : Students.studentcount[0].unverified
            }
            duration={2}
            className="lg:text-9xl text-5xl"
          />
          <h1 className="lg:text-lg md:text-lg text-sm font-semibold">
            Under-verification
          </h1>
        </div>
      </section>

      {/* verification route section */}
      <section className="border mt-4 flex justify-between items-center p-2 bg-sky-200 rounded-md">
        <h1 className="capitalize font-medium lg:text-base text-xs">
          {Students.studentcount[0].unverified === undefined
            ? 0
            : Students.studentcount[0].unverified}
          students are under verification! click to verify
        </h1>
        <button className="bg-sky-700 lg:w-[6%] md:w-[10%] w-[12%] py-1 lg:text-lg text-xs lg:rounded-md rounded text-white">
          Verify
        </button>
      </section>

      <section className="mt-4 flex flex-col justify-center items-center">
        <h1 className="capitalize font-medium lg:text-2xl text-xs w-full">
          Student by departments
        </h1>
        <div className="h-80 mt-4">{/* <Pie data={data} /> */}</div>
      </section>
      {/* implement from here */}
      {/* <section className="w-full border mt-5">
        {Students.map((student) => {
          return (
            <div>
              {student.deptId}
              <img
                src={require(`../../../images/${student.profile}`)}
                alt="student profile"
              />
            </div>
          );
        })}
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
