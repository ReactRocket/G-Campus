import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import deleteImage from "../../../resources/images/delete.svg";
import Loader from "./Loader";

// import Table from "../components/Table";

const Feedback = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();

  // const feedback = useLoaderData()

  useEffect(() => {
    setTimeout(() => {
      loadData()
        .then((response) => {
          setIsLoading(false);
          setFeedbacks(response);
        })
        .catch((err) => {
          navigate("/admin/error");
          setIsLoading(false);
        });
    }, 2000);
  }, [navigate]);

  const handleClick = async (e) => {
    setIsLoading(true);
    // console.log(e.target.id);
    let srno = e.target.id;
    let data = { srno: srno };
    // e.target.value !== undefined ? srno = e.target.value :
    try {
      await axios
        .post("http://localhost:5000/feedbacks/deleteOne", data)
        .then((res) => res.data)
        .then(async (response) => {
          // delete login has to build
          if (!response.isSuccess) {
            setIsLoading(false);
            alert(response.displayMessage);
          } else {
            setIsLoading(false);
            const data = await loadData();
            setFeedbacks(data);
          }
        });
    } catch (error) {
      alert("something went Wrong!");
    }
  };

  const handleClearAll = async () => {
    if (window.confirm("Are really wanna delete all the feedbacks?")) {
      setIsLoading(true);
      try {
        await axios
          .post("http://localhost:5000/feedbacks/deleteAll")
          .then((res) => res.data)
          .then(async (response) => {
            if (!response.isSuccess) {
              setIsLoading(false);
              alert(response.displayMessage);
            } else {
              setIsLoading(false);
              const data = await loadData();
              setFeedbacks(data);
            }
          });
      } catch (error) {
        alert("something went Wrong!");
      }
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="h-auto w-[95%] m-auto my-4 bg-white">
      <nav className="flex">
        <h1 className="lg:w-[92%] md:w-4/5 w-3/4 text-2xl font-semibold font-sans">
          Feedbacks
        </h1>
        {Feedbacks.length > 0 && (
          <button
            className="lg:w-[10%] md:w-1/5 w-1/4 rounded-lg shadow hover:bg-red-700 cursor-pointer scale-90 hover:scale-95 transition-all duration-1000 bg-red-500 text-white py-2 px-4 font-medium"
            onClick={handleClearAll}
          >
            Clear All
          </button>
        )}
      </nav>
      <section className="mt-5 grid gap-y-5">
        {/* {Feedbacks} */}
        {Feedbacks.length > 0
          ? Feedbacks?.map((feedback, i) => {
              return (
                <div
                  className="h-16 bg-blue-100 rounded-lg shadow hover:bg-blue-300 cursor-pointer scale-90 hover:scale-95 transition-all duration-1000 flex"
                  key={i}
                >
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
                      className="w-full h-full flex  justify-center items-center"
                      id={feedback.srno}
                      value={feedback.srno}
                      onClick={handleClick}
                    >
                      <img
                        src={deleteImage}
                        alt="delete svg icon"
                        id={feedback.srno}
                      />
                    </button>
                  </div>
                </div>
              );
            })
          : `No Feedbacks`}
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
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default Feedback;
