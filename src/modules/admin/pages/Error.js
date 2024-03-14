import React from "react";

function Error() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-9xl text-gray-700">503</h1>
      <h1 className="text-2xl text-gray-600">Unable to establish a connection to the database.</h1>
      <h1 className="text-2xl text-gray-500"> Please check your connection and try again.</h1>
    </div>
  );
}

export default Error;
