import axios from "axios";
import { useState } from "react";
import { validateForm } from "../utils/validateData";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const emptyFormData = () => {
    setFormData({ fullname: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = validateForm(formData);
    if (result) {
      await axios
        .post("http://localhost:5000/feedbacks/insert", formData)
        .then((res) => {
          let response = res.data;
          if (response.isSuccess) {
            alert("Thank you! Your message has been successfully sent");
            emptyFormData();
          } else {
            alert(response.displayMessage);
            emptyFormData();
          }
        });
    }
  };
  return (
    <div className="h-full w-full">
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8153294278404!2d72.83883427432171!3d21.159746280522565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e2fe47b1ee1%3A0x504c1d61b4e6e422!2sUCCC%20%26%20SPBCBA%20%26%20SDHGCBCA%20%26%20IT%20College!5e0!3m2!1sen!2sin!4v1703870362272!5m2!1sen!2sin"
            style={{
              filter: "contrast(1.2) opacity(0.5)",
            }}></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex ">
          <form
            className="lg:w-1/3 md:w-1/2 bg-white h-full rounded-lg p-5 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg "
            onSubmit={handleSubmit}>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font ">
              Contact US
            </h2>
            <div className="relative mb-4 ">
              <label
                htmlFor="fullname"
                className="leading-7 text-sm font-bold text-gray-600">
                Full Name
              </label>
              <input
                placeholder="Enter Your Name"
                type="text"
                id="fullname"
                name="fullname"
                // required
                onChange={handleChange}
                value={formData?.fullname}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:border-sky-600  "
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600 font-bold">
                Email
              </label>
              <input
                placeholder="Enter Your Email"
                type="text"
                id="email"
                name="email"
                // required
                onChange={handleChange}
                value={formData?.email}
                className="w-full bg-white rounded hover:border-sky-600  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600 font-bold">
                Mobile
              </label>
              <input
                placeholder="Enter Your Number"
                type="number"
                pattern="[0-9]{10}"
                id="phone"
                name="phone"
                // required
                onChange={handleChange}
                value={formData?.phone}
                className=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full bg-white rounded border border-gray-300 hover:border-sky-600  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600 font-bold">
                Message
              </label>
              <textarea
                placeholder="Type Here.."
                id="message"
                name="message"
                // required
                onChange={handleChange}
                value={formData?.message}
                className="w-full bg-white rounded border border-gray-300 hover:border-sky-600   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
