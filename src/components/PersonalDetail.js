import React, { useEffect, useState } from "react";
import personaldetail from "../resources/images/personal-details.svg";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../utils/validateData";
import axios from "axios";

function PersonalDetail({
  display,
  handleNext,
  formData,
  setFormData,
  handlePrevious,
}) {
  const [countries, setCountries] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [emailverification, setEmailverification] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCountry().then((data) => {
      if (data) {
        setCountries(data);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCountry = async () => {
    return await fetch("https://api.countrystatecity.in/v1/countries", {
      method: "GET",
      headers: {
        "X-CSCAPI-KEY":
          "QzNVT0FaeUlPU0FlSlNEWHl6ZjR1V1BEYlFuSmF5eWhybk4xMFN0NA==",
      },
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch(() => {
        navigate("/network");
      });
  };

  const handleState = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    let selectElement = e.target;
    let id = selectElement.options[selectElement.selectedIndex].id;
    try {
      setState(
        await fetch(
          "https://api.countrystatecity.in/v1/countries/" + id + "/states",
          {
            method: "GET",
            headers: {
              "X-CSCAPI-KEY":
                "QzNVT0FaeUlPU0FlSlNEWHl6ZjR1V1BEYlFuSmF5eWhybk4xMFN0NA==",
            },
            redirect: "follow",
          }
        )
          .then((res) => res.json())
          .then((data) => data)
      );
    } catch (error) {
      // error should be impliment
      navigate("/network");
    }
  };

  const handleCity = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    let selectElement = e.target;
    let id = selectElement.options[selectElement.selectedIndex].id;
    let contry = document.getElementById("country");
    let countryId = contry.options[contry.selectedIndex].id;

    try {
      setCity(
        await fetch(
          "https://api.countrystatecity.in/v1/countries/" +
            countryId +
            "/states/" +
            id +
            "/cities",
          {
            method: "GET",
            headers: {
              "X-CSCAPI-KEY":
                "QzNVT0FaeUlPU0FlSlNEWHl6ZjR1V1BEYlFuSmF5eWhybk4xMFN0NA==",
            },
            redirect: "follow",
          }
        )
          .then((res) => res.json())
          .then((data) => data)
      );
    } catch (error) {
      navigate("/network");
    }
  };

  const handleEmail = async (e) => {
    if (!emailverification) {
      let email = e.target.value;
      // alert(email);
      let emaildata = { email: email };
      let respone = await axios.post(
        "http://localhost:5000/students/emailverification",
        emaildata
      );
      let responedata = await respone.data;
      // console.log(responedata);
      if (!responedata.data) {
        alert(responedata.displayMessage);
      } else {
        setEmailverification(true);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    let formObject = Object.fromEntries(data.entries());
    if (validateForm(formObject)) {
      setFormData({
        ...formData,
        ...formObject,
      });
      handleNext();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full h-full absolute ${display} lg:flex-row flex-col lg:overflow-hidden overflow-scroll`}>
      <div className="w-1/2  justify-center items-center lg:flex hidden">
        <img
          src={personaldetail}
          className="rounded w-[80%] h-[95%]"
          alt="college side view"
        />
      </div>
      <div className="lg:w-1/2 w-full">
        <div className="w-full h-full lg:m-0 m-auto lg:block flex flex-col justify-center items-center">
          <div className="pt-4 text-blue-600 text-3xl font-medium lg:w-full w-[85%]">
            Registration Form
          </div>
          <div className="text-md py-1 text-gray-500 lg:w-full w-[85%]">
            Enter your basic information
          </div>
          <div className="lg:grid grid-cols-3 gap-x-6 gap-y-4 lg:mt-2 p-2 w-full flex flex-col justify-center items-center">
            {/* first name */}
            <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
              <label htmlFor="fname" className="block">
                First Name
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                display-message="First Name"
                // onChange={handleChange}
                placeholder="First Name"
                className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-grey-200 focus:bg-gray-200"
              />
            </div>
            {/* middle name */}
            <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
              <label htmlFor="mname" className="block">
                Middle Name
              </label>
              <input
                type="text"
                id="mname"
                name="mname"
                display-message="Middle Name"
                // onChange={handleChange}
                placeholder="Middle Name"
                className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-grey-200 focus:bg-gray-200"
              />
            </div>
            {/* last name */}
            <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
              <label htmlFor="lname" className="block">
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                id="lname"
                display-message="Last Name"
                // onChange={handleChange}
                placeholder="Last Name"
                className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full border-2 border-grey-200 focus:bg-gray-200"
              />
            </div>
            {/* email address */}
            <div className="lg:col-span-2 col-span-3 text-gray-500 lg:w-auto w-[85%]">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                display-message="Email Address"
                onBlur={handleEmail}
                // onChange={handleChange}
                placeholder="Email Address"
                className="text-md p-2 rounded-md outline-none lg:w-[97%] w-full border-2 border-grey-200 focus:bg-gray-200"
              />
            </div>
            {/* gender */}
            <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
              <label htmlFor="gender" className="block">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                display-message="Gender"
                // onChange={handleChange}
                className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full appearance-none border-2 border-grey-200 focus:bg-gray-200">
                <option value="default">--select gender--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {/* date of birth */}
            <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
              <label htmlFor="dob" className="block">
                DOB
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                display-message="Date Of Birth"
                // onChange={handleChange}
                className="text-md p-1.5 rounded-md outline-none lg:w-[95%] w-full appearance-none uppercase border-2 border-grey-200 focus:bg-gray-200"
              />
            </div>
            {/* blood group */}
            <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
              <label htmlFor="blood" className="block">
                Blood Group
              </label>
              <select
                name="blood"
                id="blood"
                display-message="Blood Group"
                // onChange={handleChange}
                className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full appearance-none border-2 border-grey-200 focus:bg-gray-200">
                <option value="default">--select blood--</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            {/* phone number */}
            <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
              <label htmlFor="phone" className="block">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                display-message="Phone Number"
                // onBlur={handleChange}
                placeholder="Phone Number"
                className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-grey-200 focus:bg-gray-200"
              />
            </div>
            {/* Address */}
            <div className="lg:col-span-3 text-gray-500 col-span-3 lg:w-auto w-[85%]">
              <label htmlFor="address" className="block">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                display-message="Residential Address"
                // onChange={handleChange}
                placeholder="Residential Address"
                className="text-md p-2 rounded-md outline-none lg:w-[97%] w-full border-2 border-grey-200 focus:bg-gray-200"
              />
            </div>
            {/* country */}
            <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
              <label htmlFor="country" className="block">
                Country
              </label>
              <select
                name="country"
                id="country"
                display-message="Country"
                onChange={handleState}
                className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full appearance-none border-2 border-grey-200 focus:bg-gray-200">
                <option value="default">--select country--</option>
                {typeof countries === "object"
                  ? countries?.map((country) => {
                      return (
                        <option
                          value={country.name}
                          key={country.id}
                          id={country.iso2}>
                          {country.name}
                        </option>
                      );
                    })
                  : ""}
              </select>
            </div>
            {/* state */}
            <div className="lg:col-span-1 col-span-3 text-gray-500 lg:w-auto w-[85%]">
              <label htmlFor="state" className="block">
                State
              </label>
              <select
                name="state"
                id="state"
                display-message="State"
                onChange={handleCity}
                className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full appearance-none border-2 border-grey-200 focus:bg-gray-200">
                <option value="default">--select state--</option>
                {typeof state === "object"
                  ? state?.map((state) => {
                      return (
                        <option
                          value={state.name}
                          key={state.id}
                          id={state.iso2}>
                          {state.name}
                        </option>
                      );
                    })
                  : ""}
              </select>
            </div>
            {/* city */}
            <div className="lg:col-span-1 col-span-3 text-gray-500 lg:mb-3 lg:w-auto w-[85%]">
              <label htmlFor="city" className="block">
                City
              </label>
              <select
                name="city"
                id="city"
                display-message="City"
                // onChange={handleChange}
                className="text-md p-2 rounded-md outline-none lg:w-[95%] w-full  appearance-none border-2 border-grey-200 focus:bg-gray-200">
                <option value="default">--select city--</option>
                {typeof city === "object"
                  ? city?.map((city) => {
                      return (
                        <option value={city.name} key={city.id} id={city.iso2}>
                          {city.name}
                        </option>
                      );
                    })
                  : ""}
              </select>
            </div>
            <div className="lg:col-start-2 lg:col-end-3 col-span-3 lg:w-auto w-[85%]">
              <button
                type="button"
                onClick={handlePrevious}
                className="tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                Previous
              </button>
            </div>
            <div className="lg:col-start-3 lg:col-end-4 col-span-3 lg:w-auto w-[85%]">
              <button
                type="submit"
                className="tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PersonalDetail;
