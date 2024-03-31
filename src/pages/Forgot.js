import axios from "axios";
import React, { useState } from "react";
import { sendOTP } from "../utils/EmailSend";
import { Link, useNavigate } from "react-router-dom";
import { validateForm } from "../utils/validateData";

const Forgot = () => {
  const [steps, setSteps] = useState(0);
  const [OTP, setOTP] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const hanleFirst = async (e) => {
    e.preventDefault();
    let formdata = new FormData(e.target);
    let formObject = Object.fromEntries(formdata);
    // await setOTP(generateRandomNumber(6).toString());
    try {
      await axios
        .post("http://localhost:5000/students/emailverification", formObject)
        .then(async (res) => {
          if (!res.data?.data) {
            let result = await sendOTP({
              to_email: formObject.email,
            });
            setEmail(formObject.email);
            setOTP(result);
            alert(
              "Password reset OTP sent to your email address. check your Gmail!"
            );
            setSteps(1);
          } else {
            alert("Please First Register Yourself With Us!");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSecond = (e) => {
    try {
      e.preventDefault();
      let formdata = new FormData(e.target);
      let formObject = Object.fromEntries(formdata);
      if (validateForm(formObject)) {
        let enteredOTP = formObject.otp;
        console.log(enteredOTP);
        console.log(OTP);
        if (enteredOTP === OTP) {
          setSteps(2);
        } else {
          alert("invalid OTP!");
        }
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong! Please try again.");
    }
  };

  const handleThird = (e) => {
    try {
      e.preventDefault();
      let formdata = new FormData(e.target);
      let formObject = Object.fromEntries(formdata);
      if (validateForm(formObject)) {
        if (formObject.npassword !== formObject.cpassword) {
          alert("Passwords don't match. Please try again!");
        } else {
          axios
            .post("http://localhost:5000/students/forgetpassword", formObject)
            .then((res) => {
              if (res.data.isSuccess) {
                if (res.data.data > 0) {
                  alert("Your password updated successfully!");
                  navigate("/login");
                }
              }
            });
        }
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      {steps === 0 && (
        <main
          id="content"
          role="main"
          className="w-full   max-w-md mx-auto p-6">
          <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Forgot password?
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Remember your password?
                  <Link
                    className="text-blue-600 decoration-2 hover:underline font-medium"
                    to="/login">
                    Login here
                  </Link>
                </p>
              </div>

              <div className="mt-5">
                <form onSubmit={hanleFirst}>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                          required
                          display-message="email address"
                          aria-describedby="email-error"
                        />
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error">
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                      Get OTP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <p className="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
            <Link
              className="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
              to="/signup">
              Create an account
            </Link>
            <Link
              className="pl-3 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
              to="/contact">
              Contact us!
            </Link>
          </p>
        </main>
      )}

      {/* submit otp  */}
      {steps === 1 && (
        <main
          id="content"
          role="main"
          className="w-full   max-w-md mx-auto p-6">
          <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Verify OTP
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Remember your password?
                  <Link
                    className="text-blue-600 decoration-2 hover:underline font-medium"
                    to="/login">
                    Login here
                  </Link>
                </p>
              </div>

              <div className="mt-5">
                <form onSubmit={handleSecond}>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="otp"
                        className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                        Enter OTP
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="otp"
                          name="otp"
                          autoComplete="otp"
                          display-message="OTP"
                          className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                          required
                        />
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error">
                        Please include a valid otp so we can get back to you
                      </p>
                    </div>
                    <div className="w-full flex justify-center items-center gap-3">
                      <button
                        type="submit"
                        className="py-3 w-1/2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                        Submit
                      </button>
                      <button
                        type="button"
                        className="py-3 w-1/2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                        Resend OTP
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <p className="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
            <Link
              className="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
              to="/signup">
              Create an account
            </Link>
            <Link
              className="pl-3 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
              to="/contact">
              Contact us!
            </Link>
          </p>
        </main>
      )}

      {/* reset password */}
      {steps === 2 && (
        <main
          id="content"
          role="main"
          className="w-full   max-w-md mx-auto p-6">
          <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Create Password
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Remember your password?
                  <Link
                    className="text-blue-600 decoration-2 hover:underline font-medium"
                    to="/login">
                    Login here
                  </Link>
                </p>
              </div>

              <div className="mt-5">
                <form onSubmit={handleThird}>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="npassword"
                        className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                        New Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="npassword"
                          name="npassword"
                          display-message="new passowrd"
                          autoComplete="new-password"
                          className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                          // required
                        />
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error">
                        Please include a new password
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="cpassword"
                        className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="cpassword"
                          name="cpassword"
                          display-message="confirm passowrd"
                          autoComplete="new-password"
                          className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                          // required
                        />
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error">
                        Please include a same password
                      </p>
                      <input
                        type="hidden"
                        name="email"
                        id="email"
                        value={email || "kishoresunchu412@gmail.com"}
                      />
                    </div>
                    <button
                      type="submit"
                      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                      Reset password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <p className="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
            <Link
              className="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
              to="/signup">
              Create an account
            </Link>
            <Link
              className="pl-3 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200"
              to="/contact">
              Contact us!
            </Link>
          </p>
        </main>
      )}
    </div>
  );
};

export default Forgot;
