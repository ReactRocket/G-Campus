import React from 'react'
import BCA_IMG from '../resources/images/about/bca.jpg'
import BCOM_IMG from '../resources/images/about/bcom.jpg'
import BBA_IMG from '../resources/images/about/bba.jpg'
import { Link } from 'react-router-dom'
function Courses() {
  return (
    <>

      <div className="min-h-screen bg-gradient-to-tr bg-gray-100 flex justify-center items-center py-20">
        <div className="px-4  md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-indigo-600">BCA</h3>
            <div className="relative">
              <img className="w-full rounded-xl" src={BCA_IMG} alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Bachelor's of Computer Application</h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center mb-1.5">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p>3 Years</p>
              </div>
              <div className="flex space-x-1 items-center mb-1.5">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <p>6 Semesters</p>
              </div>
              <div className="flex space-x-1 items-center mb-1.5">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <p>Web/App Development</p>
              </div>
              <Link to="bca">
                <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View More</button>
              </Link>
            </div>
          </div>
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-indigo-600">BCOM</h3>
            <div className="relative">
              <img className="w-full rounded-xl" src={BCOM_IMG} alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Bachelor's of Commerce</h1>
            <h1>&nbsp;</h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center mb-1.5">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p>3 Years</p>
              </div>
              <div className="flex space-x-1 items-center mb-1.5">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <p>6 Semesters</p>
              </div>
              <div className="flex space-x-1 items-center mb-1.5">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <p>Accounting/Banking</p>
              </div>
              <Link to="bcom">
                <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View More</button>
              </Link>
            </div>
          </div>
          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-indigo-600">BBA</h3>
            <div className="relative">
              <img className="w-full rounded-xl" src={BBA_IMG} alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Bachelor's of Business Administration</h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center mb-1.5">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p>3 Years</p>
              </div>
              <div className="flex space-x-1 items-center mb-1.5">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <p>6 Semesters</p>
              </div>
              <div className="flex space-x-1 items-center mb-1.5">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <p>Business Management</p>
              </div>
              <Link to="bba">
                <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View More</button>
              </Link>
            </div>
          </div >
        </div >
      </div >
    </>
  )
}

export default Courses
