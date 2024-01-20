import React from "react";

const Table = ({ header, data }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              {header?.map((val) => {
                return <th>{val}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data?.map((val) => {
              return (
                <tr>
                  <th>{val.srno}</th>
                  <th>{val.fullname}</th>
                  <th>{val.email}</th>
                  <th>{val.phone}</th>
                  <th>{val.message}</th>
                  <th>{val.time_stamp}</th>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              {header?.map((val) => {
                return <th>{val}</th>;
              })}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Table;
