import React, { useState, useEffect } from "react";
import logo from "../../../resources/images/Logo.svg";
import { sendEmail } from "../utils/EmailSend";
import DepartmentShortener from "../../../utils/Shortener";

const apiKey = "rzp_test_bQDLfruo45eNFU";

const Payment = () => {
  const [Student, setStudent] = useState(
    JSON.parse(localStorage.getItem("studentInfo"))
  );
  const [StudentFeesInfo, setStudentFeesInfo] = useState({});
  const [amount, setAmount] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [orderID, setOrderID] = useState("");

  const handleStudentPaymentInfo = async () => {
    await fetch("http://localhost:5000/students/paymentinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sid: Student?.sid,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        setAmount(data.data.fees);
        setStudentFeesInfo(data.data); // Handle the response data here
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    if (StudentFeesInfo.fees_status === "true") {
      alert("Your fees is already paid.");
    } else {
      const amountInSubunits = amount * 100;
      const newOrderID = "ID" + Math.floor(Math.random() * 91) + 10;

      const newPrefillData = {
        name: Student?.fname + " " + Student?.mname + " " + Student?.lname,
        email: Student?.email,
        contact: Student?.phone,
      };

      const prefillJson = JSON.stringify(newPrefillData);

      setOrderID(newOrderID);

      const options = {
        key: apiKey,
        amount: amountInSubunits,
        currency: "INR",
        id: newOrderID,
        name: "G-Campus College",
        description: `This payment is made by ${newPrefillData.name}, with Student ID ${Student?.sid}, whose email address is ${newPrefillData.email} and phone number is ${newPrefillData.contact}.`,
        image: logo,
        prefill: JSON.parse(prefillJson),
        theme: {
          color: "#0e90e4",
        },
        handler: (res) => {
          alert("Payment successful!");
          fetch("http://localhost:5000/students/payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sid: Student?.sid,
            }),
          })
            .then((response) => {
              if (response.ok) {
                setPaymentSuccess(true);
                sendEmail({
                  to_name:
                    Student?.fname +
                    " " +
                    Student?.mname +
                    " " +
                    Student?.lname,
                  to_email: Student?.email,
                  amount: StudentFeesInfo?.fees,
                  t_id: res.razorpay_payment_id,
                  t_date: Date().toLocaleString(),
                  s_id: Student?.sid,
                  c_id: Student?.class,
                  d_id: DepartmentShortener(Student?.deptId),
                });
                return response.json();
              } else {
                throw new Error("Network response was not ok.");
              }
            })
            .then((data) => {
              console.log("Payment Done");
            })
            .catch((error) => {
              console.error(
                "There was a problem with the fetch operation:",
                error
              );
            });
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    }
  };

  useEffect(() => {
    handleStudentPaymentInfo();
  }, [paymentSuccess]);

  return (
    <>
      <div className="bg-gray-100  min-h-screen ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center py-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
              Semester Fees Payment{" "}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Secure your enrollment for the semester and enjoy uninterrupted
              access to academic resources.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl ring-1 ring-blue-600 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-blue-700">
                Benefits of Payment
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Access to exclusive student resources.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-400"></div>
              </div>
              <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Semester Enrollment Confirmation
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Access to Academic Materials
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Participation in College Events
                </li>
                <li className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Official College Merchandise
                </li>
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-300 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    {StudentFeesInfo?.class} {Student.deptId === 104 && "BCA"}
                    {Student.deptId === 103 && "BBA"}
                    {Student.deptId === 102 && "BCOM (English Medium)"}
                    {Student.deptId === 101 && "BCOM (Gujarati Medium)"} FEES
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      {" "}
                      ₹{StudentFeesInfo?.fees || "-"}
                    </span>
                    <span
                      className={`text-sm font-semibold leading-6 tracking-wide ${
                        StudentFeesInfo.fees_status == "true"
                          ? "text-green-600"
                          : "text-red-600"
                      } `}>
                      {StudentFeesInfo.fees_status == "true"
                        ? "PAID"
                        : "UNPAID"}
                    </span>
                  </p>
                  <form onSubmit={handleOrderSubmit}>
                    <button
                      disabled={
                        StudentFeesInfo.fees_status == "true" ? true : false
                      }
                      type="submit"
                      className={
                        "mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed"
                      }>
                      {StudentFeesInfo.fees_status == "true"
                        ? "FEES PAID"
                        : "PAY NOW"}
                    </button>
                  </form>

                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    {StudentFeesInfo.fees_status == "true"
                      ? '"Thank you for completing your payment! Your semester is set for success ahead!"'
                      : '"Complete your payment now to ensure a successful semester ahead!"'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default Payment;
