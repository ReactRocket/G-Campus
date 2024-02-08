/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import img1 from "../resources/images/bca/pic1.svg";
import img2 from "../resources/images/bca/pic2.svg";
import img3 from "../resources/images/bca/pic3.svg";

function Bca() {
  return (
    <>
    <div className="overflow-hidden px-6">
      <div className="mx-auto mt-7 w-full max-w-6xl lg:mt-14">
        <main className="my-14 lg:mt-20">
      <h1 className="font-display flex  w relative z-10 mt-4 text-lg  font-bold leading-tight tracking-tight text-heading lg:mt-8 lg:text-3xl">
        Bachelor of Computer Applications (BCA) 
       
      </h1>



      <section className="relative flex items-center w-full bg-white">
        <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="relative flex-col items-start m-auto align-middle">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
              <div className="relative items-center gap-12 m-auto lg:inline-flex">
                <div className="max-w-xl text-center lg:text-left">
                  <div>
                    <p className="text-2xl font-medium tracking-tight text-blue-400 sm:text-3xl">
                      Bachelor of Computer Applications
                    </p>
                    <p className="max-w-xl text-lg mt-4  tracking-tight text-gray-600">
                      Bachelor of Computer Application is a popular course
                      amongst students who have completed Class 12th and have
                      studied Computer Science or Information Technology as a
                      main subject or elective in Senior Secondary Education. If
                      you are interested in pursuing a career in IT, then a BCA
                      course is a great option for you.
                    </p>
                  </div>
                  <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                    <a
                      className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                      href="#_"
                    ></a>
                  </div>
                </div>
              </div>
              <div className="order-first block w-full mt-12 aspect-square lg:mt-0 lg:order-first">
                <img
                  className="object-cover object-center w-full mx-auto  lg:ml-auto"
                  alt="hero"
                  src={img2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative items-center w-full  py-2 mx-auto md:px-12 lg:px-10 max-w-7xl">
          <div className="w-full mx-auto text-left">
            <div className="relative flex-col items-center m-auto align-middle">
              <div className="items-center gap-12 text-left lg:gap-24 flex flex-col-reverse lg:flex-row lg:inline-flex">
                <div className="flex flex-col m-auto md:order-first">
                  <div className="max-w-xl">
                    <div>
                      <p className="text-2xl font-medium tracking-tight  sm:text-4xl"></p>
                    </div>
                  </div>
                  <div className=" lg:max-w-7xl">
                    <ul
                      role="list"
                      className="grid grid-cols-2 gap-4 list-none lg:gap-6"
                    >
                      <li>
                        <div>
                          <p className=" text-lg font-bold leading-6 text-blue-400">
                            HTML
                          </p>
                        </div>
                        <div className="mt-2 text-base text-gray-500">
                          The HyperText Markup Language or HTML is the standard
                          markup language for documents designed to be displayed
                          in a web browser. It defines the content and structure
                          of web content.
                        </div>
                      </li>
                      <li>
                        <div>
                          <p className=" text-lg font-bold leading-6 text-blue-400">
                            CSS
                          </p>
                        </div>
                        <div className="mt-2 text-base text-gray-500">
                          Cascading Style Sheets (CSS) is a stylesheet language
                          used to describe the presentation of a document
                          written in HTML or XML (including XML dialects such as
                          SVG, MathML or XHTML).
                        </div>
                      </li>
                      <li>
                        <div>
                          <p className=" text-lg font-bold leading-6 text-blue-400">
                            C++
                          </p>
                        </div>
                        <div className="mt-2 text-base text-gray-500">
                          The C++ programming language (originally named "C with
                          Classes") was devised by Bjarne Stroustrup as an
                          approach to providing object-oriented functionality
                          with a C-like syntax.
                        </div>
                      </li>
                      <li>
                        <div>
                          <p className=" text-lg  font-semibold leading-6 text-blue-400">
                            Backend
                          </p>
                        </div>
                        <div className="mt-2 text-base text-gray-500">
                          .It includes the main features and functionalities of
                          the application on the server. Programming languages
                          for the backend are mainly Node. JS (for JavaScript),
                          Django (for Python), Spring (Java), etc.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                  <img
                    className="object-cover object-center w-full mx-auto lg:ml-auto"
                    alt="hero"
                    src={img3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative items-center w-full  py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="w-full mx-auto text-left">
            <div className="relative flex-col items-center m-auto align-middle">
              <div className="items-center gap-12 text-left lg:gap-24 lg:inline-flex">
                <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                  <img
                    className="object-cover object-center w-full mx-auto  lg:ml-auto"
                    alt="hero"
                    src={img1}
                  />
                </div>
                <div className="flex flex-col mt-6 lg:mt-0">
                  <div className="max-w-xl">
                    <div>
                      <p className="text-xl font-medium tracking-tight text-blue-500 sm:text-2xl">
                        "Unlock Your Future with BCA: Igniting the Spark of
                        Technological Excellence"
                      </p>
                    </div>
                  </div>
                  <div className="mx-auto mt-6 lg:max-w-7xl">
                    <ul
                      role="list"
                      className="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-3"
                    >
                      <li>
                        <div>
                          <p className="mt-5 text-lg font-medium leading-6 text-blue-400">
                            Connect with Industry Leaders:
                          </p>
                        </div>
                        <div className="mt-2 text-base text-gray-500">
                          Our program is designed in collaboration with industry
                          leaders, ensuring that you graduate with the skills
                          and knowledge that employers are seeking.
                        </div>
                      </li>
                      <li>
                        <div>
                          <p className="mt-5 text-lg font-medium leading-6 text-blue-400">
                            Shape the Future, One Line of Code at a Time:
                          </p>
                        </div>
                        <div className="mt-2 text-base text-gray-500">
                          BCA empowers you to be a catalyst for change.Engage in
                          internships, collaborate on real-world projects, and
                          build a network that opens doors to exciting career
                          opportunities.
                        </div>
                      </li>
                      <li>
                        <div>
                          <p className="mt-5 text-lg font-medium leading-6 text-blue-400">
                            Empower Your Career Journey:
                          </p>
                        </div>
                        <div className="mt-2 text-base text-gray-500">
                          Your journey doesn't end with graduation; it begins.
                          BCA opens doors to a plethora of career opportunities
                          — from coding maestro to tech visionary. Join a league
                          of professionals making waves in the industry.
                        </div>
                      </li>
                      <li>
                        <div>
                          <p className="mt-5 text-lg font-medium leading-6 text-blue-400">
                            Where Passion Meets Profession:
                          </p>
                        </div>
                        <div className="mt-2 text-base text-gray-500">
                          More than an academic pursuit, BCA is where your
                          passion meets your profession. Turn your love for
                          technology into a thriving career, and let every
                          project be a testament to your dedication and skill.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative items-center w-full px-5 py-16 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-12 text-left lg:gap-24 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div className="mx-auto lg:max-w-7xl">
                <ul
                  role="list"
                  className="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-6"
                >
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-blue-400">
                        Best Labs
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      Our lab activities are crafted to hone skills demanded by
                      the industry. By engaging with real-world scenarios.
                      troubleshooting challenges
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-blue-400">
                        Faculty support
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      Our BCA faculty is a symphony of expertise, with each
                      teacher contributing their unique notes of knowledge and
                      experience.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
              <img
                className="object-cover object-center w-full mx-auto lg:ml-auto"
                alt="hero"
                src={img1}
              />
            </div>
            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div className="mx-auto lg:max-w-7xl">
                <ul
                  role="list"
                  className="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-6"
                >
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-blue-400">
                        Placement
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      Benefit from our strong ties with the industry. Our
                      college actively collaborates with renowned tech
                      companies,our BCA graduates are on
                      from the moment they step into the job
                      market.
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-blue-400">
                        Activites
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      experience a celebration of diversity through multicultural
                      events and international days. Our college takes pride in
                      its inclusive environment.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      </div>
      </div>
    </>
  );
}

export default Bca;
