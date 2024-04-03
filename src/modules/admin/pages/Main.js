import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import CountUp from "react-countup/";
import { Doughnut } from "react-chartjs-2";
import DepartmentShortener from "../../../utils/Shortener";

const Main = () => {
  const [Students, setStudents] = useState({});
  const [faculties, setFaculties] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [chartData, setChartData] = useState([4, 1, 1]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      loader()
        .then((response) => {
          if (response.isSuccess) {
            console.log(response.data.studentcount);
            // setStudents(response.data);
            setStudents(response.data.studentcount);
            setDepartments({
              departmentCount: response.data.department,
              principal: response.data.headOfDept,
            });
            setFeedbacks(response.data.feedbacks);
            setFaculties(response.data.faculty);
            setChartData([
              response.data.studentcount.BCOM,
              response.data.studentcount.BBA,
              response.data.studentcount.BCA,
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
        backgroundColor: ["#3b82f6", "#6366f1", "#c084fc"],
        // borderColor: "#a0a0a0",
        data: chartData,
      },
    ],
  };

  return isLoading ? (
    <Loader />
  ) : (
    <main className="h-auto w-[95%] m-auto my-4">
      {/* students, departments, feedbacks, faculties */}
      <section className="flex justify-evenly bg-gray-100 py-4 rounded-lg shadow-md shadow-gray-300">
        <Link className="w-[15%]" to="/admin/department">
          <h1 className="text-6xl font-medium w-ful text-center">
            <CountUp end={departments?.departmentCount ?? 0} duration={5} />
          </h1>
          <h1 className="text-xl text-center">Departments</h1>
        </Link>
        <Link className="w-[15%]" to="/admin/faculty">
          <h1 className="text-6xl font-medium w-ful text-center">
            <CountUp end={faculties?.facultyCount ?? 0} duration={5} />
          </h1>
          <h1 className="text-xl text-center">Faculties</h1>
        </Link>
        <Link className="w-[15%]" to="/admin/student">
          <h1 className="text-6xl font-medium w-ful text-center">
            <CountUp end={Students?.TOTAL ?? 0} duration={5} />
          </h1>
          <h1 className="text-xl text-center">Students</h1>
        </Link>
        <Link className="w-[15%]" to="/admin/feedback">
          <h1 className="text-6xl font-medium w-ful text-center">
            <CountUp end={feedbacks} duration={5} />
          </h1>
          <h1 className="text-xl text-center">Feedbacks</h1>
        </Link>
      </section>

      {/* faculty and student display */}
      <section className="mt-8 h-[450px] flex justify-between items-center px-1 py-5">
        <div className="w-[65%]   h-full bg-gray-100 px-5 rounded-md shadow-md shadow-gray-300">
          <h1 className="text-lg px-2 pt-2 font-medium">Faculties</h1>
          <div className="w-full h-[85%] mt-2">
            <div className="h-[10%] text-lg border-b flex justify-around items-center font-medium text-center">
              <div className="w-1/6">#</div>
              <div className="w-1/6">Name</div>
              <div className="w-1/6">Gender</div>
              <div className="w-1/6">Qualifaction</div>
              <div className="w-1/6">Experience</div>
              <div className="w-1/6">Class</div>
            </div>
            <div className="h-[90%] py-2 flex flex-col gap-4 overflow-y-scroll">
              {faculties?.faculties?.map((faculty, index) => {
                return (
                  <div className="py-1 flex justify-around items-center text-center">
                    <div className="w-1/6 m-auto flex justify-center items-center">
                      <img
                        key={index}
                        src={require(`../../../images/${faculty.profile}`)}
                        alt="faculty profile"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <div className="w-1/6">{faculty.fullname}</div>
                    <div className="w-1/6">{faculty.gender}</div>
                    <div className="w-1/6">{faculty.qualification}</div>
                    <div className="w-1/6">{faculty.experience} Years</div>
                    <div className="w-1/6">
                      {faculty.class + DepartmentShortener(faculty.deptId)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[30%] h-full bg-gray-100 px-5 flex flex-col justify-evenly items-center rounded-md shadow-md shadow-gray-300">
          <h1 className="w-full text-xl">Department wise Students</h1>
          <Doughnut data={data} className="" />
        </div>
      </section>

      {/* head of the departmenst */}
      <section className="mt-8 min-h-96   bg-gray-100 rounded-lg  shadow-md shadow-gray-300">
        <h1 className="w-full px-4 pt-2 text-2xl font-semibold h-[10%]">
          Heads of the Department
        </h1>
        <div className="grid grid-cols-4    gap-5 place-content-center min-h-[50vh] py-5 p-10 ">
          {departments?.principal?.map((faculty, index) => {
            return (
              <div className="group relative cursor-pointer  rounded-3xl h-full  space-y-6 overflow-hidden">
                <img
                  key={index}
                  src={require(`../../../images/${faculty.profile}`)}
                  alt="faculty profle"
                  className="mx-auto h-[26rem] w-full object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className=" absolute cursor-pointer bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-[114px]  transition duration-300 ease-in-out group-hover:translate-y-0">
                  <div>
                    <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                      {faculty.fullname}
                    </h4>
                    <span className="block text-base text-gray-500">
                      Department: {DepartmentShortener(faculty.deptId)}
                    </span>
                  </div>

                  <p className="mt-2 text-base text-gray-300 dark:text-gray-600">
                    <span>Introducing {faculty.fullname}, </span>a highly
                    experienced {faculty.experience} years
                    <span className="text-base ml-2  ">
                      and professional with over {faculty.qualification} in the
                      field.
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

function loader() {
  try {
    return axios
      .get("http://localhost:5000/admin/getalldetails")
      .then((response) => {
        if (response.data) {
          return response.data;
        }
      })
      .catch((err) => {
        return err;
      });
  } catch (error) {
    return error;
  }
}

export default Main;
{
   
}
