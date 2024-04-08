import React, { useEffect, useState, useLayoutEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Profile from "../../../resources/illustrations/student_dashboard/profile.svg";
import Logo from "../../../resources/images/logo-no-background2.png";
import greet from "../../../utils/Greeting";
import Loader from "../components/Loader";
import axios from "axios";
import StudentSkeleton from "../components/StudentSkeleton"

const asideMenuList = [
  {
    icon: (
      <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
          className="fill-current text-blue-400 dark:fill-slate-600"></path>
        <path
          d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
          className="fill-current text-blue-200 group-hover:text-blue-300"></path>
        <path
          d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
          className="fill-current group-hover:text-blue-300"></path>
      </svg>
    ),
    text: "Dashboard",
    path: "/student",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          className="fill-current text-gray-600 group-hover:text-blue-600"
          fillRule="evenodd"
          d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
          clipRule="evenodd"
        />
        <path
          className="fill-current text-gray-300 group-hover:text-blue-300"
          d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
        />
      </svg>
    ),
    text: "Documents",
    path: "/student/documents",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          className="fill-current text-gray-600 group-hover:text-blue-600"
          fillRule="evenodd"
          d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
          clipRule="evenodd"
        />
        <path
          className="fill-current text-gray-300 group-hover:text-blue-300"
          d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
        />
      </svg>
    ),
    text: "Reports",
    path: "/student/reports",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5">
        <path
          className="fill-current text-gray-600 group-hover:text-blue-600"
          fillRule="evenodd"
          d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    text: "Exams",
    path: "/student/exams",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          className="fill-current text-gray-300 group-hover:text-blue-300"
          d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
        />
        <path
          className="fill-current text-gray-600 group-hover:text-blue-600"
          fillRule="evenodd"
          d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
          clipRule="evenodd"
        />
      </svg>
    ),
    text: "Payment",
    path: "/student/payment",
  },
];

const Dashboard = () => {
  const [Student, setStudent] = useState();
  // JSON.parse(localStorage.getItem("studentInfo"))
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const [IsLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    let sid = sessionStorage.getItem("loggedIn");

    return () => {
      if (!sid) {
        navigate("/login");
      }
    };
  }, [navigate]);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out!")) {
      sessionStorage.removeItem("loggedIn");
      sessionStorage.removeItem("studentInfo");
      navigate("/login");
    }
  };

  useEffect(() => {
    // alert("hello");
    setIsLoading(true);
    setTimeout(() => {
      studentLoader().then((response) => {
        if (response.isSuccess) {
          localStorage.setItem("studentInfo", JSON.stringify(response.data[0]));
          setStudent(response.data[0]);
          setIsLoading(false);
        }
      });
    }, 3000);
  }, [pathname]);

  return IsLoading ? (
    <StudentSkeleton IsMenuOpen={IsMenuOpen} />
    
  ) : (
    <div className="">
      <aside
        className={`fixed overflow-y-scroll z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] ${
          !IsMenuOpen && "ml-[-100%] "
        }`}>
        <div>
          <div className="-mx-6 px-6 py-4 border-b h-16 md:grid place-content-center hidden ">
            <Link to="/" title="home">
              <img src={Logo} className="h-full " alt="tailus logo" />
            </Link>
          </div>

          <div className="mt-20 lg:mt-10 text-center">
            <img
              src={
                Student.profile
                  ? require(`../../../images/${Student.profile}`)
                  : Profile
              }
              alt={`${Student.fname} \n profile`}
              className="w-24 h-24 m-auto rounded-full object-cover  lg:w-28 lg:h-28"
            />

            <h5 className="hidden mt-4 text-xl font-semibold uppercase text-gray-600 lg:block">
              {Student.fname + " " + Student.lname}
            </h5>
            <span className="hidden text-gray-400 lg:block">{Student.sid}</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8 ">
            {asideMenuList?.map((menu, index) => {
              return (
                <li onClick={() => setIsMenuOpen(false)} key={index}>
                  <Link
                    to={menu.path}
                    aria-label={menu.text}
                    className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl ${
                      menu.path === pathname
                        ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white"
                        : "text-gray-600 "
                    }  `}>
                    {menu.icon}
                    <span className="-mr-1 font-medium">{menu.text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button
            onClick={handleLogout}
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>
      <div className=" ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] max-h-screen">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block capitalize">
              {greet(Student.fname)}
            </h5>
            <button
              className="w-12 h-16 -mr-2 border-r lg:hidden"
              onClick={() => setIsMenuOpen(!IsMenuOpen)}>
              {IsMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 my-auto text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 my-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            <div className="flex space-x-4">
              {/* <!--search bar --> */}
              {/* <div hidden className="md:block">
                <div className="relative flex items-center text-gray-400 focus-within:text-blue-400">
                  <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                    <svg
                      xmlns="http://ww50w3.org/2000/svg"
                      className="w-4 fill-current"
                      viewBox="0 0 35.997 36.004"
                    >
                      <path
                        id="Icon_awesome-search"
                        data-name="search"
                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-blue-300 transition"
                  />
                </div>
              </div> */}
              {/* <!--/search bar --> */}
              {/* <button
                aria-label="search"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
              >
                <svg
                  xmlns="http://ww50w3.org/2000/svg"
                  className="w-4 mx-auto fill-current text-gray-600"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path>
                </svg>
              </button>
              <button
                aria-label="chat"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-auto text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </button>
              <button
                aria-label="notification"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-auto text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button> */}
            </div>
          </div>
        </div>

        <div className="max-h-[100vh-4rem] w-full overflow-y-hidden">
          {IsLoading ? (
            <div className="h-screen w-full overflow-y-hidden bg-cover">
              <Loader />
            </div>
          ) : (
            <Outlet/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

export async function studentLoader() {
  let sid = sessionStorage.getItem("loggedIn");
  let data = {
    sid: sid,
  };
  try {
    const res = await axios.post(
      "http://localhost:5000/students/student",
      data
    );
    return res.data;
  } catch (err) {
    console.error(err);
  }
}
