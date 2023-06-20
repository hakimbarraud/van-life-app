import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header className="bg-[url('images/bg-home.png')] bg-center bg-no-repeat bg-cover h-96 text-white flex flex-col justify-center">
      <div className="px-4">
        <h1 className="text-3xl font-bold">
          You got the travel plans, we got the travel vans.
        </h1>
        <h3 className="my-4 opacity-80">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </h3>
        <Link
          to="vans"
          className="bg-orange-400 inline-block w-full p-3 rounded-lg font-bold hover:bg-orange-500 text-lg text-center duration-300 ease-in"
        >
          Find your van
        </Link>
      </div>
    </header>
  );
};

export default Home;
