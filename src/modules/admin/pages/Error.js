import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  useEffect(() => {
    refreshCall().then((response) => {
      if (response.connection) {
        navigate(-1);
      }
    });
  }, [navigate]);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-9xl text-gray-700">503</h1>
      <h1 className="text-2xl text-gray-600">
        Unable to establish a connection to the database.
      </h1>
      <h1 className="text-2xl text-gray-500">
        {" "}
        Please check your connection and try again.
      </h1>
    </div>
  );
}

async function refreshCall() {
  try {
    return axios
      .get("http://localhost:5000/test")
      .then((res) => {
        if (res.data) {
          return res.data;
        }
      })
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    throw error;
  }
}

export default Error;
