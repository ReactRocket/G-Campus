import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import home_img1 from "../resources/illustrations/home/Coding workshop-amico.svg";
import home_img3 from "../resources/illustrations/home/Modern life-rafiki.svg";
import home_img2 from "../resources/illustrations/home/college campus-amico.svg";
import college_img1 from "../resources/images/College-img1.jpg";
import Logo from "../resources/images/cap-1266204.svg";

function Home() {
  // const StudentCount = useLoaderData();
  const [StudentCount, setStudentCount] = useState({
    Total: 12,
    BCOM: 4,
    BBA: 4,
    BCA: 4,
  });

  useEffect(() => {
    setTimeout(() => {
      loader()
        .then((response) => {
          console.log(response);
          setStudentCount(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  }, []);

  const [selectedCourse, setSelectedCourse] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (selectedCourse) {
      navigate(`/courses/${selectedCourse}`);
    }
  };

  return (
    <div>
      <main>
        {/* Hero section */}
        <section className="px-8 pt-6 pb-2 text-center md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center">
              {/* ProductHunt badge - Product of the month - 1st */}

              <img className="aspect-square w-1/6" src={Logo} alt="logo" />

              <h1 className="text-center text-3xl font-semibold text-heading md:max-w-4xl lg:text-5xl xl:text-6xl">
                Welcome to G-Campus, for aspiring business and IT leaders!
              </h1>
              <p className="mt-6 max-w-3xl text-xl">
                G-Campus fosters a vibrant and dynamic learning environment
                where students pursuing BCA, BCom, and BBA degrees.
              </p>
              <form className="mt-6 flex flex-col gap-2 sm:flex-row">
                <div>
                  <label
                    htmlFor="email"
                    className="sr-only block text-sm font-semibold text-heading">
                    Courses
                  </label>
                  <input
                    id="Courses"
                    name="courses"
                    type="text"
                    list="courses"
                    placeholder="Select course"
                    onChange={(event) => setSelectedCourse(event.target.value)}
                    className="block  w-full rounded-xl border-2 border-layer-3 bg-muted-1 px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                  />
                  <datalist id="courses">
                    <option value="BCOM" />
                    <option value="BBA" />
                    <option value="BCA" />
                  </datalist>
                </div>
                <button
                  onClick={handleSearch}
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-white dark:focus:ring-white/80">
                  Search
                </button>
              </form>
            </div>
            <div className="mt-12 md:px-2">
              <img
                className="h-auto w-full rounded-lg"
                src={college_img1}
                alt="college"
              />
            </div>
          </div>
        </section>

        {/* Testimonial section */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Invest in Your Future: Explore Our Undergraduate Programs
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Embark on your academic journey at G-campus and explore our
                diverse range of undergraduate programs! We offer the{" "}
                <Link
                  to="/courses/bcom"
                  className="text-indigo-500 hover:underline font-semibold">
                  {" "}
                  Bachelor of Commerce (BCOM)
                </Link>{" "}
                for a comprehensive understanding of business, the{" "}
                <Link
                  to="/courses/bca"
                  className="text-indigo-500 hover:underline font-semibold">
                  Bachelor of Computer Applications (BCA)
                </Link>{" "}
                for mastering the world of technology, and the{" "}
                <Link
                  to="/courses/bba"
                  className="text-indigo-500 hover:underline font-semibold">
                  Bachelor of Business Administration (BBA){" "}
                </Link>
                to hone your leadership and management skills. Choose your path
                and become a well-equipped professional in today's dynamic
                world.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calculator text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {StudentCount.BCOM}
                  </h2>
                  <p className="leading-relaxed">BCOM</p>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-briefcase text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 16 16">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {StudentCount.BBA}
                  </h2>
                  <p className="leading-relaxed">BBA</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-laptop text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 16 16">
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {StudentCount.BCA}
                  </h2>
                  <p className="leading-relaxed">BCA</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {StudentCount.Total}
                  </h2>
                  <p className="leading-relaxed">TOTAL</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="px-2 pt-20 md:p-10">
          <div className="mx-auto max-w-6xl space-y-8 md:space-y-20">
            {/* 1/3 and 2/3 */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="flex flex-col rounded-3xl bg-layer-2 p-8">
                <h2 className="bg-gradient-to-r  font-sans text-2xl font-semibold text-gradient gradient-peach md:text-3xl">
                  Dynamic Student Showcase
                </h2>
                <p className="mt-4 text-lg text-justify">
                  Implement a visually appealing and dynamic student showcase
                  prominently on the home page of G-Campus. This feature should
                  highlight the diverse talents and achievements of students
                  through a rotating carousel or grid display. Include
                  high-quality images, brief bios, and links to individual
                  student profiles, allowing visitors to learn more about each
                  student's academic journey, extracurricular activities, and
                  notable accomplishments. This dynamic showcase can be updated
                  regularly to reflect the evolving achievements of the student
                  body, fostering a sense of pride and community engagement.
                </p>
              </div>
              <div className="rounded-3xl bg-layer-2  p-8 md:col-span-2">
                {/* <h2 className="bg-gradient-to-r bg-clip-text text-2xl font-semibold text-gradient gradient-cotton-candy md:text-3xl">
                  You're in control.
                </h2>
                <p className="mt-4 text-lg">
                  All of your stats are displayed in an easy to understand
                  dashboard. Make decisions with confidence.
                </p> */}
                <img className="bg-cover" src={home_img1} alt="" />
              </div>
            </div>

            {/* 2/3 and 1/3 */}
            <div className="lg:grid  flex flex-col-reverse  gap-6 lg:grid-cols-3">
              <div className="rounded-3xl bg-layer-2 p-8 md:col-span-2">
                {/* <h2 className="bg-gradient-to-r text-2xl font-semibold text-gradient gradient-cotton-candy md:text-3xl">
                  You're in control.
                </h2>
                <p className="mt-4 text-lg">
                  All of your stats are displayed in an easy to understand
                  dashboard. Make decisions with confidence.
                </p> */}
                <img className="" src={home_img2} alt="" />
              </div>
              <div className="flex flex-col rounded-3xl bg-layer-2 p-8">
                <h2 className="bg-gradient-to-r font-sans text-2xl font-semibold text-gradient gradient-peach md:text-3xl">
                  Interactive Campus Map with Student Spotlights
                </h2>
                <p className="mt-4 text-lg text-justify">
                  Enhance the user experience by integrating an interactive
                  campus map on the home page that not only provides a visual
                  layout of the college grounds but also incorporates pop-ups or
                  markers linked to specific student achievements or projects.
                  When users hover over designated areas, they can access
                  information about the outstanding contributions of students
                  associated with that location. This interactive feature not
                  only showcases individual accomplishments but also allows
                  prospective students, parents, and other visitors to explore
                  the campus and discover the vibrant student community at
                  G-Campus.
                </p>
              </div>
            </div>

            {/* 1/3 and 2/3 */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="flex flex-col rounded-3xl bg-layer-2 p-8">
                <h2 className="bg-gradient-to-r font-sans text-2xl font-semibold text-gradient gradient-peach md:text-3xl">
                  Live Social Feed Aggregator{" "}
                </h2>
                <p className="mt-4 text-lg text-justify">
                  Foster a sense of community and real-time engagement by
                  incorporating a live social feed aggregator on the home page.
                  This feature should aggregate posts, photos, and updates from
                  various social media platforms using relevant hashtags or user
                  mentions associated with G-Campus. By curating content
                  directly from students' social media accounts, the website can
                  provide an authentic and dynamic glimpse into campus life.
                  This real-time feed not only showcases the students' daily
                  experiences but also promotes a sense of connectivity and
                  inclusivity among the college community. Ensure that the feed
                  is moderated to maintain a positive and supportive online
                  environment.
                </p>
              </div>
              <div className="rounded-3xl bg-layer-2 p-8 md:col-span-2">
                {/* <h2 className="bg-gradient-to-r text-2xl font-semibold text-gradient gradient-cotton-candy md:text-3xl">
                  You're in control.
                </h2>
                <p className="mt-4 text-lg">
                  All of your stats are displayed in an easy to understand
                  dashboard. Make decisions with confidence.
                </p> */}
                <img className="" src={home_img3} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;

// export function loader() {
//   let data = { Total: 0, BCOM: 0, BBA: 0, BCA: 0 };
//   try {
//     return axios
//       .get("http://localhost:5000/students/coursewisestudents")
//       .then((res) => res.data)
//       .then(async (response) => {
//         if (!response.isSuccess) {
//           return data;
//         } else {
//           let responseData = await response.data;
//           responseData.map((row) => {
//             data.Total = row.Total;
//             switch (row.deptId.toString()) {
//               case "101":
//                 data.BCOM += row.StudentCount === null ? 0 : row.StudentCount;
//                 break;
//               case "102":
//                 data.BCOM += row.StudentCount === null ? 0 : row.StudentCount;
//                 break;
//               case "103":
//                 data.BBA += row.StudentCount === null ? 0 : row.StudentCount;
//                 break;
//               default:
//                 data.BCA += row.StudentCount === null ? 0 : row.StudentCount;
//                 break;
//             }
//             return data;
//           });
//           return data;
//         }
//       })
//       .catch((err) => {
//         return [];
//       });
//   } catch (error) {
//     console.error(error);
//     return data;
//   }
// }

async function loader() {
  const data = { Total: 12, BCOM: 4, BBA: 4, BCA: 4 };
  try {
    const response = await axios.get(
      "http://localhost:5000/students/coursewisestudents"
    );
    return response.data.data || data;
  } catch (err) {
    console.error("Error fetching data:", err);
    return data;
  }
}
