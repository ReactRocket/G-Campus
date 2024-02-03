import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import deleteImage from "../../../resources/images/delete.svg";
// import Table from "../components/Table";

const Feedback = () => {
  const [Feedbacks, setFeedbacks] = useState(useLoaderData());

  // const navigate = useNavigate();

  // const header = ["#", "Name", "Email", "Phone", "Message", "Time"];

  // const loadData = async () => {
  //   try {
  //     return await axios
  //       .get("http://localhost:5000/feedbacks/allfeedbacks")
  //       .then((res) => {
  //         // console.log(res.data);
  //         return res.data;
  //       });
  //   } catch (error) {
  //     console.error(error);
  //     return [];
  //   }
  // };

  useEffect(() => {
    // loadData().then((response) => {
    //   if (response.isSuccess) {
    //     if (response.data) setFeedbacks(response.data);
    //   } else {
    //     navigate("/network");
    //   }
    // });
    // }, [navigate]);
  }, []);

  const handleClick = async (e) => {
    console.log(e.target.id);
    let srno = e.target.id;
    let data = { srno: srno };
    // e.target.value !== undefined ? srno = e.target.value :
    try {
      await axios
        .delete("http://localhost:5000/feedbacks/deleteOne", data)
        .then((res) => res.data)
        .then((response) => {
          // delete login has to build
          if (!response.isSuccess) alert(response.displayMessage);
        });
    } catch (error) {}
  };

  return (
    <div className="h-auto w-[95%] m-auto my-4">
      <h1 className="text-2xl font-semibold font-sans">Feedbacks</h1>
      <section className="mt-5 grid gap-y-5">
        {/* {Feedbacks} */}
        {Feedbacks.length > 0
          ? Feedbacks?.map((feedback, i) => {
              return (
                <div className="h-16 rounded-md flex bg-sky-300" key={i}>
                  <div className="lg:w-[95%] md:w-[90%]  w-[85%]">
                    <div className="h-1/2 lg:pl-4 pl-2 font-semibold pt-1">
                      {feedback.fullname} -{" "}
                      <a href={`mailto:${feedback.email}`}>{feedback.email}</a>
                    </div>
                    <div className="h-1/2 lg:pl-4 pl-2 font-normal capitalize">
                      {feedback.message}
                    </div>
                  </div>
                  <div className="lg:w-[5%]  md:w-[10%] w-[15%]">
                    <button
                      className="w-full h-full flex justify-center items-center"
                      id={feedback.srno}
                      value={feedback.srno}
                      onClick={handleClick}>
                      <img
                        src={deleteImage}
                        alt="delete svg icon"
                        id={feedback.srno}
                      />
                      {/* <svg
                        value={feedback.srno}
                        onClick={handleClick}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="22"
                        fill="#082f49"
                        className="bi bi-trash3-fill"
                        viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                      </svg> */}
                    </button>
                  </div>
                </div>
              );
            })
          : `No Feedbacks`}
        {/* <div className="h-16 rounded-md flex bg-sky-300">
          <div className="w-[95%]">
            <div className="h-1/2 lg:pl-4 font-semibold pt-1">
              kishore - kishoresunchu412@gmail.com
            </div>
            <div className="h-1/2 lg:pl-4 font-normal capitalize">
              outside of map function
            </div>
          </div>
          <div className="w-[5%]">
            <button className="w-full h-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="22"
                fill="#082f49"
                className="bi bi-trash3-fill"
                viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
              </svg>
            </button>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export async function loadData() {
  try {
    return await axios
      .get("http://localhost:5000/feedbacks/allfeedbacks")
      .then((res) => res.data)
      .then((response) => {
        if (!response.isSuccess) {
          const navigate = useNavigate();
          navigate("/network");
          return [];
        } else {
          return response.data;
        }
      });
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default Feedback;
