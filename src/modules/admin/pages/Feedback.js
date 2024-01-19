import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../components/Table";

const Feedback = () => {
  const [Feedbacks, setFeedbacks] = useState([]);
  const header = ["#", "Name", "Email", "Phone", "Message", "Time"];

  const loadData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/feedbacks/allfeedbacks");
      return response.data.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    loadData().then((data) => {
      if (data) {
        setFeedbacks(data);
      }
    });
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              {header.map((val, index) => {
                return <th key={index}>{val}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {!!Feedbacks && Feedbacks.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{val.srno}</td>
                  <td>{val.fullname}</td>
                  <td>{val.email}</td>
                  <td>{val.phone}</td>
                  <td>{val.message}</td>
                  <td>{val.time_stamp}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              {header.map((val, index) => {
                return <th key={index}>{val}</th>;
              })}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Feedback;
