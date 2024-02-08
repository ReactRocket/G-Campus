import React from "react";
import { useNavigate } from "react-router-dom";
import CollegeLogo from "../../resources/images/logo-no-background2.png";

function SignUpMessage() {
  const naviagate = useNavigate();
  return (
    <main className="h-screen bg-gray-100-200">
      <section className="w-full flex justify-center items-center flex-col lg:pt-8 md:pt-6 pt-3 gap-y-3">
        <img
          src={CollegeLogo}
          alt="G-Campus Logo png"
          className="lg:w-52 md:w-40 w-32"
        />
        <h1 className="lg:text-2xl md:text-xl text-sm font-medium text-center">
          Congratulations! Your registration with G-Campus is now under
          verification.
        </h1>
        <h2 className="lg:text-lg md:text-base text-xs font-normal">
          We sent an email to you whenever your registration verified with us
        </h2>
        <button
          className="flex justify-center items-center gap-x-2 text-blue-400 cursor-pointer"
          onClick={() => naviagate("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left mt-[1px]"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
          Back to home
        </button>
      </section>
    </main>
  );
}

export default SignUpMessage;
