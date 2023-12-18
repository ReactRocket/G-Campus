import React from "react";
import greet from "../utils/Greeting";
import Card from "../components/Card";

function Home({ student }) {
  return (
    <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
      <h1 className="lg:text-4xl text-xl font-semibold text-gray-800">
        {greet()}, {student?.username}
      </h1>
      <div className="flex flex-col lg:flex-wrap justify-evenly lg:gap-0 gap-4 lg:pt-0 pt-4 items-center w-full lg:h-screen">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
