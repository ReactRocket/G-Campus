import React, { useState } from "react";
import CourseBreadcrum from "./CourseBreadcrum";
import { Link } from "react-router-dom";

const bcaFeeStructure = [
  {
    name: "₹ 15,625",
    price: "FY",
    features: [
      "Foundation in Computer Science",
      "Application-Oriented Curriculum",
      "Industry-Relevant Skills",
      "Emphasis on Problem-Solving",
      "Pathway to Further Education and Career Opportunities",
    ],
  },
  {
    name: "₹ 13,945",
    price: "SY",
    features: [
      "Core Programming",
      "Database Management Systems (DBMS)",
      "Web Development",
      "Software Engineering Principles",
      "Emerging Technologies",
    ],
  },
  {
    name: "₹ 13365",
    price: "TY",
    features: [
      "Specialization",
      "Project Work",
      "Industry Exposure",
      "Advanced Topics",
      "Career Opportunities",
    ],
  },
];


const bbaFeeStructure = [
  {
    name: "₹ 11,425",
    price: "FY",
    features: [
      "Introduction to Business Fundamentals",
      "Principles of Management",
      "Financial Accounting",
      "Marketing Management",
      "Business Communication Skills",
    ],
  },
  {
    name: "₹ 12,345",
    price: "SY",
    features: [
      "Organizational Behavior",
      "Business Law and Ethics",
      "Human Resource Management",
      "Financial Management",
      "Operations Management",
    ],
  },
  {
    name: "₹ 11,725",
    price: "TY",
    features: [
      "Specialization Electives (e.g., Marketing, Finance, HR)",
      "Internship/Industry Training",
      "Business Strategy and Planning",
      "Entrepreneurship Development",
      "Research Project/Thesis",
    ],
  },
];

const bcomFeeStructure = [
  {
    name: "₹ 6,765",
    price: "FY",
    features: [
      "Introduction to Accounting Principles",
      "Business Mathematics and Statistics",
      "Business Communication Skills",
      "Microeconomics",
      "Business Law",
    ],
  },
  {
    name: "₹ 6,275",
    price: "SY",
    features: [
      "Cost Accounting",
      "Macroeconomics",
      "Financial Management",
      "Corporate Law",
      "Management Information Systems",
    ],
  },
  {
    name: "₹ 6,925",
    price: "TY",
    features: [
      "Specialization Electives (e.g., Accounting, Finance, Taxation)",
      "Internship/Industry Training",
      "Auditing and Assurance",
      "Business Strategy and Planning",
      "Research Project/Thesis",
    ],
  },
];

const Fees = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className=" h-full w-full">
      <CourseBreadcrum
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <div className="w-full h-[90%] overflow-y-scroll pt-0 p-10">
        <div>
          <div className="flex flex-col space-y-8 pb-10 pt-12 text-center md:pt-24">
            <p className="text-3xl font-bold text-gray-700 md:text-5xl md:leading-10">
              {activeButton === 1
                ? "Bachelor of Business Administration"
                : activeButton === 2
                ? "Bachelor of Commerce"
                : "Bachelor of Computer Applications"}
            </p>
            <p className="mx-auto max-w-3xl text-base text-gray-600 md:text-xl">
            {activeButton === 1
                ? "\"Here theory meets practice in the corporate dance.Strategic management to financial analysis, BBA equips for the business stance.\""
                : activeButton === 2
                ? "\"With a focus on economics, finance, and management, BCom graduates navigate the complexities of the global marketplace with precision and vision.\""
                : "\"BCA stands for Bachelor of Computer Applications,Empowering minds with digital innovations and computations.\""}
            </p>
          </div>
          <div className="mt-8 w-full space-y-4 md:mt-12">
            <div className="grid space-y-8 lg:grid-cols-3 lg:space-x-8 lg:space-y-0">
              {(activeButton === 1 ? bbaFeeStructure : activeButton === 2 ? bcomFeeStructure   : bcaFeeStructure).map((plan) => (
                <div
                  key={plan.name}
                  className=" rounded-2xl border border-gray-200 bg-white shadow flex flex-col justify-between items-center"
                >
                  <div className="flex w-full flex-col justify-start space-y-4 px-8 pt-10">
                    <p className="text-4xl font-bold leading-10 text-gray-600">
                      {plan.price}
                    </p>
                    <div className="flex w-full flex-col items-start justify-start space-y-1">
                      <p className="w-full text-xl font-semibold leading-loose text-gray-900">
                        {plan.name}
                      </p>
                      <p className="w-full text-base leading-normal text-gray-600">
                        Billed annually.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start px-8 pb-10 pt-8">
                    <div className="flex w-full flex-col space-y-4">
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="inline-flex w-full space-x-3"
                        >
                          <div className="flex items-center justify-center rounded-full p-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-check2 h-5"
                              viewBox="0 0 16 16"
                            >
                              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                            </svg>
                          </div>
                          <p className="w-full text-base leading-normal text-gray-600">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex w-full flex-col px-8 pb-8">
                    <div className="flex w-full flex-col items-start justify-start space-y-3">
                      
                      <Link
                      to="/signup"
                        type="button"
                        className="w-full text-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        Get Started
                      </Link>
                      <Link
                      to="/contact"
                        type="button"
                        className="w-full text-center rounded-md border border-blue-600 px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;
