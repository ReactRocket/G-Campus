import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    course: "",
    rollno: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
  };
  return (
    <>
      <div className="max-w-md mx-auto mt-10 bg-blue-50 border rounded   p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="">
            <label htmlFor="course" className="">
              Select Course:
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border-blue-200 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Course</option>
              <option value="BCOM">BCOM</option>
              <option value="BBA">BBA</option>
              <option value="BCA">BCA</option>
            </select>
          </div>
          <div>
            <label htmlFor="rollno" className="block mb-1">
              Roll Number:
            </label>
            <input
              type="text"
              id="rollno"
              name="rollno"
              value={formData.rollno}
              onChange={handleChange}
              className="w-full border-blue-200 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter Roll Number"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block mb-1">
              Mobile Number:
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border-blue-200 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter Mobile Number"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-blue-200 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter Email Address"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-blue-200 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
